'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming',
    items: ['Python', 'C++', 'Java', 'JavaScript'],
  },
  {
    category: 'Data & Analytics',
    items: ['Pandas', 'NumPy', 'Excel', 'Power BI', 'Tableau'],
  },
  {
    category: 'AI / ML',
    items: ['Machine Learning', 'Predictive Analysis', 'Scikit-learn', 'Feature Engineering'],
  },
  {
    category: 'Tools',
    items: ['GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code'],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-zinc-800 rounded-xl p-6 hover:border-indigo-500 transition"
            >
              <h3 className="font-semibold mb-4 text-lg">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-zinc-900 px-3 py-1 rounded hover:bg-indigo-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
