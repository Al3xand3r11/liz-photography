import Image from "next/image";

export default function AboutImage() {
    return (
        <div>
            <Image src={'/LizAbout.webp'} alt="About" width={500} height={500} />
        </div>
    );
}