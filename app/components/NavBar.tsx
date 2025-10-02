'use client'

import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center px-8 py-6">
                {/* About Me */}
                <div className="flex-1 flex justify-start">
                    <Link 
                        href="#about" 
                        className="text-white text-lg font-light tracking-wide hover:text-white/80 transition-colors duration-300 drop-shadow-lg"
                    >
                        About Me
                    </Link>
                </div>

                {/* Works */}
                <div className="flex-1 flex justify-center">
                    <Link 
                        href="#works" 
                        className="text-white text-lg font-light tracking-wide hover:text-white/80 transition-colors duration-300 drop-shadow-lg"
                    >
                        Works
                    </Link>
                </div>

                {/* Seen By Liz - Larger */}
                <div className="flex-1 flex justify-center">
                    <Link 
                        href="/" 
                        className="text-white text-3xl font-medium tracking-wider hover:text-white/80 transition-colors duration-300 drop-shadow-lg"
                    >
                        Seen By Liz
                    </Link>
                </div>

                {/* Archive */}
                <div className="flex-1 flex justify-center">
                    <Link 
                        href="/archives" 
                        className="text-white text-lg font-light tracking-wide hover:text-white/80 transition-colors duration-300 drop-shadow-lg"
                    >
                        Archive
                    </Link>
                </div>

                {/* Contact */}
                <div className="flex-1 flex justify-end">
                    <Link 
                        href="#contact" 
                        className="text-white text-lg font-light tracking-wide hover:text-white/80 transition-colors duration-300 drop-shadow-lg"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center px-6 py-4">
                {/* Mobile Logo */}
                <Link 
                    href="/" 
                    className="text-black text-xl font-medium tracking-wider hover:text-white/80 transition-colors duration-300 drop-shadow-lg"
                >
                    Seen By Liz
                </Link>

                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="text-black text-2xl hover:text-white/80 transition-colors duration-300 drop-shadow-lg"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu Slide-out */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
                    <h2 className="text-white text-lg font-medium tracking-wide">Menu</h2>
                    <button
                        onClick={closeMobileMenu}
                        className="text-white text-2xl hover:text-white/80 transition-colors duration-300"
                        aria-label="Close mobile menu"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col space-y-6 px-6 py-8">
                    <Link 
                        href="#about" 
                        onClick={closeMobileMenu}
                        className="text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors duration-300 py-2 border-b border-white/10"
                    >
                        About Me
                    </Link>
                    
                    <Link 
                        href="#works" 
                        onClick={closeMobileMenu}
                        className="text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors duration-300 py-2 border-b border-white/10"
                    >
                        Works
                    </Link>
                    
                    <Link 
                        href="/archives" 
                        onClick={closeMobileMenu}
                        className="text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors duration-300 py-2 border-b border-white/10"
                    >
                        Archive
                    </Link>
                    
                    <Link 
                        href="#contact" 
                        onClick={closeMobileMenu}
                        className="text-white text-xl font-light tracking-wide hover:text-white/80 transition-colors duration-300 py-2 border-b border-white/10"
                    >
                        Contact
                    </Link>

                    </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/60 text-sm text-center">
                        © 2025 Seen By Liz Photography
                    </p>
                </div>
            </div>
        </nav>
    );
}
