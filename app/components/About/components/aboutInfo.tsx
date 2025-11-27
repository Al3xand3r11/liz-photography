'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutInfo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!containerRef.current || !headingRef.current || !paragraphRef.current) return;

        // Animate heading
        gsap.fromTo(headingRef.current,
            { 
                opacity: 0, 
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "top 20%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Animate paragraph with slight delay
        gsap.fromTo(paragraphRef.current,
            { 
                opacity: 0, 
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "top 20%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="max-w-xl text-[#835c33] mt-8 text-center justify-center items-center mx-auto flex flex-col">
            <h1 ref={headingRef} className=" font-light hover:text-white/80 transition-colors duration-300 drop-shadow-lg text-lg lg:text-4xl mb-2 tracking-wider">MOMENTS IN MOTION, STORIES THAT STAY</h1>
            <p ref={paragraphRef} className=" font-light text-md lg:text-2xl mb-2">
            Hi, I&apos;m Liz. I fell in love with photography while capturing runners in motion — the energy, the emotion, the honesty of it all. What started as documenting movement grew into a love for candid, editorial, and storytelling photography.  
            To me, photos aren&apos;t just images; they&apos;re stories that remind us of our strength, beauty, and individuality. At the core of my work is a simple mission: to capture life as it feels and help people feel truly seen. 
            </p>
        </div>
    );
}