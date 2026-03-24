'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { personal } from '@/data/portfolio';

export default function Hero() {

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl">
        {/* Avatar */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[510px] lg:h-[510px] rounded-full overflow-hidden border-[11px] border-zinc-900/50 shadow-2xl">
            <Image
              src="/ayush_photo.jpg"
              alt="Ayush Chauhan Avatar"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-indigo-500/20 rounded-full -z-10 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-zinc-800/20 rounded-full -z-20" />
        </motion.div>

        {/* Text Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight text-zinc-900 leading-none whitespace-nowrap uppercase"
          >
            AYUSH CHAUHAN
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold uppercase tracking-widest whitespace-nowrap"
          >
            Data Analyst | Data-Driven Developer | AI & ML Enthusiast
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-none text-zinc-600 text-lg md:text-xl leading-relaxed md:whitespace-nowrap font-medium"
          >
            {personal.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="/CV.pdf"
              target="_blank"
              className="px-10 py-4 rounded-full bg-indigo-600 text-white font-black uppercase tracking-tighter text-sm hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-200"
            >
              Download CV
            </a>

            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-full bg-zinc-900 text-white font-black uppercase tracking-tighter text-sm hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl shadow-zinc-200"
            >
              Projects
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown className="animate-bounce text-zinc-500" />
      </motion.div>

    </section>
  );
}
