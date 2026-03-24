'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Award, Calendar, Building2, ChevronDown } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const categoryColors: Record<string, string> = {
  'Algorithms':       'bg-blue-50 text-blue-700 border-blue-200',
  'Programming':      'bg-purple-50 text-purple-700 border-purple-200',
  'Networking':       'bg-orange-50 text-orange-700 border-orange-200',
  'Web Dev':          'bg-green-50 text-green-700 border-green-200',
  'Computer Science': 'bg-zinc-100 text-zinc-700 border-zinc-300',
  'Systems':          'bg-red-50 text-red-700 border-red-200',
  'Hardware':         'bg-amber-50 text-amber-700 border-amber-200',
  'Gen AI':           'bg-indigo-50 text-indigo-700 border-indigo-200',
  'AI':               'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Communication':    'bg-pink-50 text-pink-700 border-pink-200',
  'Security':         'bg-slate-50 text-slate-700 border-slate-200',
};

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 9);

  const headReveal = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const headItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="certifications" className="py-24 md:py-32 bg-white border-y border-zinc-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          variants={headReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div className="relative max-w-fit">
            <motion.h2 variants={headItem} className="font-display font-black uppercase text-5xl md:text-7xl lg:text-8xl text-zinc-900 leading-none tracking-tighter">
              CERTIFICATIONS
            </motion.h2>
          </div>
        </motion.div>

        {/* Certs grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {visibleCerts.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[2.5rem] bg-zinc-50 border border-zinc-100 overflow-hidden shadow-xl shadow-zinc-200/40 hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col h-full"
              >
                {/* Preview Image */}
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="relative h-72 w-full overflow-hidden bg-zinc-200 block"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
                      <Award size={20} className="text-indigo-600" />
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm
                                  ${categoryColors[cert.category]?.replace('bg-', 'bg-white ') || 'bg-white text-zinc-600 border-zinc-200'}`}
                    >
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg leading-tight text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Footer: Meta Info */}
                  <div className="mt-auto pt-4 border-t border-zinc-100 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <Building2 size={12} className="text-zinc-500 group-hover:text-indigo-600" />
                      </div>
                      <span className="text-sm font-bold text-zinc-700">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-zinc-50 flex items-center justify-center">
                        <Calendar size={12} className="text-zinc-400" />
                      </div>
                      <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more */}
        {certifications.length > 9 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-800 font-bold uppercase tracking-widest text-[10px] px-8 py-4 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all shadow-lg"
            >
              {showAll ? 'Show Less' : `Show All ${certifications.length} Certifications`}
              <ChevronDown
                size={14}
                className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
