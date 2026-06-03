'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const chains = [
  {
    name: 'Sterling Silver',
    tagline: 'Timeless & hypoallergenic',
    description:
      'Bright, beautiful, and built to last. Our .925 sterling silver chains are the perfect everyday luxury.',
    styles: ['Delicate Cable', 'Box Chain', 'Satellite'],
    priceRange: 'From $45',
    imageBg: 'from-slate-100 to-zinc-200',
    accent: '#94a3b8',
    available: true,
  },
  {
    name: 'Gold-Filled',
    tagline: 'Warm & lasting luminosity',
    description:
      '14k gold-filled chains offer the warmth of gold at an accessible price point — 100x more gold than plating.',
    styles: ['Cable Chain', 'Rope', 'Paperclip'],
    priceRange: 'From $65',
    imageBg: 'from-amber-50 to-yellow-200',
    accent: '#d97706',
    available: true,
  },
  {
    name: 'Rose Gold',
    tagline: 'Romantic blush tones',
    description:
      'Soft and feminine, our rose gold-filled chains complement every skin tone with their warm, rosy warmth.',
    styles: ['Cable', 'Dainty Beaded', 'Figaro'],
    priceRange: 'From $65',
    imageBg: 'from-rose-50 to-pink-200',
    accent: '#f43f5e',
    available: true,
  },
];

function ChainCard({
  chain,
  index,
}: {
  chain: (typeof chains)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      className="group relative bg-white/50 backdrop-blur-sm border border-stone-200/70 rounded-2xl overflow-hidden hover:border-[#8B3A3A]/30 hover:shadow-xl hover:shadow-[#8B3A3A]/5 transition-all duration-500"
    >
      {/* Visual placeholder */}
      <div
        className={`w-full h-52 bg-gradient-to-br ${chain.imageBg} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Abstract chain illustration */}
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          className="opacity-40"
        >
          {[0, 20, 40, 60, 80, 100].map((x) => (
            <ellipse
              key={x}
              cx={x + 10}
              cy="30"
              rx="9"
              ry="5"
              stroke={chain.accent}
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${chain.accent}15, transparent 70%)`,
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="font-inter text-[10px] tracking-widest uppercase bg-white/70 text-stone-500 px-2.5 py-1 rounded-full">
            {chain.priceRange}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-stone-800 mb-1">
          {chain.name}
        </h3>
        <p
          className="font-inter text-xs tracking-wide mb-3"
          style={{ color: chain.accent }}
        >
          {chain.tagline}
        </p>
        <p className="font-inter text-sm text-stone-500 leading-relaxed mb-4">
          {chain.description}
        </p>

        {/* Styles */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {chain.styles.map((s) => (
            <span
              key={s}
              className="font-inter text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href="https://visibook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#8B3A3A]/40 text-[#8B3A3A] font-inter text-sm font-medium tracking-wide hover:bg-[#8B3A3A] hover:text-white transition-all duration-300"
        >
          <Sparkles size={14} />
          Select & Book
        </a>
      </div>
    </motion.div>
  );
}

export default function ChainCatalog() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section id="chains" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
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
              Chain Menu
            </span>
            <div className="h-px w-10 bg-[#8B3A3A]/40" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            Choose Your Chain
          </h2>
          <p className="font-inter text-stone-500 max-w-lg mx-auto leading-relaxed">
            Every chain is carefully selected for quality, durability, and
            elegance. All metals are hypoallergenic and designed to be worn
            every single day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chains.map((chain, i) => (
            <ChainCard key={chain.name} chain={chain} index={i} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center font-inter text-xs text-stone-400 mt-8 italic"
        >
          All chains available in bracelet, anklet, and necklace lengths. Custom sizing included.
        </motion.p>
      </div>
    </section>
  );
}
