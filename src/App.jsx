import React, { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import CTA from './component/HowItWorks'
import Footer from './component/Footer'
import Features from './component/Features'
import HowItWorks from './component/HowItWorks'
import Pricing from './component/Pricing'

// Import your components
// Adjust the paths based on where you saved the files (e.g., ./components/Navbar)

function App() {
  
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Adjust speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Default is false, usually better for mobile to stick to native
    })

    // Animation Frame Loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    // Global wrapper with brand background and selection colors
    <div className="bg-[#0B1221] min-h-screen text-white ">
      
      {/* <Navbar /> */}
      
      <main className="relative space-y-32 z-0">
        <Hero />
        
        <Features></Features>
        <HowItWorks></HowItWorks>
        <Pricing></Pricing>
        
      </main>

      <Footer />
      
    </div>
  )
}

export default App