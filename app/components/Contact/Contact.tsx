import Image from "next/image"
import { submitContactForm } from "@/app/actions/formActions"
import { useActionState } from "react"


export default function Contact() {

    const [state, onSubmit] = useActionState(submitContactForm, undefined);

    return (
        <div className="relative h-screen w-full mt-12" id="contact">
            <Image src={'/landscape.webp'} alt="Contact" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex md:flex-row flex-col justify-center items-center p-8">
                
                {/* First Row - Contact Header */}
                <div className="flex flex-col justify-center w-full mb-16">
                    <h1 className="text-white md:text-6xl text-4xl font-bold tracking-wide">Get in touch</h1>
                    <p className="text-white md:text-3xl text-xl font-extralight">Got an idea? Let&apos;s bring it to life.</p>
                </div>
                
                {/* Second Row - Form */}
                <div className="flex justify-center w-full">
                    <form className="flex flex-col space-y-8 w-full max-w-md" action={onSubmit}>
                        {/* Honeypot field for bot protection - hidden from users */}
                        <input 
                            type="text" 
                            name="honeypot"
                            style={{ display: 'none' }}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                        
                        {/* Name Input */}
                        <div className="relative">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Name" 
                                required 
                                className="w-full bg-transparent border-0 border-b-2 border-white/60 text-white placeholder-white/70 text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300"
                            />
                            
                        </div>
                        
                        {/* Email Input */}
                        <div className="relative">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email"
                                required 
                                className="w-full bg-transparent border-0 border-b-2 border-white/60 text-white placeholder-white/70 text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300"
                            />
                            
                        </div>
                        
                        {/* Phone Input (Optional) */}
                        <div className="relative">
                            <input 
                                type="tel" 
                                name="phone"
                                placeholder="Phone (Optional)" 
                                className="w-full bg-transparent border-0 border-b-2 border-white/60 text-white placeholder-white/70 text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300"
                            />
                        </div>
                        
                        {/* Select Dropdown */}
                        <div className="relative">
                            <select 
                                name="serviceType"
                                className="w-full bg-transparent border-0 border-b-2 border-white/60 text-white text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors duration-300 appearance-none cursor-pointer" 
                                required
                            >
                                <option value="" className="bg-black text-white">Select Service Type</option>
                                <option value="portrait" className="bg-black text-white">Portrait Photography</option>
                                <option value="wedding" className="bg-black text-white">Wedding Photography</option>
                                <option value="event" className="bg-black text-white">Event Photography</option>
                                <option value="commercial" className="bg-black text-white">Commercial Photography</option>
                                <option value="other" className="bg-black text-white">Other</option>
                            </select>
                            {/* Custom dropdown arrow */}
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            
                        </div>
                        
                        {/* Glossy Send Button */}
                        <button 
                            type="submit" 
                            
                            className={`mt-12 px-8 py-4 text-white font-semibold text-lg rounded-full shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50 backdrop-blur-sm border border-white/20 hover:scale-105 hover:shadow-3xl active:scale-95`}
                                
                            style={{
                                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            Send
                        </button>

                        {/* Success/Error Messages */}
                        <div className="mt-4 min-h-[60px] flex items-center justify-center">
                            {state?.success && (
                                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 backdrop-blur-sm">
                                    <p className="text-green-300 text-center font-medium">
                                        ✓ Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
                                    </p>
                                </div>
                            )}
                            
                            {state?.error && !state?.success && (
                                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 backdrop-blur-sm">
                                    <p className="text-red-300 text-center font-medium">
                                        ✗ Oops! There was an error sending your message. Please check the form and try again.
                                    </p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}