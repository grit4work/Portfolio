'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pb-12 pt-4 px-6 mt-0">

      <div className="max-w-6xl mx-auto text-center">

        {/* Name */}
        <h3 className="text-xl font-display font-black uppercase tracking-tighter text-zinc-900 mb-2">
          AYUSH CHAUHAN
        </h3>

        {/* Tagline */}
        <p className="text-zinc-500 font-medium text-sm mb-8">
          Data-Driven Developer | Data Analyst | AI & ML Enthusiast
        </p>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.3em]">Crafted with Precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
