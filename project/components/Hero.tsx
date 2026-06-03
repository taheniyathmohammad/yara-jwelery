'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';

function AnimatedButterfly() {
  const controls = useAnimation();

  const floatPath = [
    { x: 80, y: -30, rotate: -12 },
    { x: 100, y: -50, rotate: 8 },
    { x: 60, y: -70, rotate: -20 },
    { x: 20, y: -60, rotate: 15 },
    { x: -20, y: -40, rotate: -8 },
    { x: -40, y: -10, rotate: 12 },
    { x: -30, y: 20, rotate: -15 },
    { x: 10, y: 30, rotate: 10 },
    { x: 50, y: 20, rotate: -10 },
    { x: 80, y: -30, rotate: -12 },
  ];

  useEffect(() => {
    const animate = async () => {
      for (const point of floatPath) {
        await controls.start({
          x: point.x,
          y: point.y,
          rotate: point.rotate,
          transition: { duration: 2.8, ease: 'easeInOut' },
        });
      }
      animate();
    };
    animate();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="absolute top-24 right-20 md:top-32 md:right-32 z-20 pointer-events-none select-none"
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100 }}
    >
      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-lg"
      >
        {/* Left upper wing */}
        <path
          d="M60 50 Q35 25 25 15 Q15 5 10 15 Q5 25 15 40 Q35 50 55 55 Z"
          fill="#8B3A3A"
          fillOpacity="0.15"
          stroke="#8B3A3A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right upper wing */}
        <path
          d="M60 50 Q85 25 95 15 Q105 5 110 15 Q115 25 105 40 Q85 50 65 55 Z"
          fill="#8B3A3A"
          fillOpacity="0.15"
          stroke="#8B3A3A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left lower wing */}
        <path
          d="M60 50 Q40 65 32 80 Q28 88 35 92 Q42 88 48 75 Q55 62 60 50 Z"
          fill="#8B3A3A"
          fillOpacity="0.1"
          stroke="#8B3A3A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right lower wing */}
        <path
          d="M60 50 Q80 65 88 80 Q92 88 85 92 Q78 88 72 75 Q65 62 60 50 Z"
          fill="#8B3A3A"
          fillOpacity="0.1"
          stroke="#8B3A3A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Body */}
        <circle cx="60" cy="50" r="5" fill="#8B3A3A" />
        {/* Head */}
        <circle cx="60" cy="42" r="4" fill="#8B3A3A" />
        {/* Left antennae */}
        <path
          d="M58 40 Q52 30 48 20"
          stroke="#8B3A3A"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right antennae */}
        <path
          d="M62 40 Q68 30 72 20"
          stroke="#8B3A3A"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Antennae tips */}
        <circle cx="48" cy="19" r="2.5" fill="#8B3A3A" fillOpacity="0.7" />
        <circle cx="72" cy="19" r="2.5" fill="#8B3A3A" fillOpacity="0.7" />
      </svg>
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

      {/* Animated Butterfly */}
      <AnimatedButterfly />

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
          className="relative mb-6"
        >
          {/* Logo Image */}
          <div className="relative w-64 h-48 md:w-96 md:h-72 mb-4">
            <Image
              src="/logo.jpeg"
              alt="Yara Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Cursive Text Below Logo */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-great-vibes text-6xl md:text-7xl text-[#8B3A3A] leading-none mb-1"
            style={{ letterSpacing: '-2px' }}
          >
            Yara
          </motion.h1>

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
