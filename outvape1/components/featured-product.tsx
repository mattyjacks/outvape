"use client";

import { useState } from "react";
import { ShoppingCart, Zap, Droplets, Battery } from "lucide-react";

export function FeaturedProduct() {
  const [selectedNicotine, setSelectedNicotine] = useState("2%");
  const [selectedSize, setSelectedSize] = useState("standard");

  const nicotineLevels = ["0%", "2%", "5%"];
  const sizes = [
    { id: "standard", name: "Standard Coil", price: 12.99 },
    { id: "large", name: "Large Coil", price: 16.99 },
    { id: "xl", name: "XL Coil", price: 19.99 },
  ];

  const selectedSizeData = sizes.find((s) => s.id === selectedSize);

  return (
    <section className="py-24 bg-gradient-to-b from-[#00ff6a]/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00ff6a]/10 border border-[#00ff6a]/20 rounded-full px-4 py-1.5 mb-4">
            <Zap className="w-3.5 h-3.5 text-[#00ff6a]" />
            <span className="text-[#00ff6a] text-xs font-semibold tracking-wide uppercase">
              Featured Innovation
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
            The <span className="text-[#00ff6a]">OutVape</span> System
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Semi-disposable vape with permanent battery, LCD display, and purchasable pre-filled coil meshes.
            Choose your nicotine strength and coil size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff6a]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-[hsl(120,8%,12%)] to-[hsl(120,8%,6%)] border border-[#00ff6a]/20 rounded-3xl p-12 flex flex-col items-center justify-center min-h-96 neon-box">
                <div className="text-7xl mb-6">🔋</div>
                <h3 className="text-2xl font-black text-white mb-2 text-center">OutVape Device</h3>
                <p className="text-white/50 text-sm text-center mb-6">
                  Permanent Battery • LCD Display • Refillable Coil System
                </p>
                <div className="flex items-center gap-2 text-[#00ff6a] font-bold">
                  <Battery className="w-5 h-5" />
                  <span>Always Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Options */}
          <div className="space-y-8">
            {/* Nicotine Strength Selection */}
            <div>
              <label className="text-white font-bold text-lg mb-4 block">
                Nicotine Strength
              </label>
              <div className="grid grid-cols-3 gap-3">
                {nicotineLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedNicotine(level)}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                      selectedNicotine === level
                        ? "bg-[#00ff6a] text-black shadow-[0_0_20px_rgba(0,255,106,0.4)]"
                        : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-3">
                {selectedNicotine === "0%"
                  ? "Nicotine-free option for flavor enjoyment"
                  : selectedNicotine === "2%"
                    ? "Moderate nicotine for balanced experience"
                    : "High nicotine for strong satisfaction"}
              </p>
            </div>

            {/* Coil Size Selection */}
            <div>
              <label className="text-white font-bold text-lg mb-4 block">
                Coil Mesh Size
              </label>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium transition-all ${
                      selectedSize === size.id
                        ? "bg-[#00ff6a]/10 border border-[#00ff6a]/40 text-white"
                        : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Droplets className="w-4 h-4" />
                      {size.name}
                    </span>
                    <span className="text-[#00ff6a] font-bold">${size.price.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[hsl(120,8%,8%)] border border-[#00ff6a]/10 rounded-2xl p-6 neon-box">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/60">Selected Configuration:</span>
                <span className="text-[#00ff6a] font-bold">
                  {selectedNicotine} • {selectedSizeData?.name}
                </span>
              </div>
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <span className="text-white font-bold text-lg">Total Price:</span>
                <span className="text-[#00ff6a] font-black text-3xl">
                  ${selectedSizeData?.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full flex items-center justify-center gap-2 bg-[#00ff6a] text-black font-bold py-4 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(0,255,106,0.4)] transition-all">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white/50 text-sm leading-relaxed">
                <strong className="text-white">The OutVape System:</strong> Buy the device once, then purchase
                pre-filled coil meshes with your preferred nicotine strength. Sustainable, cost-effective, and
                always fresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
