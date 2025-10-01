import Image from "next/image";


type CategoryKey = 'party' | 'action' | 'portrait' | 'commercial' | 'lifestyle' | 'bts' | 'family' | 'brands' | 'group' | 'running';

interface DetailedWorkProps {
    selectedCategory: CategoryKey;
    onClose: () => void;
}

const categoriesDescription = [
    {
        category: 'party',
        description: 'Capturing moments at parties, events, and gatherings of all kinds. The photos show people enjoying themselves at different events.'
    },
    {
        category: 'action',
        description: 'Capturing moments in action, sports, and other activities. The photos shows an athlete in the trails of Los Angeles'
    },
    {
        category: 'portrait',
        description: 'Have your portrait taken to capture your unique personality and style. Get professional headshots with the city as your backdrop.'
    },
    {
        category: 'commercial',
        description: 'Capturing moments that brands can use to tell their story. The photos show a group of athletes training at Cal St LA.'
    },
    {
        category: 'lifestyle',
        description: 'Capturing moments in your daily life. '
    },
    {
        category: 'bts',
        description: 'Sometimes the best content captured is the behind the scenes. Show the road to your success.'
    },  
    {
        category: 'family',
        description: 'Cherish the moments with your loved ones. Capture the joy, laughter, and memories of your family.'
    },
    {
        category: 'brands',
        description: 'Capture your brand in a way that is true to your vision. Showcase your products or show companies you are ready to partner with.'
    },
    {
        category: 'group',
        description: 'Need to capture a group of people, a family, or a group of friends? I can help you capture the moment.'
    },
    {
        category: 'running',
        description: 'Capturing moments on your weekly run, daily run, or just a walk in the park. The photos show the Sunday Runday team on their way to Las Vegas for The Speed Project.'
    },
]   


export default function DetailedWork({ selectedCategory, onClose }: DetailedWorkProps) {

    const images = [
        `/${selectedCategory}2.webp`,
        `/${selectedCategory}3.webp`,
        `/${selectedCategory}4.webp`,
        `/${selectedCategory}5.webp`,
    ]
    return (
        <div className="flex justify-center items-center h-auto w-full mt-24 px-2">
            <div className=" rounded-lg flex flex-row gap-8 ">
                <div className="grid grid-cols-2 gap-8 w-full">
                    {images.map((image, index) => (
                        <div className="relative drop-shadow-lg" key={index}>
                        <Image 
                            src={image} 
                            alt={image} 
                            key={index} 
                            priority
                            blurDataURL={image}
                            width={500}
                            height={400}
                            className=" rounded-lg object-contain w-full h-auto"/>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 text-center content-center col-span-1 w-3/5">
                    <h1 className="font-medium hover:text-white/80 transition-colors duration-300 drop-shadow-lg text-lg lg:text-6xl mb-2 tracking-wider">
                        {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                    </h1>
                    <p className="text-center font-light text-md lg:text-3xl mb-2">{categoriesDescription.find(category => category.category === selectedCategory)?.description}</p>
                    <div className="flex flex-row gap-2 justify-center items-center text-center content-center">
                    <button className="bg-[#835c33]/50 backdrop-blur-sm text-black px-8 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 shadow-2xl">Book Now</button>
                    <button onClick={onClose} className="bg-white/20 backdrop-blur-sm text-black px-4 py-2 rounded-lg hover:bg-[#835c33]/30 transition-colors duration-200">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}