"use client"

import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/4nshumankrsingh",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anshuman-kumar-singh-078b01316/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-orange-300/30 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-0">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-orange-400 transition cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};