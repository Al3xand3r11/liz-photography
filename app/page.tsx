'use client'

import { useState, useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Landing from "./components/Landing";
import Preloader from "./components/Preloader/preloader";

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
    </main>
  );
}
