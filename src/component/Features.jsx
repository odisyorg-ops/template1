import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    title: "Deep Focus Mode",
    description: "Block all distractions across your devices with a single click. Custom schedules included.",
    icon: <Brain className="w-6 h-6 text-purple-300" />,
    colSpan: "md:col-span-2", // Spans 2 columns
    bg: "bg-gradient-to-br from-purple-900/20 to-blue-900/10"
  },
  {
    title: "Smart Analytics",
    description: "Visualize your peak productivity hours.",
    icon: <BarChart3 className="w-6 h-6 text-blue-300" />,
    colSpan: "md:col-span-1",
    bg: "bg-white/5"
  },
  {
    title: "Intentional Breaks",
    description: "Reminders to rest before you burn out.",
    icon: <ShieldCheck className="w-6 h-6 text-teal-300" />,
    colSpan: "md:col-span-1",
    bg: "bg-white/5"
  },
  {
    title: "Neural Soundscapes",
    description: "AI-generated audio that adapts to your brainwaves to keep you in flow state longer.",
    icon: <Zap className="w-6 h-6 text-amber-300" />,
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-amber-900/20 to-orange-900/10"
  },
];

const Features = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-[#0B1221] text-white overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-2 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            Reclaim your attention span.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Designed by neuroscientists to help you enter flow state faster and stay there longer.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${feature.colSpan} relative group rounded-3xl p-8 border border-white/10 overflow-hidden backdrop-blur-sm ${feature.bg}`}
            >
              {/* Hover Highlight */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6 bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;