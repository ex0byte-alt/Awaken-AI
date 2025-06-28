"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md text-white">
      <Link href="/" className="text-xl font-bold gradient-text text-transparent bg-clip-text">
        AwakenAI
      </Link>

      <div className="hidden md:flex space-x-6 text-sm text-white/90">
        <Link href="#features" className="hover:text-white transition">Features</Link>
        <Link href="#solutions" className="hover:text-white transition">Solutions</Link>
        <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
        <Link href="#contact" className="hover:text-white transition">Contact</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="px-4 py-1.5 border border-white/40 text-sm rounded-full hover:bg-white/10 transition"
        >
          Log In
        </Link>
        <Link
          href="/get-started"
          className="px-4 py-1.5 rounded-xs text-sm gradient-button text-white hover:opacity-90 transition"
        >
          Get Started
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden">
          <Link href="#features" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#solutions" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link href="#pricing" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#contact" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
