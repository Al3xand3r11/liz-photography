import Image from "next/image"

export default function Landing () {
    return (
        <div className="relative h-[100vh] w-full">
            <div className="absolute inset-0 bg-black/50">
            <Image
                src={'/lizlanding.webp'}
                fill
                alt='landing'
            />
            </div>
        </div>
    )
}