import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Essential tools for casual focus.",
    features: ["Distraction blocking (1h/day)", "Basic analytics", "3 Soundscapes", "Community access"],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Deep Work",
    price: "12",
    description: "For professionals who need serious clarity.",
    features: ["Unlimited blocking", "Advanced neural soundscapes", "Calendar sync", "Detailed cognitive reports", "Priority Support"],
    cta: "Start Free Trial",
    popular: true, // This triggers the glow effect
  },
  {
    name: "Team",
    price: "29",
    description: "Sync focus schedules for your whole squad.",
    features: ["Everything in Pro", "Team analytics", "Shared silence hours", "Admin dashboard", "SSO Integration"],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative w-full py-24 px-6 bg-[#0B1221] text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-6"
          >
            Invest in your attention.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-8"
          >
            Simple pricing for complex work. Cancel anytime.
          </motion.p>

          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white font-medium' : 'text-gray-500'}`}>Monthly</span>
            
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-white/10 rounded-full p-1 border border-white/10 transition-colors hover:border-white/30"
            >
              <motion.div 
                layout 
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`w-6 h-6 bg-white rounded-full shadow-lg ${isAnnual ? 'ml-6' : 'ml-0'}`} 
              />
            </button>
            
            <span className={`text-sm ${isAnnual ? 'text-white font-medium' : 'text-gray-500'}`}>
              Yearly <span className="text-green-400 text-xs ml-1 font-bold">-20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                plan.popular 
                  ? 'bg-white/10 border-purple-500/50 shadow-2xl shadow-purple-900/20' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              } backdrop-blur-md transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">
                  ${isAnnual ? plan.price : Math.floor(parseInt(plan.price) * 1.2)}
                </span>
                <span className="text-gray-400 mb-1">/mo</span>
              </div>

              {/* Action Button */}
              <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 mb-8 ${
                plan.popular 
                  ? 'bg-white text-black hover:bg-gray-200 shadow-lg' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
              }`}>
                {plan.cta}
              </button>

              {/* Features List */}
              <div className="flex-grow space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-purple-300' : 'text-gray-500'}`} />
                    <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;