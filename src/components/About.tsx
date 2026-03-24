'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, GraduationCap, Cpu, Code, ExternalLink } from 'lucide-react';
import { personal, aboutStats } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-y border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10 text-left relative max-w-fit">
              <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-8xl text-zinc-900 leading-none tracking-tighter">
                ABOUT ME
              </h2>
            </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-zinc-800 mb-2 uppercase tracking-wide">{personal.name}</h3>
                <p className="text-zinc-500 flex items-center gap-2 text-sm italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                  {personal.location}
                </p>
              </div>

              <div className="space-y-8 text-zinc-600 text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-3xl">
                <p>
                  I am a Data-Driven Developer and AI enthusiast passionate about the intersection of data science and real-world impact. My journey is focused on transforming complex data into intelligent solutions that solve real-world problems. I thrive on uncovering hidden patterns and building robust, data-driven systems.
                </p>
                <p>
                  With a strong foundation in Computer Science, I specialize in Python, Java, C++, and Kotlin, alongside tools like Pandas and Matplotlib. I am particularly interested in Predictive Modelling and NLP, where I apply an analytical mindset to extract meaningful insights and drive decision-making.
                </p>
                <p>
                  Beyond technical work, I am an active contributor to the developer community through competitive programming and full-stack projects. I believe a blend of robust engineering and thoughtful data science is key to creating future-ready applications. I am always eager to collaborate on innovative AI projects.
                </p>
              </div>



            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={personal.social.github} 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-indigo-600 hover:border-indigo-200 transition-all text-sm font-medium"
              >
                GitHub Profile <ExternalLink size={14} />
              </a>
              <a 
                href={personal.social.linkedin} 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-indigo-600 hover:border-indigo-200 transition-all text-sm font-medium"
              >
                LinkedIn <ExternalLink size={14} />
              </a>
              <a 
                href={personal.resume} 
                target="_blank"
                className="flex items-center gap-2 px-9 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 transition-all text-sm font-black uppercase tracking-tighter shadow-xl shadow-indigo-100"
              >
                Download CV <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-end relative"
          >
            <div className="relative z-10 rounded-full overflow-hidden w-full max-w-[580px] aspect-square shadow-2xl shadow-indigo-500/10 group border-[7px] border-zinc-100 bg-white">
              <img 
                src="/ayush_photo.jpg" 
                alt={personal.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </div>
            
            {/* Background Accent Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-zinc-800/20 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-zinc-800/10 rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
