"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Filter, Star, ArrowRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  badge?: string;
  description: string;
  emoji: string;
};

const products: Product[] = [
  // Disposable Vapes (1-8)
  { id: 1, name: "CloudBurst 5000", category: "Disposable Vapes", price: 19.99, rating: 4.8, badge: "Best Seller", description: "5000 puffs, 13ml pre-filled, rechargeable USB-C. Mango Ice flavor.", emoji: "💨" },
  { id: 2, name: "PuffMax Ultra", category: "Disposable Vapes", price: 24.99, rating: 4.7, description: "8000 puffs, mesh coil technology. Strawberry Watermelon.", emoji: "💨" },
  { id: 3, name: "VaporX Slim", category: "Disposable Vapes", price: 14.99, rating: 4.5, description: "3000 puffs, slim pen design. Cool Mint flavor.", emoji: "💨" },
  { id: 4, name: "MegaCloud Pro", category: "Disposable Vapes", price: 29.99, rating: 4.9, badge: "New", description: "10000 puffs, dual mesh coil, LED display. Blue Razz.", emoji: "💨" },
  { id: 5, name: "ZephyrBar Mini", category: "Disposable Vapes", price: 9.99, rating: 4.3, description: "1500 puffs, compact pocket-friendly. Tobacco Classic.", emoji: "💨" },
  { id: 6, name: "FrostBite Ice", category: "Disposable Vapes", price: 17.99, rating: 4.6, description: "4000 puffs, extra menthol boost. Triple Mint Ice.", emoji: "💨" },
  { id: 7, name: "TropicalStorm 6K", category: "Disposable Vapes", price: 22.99, rating: 4.7, badge: "Popular", description: "6000 puffs, adjustable airflow. Tropical Fruit Mix.", emoji: "💨" },
  { id: 8, name: "NightOwl Dark", category: "Disposable Vapes", price: 21.99, rating: 4.5, description: "5500 puffs, matte black finish. Grape Ice flavor.", emoji: "💨" },

  // Refillable Pod Systems (9-15)
  { id: 9, name: "NovaPod Pro Kit", category: "Refillable Pods", price: 34.99, rating: 4.8, badge: "Top Rated", description: "850mAh battery, 2ml refillable pods, adjustable wattage.", emoji: "🔋" },
  { id: 10, name: "AquaPod SE", category: "Refillable Pods", price: 29.99, rating: 4.6, description: "Ceramic coil pod system, type-C fast charge, 3ml capacity.", emoji: "🔋" },
  { id: 11, name: "ElementX Mini", category: "Refillable Pods", price: 24.99, rating: 4.5, description: "Ultra-compact, magnetic pod connection, 400mAh.", emoji: "🔋" },
  { id: 12, name: "VortexPod Max", category: "Refillable Pods", price: 39.99, rating: 4.9, badge: "Premium", description: "1000mAh, OLED screen, 5-25W adjustable, 4ml pods.", emoji: "🔋" },
  { id: 13, name: "StealthVape 2.0", category: "Refillable Pods", price: 27.99, rating: 4.4, description: "Draw-activated, whisper-quiet, 600mAh battery.", emoji: "🔋" },
  { id: 14, name: "PulsePod Duo", category: "Refillable Pods", price: 32.99, rating: 4.7, description: "Dual-pod system, switch flavors instantly. 900mAh.", emoji: "🔋" },
  { id: 15, name: "ZenPod Classic", category: "Refillable Pods", price: 22.99, rating: 4.3, description: "Simple and reliable, perfect for beginners. 500mAh.", emoji: "🔋" },

  // E-Liquids (16-23)
  { id: 16, name: "Salem Frost 60ml", category: "E-Liquids", price: 18.99, rating: 4.9, badge: "Local Fave", description: "NH-inspired cool menthol blend, 70/30 VG/PG, 3mg/6mg nic.", emoji: "💧" },
  { id: 17, name: "Mango Paradise 30ml", category: "E-Liquids", price: 12.99, rating: 4.7, description: "Sweet ripe mango with a hint of cream. 50/50 salt nic.", emoji: "💧" },
  { id: 18, name: "Berry Blast 60ml", category: "E-Liquids", price: 16.99, rating: 4.6, description: "Mixed berries with a cool exhale. 70/30, freebase nicotine.", emoji: "💧" },
  { id: 19, name: "Vanilla Custard 30ml", category: "E-Liquids", price: 14.99, rating: 4.8, description: "Rich vanilla custard dessert flavor. Salt nic 20mg/35mg.", emoji: "💧" },
  { id: 20, name: "Tobacco Gold 60ml", category: "E-Liquids", price: 17.99, rating: 4.5, description: "Smooth Virginia tobacco with caramel undertones. Freebase.", emoji: "💧" },
  { id: 21, name: "Watermelon Chill 30ml", category: "E-Liquids", price: 11.99, rating: 4.7, badge: "New", description: "Fresh watermelon with icy menthol. Salt nic.", emoji: "💧" },
  { id: 22, name: "Peach Tea 60ml", category: "E-Liquids", price: 18.99, rating: 4.6, description: "Georgia peach iced tea. Smooth all-day vape. 70/30.", emoji: "💧" },
  { id: 23, name: "Coffee Crave 30ml", category: "E-Liquids", price: 13.99, rating: 4.4, description: "Espresso with hazelnut cream. Perfect morning vape.", emoji: "💧" },

  // Accessories (24-30)
  { id: 24, name: "VapeGuard Hard Case", category: "Accessories", price: 19.99, rating: 4.7, badge: "Popular", description: "Shockproof EVA case, holds 2 devices + 4 pods. Carabiner clip.", emoji: "🎒" },
  { id: 25, name: "CloudCarry Soft Pouch", category: "Accessories", price: 9.99, rating: 4.5, description: "Leather-feel pouch, magnetic closure, belt loop.", emoji: "🎒" },
  { id: 26, name: "NeoCoil 5-Pack (0.6ohm)", category: "Accessories", price: 14.99, rating: 4.8, description: "Compatible with NovaPod/VortexPod. Mesh coil, 5 pack.", emoji: "🔧" },
  { id: 27, name: "NeoCoil 5-Pack (1.0ohm)", category: "Accessories", price: 14.99, rating: 4.7, description: "MTL optimized coils for tight draw. Compatible with most pods.", emoji: "🔧" },
  { id: 28, name: "USB-C Fast Charger", category: "Accessories", price: 7.99, rating: 4.6, description: "3ft braided cable, 2A fast charge for all vape devices.", emoji: "🔌" },
  { id: 29, name: "OutVape Starter Bundle", category: "Accessories", price: 49.99, rating: 4.9, badge: "Best Value", description: "NovaPod Pro + Salem Frost 60ml + Carrying Case. Save $24!", emoji: "🎁" },
  { id: 30, name: "Drip Tip Collection (3pk)", category: "Accessories", price: 8.99, rating: 4.3, description: "3 resin drip tips in assorted colors. 510 thread.", emoji: "🎨" },
];

const categories = ["All", "Disposable Vapes", "Refillable Pods", "E-Liquids", "Accessories"];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="grid-bg min-h-screen">
      {/* Header */}
      <section className="hero-gradient pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
                The <span className="text-[#00ff6a]">Store</span>
              </h1>
              <p className="text-white/50">
                {filteredProducts.length} products available - <span className="text-[#00ff6a]/60 text-sm">Demo only, not for sale</span>
              </p>
            </div>
            {totalItems > 0 && (
              <Link
                href="/checkout"
                className="flex items-center gap-2 bg-[#00ff6a] text-black font-bold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,106,0.4)] transition-all animate-pulse-glow"
              >
                <ShoppingCart className="w-5 h-5" />
                Cart ({totalItems})
              </Link>
            )}
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[hsl(120,8%,8%)] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00ff6a]/40 focus:ring-1 focus:ring-[#00ff6a]/20 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-white/40 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[#00ff6a] text-black"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`animate-fade-in-up bg-[hsl(120,8%,8%)] border border-white/5 rounded-2xl overflow-hidden card-lift neon-border-hover neon-box-hover group`}
                style={{ animationDelay: `${(i % 8) * 0.05}s` }}
              >
                {/* Product Image Placeholder */}
                <div className="relative h-44 bg-gradient-to-br from-[hsl(120,10%,12%)] to-[hsl(120,8%,6%)] flex items-center justify-center">
                  <span className="text-5xl">{product.emoji}</span>
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-[#00ff6a] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  {/* Category */}
                  <div className="text-[#00ff6a]/60 text-xs font-semibold uppercase tracking-wider mb-1">
                    {product.category}
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#00ff6a] transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3.5 h-3.5 text-[#00ff6a] fill-[#00ff6a]" />
                    <span className="text-white/60 text-xs">{product.rating}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-white font-black text-xl">${product.price.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="flex items-center gap-1.5 bg-[#00ff6a]/10 border border-[#00ff6a]/20 text-[#00ff6a] px-3.5 py-2 rounded-lg text-xs font-semibold hover:bg-[#00ff6a]/20 hover:border-[#00ff6a]/40 transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* MattyJacks CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[hsl(120,8%,8%)] border border-[#00ff6a]/10 rounded-2xl p-8 sm:p-12 neon-box">
            <p className="text-[#00ff6a] text-xs font-semibold uppercase tracking-widest mb-3">Demo Store</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              This store is a demo by <span className="text-[#00ff6a]">MattyJacks.com</span>
            </h2>
            <p className="text-white/50 mb-6 max-w-xl mx-auto">
              No real products are sold here. This is a showcase of what MattyJacks can build for your vape shop or retail business.
            </p>
            <a
              href="https://mattyjacks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00ff6a] text-black font-bold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,106,0.4)] transition-all"
            >
              Get Your Own Store
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
