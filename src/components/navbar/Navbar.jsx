import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";

const navLinks = [
  { text: "Home", id: "#home" },
  { text: "About", id: "#about" },
  { text: "Projects", id: "#projects" },
  { text: "Contact", id: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      setIsOpen(false);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--bg-primary)]/80 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="text-xl font-semibold tracking-tight group cursor-pointer"
        >
          <span className="text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors duration-300">Y</span>
          <span className="text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors duration-300">ubraj</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 relative group"
            >
              {link.text}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href="https://blog.adhikariyubraj.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all duration-300"
          >
            Blog
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <RxCross1 className="w-5 h-5" /> : <RxHamburgerMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:pl-2 transition-all duration-300 border-b border-[var(--border-subtle)] last:border-none"
            >
              {link.text}
            </button>
          ))}
          <a
            href="https://blog.adhikariyubraj.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-left py-3 text-[var(--accent)] hover:pl-2 transition-all duration-300 flex items-center gap-1.5 font-medium"
          >
            Blog
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
