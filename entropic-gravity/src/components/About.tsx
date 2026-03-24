'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-800">

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg leading-relaxed"
        >
          I am a Data-Driven Developer and AI enthusiast passionate about building intelligent systems 
          and solving real-world problems using data. I specialize in data analysis, machine learning, 
          and application development, combining technical skills with practical problem-solving.
          <br /><br />
          My work focuses on transforming raw data into meaningful insights and building solutions 
          that create real impact — from analytics dashboards to AI-powered applications.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="border border-zinc-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-zinc-400 text-sm">BTech CSE (ML)</p>
          </div>

          <div className="border border-zinc-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Focus</h3>
            <p className="text-zinc-400 text-sm">AI, Data & Analytics</p>
          </div>

          <div className="border border-zinc-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Goal</h3>
            <p className="text-zinc-400 text-sm">Build impactful tech solutions</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
