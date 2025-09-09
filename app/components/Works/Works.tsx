import Image from "next/image";

export default function Works() {
    return (
        <div className="mt-48">
        <div className="text-left text-4xl font-bold ml-8">
            <h1>Works</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8 mt-12">
                <div className="relative h-256 ">
                    <Image src={'/sdrdparty.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256">
                    <Image src={'/dirtbike.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256">
                    <Image src={'/market.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className=" h-256 relative">
                    <Image src={'/sdrdbw.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256 ">
                    <Image src={'/david2.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256">
                    <Image src={'/ray2.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256 col-span-2 ">
                    <Image src={'/newbalance.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256 col-span-2">
                    <Image src={'/sdrdnb.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256">
                    <Image src={'/arisa.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                <div className="relative h-256 ">
                    <Image src={'/child.webp'} alt="Works" fill className="object-cover rounded-lg" />
                </div>
                
            </div>
        </div>
    );
}