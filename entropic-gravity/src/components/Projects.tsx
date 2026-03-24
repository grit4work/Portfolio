'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-800">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            A selection of projects showcasing my work in data, AI, and application development
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500 transition"
            >

              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-5">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-zinc-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-white hover:text-indigo-400"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-white hover:text-indigo-400"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
