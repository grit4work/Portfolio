'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming',
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'Kotlin'],
  },
  {
    category: 'Web & Backend',
    items: ['HTML / CSS', 'Flask', 'React', 'Bootstrap'],
  },
  {
    category: 'ML & Data Science',
    items: ['Machine Learning', 'Pandas / NumPy', 'Scikit-learn', 'PyTorch', 'OpenCV', 'Matplotlib'],
  },
  {
    category: 'Tools & APIs',
    items: ['MySQL', 'Git / GitHub', 'Excel', 'Power BI', 'Cursor', 'Hadoop', 'AntiGravity', 'Gemini API', 'VS Code', 'Jupyter'],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 border-y border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="relative max-w-fit">
            <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-8xl text-zinc-900 leading-none tracking-tighter">
              TECH STACK
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
            >
              <h3 className="font-display font-black mb-10 text-zinc-900 text-xl md:text-2xl uppercase tracking-widest flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-lg shadow-indigo-200" />
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="group/skill bg-white border border-zinc-200 rounded-2xl px-3 py-5 flex items-center justify-center text-center shadow-sm hover:border-indigo-400 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-xs md:text-sm font-bold uppercase tracking-tight text-zinc-700 group-hover/skill:text-indigo-600 transition-colors leading-tight break-words">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
