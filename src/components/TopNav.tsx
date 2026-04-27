"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  onClick?: () => void;
  href?: string;
}

interface TopNavProps {
  navItems: NavItem[];
  logoHref?: string;
}

export default function TopNav({ navItems, logoHref = "/" }: TopNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleMobileClick = (onClick?: () => void) => {
    setIsOpen(false);
    if (onClick) {
      setTimeout(onClick, 300); // Wait for menu close animation
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 h-16 flex items-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 w-full h-full">
          <Link href={logoHref} className="flex items-center gap-4 hover:opacity-90 h-full relative z-50">
            <img src="/R.png" alt="Reveniee logo" className="h-10 w-10 sm:h-12 sm:w-12" style={{ height: 48, width: 48 }} />
            <span className="text-lg font-black flex items-center h-full">Reveniee</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm uppercase">
            {navItems.map(item =>
              item.href ? (
                <Link key={item.id} href={item.href} className="relative group">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 group-hover:w-full transition-all" />
                </Link>
              ) : (
                <button key={item.id} onClick={item.onClick} className="relative group cursor-pointer uppercase text-sm">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 group-hover:w-full transition-all" />
                </button>
              )
            )}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className="text-2xl font-bold uppercase tracking-wider hover:text-purple-500 transition-colors"
                      onClick={() => handleMobileClick()}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => handleMobileClick(item.onClick)} 
                      className="text-2xl font-bold uppercase tracking-wider hover:text-purple-500 transition-colors"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}