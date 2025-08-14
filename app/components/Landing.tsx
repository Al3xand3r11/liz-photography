import Image from "next/image"

export default function Landing () {
    return (
        <div>
            <Image
                src={'/lizlanding.webp'}
                fill
                alt='landing'
            />
        </div>
    )
}