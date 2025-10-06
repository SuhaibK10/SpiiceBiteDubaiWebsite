"use client";
import Image from "next/image";
import { useState } from "react";
import SocialIcons from "@/components/SocialIcons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const waUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/971528480244";

  return (
    <header className="sticky top-0 z-50">
      {/* Bordered, rounded container so border is visible on all sides */}
      <div className="mx-2 sm:mx-4 mt-2 bg-white/90 backdrop-blur-lg border-4 border-emerald-500/60 shadow-md rounded-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Spice Bite logo"
                width={40}
                height={40}
                className="rounded-full object-cover ring-1 ring-black/10"
                priority
              />
              <span className="text-xl font-extrabold tracking-wide">Spice Bite</span>
            </a>

            {/* Center Nav */}
            <nav className="hidden md:flex items-center gap-2">
              <a href="#home" className="text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition">Home</a>
              <a href="#menu" className="text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition">Menu</a>
              <a href="#contact" className="text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition">Contact</a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <SocialIcons className="hidden lg:flex text-black" />

              {/* Order Now dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOrderOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-white shadow-md hover:bg-emerald-700 transition ring-1 ring-emerald-700/20"
                >
                  <span className="font-semibold">Order Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.164l3.71-3.934a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                  </svg>
                </button>
                {orderOpen && (
                  <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg">
                    <a href="https://food.noon.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-emerald-50">Order on Noon Food</a>
                    <a href="https://www.talabat.com/uae" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-emerald-50">Order on Talabat</a>
                    <a href="https://deliveroo.ae" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-emerald-50">Order on Deliveroo</a>
                    <a href="https://www.careem.com/food" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-emerald-50">Order on Careem</a>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5"
                onClick={() => setOpen((v) => !v)}
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {open && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col gap-2">
                <a href="#home" className="rounded-lg px-3 py-2 hover:bg-emerald-50">Home</a>
                <a href="#menu" className="rounded-lg px-3 py-2 hover:bg-emerald-50">Menu</a>
                <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-emerald-50">Contact</a>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 hover:bg-emerald-50">WhatsApp</a>
              </nav>
              <div className="pt-3"><SocialIcons className="justify-center" /></div>
            </div>
          )}
        </div>
      </div>

      {/* Gradient accent strip under navbar */}
      <div className="mx-2 sm:mx-4 h-0.5 bg-gradient-to-r from-emerald-400 via-amber-300 to-rose-400 opacity-80 rounded-full" />
    </header>
  );
}
