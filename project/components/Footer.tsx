'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer id="contact" className="relative pt-20 pb-10 px-6 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#8B3A3A]/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Top CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 p-10 rounded-3xl bg-gradient-to-br from-[#8B3A3A]/5 to-rose-50 border border-[#8B3A3A]/10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#8B3A3A]/30" />
            <span className="font-inter text-xs tracking-[0.28em] uppercase text-[#8B3A3A]">
              Dallas, TX
            </span>
            <div className="h-px w-10 bg-[#8B3A3A]/30" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Ready for Your Forever Piece?
          </h2>
          <p className="font-inter text-stone-500 max-w-md mx-auto mb-8 leading-relaxed text-sm">
            By appointment and private pop-ups across the{' '}
            <span className="text-[#8B3A3A] font-medium">
              Dallas-Fort Worth Metroplex
            </span>
            . Book online or reach out directly.
          </p>
          <a
            href="https://visibook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#8B3A3A] text-white font-inter text-sm font-semibold tracking-wide shadow-lg shadow-[#8B3A3A]/20 hover:bg-[#7f1d1d] transition-all duration-300"
          >
            Book Your Dallas Session
          </a>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
            <h3
              className="font-great-vibes text-5xl text-[#8B3A3A] leading-none"
              style={{ letterSpacing: '-1px' }}
            >
              Yara
            </h3>
              <p className="font-inter text-xs tracking-[0.2em] text-stone-400 uppercase mt-2">
                Little Wings of Joy
              </p>
            </div>
            <p className="font-inter text-sm text-stone-500 leading-relaxed">
              Permanent jewelry made with love in the heart of Dallas. Every
              weld is a tiny wing — a little joy you carry with you, always.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-inter text-xs tracking-widest uppercase text-stone-400 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'Book Dallas Welding', href: 'https://visibook.com', external: true },
                { label: 'Chain Catalog', href: '#chains' },
                { label: 'Private Events', href: '#events' },
                { label: 'Our Story', href: '#story' },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-sm text-stone-500 hover:text-[#8B3A3A] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="font-inter text-sm text-stone-500 hover:text-[#8B3A3A] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-inter text-xs tracking-widest uppercase text-stone-400 mb-4">
              Contact & Connect
            </p>
            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#8B3A3A]/40 group-hover:bg-[#8B3A3A]/5 transition-all">
                  <Instagram size={14} className="text-stone-400 group-hover:text-[#8B3A3A] transition-colors" />
                </div>
                <span className="font-inter text-sm text-stone-500 group-hover:text-[#8B3A3A] transition-colors">
                  @yaralittlewings
                </span>
              </a>
              <a
                href="mailto:hello@yarajewelry.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#8B3A3A]/40 group-hover:bg-[#8B3A3A]/5 transition-all">
                  <Mail size={14} className="text-stone-400 group-hover:text-[#8B3A3A] transition-colors" />
                </div>
                <span className="font-inter text-sm text-stone-500 group-hover:text-[#8B3A3A] transition-colors">
                  hello@yarajewelry.com
                </span>
              </a>
              <a
                href="tel:+12145550000"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#8B3A3A]/40 group-hover:bg-[#8B3A3A]/5 transition-all">
                  <Phone size={14} className="text-stone-400 group-hover:text-[#8B3A3A] transition-colors" />
                </div>
                <span className="font-inter text-sm text-stone-500 group-hover:text-[#8B3A3A] transition-colors">
                  (214) 555-0000
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center">
                  <MapPin size={14} className="text-stone-400" />
                </div>
                <span className="font-inter text-sm text-stone-500">
                  Dallas-Fort Worth Metroplex
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Yara: Little Wings of Joy. All rights reserved.
          </p>
          <p className="font-inter text-xs text-stone-400 flex items-center gap-1">
            By Appointment & Private Pop-ups
            <Heart size={10} className="text-[#8B3A3A] fill-[#8B3A3A]" />
            Dallas-Fort Worth
          </p>
        </div>
      </div>
    </footer>
  );
}
