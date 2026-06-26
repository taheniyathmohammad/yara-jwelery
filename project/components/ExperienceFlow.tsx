'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link2, Gem, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Choose Your Chain',
    description:
      'Browse our curated selection of sterling silver, gold-filled, and rose gold chains — each sourced for lasting quality and everyday wearability.',
    detail: 'Delicate cable • Box chain • Satellite • Rope',
  },
  {
    number: '02',
    icon: Gem,
    title: 'Personalize with a Charm',
    description:
      'Add a meaningful touch. Select from our collection of tiny charms — stars, moons, hearts, butterflies — or keep it beautifully minimal.',
    detail: 'Gold vermeil • Sterling silver • Mixed metals',
  },
  {
    number: '03',
    icon: Zap,
    title: 'The Painless Micro-Weld',
    description:
      'In seconds, your jeweler uses a professional micro-welder to fuse the chain seamlessly around your wrist. No clasp. No fuss. Just forever.',
    detail: 'Takes under 5 minutes • Completely painless',
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="relative group"
    >
      {/* Connector line (desktop) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+60px)] right-0 h-px bg-gradient-to-r from-[#8B3A3A]/30 to-transparent z-0" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-8">
        {/* Step number */}
        <div className="font-playfair text-5xl font-bold text-[#8B3A3A]/10 leading-none mb-4 group-hover:text-[#8B3A3A]/20 transition-colors duration-300">
          {step.number}
        </div>

        {/* Icon ring */}
        <div className="w-16 h-16 rounded-full border border-[#8B3A3A]/20 bg-white/60 backdrop-blur-sm flex items-center justify-center mb-5 shadow-sm group-hover:border-[#8B3A3A]/50 group-hover:shadow-md transition-all duration-300">
          <Icon size={22} className="text-[#8B3A3A]" />
        </div>

        <h3 className="font-playfair text-xl font-semibold text-stone-800 mb-3">
          {step.title}
        </h3>
        <p className="font-inter text-sm text-stone-500 leading-relaxed mb-4 max-w-xs">
          {step.description}
        </p>
        <span className="font-inter text-xs text-[#8B3A3A]/70 tracking-wide italic">
          {step.detail}
        </span>
      </div>
    </motion.div>
  );
}

export default function ExperienceFlow() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section id="story" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#8B3A3A]/40" />
            <span className="font-inter text-xs tracking-[0.28em] uppercase text-[#8B3A3A]">
              The Experience
            </span>
            <div className="h-px w-10 bg-[#8B3A3A]/40" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            How It Works
          </h2>
          <p className="font-inter text-stone-500 max-w-lg mx-auto leading-relaxed">
            A ritual as simple as it is meaningful. In three thoughtful steps,
            you leave wearing a piece of jewelry that stays with you — always.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
        </motion.div>
      </div>
    </section>
  );
}
