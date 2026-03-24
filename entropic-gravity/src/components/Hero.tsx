'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl md:text-7xl font-extrabold tracking-tight"
      >
        Ayush Chauhan
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-zinc-400"
      >
        Data-Driven Developer | Data Analyst | AI & ML Enthusiast
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 max-w-xl text-sm md:text-base text-zinc-500"
      >
        Turning data into intelligent solutions and real-world impact
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/CV.pdf"
          target="_blank"
          className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
        >
          Download CV
        </a>

        <button
          onClick={scrollToAbout}
          className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-900 transition"
        >
          View Work
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10"
      >
        <ArrowDown className="animate-bounce text-zinc-500" />
      </motion.div>

    </section>
  );
}
