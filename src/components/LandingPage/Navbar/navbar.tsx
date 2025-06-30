"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/Theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md text-white">
  {/* Logo */}
  <Link href="/" className="text-xl font-bold gradient-text text-transparent bg-clip-text">
    AwakenAI
  </Link>

  {/* Nav Links for md+ */}
  <div className="hidden md:flex space-x-6 text-sm text-white/90">
    <Link href="#features" className="hover:text-white transition">Features</Link>
    <Link href="#solutions" className="hover:text-white transition">Solutions</Link>
    <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
    <Link href="#contact" className="hover:text-white transition">Contact</Link>
  </div>

  {/* Right Side Controls */}
  <div className="flex items-center gap-3">
    <ModeToggle />
    
    {/* Buttons only visible on md+ */}
    <div className="hidden md:flex gap-2">
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
    </div>

    {/* Hamburger for mobile */}
    <button
      className="md:hidden text-white"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col justify-between h-[calc(100vh-4rem)] px-6 py-4 md:hidden">
      {/* Nav links */}
      <div className="flex flex-col items-start space-y-4">
        <Link href="#features" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Features</Link>
        <Link href="#solutions" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Solutions</Link>
        <Link href="#pricing" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Pricing</Link>
        <Link href="#contact" className="hover:text-white transition" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      {/* Auth Buttons in mobile */}
      <div className="flex flex-col gap-3 mt-6">
        <Link
          href="/login"
          className="border border-white/40 text-sm rounded-md py-2 px-4 hover:bg-white/10 transition text-center"
          onClick={() => setIsOpen(false)}
        >
          Log In
        </Link>
        <Link
          href="/get-started"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-sm py-2 px-4 rounded-md hover:opacity-90 transition text-center"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </div>
  )}
</nav>

  );
}
