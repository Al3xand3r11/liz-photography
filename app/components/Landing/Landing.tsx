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

export default function Landing() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const slidesContainerRef = useRef<HTMLDivElement>(null)
    const numberRef = useRef<HTMLDivElement>(null)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    // Create infinite array (original + duplicates for seamless loop)
    const infiniteImages = [...images, ...images, ...images]
    const gapSize = 16 // gap-4 = 16px
    
    // Helper function to calculate slide position in pixels
    const getSlidePosition = useCallback((index: number) => {
        const slideWidth = 1800 // Fixed slide width
        return -(slideWidth + gapSize) * index
    }, [gapSize])

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
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 4000)
    }, [])

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
                {infiniteImages.map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        className="relative flex-shrink-0 h-full rounded-lg overflow-hidden"
                        style={{ width: '1800px', minWidth: '1800px' }}
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
                ))}
            </div>

            {/* Fade Margins with page background color */}

            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F9F4E8]/40 to-transparent z-10 pointer-events-none" />
            
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F9F4E8]/40 to-transparent z-10 pointer-events-none" />

            {/* Large Overlapping Number Indicator */}
            <div className="absolute top-8 right-8 z-20 pointer-events-none">
                <div ref={numberRef} className="relative">
                    {/* Background number (larger, more transparent) */}
                    <div className="text-white/10 text-[8rem] font-bold leading-none tracking-tighter">
                        {String(currentIndex + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Foreground number (smaller, overlapping) */}
                    <div className="absolute top-4 left-4 text-white/90 text-2xl font-light tracking-widest">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => {
                    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
                    slideToImage(newIndex)
                }}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full p-3 group"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white group-hover:scale-110 transition-transform duration-200"
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
                    const newIndex = (currentIndex + 1) % images.length
                    slideToImage(newIndex)
                }}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full p-3 group"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white group-hover:scale-110 transition-transform duration-200"
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