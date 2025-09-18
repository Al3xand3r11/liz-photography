import Image from "next/image";


type CategoryKey = 'party' | 'action' | 'portrait' | 'commercial' | 'lifestyle' | 'fashion' | 'family' | 'balance' | 'group' | 'running';

interface DetailedWorkProps {
    selectedCategory: CategoryKey;
    onClose: () => void;
}


export default function DetailedWork({ selectedCategory, onClose }: DetailedWorkProps) {

    const images = [
        `/${selectedCategory}1.webp`,
        `/${selectedCategory}2.webp`,
        `/${selectedCategory}3.webp`,
        `/${selectedCategory}4.webp`,
        `/${selectedCategory}5.webp`,
    ]
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg">
                <h1>{selectedCategory}</h1>
                <div className="grid grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div className="relative h-128 w-128" key={index}>
                        <Image 
                            src={image} 
                            alt={image} 
                            key={index} 
                            priority
                            fill />
                        </div>
                    ))}
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}