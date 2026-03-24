import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-y border-zinc-100 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="relative max-w-fit">
            <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-8xl text-zinc-900 leading-none tracking-tighter">
              MY PROJECTS
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [currentImg, setCurrentImg] = useState(0);
  const images = project.images || [project.image];

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col h-full"
    >
      {/* Slideshow Area */}
      <div className="relative h-64 overflow-hidden bg-zinc-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImg]}
              alt={`${project.title} - Image ${currentImg + 1}`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_: any, idx: number) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImg ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-zinc-600 text-lg leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="tech-tag text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-base font-bold text-zinc-900 hover:text-indigo-600 transition-colors"
            >
              <Github size={18} /> Source
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2 text-base font-bold text-zinc-900 hover:text-indigo-600 transition-colors"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
