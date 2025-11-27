'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutImage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(containerRef.current,
            { 
                opacity: 0, 
                scale: 0.95,
                x: 50
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 1.2,
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
        <div ref={containerRef} className="justify-center items-center relative w-full h-full">
            <Image src={'/LizAbout.webp'} alt="About" fill  className="rounded-lg object-cover"/>
        </div>
    );
}