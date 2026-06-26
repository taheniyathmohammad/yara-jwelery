'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="our-story"
      className="py-24 px-6 relative overflow-hidden"
    >
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
                <img
                  src="/butterfly.svg"
                  alt="Butterfly"
                  width="120"
                  height="120"
                />
                <h3
                  className="font-great-vibes text-5xl text-[#8B3A3A] text-center leading-none"
                  style={{ letterSpacing: '-1px' }}
                >
                  Yara
                </h3>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
