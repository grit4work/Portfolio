'use client';

import { motion } from 'framer-motion';
import { personal } from '@/data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-12 px-6 bg-white border-t border-zinc-100">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div className="relative max-w-fit">
            <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-8xl text-zinc-900 leading-none tracking-tighter">
              GET IN TOUCH
            </h2>
          </div>
        </div>

        {/* Text */}


        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-700 font-bold uppercase tracking-widest text-xs hover:bg-white hover:border-indigo-400 hover:text-indigo-600 hover:shadow-lg transition-all duration-300"
          >
            <Mail size={18} /> Email
          </a>

          <a
            href={personal.social.github}
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-black border border-black rounded-2xl text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 hover:shadow-lg transition-all duration-300"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] border border-[#0077b5] rounded-2xl text-white font-bold uppercase tracking-widest text-xs hover:bg-[#006396] hover:shadow-lg transition-all duration-300"
          >
            <Linkedin size={18} /> LinkedIn
          </a>

        </motion.div>

      </div>
    </section>
  );
}
