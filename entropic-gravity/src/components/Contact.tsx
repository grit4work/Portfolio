'use client';

import { motion } from 'framer-motion';
import { personal } from '@/data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-800">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          Contact
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mb-10"
        >
          Feel free to reach out for opportunities, collaborations, or just a conversation.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 flex-wrap"
        >

          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-5 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
          >
            <Mail size={16} /> Email
          </a>

          <a
            href={personal.social.github}
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
          >
            <Github size={16} /> GitHub
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

        </motion.div>

      </div>
    </section>
  );
}
