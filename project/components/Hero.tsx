'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';

function AnimatedButterfly() {
  return (
    <motion.div
      className="absolute -top-6 -left-6 md:-top-8 md:-left-8 z-20 pointer-events-none"
      animate={{
        x: [0, 4, -3, 5, 0],
        y: [0, -3, 2, -2, 0],
        rotate: [-6, 4, -3, 5, -6],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        animate={{
          scaleX: [1, 0.85, 1],
        }}
        transition={{
          duration: 0.18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/butterfly.svg"
          alt="Butterfly"
          width={55}
          height={55}
          className="drop-shadow-md"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const bookingUrl = 'https://visibook.com';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Brighter decorative background orbs */}
      <div className="absolute top-1/3 left-[3%] w-96 h-96 rounded-full bg-yellow-50/80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-[3%] w-96 h-96 rounded-full bg-rose-50/70 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-50/50 blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-px w-12 bg-[#8B3A3A]/30" />
          <span className="font-inter text-xs tracking-[0.28em] uppercase text-[#8B3A3A]/70 font-medium">
            Permanent Jewelry
          </span>
          <div className="h-px w-12 bg-[#8B3A3A]/30" />
        </motion.div>

        {/* Centered Logo with Cursive Font */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 80 }}
          className="relative"
        >

          {/* Cursive Text Below Logo */}
          <div className="relative inline-block">
            <AnimatedButterfly />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-great-vibes text-6xl md:text-7xl text-[#8B3A3A] leading-none mb-1"
              style={{ letterSpacing: '-2px' }}
            >
              Yara
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-playfair text-lg md:text-2xl text-[#8B3A3A]/80 italic tracking-wide"
          >
            Little Wings of Joy
          </motion.p>
        </motion.div>

        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex items-center justify-center gap-1.5 mb-10"
        >
          <MapPin size={14} className="text-[#8B3A3A]" />
          <span className="font-inter text-sm text-[#2C1810]/70 tracking-widest uppercase">
            Dallas, TX
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="font-inter text-base md:text-lg text-[#2C1810]/60 max-w-md mx-auto leading-relaxed mb-12"
        >
          Clasp-free, beautifully welded fine chains worn forever — a tiny
          symbol of something that matters to you, bonded to your wrist.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#8B3A3A] text-white font-inter text-sm font-semibold tracking-wide shadow-lg shadow-[#8B3A3A]/20 hover:bg-[#6B2D2D] hover:shadow-[#8B3A3A]/30 transition-all duration-300"
          >
            <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            Book Your Dallas Session
          </a>
          <button
            onClick={() => {
              const el = document.querySelector('#chains');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#8B3A3A]/40 text-[#8B3A3A] font-inter text-sm font-medium tracking-wide hover:border-[#8B3A3A] hover:bg-[#8B3A3A]/5 transition-all duration-300"
          >
            View Chain Catalog
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-[10px] text-[#8B3A3A]/40 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#8B3A3A]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
