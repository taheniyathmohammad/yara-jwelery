'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Layered card stack */}
            <div className="relative h-80 md:h-96">
              {/* Back card */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-yellow-100 to-rose-100 rotate-3 shadow-sm" />
              {/* Middle card */}
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-100 -rotate-1 shadow-sm" />
              {/* Front card */}
              <div className="absolute inset-0 rounded-3xl bg-white/70 backdrop-blur-sm border border-rose-100/60 shadow-lg flex flex-col items-center justify-center gap-4 p-8">
                {/* Butterfly centerpiece */}
                <svg
                  width="100"
                  height="82"
                  viewBox="0 0 88 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 36 C44 36 40 28 32 22 C24 16 12 14 8 20 C4 26 8 36 16 40 C24 44 36 42 44 36
                       C44 36 48 28 56 22 C64 16 76 14 80 20 C84 26 80 36 72 40 C64 44 52 42 44 36
                       M44 36 C44 36 42 42 40 50 C38 58 40 66 44 68 C48 66 50 58 48 50 C46 42 44 36 44 36"
                    stroke="#8B3A3A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M44 36 C44 36 40 28 32 22 C24 16 12 14 8 20 C4 26 8 36 16 40 C24 44 36 42 44 36Z"
                    fill="#8B3A3A"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M44 36 C44 36 48 28 56 22 C64 16 76 14 80 20 C84 26 80 36 72 40 C64 44 52 42 44 36Z"
                    fill="#8B3A3A"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M40 30 C38 24 34 18 30 14 M48 30 C50 24 54 18 58 14"
                    stroke="#8B3A3A"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="30" cy="13" r="2.5" fill="#8B3A3A" fillOpacity="0.5" />
                  <circle cx="58" cy="13" r="2.5" fill="#8B3A3A" fillOpacity="0.5" />
                </svg>
                <p className="font-playfair text-2xl font-bold text-[#8B3A3A] text-center">
                  Yara
                </p>
                <p className="font-inter text-xs text-stone-400 tracking-widest uppercase text-center">
                  Little Wings of Joy
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      size={10}
                      className="text-[#8B3A3A]/40 fill-[#8B3A3A]/20"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#8B3A3A]/40" />
              <span className="font-inter text-xs tracking-[0.28em] uppercase text-[#8B3A3A]">
                Our Story
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
              Born from a Love of{' '}
              <span className="text-[#8B3A3A] italic">Joy</span>
            </h2>
            <div className="space-y-4 font-inter text-sm text-stone-500 leading-relaxed">
              <p>
                Yara — meaning &ldquo;little butterfly&rdquo; — was born in Dallas from a simple
                belief: that jewelry should mean something. Not just look beautiful,
                but carry a feeling that stays with you.
              </p>
              <p>
                We specialize in the intimate art of permanent welded jewelry —
                delicate chains fused seamlessly around your wrist, ankle, or
                neck with no clasp, no hassle, and no end in sight.
              </p>
              <p>
                Every session is a one-on-one experience. We take our time,
                listen to your story, and help you choose the piece that feels
                like it was made just for you — because it was.
              </p>
            </div>
            <motion.a
              href="https://visibook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="inline-flex items-center gap-2 mt-8 font-inter text-sm text-[#8B3A3A] font-medium tracking-wide border-b border-[#8B3A3A]/40 pb-0.5 hover:border-[#8B3A3A] transition-colors"
            >
              Begin your story in Dallas
              <span className="text-lg leading-none">&rarr;</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
