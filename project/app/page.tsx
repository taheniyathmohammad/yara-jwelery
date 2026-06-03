'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExperienceFlow from '@/components/ExperienceFlow';
import ChainCatalog from '@/components/ChainCatalog';
import OurStory from '@/components/OurStory';
import PrivateEvents from '@/components/PrivateEvents';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <ExperienceFlow />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <ChainCatalog />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <OurStory />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <PrivateEvents />

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <Footer />
    </main>
  );
}
