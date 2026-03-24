'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { codingProfiles } from '@/data/portfolio';

function Counter({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
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
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const platforms = [
// ... (rest of platforms remains the same)
  {
    id: 'github',
    name: 'GitHub',
    handle: `@${codingProfiles.github.username}`,
    url: codingProfiles.github.url,
    color: '#0A0A0A',
    bgColor: '#F4F4F5',
    stats: [
      { label: 'Repositories', value: codingProfiles.github.repos, suffix: "+" },
      { label: 'Contributions', value: codingProfiles.github.contributions, suffix: "+" },
      { label: 'Top Language', value: codingProfiles.github.topLanguages[0] },
    ],
    description: 'Explore my open-source projects, ML models, and code repositories.',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    handle: `@${codingProfiles.leetcode.username}`,
    url: codingProfiles.leetcode.url,
    color: '#F7A41D',
    bgColor: '#FFFBF0',
    stats: [
      { label: 'Problems Solved', value: codingProfiles.leetcode.solved, suffix: "+" },
      { label: 'Focus', value: 'DSA & Algorithms' },
      { label: 'Approach', value: 'Daily Practice' },
    ],
    description: 'Solving algorithmic challenges daily — DSA, dynamic programming, and graphs.',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    id: 'gfg',
    name: 'GeeksforGeeks',
    handle: `@${codingProfiles.gfg.username}`,
    url: codingProfiles.gfg.url,
    color: '#2F8D46',
    bgColor: '#F0FAF3',
    stats: [
      { label: 'Coding Score', value: 'Active' },
      { label: 'Focus', value: 'CS Fundamentals' },
      { label: 'Topics', value: 'DSA, OS, DBMS' },
    ],
    description: 'Practising computer science fundamentals and interview preparation.',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116.016 3.79 3.79 0 0 1-1.106-.695L12 11.648l-3.559 3.428a3.79 3.79 0 0 1-1.106.695 4.51 4.51 0 0 1-3.116-.016 3.69 3.69 0 0 1-1.104-.695 3.487 3.487 0 0 1-.565-.745 3.512 3.512 0 0 1 .565-4.162L9.15 4.833A3.765 3.765 0 0 1 12 3.589a3.765 3.765 0 0 1 2.85 1.244l6.035 5.32a3.512 3.512 0 0 1 .565 4.162zM12 5.52l-6.33 5.57a1.54 1.54 0 0 0 0 2.283L12 18.48l6.33-5.107a1.54 1.54 0 0 0 0-2.283z" />
      </svg>
    ),
  },
];

export default function CodingProfiles() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const headReveal = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const headItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="profiles" className="py-24 md:py-32 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
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
              CODE PROFILES
            </motion.h2>
          </div>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, i) => {
            const isHovered = hoveredId === platform.id;
            return (
              <motion.a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setHoveredId(platform.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative border border-zinc-100 rounded-[2.5rem] bg-zinc-50 p-10
                           transition-all duration-500 flex flex-col h-full cursor-pointer hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 overflow-hidden"
              >
                {/* Background Glow */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 -mr-16 -mt-16"
                  style={{ backgroundColor: platform.color }}
                />
              {/* Logo + name */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: platform.bgColor, color: platform.color }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {platform.logo}
                  </motion.div>
                  <div>
                    <p className="font-bold text-zinc-900 text-base uppercase tracking-wider">{platform.name}</p>
                    <p className="text-sm text-zinc-500 font-medium">{platform.handle}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-zinc-400 group-hover:text-zinc-900 transition-colors mt-1"
                  style={{ color: isHovered ? platform.color : '' }}
                />
              </div>

                <p className="text-zinc-600 text-base leading-relaxed mb-8 font-medium">{platform.description}</p>
                <div className="h-[1px] bg-zinc-200 mb-8" />

              {/* Stats */}
              <div className="flex flex-col gap-5 mt-auto relative z-10">
                {platform.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between group/stat">
                    <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">{stat.label}</span>
                    <span className="text-lg font-black text-zinc-800 transition-colors"
                          style={{ color: isHovered ? platform.color : '' }}
                    >
                      {typeof stat.value === 'number' ? <Counter value={stat.value} suffix={stat.suffix} /> : stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.a>
            );
          })}
        </div>

        {/* Visual Activity Blocks */}
        <div className="space-y-10">
          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-zinc-100 rounded-[3rem] bg-zinc-50 p-8 md:p-12 shadow-xl shadow-zinc-200/50 overflow-hidden relative"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <h3 className="font-display font-black uppercase text-2xl md:text-3xl tracking-tighter text-zinc-900">
                    GitHub Activity
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Total Repos', value: 20, suffix: '+' },
                    { label: 'Contributions', value: 50, suffix: '+' },
                    { label: 'Pull Requests', value: 15, suffix: '+' },
                    { label: 'Global Ranking', value: 40, suffix: '%' },
                  ].map(({ label, value, suffix }) => (
                    <div key={label} className="bg-white border border-zinc-100 p-6 rounded-3xl shadow-sm group hover:-translate-y-1 transition-all duration-300">
                      <p className="text-3xl font-black text-zinc-900 group-hover:text-indigo-600 transition-colors uppercase">
                        {suffix === '%' ? 'TOP ' : ''}<Counter value={value} suffix={suffix} />
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simplified Heatmap Visual */}
              <div className="w-full md:w-64 h-32 flex flex-wrap gap-1 items-end justify-center md:justify-end">
                {Array.from({ length: 48 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 4 }}
                    whileInView={{ height: Math.max(4, Math.random() * 24 + 4) }}
                    className="w-1.5 rounded-full bg-indigo-500/20"
                    style={{ backgroundColor: i % 3 === 0 ? '#6366f1' : i % 2 === 0 ? '#818cf8' : '#e0e7ff' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* LeetCode & GFG Grid Visuals */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* LeetCode Activity */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-zinc-100 rounded-[3rem] bg-zinc-50 p-10 shadow-xl shadow-zinc-200/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F7A41D] text-white flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                </div>
                <h3 className="font-display font-black uppercase text-2xl tracking-tighter text-zinc-900">
                  LeetCode Visual
                </h3>
              </div>
              <div className="relative h-20 w-full bg-zinc-100 rounded-2xl overflow-hidden mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  className="absolute inset-y-0 left-0 bg-[#F7A41D] opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center font-black text-xs text-[#F7A41D] tracking-[0.5em]">
                  CONSISTENCY STREAK: <Counter value={25} /> DAYS
                </div>
              </div>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest border-l-2 border-[#F7A41D] pl-3 flex flex-col gap-1">
                <span>GLOBAL RANK: TOP <Counter value={10} suffix="%" /></span>
                <span className="text-[10px] text-zinc-400 font-medium tracking-tight">SOLVED: <Counter value={100} suffix="+" /> PROBLEMS</span>
              </p>
            </motion.div>

            {/* GFG Activity */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-zinc-100 rounded-[3rem] bg-zinc-50 p-10 shadow-xl shadow-zinc-200/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#2F8D46] text-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116.016 3.79 3.79 0 0 1-1.106-.695L12 11.648l-3.559 3.428a3.79 3.79 0 0 1-1.106.695 4.51 4.51 0 0 1-3.116-.016 3.69 3.69 0 0 1-1.104-.695 3.487 3.487 0 0 1-.565-.745 3.512 3.512 0 0 1 .565-4.162L9.15 4.833A3.765 3.765 0 0 1 12 3.589a3.765 3.765 0 0 1 2.85 1.244l6.035 5.32a3.512 3.512 0 0 1 .565 4.162zM12 5.52l-6.33 5.57a1.54 1.54 0 0 0 0 2.283L12 18.48l6.33-5.107a1.54 1.54 0 0 0 0-2.283z" />
                  </svg>
                </div>
                <h3 className="font-display font-black uppercase text-2xl tracking-tighter text-zinc-900">
                  GFG Performance
                </h3>
              </div>
              <div className="relative h-20 w-full bg-zinc-100 rounded-2xl overflow-hidden mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  className="absolute inset-y-0 left-0 bg-[#2F8D46] opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center font-black text-xs text-[#2F8D46] tracking-[0.5em]">
                  CONSISTENCY STREAK: <Counter value={45} /> DAYS
                </div>
              </div>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest border-l-2 border-[#2F8D46] pl-3 flex flex-col gap-1">
                <span>RANK: TOP <Counter value={5} suffix="%" /> IN BATCH</span>
                <span className="text-[10px] text-zinc-400 font-medium tracking-tight">SOLVED: <Counter value={200} suffix="+" /> PROBLEMS</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
