import Image from "next/image";

export default function Works() {
    return (
        <div className="mt-48">
        <div className="text-left text-4xl font-bold ml-8">
            <h1>Works</h1>
        </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8 mt-12">
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/sdrdparty.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Party Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/dirtbike.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Action Sports</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/market.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Street Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="h-128 relative group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/sdrdbw.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Portrait Session</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/david2.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Professional Headshots</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/ray2.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Creative Portraits</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 col-span-2 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/newbalance.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Commercial Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 col-span-2 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/sdrdnb.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Lifestyle Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/arisa.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                         <div className="text-white">
                             <h3 className="text-lg font-semibold mb-2">Fashion Photography</h3>
                             <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200">
                                 More
                             </button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-128 group cursor-pointer overflow-hidden rounded-lg">
                     <Image src={'/child.webp'} alt="Works" fill className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
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
    );
}