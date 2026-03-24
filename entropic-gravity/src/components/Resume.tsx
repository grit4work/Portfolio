'use client';

import { motion } from 'framer-motion';
import { personal } from '@/data/portfolio';

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 border-t border-zinc-800">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          CV
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mb-8"
        >
          Download my CV to learn more about my experience, projects, and technical skills.
        </motion.p>

        {/* Download Button */}
        <motion.a
          href={personal.resume}
          target="_blank"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-block px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
        >
          Download CV
        </motion.a>

      </div>
    </section>
  );
}
