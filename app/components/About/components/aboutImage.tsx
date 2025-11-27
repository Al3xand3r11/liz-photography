import Image from "next/image";

export default function AboutImage() {
    return (
        <div className="justify-center items-center relative w-full h-full">
            <Image src={'/LizAbout.webp'} alt="About" fill  className="rounded-lg object-cover"/>
        </div>
    );
}