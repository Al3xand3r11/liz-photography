'use client'

import { useState, useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Landing from "./components/Landing/Landing";
import Preloader from "./components/Preloader/preloader";
import About from "./components/About/About";
import FirstInfo from "./components/Info/FirstInfo";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    const lenis = new Lenis()
   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])

useEffect( () => {
  (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {

            setIsLoading(false);

            document.body.style.cursor = 'default'

            window.scrollTo(0,0);

          }, 2000)
      }
  )()
}, [])
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing/>
      <FirstInfo />
      <About />
      <Works />
      <div className="h-screen flex justify-center items-center">
        <h1 className="font-medium text-[#835c33] transition-colors duration-300 drop-shadow-lg text-lg lg:text-6xl mb-2 tracking-wider">Ready to work with me?</h1>
      </div>
      <Contact />
    </main>
  );
}
