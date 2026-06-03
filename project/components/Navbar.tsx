'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Book Dallas Welding', href: '#book' },
  { label: 'Chain Catalog', href: '#chains' },
  { label: 'Private Events', href: '#events' },
  { label: 'Our Story', href: '#story' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-[#8B3A3A]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 leading-none group"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src="/logo.jpeg"
                alt="Yara Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-playfair text-lg font-bold text-[#8B3A3A] tracking-wide group-hover:opacity-80 transition-opacity">
                Yara
              </span>
              <span className="font-inter text-[9px] text-[#2C1810] tracking-[0.18em] uppercase leading-none">
                Little Wings
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.label === 'Book Dallas Welding' ? (
                  <a
                    href="https://visibook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-sm font-medium px-4 py-2 rounded-full bg-[#8B3A3A] text-white tracking-wide hover:bg-[#6B2D2D] transition-colors duration-300"
                  >
                    Book Dallas Welding
                  </a>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-inter text-sm text-[#2C1810] hover:text-[#8B3A3A] transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#2C1810] hover:text-[#8B3A3A] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#8B3A3A]/20 shadow-lg px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.label === 'Book Dallas Welding' ? (
                  <a
                    href="https://visibook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block font-inter text-base font-semibold text-[#8B3A3A] tracking-wide"
                  >
                    Book Dallas Welding
                  </a>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-inter text-base text-[#2C1810] hover:text-[#8B3A3A] transition-colors"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
