'use client'

import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { FaChevronDown } from "react-icons/fa"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const images = [
    { src: '/lizlanding.webp', alt: 'Liz Portrait' },
    { src: '/caro1.webp', alt: 'Landscape Photography' },
    { src: '/baby.webp', alt: 'Mountain Landscape' },
    { src: '/group5.webp', alt: 'Group Photography' }
]

const mobileImages = [
    { src: '/action2.webp', alt: 'Liz Portrait' },
    { src: '/brands4.webp', alt: 'Landscape Photography' },
    { src: '/lifestyle4.webp', alt: 'Mountain Landscape' },
]


export default function Landing() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slideWidth, setSlideWidth] = useState(1800)
    const [isMobile, setIsMobile] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const slidesContainerRef = useRef<HTMLDivElement>(null)
    const numberRef = useRef<HTMLDivElement>(null)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    // Create infinite array (original + duplicates for seamless loop)
    const infiniteMobileImages = [...mobileImages, ...mobileImages, ...mobileImages]
    const infiniteImages = [...images, ...images, ...images]
    const gapSize = 16 // gap-4 = 16px
    
    // Helper function to get responsive slide width
    const getSlideWidth = useCallback(() => {
        if (typeof window !== 'undefined') {
            const screenWidth = window.innerWidth
            if (screenWidth < 768) { // Mobile
                return screenWidth - 32 // Account for padding
            } else if (screenWidth < 1024) { // Tablet
                return screenWidth * 0.8
            } else { // Desktop
                return 1800
            }
        }
        return 1800
    }, [])
    
    // Helper function to calculate slide position in pixels
    const getSlidePosition = useCallback((index: number) => {
        return -(slideWidth + gapSize) * index
    }, [slideWidth, gapSize])

    const scrollToAbout = useCallback(() => {
        const aboutSection = document.querySelector('main > *:nth-child(3)') // About is the 3rd child after Landing and FirstInfo
        if (aboutSection) {
            const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset
            gsap.to(window, {
                scrollTo: targetPosition,
                duration: 1, // Adjust this value: higher = slower (2 seconds)
                ease: "power2.inOut" // Smooth easing
            })
        }
    }, [])
    

    const startAutoPlay = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current)
        autoPlayRef.current = setInterval(() => {
            const currentImages = isMobile ? mobileImages : images
            setCurrentIndex((prev) => (prev + 1) % currentImages.length)
        }, 4000)
    }, [isMobile])

    const stopAutoPlay = useCallback(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current)
            autoPlayRef.current = null
        }
    }, [])
    
    // Smooth slide animation for arrow navigation
    const slideToImage = useCallback((newIndex: number) => {
        if (!slidesContainerRef.current) return
        
        stopAutoPlay()
        
        const targetPosition = getSlidePosition(newIndex + images.length)
        
        gsap.to(slidesContainerRef.current, {
            x: targetPosition,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                setCurrentIndex(newIndex)
                startAutoPlay()
            }
        })
    }, [getSlidePosition, stopAutoPlay, startAutoPlay])

    // Handle client-side hydration and window resize
    useEffect(() => {
        // Mark as client-side after hydration
        setIsClient(true)
        
        const handleResize = () => {
            const newWidth = getSlideWidth()
            const newIsMobile = window.innerWidth < 768
            
            // Reset currentIndex if switching between mobile/desktop to prevent out of bounds
            if (newIsMobile !== isMobile) {
                setCurrentIndex(0)
            }
            
            setSlideWidth(newWidth)
            setIsMobile(newIsMobile)
        }

        // Set initial width and mobile state
        handleResize()
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [getSlideWidth, isMobile])

    // Initialize slideshow
    useEffect(() => {
        if (!slidesContainerRef.current) return

        // Start from the middle set (index 3 = first image of second set)
        const initialPosition = getSlidePosition(images.length)
        gsap.set(slidesContainerRef.current, { x: initialPosition })
        
        startAutoPlay()
        return () => stopAutoPlay()
    }, [startAutoPlay, stopAutoPlay, getSlidePosition])

    // Handle slide transitions (for auto-advance only)
    useEffect(() => {
        if (!slidesContainerRef.current) return

        // Calculate position: move to the corresponding slide in the middle set
        const targetPosition = getSlidePosition(currentIndex + images.length)
        
        // Only auto-animate if we're not already close to the target position
        const currentTransform = gsap.getProperty(slidesContainerRef.current, 'x') as number
        const distance = Math.abs(currentTransform - targetPosition)
        
        if (distance > 50) { // Only animate if we're more than 50px away
            gsap.to(slidesContainerRef.current, {
                x: targetPosition,
                duration: 0.8,
                ease: "power2.inOut"
            })
        }

        // Animate number change
        if (numberRef.current) {
            gsap.fromTo(numberRef.current, 
                { y: 30, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
            )
        }
    }, [currentIndex, getSlidePosition])


    return (
        <div ref={containerRef} className="relative h-[100vh] w-full mx-auto overflow-hidden mb-12 ">
            {/* Infinite Slideshow Container */}
            <div 
                ref={slidesContainerRef}
                className="flex h-full transition-none gap-4"
                style={{ width: 'max-content' }}
            >
                 {/* Conditional rendering for mobile images */}
                 {isClient && isMobile ? (
                     infiniteMobileImages.map((image, index) => (
                         <div 
                             key={`mobile-${image.src}-${index}`} 
                             className="relative flex-shrink-0 h-full rounded-lg overflow-hidden" 
                             style={{ width: `${slideWidth}px`, minWidth: `${slideWidth}px` }}
                         >
                             <Image 
                                 src={image.src} 
                                 fill 
                                 alt={image.alt} 
                                 className="object-contain" 
                                 priority={index < 3} 
                                 draggable={false} 
                             />
                         </div>
                     ))
                 ) : (
                     infiniteImages.map((image, index) => (
                         <div 
                             key={`desktop-${image.src}-${index}`} 
                             className="relative flex-shrink-0 h-full rounded-lg overflow-hidden" 
                             style={{ width: `${slideWidth}px`, minWidth: `${slideWidth}px` }}
                         >
                             <Image 
                                 src={image.src} 
                                 fill 
                                 alt={image.alt} 
                                 className="object-cover" 
                                 priority={index < 3} 
                                 draggable={false} 
                             />
                         </div>
                     ))
                 )}
            </div>

            {/* Fade Margins with page background color */}

            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F9F4E8]/40 to-transparent z-10 pointer-events-none" />
            
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F9F4E8]/40 to-transparent z-10 pointer-events-none" />

            {/* Large Overlapping Number Indicator */}
            <div className="absolute top-4 md:top-8 right-4 md:right-8 z-20 pointer-events-none">
                <div ref={numberRef} className="relative">
                    {/* Background number (larger, more transparent) */}
                    <div className="text-white/10 text-[4rem] md:text-[8rem] font-bold leading-none tracking-tighter">
                        {String(currentIndex + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Foreground number (smaller, overlapping) */}
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 text-white/90 text-lg md:text-2xl font-light tracking-widest">
                        {String(currentIndex + 1).padStart(2, '0')} / {String((isClient && isMobile ? mobileImages : images).length).padStart(2, '0')}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => {
                    const currentImages = isClient && isMobile ? mobileImages : images
                    const newIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1
                    slideToImage(newIndex)
                }}
                className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full p-2 md:p-3 group"
            >
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200"
                >
                    <path 
                        d="M15 18L9 12L15 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            
            <button
                onClick={() => {
                    const currentImages = isClient && isMobile ? mobileImages : images
                    const newIndex = (currentIndex + 1) % currentImages.length
                    slideToImage(newIndex)
                }}
                className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full p-2 md:p-3 group"
            >
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200"
                >
                    <path 
                        d="M9 18L15 12L9 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full p-3 group"
            >
                <FaChevronDown className="text-white group-hover:scale-110 transition-transform duration-200" />
            </button>
        </div>
    )
}