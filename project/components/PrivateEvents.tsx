'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Users, Star, Calendar, Send, CheckCircle } from 'lucide-react';

const eventTypes = [
  { icon: Heart, label: 'Bridal Party', desc: 'Unforgettable pre-wedding bonding' },
  { icon: Users, label: 'Bachelorette', desc: 'Celebrate the last night of freedom' },
  { icon: Star, label: 'Birthday Bash', desc: 'Gift everyone a forever memory' },
  { icon: Calendar, label: 'Pop-up Event', desc: 'Bring us to your Dallas venue' },
];

export default function PrivateEvents() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="events" className="py-24 px-6">
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
              Private Events
            </span>
            <div className="h-px w-10 bg-[#8B3A3A]/40" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            Make It a Party
          </h2>
          <p className="font-inter text-stone-500 max-w-xl mx-auto leading-relaxed">
            Host a private permanent jewelry event in Dallas — a uniquely memorable experience
            for your group. We come to you, or you come to us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Event types + info */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {eventTypes.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/50 border border-stone-200/70 hover:border-[#8B3A3A]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#8B3A3A]/8 flex items-center justify-center mb-3 group-hover:bg-[#8B3A3A]/15 transition-colors">
                    <Icon size={16} className="text-[#8B3A3A]" />
                  </div>
                  <p className="font-playfair text-sm font-semibold text-stone-800 mb-1">
                    {label}
                  </p>
                  <p className="font-inter text-xs text-stone-400 leading-snug">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100"
            >
              <p className="font-playfair text-base font-semibold text-stone-800 mb-2">
                Dallas & DFW Pop-ups
              </p>
              <p className="font-inter text-sm text-stone-500 leading-relaxed">
                We travel across the{' '}
                <span className="text-[#8B3A3A] font-medium">Dallas-Fort Worth Metroplex</span>{' '}
                for private events. Minimum 4 guests. Setup fee waived for groups of 6+.
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl bg-white/60 border border-stone-200">
                <CheckCircle size={40} className="text-[#8B3A3A] mb-4" />
                <h3 className="font-playfair text-2xl font-semibold text-stone-800 mb-2">
                  Request Received!
                </h3>
                <p className="font-inter text-sm text-stone-500 leading-relaxed">
                  Thank you for reaching out. We will be in touch within 24 hours
                  to confirm your private event details.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/60 backdrop-blur-sm border border-stone-200/70 rounded-2xl p-7 space-y-4"
              >
                <h3 className="font-playfair text-xl font-semibold text-stone-800 mb-1">
                  Inquire About a Private Event
                </h3>
                <p className="font-inter text-xs text-stone-400 mb-4">
                  Fill in the details and we will craft the perfect experience for your group.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-inter text-xs text-stone-500 mb-1.5 tracking-wide">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white/80 font-inter text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-[#8B3A3A]/50 focus:ring-1 focus:ring-[#8B3A3A]/20 transition-colors"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-inter text-xs text-stone-500 mb-1.5 tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white/80 font-inter text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-[#8B3A3A]/50 focus:ring-1 focus:ring-[#8B3A3A]/20 transition-colors"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-inter text-xs text-stone-500 mb-1.5 tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(214) 555-0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white/80 font-inter text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-[#8B3A3A]/50 focus:ring-1 focus:ring-[#8B3A3A]/20 transition-colors"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-inter text-xs text-stone-500 mb-1.5 tracking-wide">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white/80 font-inter text-sm text-stone-700 focus:outline-none focus:border-[#8B3A3A]/50 focus:ring-1 focus:ring-[#8B3A3A]/20 transition-colors"
                    >
                      <option value="">Select type</option>
                      <option>Bridal Party</option>
                      <option>Bachelorette</option>
                      <option>Birthday</option>
                      <option>Pop-up / Other</option>
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-inter text-xs text-stone-500 mb-1.5 tracking-wide">
                      Guest Count
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={form.guestCount}
                      onChange={handleChange}
                      min="4"
                      placeholder="e.g. 8"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white/80 font-inter text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-[#8B3A3A]/50 focus:ring-1 focus:ring-[#8B3A3A]/20 transition-colors"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block font-inter text-xs text-stone-500 mb-1.5 tracking-wide">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white/80 font-inter text-sm text-stone-700 focus:outline-none focus:border-[#8B3A3A]/50 focus:ring-1 focus:ring-[#8B3A3A]/20 transition-colors"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block font-inter text-xs text-stone-500 mb-1.5 tracking-wide">
                      Tell us about your event
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Venue, vibe, any special requests..."
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 bg-white/80 font-inter text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-[#8B3A3A]/50 focus:ring-1 focus:ring-[#8B3A3A]/20 transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#8B3A3A] text-white font-inter text-sm font-semibold tracking-wide hover:bg-[#7f1d1d] transition-colors duration-300 mt-2"
                >
                  <Send size={14} />
                  Send Event Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
