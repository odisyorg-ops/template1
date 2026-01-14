import React from 'react';
import { motion } from 'framer-motion';
import { Link2, MousePointerClick, Coffee } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    description: "Sync automatically with Google Calendar, Outlook, Slack, and Teams in seconds.",
    icon: <Link2 className="w-8 h-8 text-blue-300" />,
    color: "blue"
  },
  {
    number: "02",
    title: "Click to activate",
    description: "Hit the physical Mindloop button on your desk or the shortcut on your desktop.",
    icon: <MousePointerClick className="w-8 h-8 text-purple-300" />,
    color: "purple"
  },
  {
    number: "03",
    title: "Enter flow state",
    description: "Distractions are blocked, status is updated, and neural soundscapes begin. Just work.",
    icon: <Coffee className="w-8 h-8 text-teal-300" />,
    color: "teal"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const HowItWorks = () => {
  return (
    // Using the same deep background color as the Features section for seamless blend
    <section className="relative w-full py-24 px-6 bg-[#0B1221] text-white overflow-hidden">
      
      {/* Subtle ambient light spot center top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-2 block"
          >
            The Process
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            Effortless by design.
          </motion.h2>
        </div>

        {/* Steps Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6"
        >
          
          {/* The Glowing Connector Line (Hidden on mobile) */}
          <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 blur-sm hidden md:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Glowing Icon Container */}
              <div className="relative mb-8">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-${step.color}-900/50 to-transparent border border-white/10 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300`}>
                  {step.icon}
                </div>
                {/* Back Glow */}
                <div className={`absolute inset-0 bg-${step.color}-500/30 blur-3xl rounded-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 bg-[#0B1221] border border-white/10 text-white/70 text-xs font-bold py-1 px-2 rounded-full z-20">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;