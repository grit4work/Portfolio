'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Name */}
        <h3 className="text-lg font-semibold mb-2">
          Ayush Chauhan
        </h3>

        {/* Tagline */}
        <p className="text-zinc-400 text-sm mb-6">
          Data-Driven Developer | Data Analyst | AI & ML Enthusiast
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-6">

          <a href={`mailto:${personal.email}`}>
            <Mail className="hover:text-indigo-400" />
          </a>

          <a href={personal.social.github} target="_blank" rel="noreferrer">
            <Github className="hover:text-indigo-400" />
          </a>

          <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="hover:text-indigo-400" />
          </a>

        </div>

        {/* Bottom */}
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Ayush Chauhan. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
