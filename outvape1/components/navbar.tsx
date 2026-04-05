"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Wind } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner bg-[#00ff6a]/10 border-b border-[#00ff6a]/20 text-center py-2 px-4 text-xs sm:text-sm">
        <span className="text-[#00ff6a] font-semibold">DEMO SITE</span>
        <span className="text-white/70 mx-2">-</span>
        <span className="text-white/60">
          Built by{" "}
          <a
            href="https://mattyjacks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff6a] hover:text-white underline underline-offset-2 transition-colors"
          >
            MattyJacks.com
          </a>
          {" "} - Want a site like this?{" "}
          <a
            href="https://mattyjacks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-[#00ff6a] transition-colors"
          >
            Contact us!
          </a>
        </span>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#00ff6a]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Wind className="w-8 h-8 text-[#00ff6a] group-hover:drop-shadow-[0_0_8px_rgba(0,255,106,0.6)] transition-all" />
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">OUT</span>
                <span className="text-[#00ff6a] neon-glow-sm">VAPE</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Home
              </Link>
              <Link
                href="/store"
                className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Store
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Privacy
              </Link>
              <a
                href="https://mattyjacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                MattyJacks
              </a>
              <Link
                href="/checkout"
                className="flex items-center gap-2 bg-[#00ff6a] text-black font-bold px-5 py-2 rounded-lg hover:bg-[#00ff6a]/90 hover:shadow-[0_0_20px_rgba(0,255,106,0.4)] transition-all text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Cart
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white hover:text-[#00ff6a] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#00ff6a]/10 animate-fade-in-up">
            <div className="px-4 py-4 flex flex-col gap-3">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase py-2">Home</Link>
              <Link href="/store" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase py-2">Store</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase py-2">Contact</Link>
              <Link href="/privacy" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase py-2">Privacy</Link>
              <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#00ff6a] transition-colors text-sm font-medium tracking-wide uppercase py-2">MattyJacks</a>
              <Link href="/checkout" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 bg-[#00ff6a] text-black font-bold px-5 py-3 rounded-lg text-sm mt-2">
                <ShoppingCart className="w-4 h-4" />
                Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
