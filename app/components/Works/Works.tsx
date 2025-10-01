import Image from "next/image";
import { useState } from "react";
import DetailedWork from "./DetailedWork";

type CategoryKey = 'party' | 'action' | 'portrait' | 'commercial' | 'lifestyle' | 'bts' | 'family' | 'brands' | 'group' | 'running';

export default function Works() {

    const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

    
        
        if (selectedCategory) {
            return <DetailedWork selectedCategory={selectedCategory} onClose={() => setSelectedCategory(null)} />
        }
        return (
        <>
        <div className="mt-48" id="works">
        <div className="text-left ml-8">
            <h1 className="font-medium text-[#835c33] hover:text-white/80 transition-colors duration-300 drop-shadow-lg text-lg lg:text-6xl mb-2 tracking-wider">Works</h1>
        </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8 mt-12">
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('party')}>
                     <Image src={'/party1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Party Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('action')}>
                     <Image src={'/action1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Action Sports</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('portrait')}>
                     <Image src={'/portrait1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Portrait Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="h-128 relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('commercial')}>
                     <Image src={'/commercial1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Commercial Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('lifestyle')}>
                     <Image src={'/lifestyle1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Professional Headshots</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('bts')}>
                     <Image src={'/bts1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Behind the Scenes</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 col-span-2 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('brands')}>
                     <Image src={'/brands1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Brand Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 col-span-2 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('group')}>
                     <Image src={'/group1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Group Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('running')}>
                     <Image src={'/running1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Running Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg" onClick={() => setSelectedCategory('family')}>
                     <Image src={'/family1.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Family Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                
            </div>
        </div>
        </>
    );
}