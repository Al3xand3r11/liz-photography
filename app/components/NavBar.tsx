import Link from "next/link";

export default function NavBar() {
    return (
        <>
        <div className="w-[100vw] sticky bg-transparent z-50">
                <div className="flex h-full  content-center justify-between mt-8 text-amber-800 text-lg lg:text-3xl px-8">
                            <div className="content-center">
                                <Link href="/" >
                                    About
                                </Link>
                            </div>
                            <div className="content-center">
                                <Link href="#hikes">
                                    Works
                                </Link>
                            </div>
                            <div className="text-[#AF8D69] font-medium text-[96px] tracking-tighter">
                                <Link href="#about">
                                    Seen By Liz
                                </Link>
                            </div>
                            <div className="content-center">
                                <Link href="#contact">
                                    Archive
                                </Link>
                            </div>
                            <div className="content-center">
                                <Link href="#newsletter">
                                    Contact
                                </Link>
                            </div>
                </div>
        </div>
    </>
    );
}