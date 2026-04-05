"use client";

import Link from "next/link";
import { Wind } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#00ff6a]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wind className="w-7 h-7 text-[#00ff6a]" />
              <span className="text-xl font-black tracking-tight">
                <span className="text-white">OUT</span>
                <span className="text-[#00ff6a]">VAPE</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Salem, NH&apos;s premier vape shop. Quality devices, premium e-liquids, and expert advice.
            </p>
            <p className="text-[#00ff6a]/60 text-xs mt-4 font-medium">
              DEMO SITE - Not a real store
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/50 hover:text-[#00ff6a] transition-colors text-sm">Home</Link></li>
              <li><Link href="/store" className="text-white/50 hover:text-[#00ff6a] transition-colors text-sm">Store</Link></li>
              <li><Link href="/checkout" className="text-white/50 hover:text-[#00ff6a] transition-colors text-sm">Cart</Link></li>
              <li><Link href="/privacy" className="text-white/50 hover:text-[#00ff6a] transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Location</h3>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>Salem, NH 03079</li>
              <li>Mon-Sat: 10am - 9pm</li>
              <li>Sun: 11am - 6pm</li>
              <li className="text-[#00ff6a]/50 text-xs pt-1">(Demo - not real hours)</li>
            </ul>
          </div>

          {/* MattyJacks */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Built By</h3>
            <p className="text-white/50 text-sm mb-3">
              This demo site was built by MattyJacks - a full-service agency that builds websites, deploys AI tools, and grows businesses.
            </p>
            <a
              href="https://mattyjacks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00ff6a]/10 border border-[#00ff6a]/30 text-[#00ff6a] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00ff6a]/20 hover:border-[#00ff6a]/50 transition-all"
            >
              Visit MattyJacks.com
              <span className="text-xs">&#8599;</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} OutVape Demo. This is a demonstration website built by{" "}
            <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-[#00ff6a]/50 hover:text-[#00ff6a] transition-colors">
              MattyJacks.com
            </a>
            . No real products are sold here.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 text-xs transition-colors">MattyJacks.com</a>
          </div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00ff6a]/40 to-transparent" />
    </footer>
  );
}
