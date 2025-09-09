import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="flex justify-between items-center px-8 py-6">
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
                        href="#archive" 
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
        </nav>
    );
}
