import Link from "next/link";
import {
  Wind,
  Zap,
  Shield,
  Truck,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Cigarette,
  Droplets,
  Box,
  Battery,
} from "lucide-react";
import { FluidClouds } from "@/components/fluid-clouds";
import { FeaturedProduct } from "@/components/featured-product";

export default function Home() {
  return (
    <div className="grid-bg">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden h-screen flex items-center">
        {/* Fluid Cloud Animation Background */}
        <div className="absolute inset-0 h-full">
          <FluidClouds />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-[#00ff6a]/10 border border-[#00ff6a]/20 rounded-full px-4 py-1.5 mb-8">
              <MapPin className="w-3.5 h-3.5 text-[#00ff6a]" />
              <span className="text-[#00ff6a] text-xs font-semibold tracking-wide uppercase">
                Salem, NH
              </span>
              <span className="text-white/40 text-xs">|</span>
              <span className="text-white/50 text-xs">Demo Site</span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
              <span className="text-white">OutVape</span>
              <br />
              <span className="gradient-text">Your Enemies</span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              The next generation of vaping. Semi-disposable device with permanent battery, LCD display, and purchasable coil meshes.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/store"
                className="group flex items-center gap-2 bg-[#00ff6a] text-black font-bold px-8 py-4 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(0,255,106,0.4)] transition-all"
              >
                Browse Store
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://mattyjacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 hover:border-[#00ff6a]/30 transition-all"
              >
                Built by MattyJacks
                <span className="text-sm">&#8599;</span>
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up animate-delay-500 grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16">
              <div>
                <div className="text-3xl font-black text-[#00ff6a]">30+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Products</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#00ff6a]">5&#9733;</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Rated</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#00ff6a]">NH</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Local</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Featured Product Section */}
      <FeaturedProduct />

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              What does <span className="text-[#00ff6a]">"OutVape Your Enemies"</span> Mean?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[hsl(120,8%,10%)] to-[hsl(120,8%,6%)] border border-[#00ff6a]/10 rounded-3xl p-10 sm:p-16 neon-box">
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Life is a competition. Your enemies, whether they're rivals, competitors, or just people who doubt you, may work smarter. They may work harder. They may have advantages you don't. But there's one thing they can't take from you: <strong className="text-[#00ff6a]">the ability to live better</strong>.
              </p>

              <p>
                <strong className="text-white">OutVape Your Enemies</strong> isn't about arrogance. It's about perspective. While they're grinding, stressing, and burning out, you're taking care of yourself. Finding moments of peace. Enjoying premium products that make life feel good. You're <strong className="text-[#00ff6a]">winning at life</strong>.
              </p>

              <p>
                The best revenge isn't success. It's <strong className="text-white">happiness</strong>. Waking up and choosing to enjoy your day. Surrounding yourself with quality. Vaping better, living better, and refusing to let the noise of the world steal your peace.
              </p>

              <p>
                Every time you reach for an OutVape device, you're making a statement. "I choose to live well. I choose to feel good. I choose to win at life." That's what OutVape Your Enemies means. It's not about them. It's about <strong className="text-white">you</strong>.
              </p>

              <p className="text-white/50 text-base pt-4 border-t border-white/10">
                The consistent choice to vape better, live better, and refuse to compromise on quality. That's how you OutVape Your Enemies every single day.
              </p>
            </div>
          </div>

          {/* Emphasis callout */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#00ff6a]/10 border border-[#00ff6a]/20 rounded-2xl px-8 py-6">
              <p className="text-white/60 text-sm mb-2">THE OUTVAPE PHILOSOPHY</p>
              <p className="text-2xl sm:text-3xl font-black text-white">
                Better Products. Better Life. <span className="text-[#00ff6a]">Better You.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Why Choose <span className="text-[#00ff6a]">OutVape</span>?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              We stock only the best. Every device is tested, every juice is tasted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Latest Devices", desc: "Cutting-edge vapes from top brands, always in stock." },
              { icon: Shield, title: "Verified Quality", desc: "Every product is authentic and sourced from authorized distributors." },
              { icon: Truck, title: "Fast Pickup", desc: "Order online, pick up in-store in Salem, NH within the hour." },
              { icon: Star, title: "Expert Staff", desc: "Knowledgeable team to help you find the perfect setup." },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className={`animate-fade-in-up animate-delay-${(i + 1) * 100} bg-[hsl(120,8%,8%)] border border-white/5 rounded-2xl p-6 card-lift neon-border-hover neon-box-hover`}
              >
                <div className="w-12 h-12 bg-[#00ff6a]/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#00ff6a]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Shop by <span className="text-[#00ff6a]">Category</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              From starter kits to premium mods, we have everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cigarette, title: "Disposable Vapes", count: "8 products", href: "/store" },
              { icon: Battery, title: "Refillable Pods", count: "7 products", href: "/store" },
              { icon: Droplets, title: "E-Liquids", count: "8 products", href: "/store" },
              { icon: Box, title: "Accessories", count: "7 products", href: "/store" },
            ].map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-gradient-to-br from-[hsl(120,8%,10%)] to-[hsl(120,8%,6%)] border border-white/5 rounded-2xl p-8 text-center card-lift neon-border-hover neon-box-hover"
              >
                <div className="w-16 h-16 bg-[#00ff6a]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00ff6a]/20 transition-colors">
                  <cat.icon className="w-8 h-8 text-[#00ff6a]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{cat.title}</h3>
                <p className="text-white/40 text-sm">{cat.count}</p>
                <div className="mt-4 text-[#00ff6a] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                  Browse <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / MattyJacks Banner */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#00ff6a]/10 to-transparent border border-[#00ff6a]/20 rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 hero-gradient pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#00ff6a]/10 border border-[#00ff6a]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#00ff6a] text-xs font-semibold tracking-wide uppercase">
                  Demo Website
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                Want a site like this<span className="text-[#00ff6a]">?</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                This demo vape shop was designed and built by <strong className="text-white">MattyJacks.com</strong> to
                showcase what we can do for nicotine vape shops and other businesses. Let us build yours.
              </p>
              <a
                href="https://mattyjacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00ff6a] text-black font-bold px-8 py-4 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(0,255,106,0.4)] transition-all"
              >
                Visit MattyJacks.com
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Hours */}
      <section className="py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Visit Us in <span className="text-[#00ff6a]">Salem, NH</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Conveniently located in Salem, New Hampshire. Stop by to check out our full selection of
                devices, e-liquids, and accessories. Our knowledgeable staff is always happy to help
                you find the perfect vape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00ff6a]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00ff6a]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Salem, NH 03079</div>
                    <div className="text-white/40 text-sm">(Demo - address not real)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00ff6a]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#00ff6a]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Mon-Sat: 10am - 9pm</div>
                    <div className="text-white/40 text-sm">Sun: 11am - 6pm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative card */}
            <div className="relative">
              <div className="bg-[hsl(120,8%,8%)] border border-[#00ff6a]/10 rounded-3xl p-8 neon-box">
                <div className="flex items-center gap-3 mb-6">
                  <Wind className="w-8 h-8 text-[#00ff6a]" />
                  <span className="text-2xl font-black">
                    <span className="text-white">OUT</span>
                    <span className="text-[#00ff6a]">VAPE</span>
                  </span>
                </div>
                <div className="space-y-3 text-white/50 text-sm">
                  <p>&#10003; Premium Disposable Vapes</p>
                  <p>&#10003; Refillable Pod Systems</p>
                  <p>&#10003; 100+ E-Liquid Flavors</p>
                  <p>&#10003; Carrying Cases & Accessories</p>
                  <p>&#10003; Coils, Pods & Replacement Parts</p>
                  <p>&#10003; Starter Kits & Bundles</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-[#00ff6a]/60 text-xs font-medium">
                    This is a demo site built by MattyJacks.com
                  </p>
                </div>
              </div>
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-[#00ff6a]/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
