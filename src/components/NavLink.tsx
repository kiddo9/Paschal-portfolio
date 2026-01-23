import React from "react";
import { NavLink } from "react-router-dom";
import {
  Github,
  Linkedin,
  Briefcase,
  FileText,
  Code,
  Mail,
} from "lucide-react";
import DarkLightMode from "./DarkMode";

function NaavLink() {
  // Common link styles
  const linkStyles = ({ isActive }: any) =>
    `flex flex-col md:flex-row items-center gap-1 text-xs md:text-sm font-medium transition-colors ${
      isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
    }`;

  return (
    <>
      {/* --- TOP NAVIGATION BAR (Desktop & Mobile Header) --- */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#151515]/80 border-b border-white/5 md:border-none py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            Paschal<span className="text-blue-500">.</span>
          </NavLink>

          {/* Desktop Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10">
            <NavLink to="/projects" className={linkStyles}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={linkStyles}>
              Skills
            </NavLink>
            <NavLink to="/resume" className={linkStyles}>
              Resume
            </NavLink>
          </nav>

          {/* Right Side: Socials & Actions */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3 pr-4 border-r border-gray-800">
              <a
                href="https://github.com/kiddo9"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/elechi-paschal-18ab85312"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Hire Me Button */}
            <a
              href="mailto:paschalelechi0@gmail.com"
              className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Hire Me
            </a>

            {/* Dark Mode Toggle */}
            <DarkLightMode />
          </div>
        </div>
      </header>

      {/* --- MOBILE BOTTOM DOCK (Hidden on Desktop) --- */}
      {/* This creates a floating "app-like" menu at the bottom of phone screens */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <nav className="flex items-center justify-between bg-[#1f1f1f]/90 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl">
          <NavLink to="/projects" className={linkStyles}>
            <Briefcase size={20} className="mb-1" />
            Projects
          </NavLink>

          <NavLink to="/skills" className={linkStyles}>
            <Code size={20} className="mb-1" />
            Skills
          </NavLink>

          <NavLink to="/resume" className={linkStyles}>
            <FileText size={20} className="mb-1" />
            Resume
          </NavLink>

          {/* Mobile Socials Trigger (Optional, or just link to GitHub) */}
          <a
            href="https://github.com/kiddo9"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-white"
          >
            <Github size={20} className="mb-1" />
            Code
          </a>
        </nav>
      </div>
    </>
  );
}

export default NaavLink;
