import React from 'react';
import { motion } from 'framer-motion';
import { Aperture } from 'lucide-react'; // Using Aperture as the spiral logo
import img1 from "../assets/img1.png"

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans text-white">
      
      {/* BACKGROUND IMAGE */}
      {/* Replace '/path-to-your-image.jpg' with the image I generated for you */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex w-full max-w-7xl mx-auto justify-between items-center p-6 md:p-8">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Aperture className="w-6 h-6 text-white" />
          <span className="text-xl font-semibold tracking-wide">Mindloop</span>
        </motion.div>

        {/* Center Links - Hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200"
        >
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </motion.div>

        {/* Auth Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6"
        >
          <button className="text-sm font-medium hover:text-gray-200 transition-colors">
            Log In
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-sm font-medium hover:bg-white/20 transition-all">
            Sign In
          </button>
        </motion.div>
      </nav>

      {/* HERO CONTENT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full -mt-20 px-4 text-center"
      >
        
        {/* Social Proof / Avatars */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-transparent bg-gray-300 overflow-hidden relative">
                 <img 
                   src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                   alt="user" 
                   className="w-full h-full object-cover" 
                 />
              </div>
            ))}
          </div>
          <span className="text-sm font-light text-gray-200">
            7,000+ people already subscribed
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 drop-shadow-lg"
        >
          Focus in a Distracted World
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={itemVariants}
          className="max-w-xl text-base md:text-lg text-gray-200 mb-10 leading-relaxed font-light"
        >
          Tools for deep work and clarity – say goodbye to constant pings
          and endless tabs. Say hello to intentional productivity.
        </motion.p>

        {/* Input Field / CTA */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-md relative group"
        >
          <div className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-1.5 shadow-2xl transition-all focus-within:bg-white/15 focus-within:border-white/40">
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-grow bg-transparent text-white placeholder-gray-300 px-4 py-2 outline-none rounded-full text-sm md:text-base"
            />
            <button className="bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-2.5 rounded-full backdrop-blur-md transition-all text-sm md:text-base whitespace-nowrap border border-white/10 shadow-lg">
              Join Waitlist
            </button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;