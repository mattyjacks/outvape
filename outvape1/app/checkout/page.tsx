"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  CreditCard,
  Trash2,
  Plus,
  Minus,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Wind,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  emoji: string;
};

const sampleCart: CartItem[] = [
  { id: 1, name: "CloudBurst 5000", price: 19.99, qty: 1, emoji: "💨" },
  { id: 16, name: "Salem Frost 60ml", price: 18.99, qty: 2, emoji: "💧" },
  { id: 24, name: "VapeGuard Hard Case", price: 19.99, qty: 1, emoji: "🎒" },
  { id: 9, name: "NovaPod Pro Kit", price: 34.99, qty: 1, emoji: "🔋" },
];

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>(sampleCart);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "NH",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.0;
  const total = subtotal + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDemoModal(true);
  };

  return (
    <div className="grid-bg min-h-screen">
      {/* Demo Warning Banner */}
      <div className="bg-yellow-500/10 border-b border-yellow-500/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 text-yellow-500" />
          <p className="text-yellow-500 text-sm font-medium">
            This is a DEMO checkout. No real transactions will be processed. Built by{" "}
            <a
              href="https://mattyjacks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-yellow-400"
            >
              MattyJacks.com
            </a>
          </p>
        </div>
      </div>

      {/* Header */}
      <section className="hero-gradient pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="w-8 h-8 text-[#00ff6a]" />
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Check<span className="text-[#00ff6a]">out</span>
            </h1>
          </div>
          <p className="text-white/50 text-sm">
            Demo checkout - <Link href="/store" className="text-[#00ff6a] hover:underline">continue shopping</Link>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="w-16 h-16 text-white/10 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Your cart is empty</h2>
              <p className="text-white/40 mb-6">Add some products from the store to get started.</p>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 bg-[#00ff6a] text-black font-bold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,106,0.4)] transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse Store
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-lg font-bold text-white mb-4">
                  Cart Items ({cart.reduce((s, i) => s + i.qty, 0)})
                </h2>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-xl p-4 flex items-center gap-4 card-lift neon-border-hover"
                  >
                    <div className="w-16 h-16 bg-[hsl(120,10%,12%)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-sm truncate">{item.name}</h3>
                      <p className="text-[#00ff6a] font-bold text-lg">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5 text-white/60" />
                      </button>
                      <span className="text-white font-bold text-sm w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 text-white/60" />
                      </button>
                    </div>
                    <div className="text-white font-bold text-sm w-20 text-right">
                      ${(item.price * item.qty).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white/20 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Checkout Form */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#00ff6a]" />
                    Shipping & Payment
                  </h2>
                  <form onSubmit={handleCheckout} className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">Address</label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="123 Main St"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">City</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Salem"
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">State</label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          placeholder="NH"
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">ZIP</label>
                        <input
                          type="text"
                          required
                          value={formData.zip}
                          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                          placeholder="03079"
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-4 mt-4">
                      <p className="text-white/30 text-xs mb-4 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Demo - Do not enter real payment info
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-1">
                          <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">Card Number</label>
                          <input
                            type="text"
                            required
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                            placeholder="4242 4242 4242 4242"
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">Expiry</label>
                          <input
                            type="text"
                            required
                            value={formData.expiry}
                            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                            placeholder="12/28"
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-1.5">CVV</label>
                          <input
                            type="text"
                            required
                            value={formData.cvv}
                            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                            placeholder="123"
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#00ff6a] text-black font-bold py-4 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(0,255,106,0.4)] transition-all mt-4 flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-5 h-5" />
                      Place Order (Demo)
                    </button>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-[hsl(120,8%,8%)] border border-white/5 rounded-xl p-6 neon-box">
                  <h2 className="text-lg font-bold text-white mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-white/60 truncate pr-2">
                          {item.name} x{item.qty}
                        </span>
                        <span className="text-white font-medium">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Subtotal</span>
                      <span className="text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Tax (NH - 0%)</span>
                      <span className="text-white">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Shipping</span>
                      <span className="text-[#00ff6a] font-medium">Free</span>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-white font-bold text-lg">Total</span>
                      <span className="text-[#00ff6a] font-black text-2xl">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 bg-[#00ff6a]/5 border border-[#00ff6a]/20 rounded-lg p-3">
                    <p className="text-[#00ff6a]/80 text-xs font-medium text-center">
                      DEMO - No real charges will be made
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 text-center">
                    <p className="text-white/30 text-xs">
                      Built by{" "}
                      <a
                        href="https://mattyjacks.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00ff6a]/50 hover:text-[#00ff6a] transition-colors"
                      >
                        MattyJacks.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[hsl(120,8%,8%)] border border-[#00ff6a]/20 rounded-2xl p-8 max-w-md w-full neon-box animate-fade-in-up text-center">
            <div className="w-16 h-16 bg-[#00ff6a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#00ff6a]" />
            </div>
            <h2 className="text-2xl font-black text-white mb-2">Demo Order Placed!</h2>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              This is a <strong className="text-[#00ff6a]">demonstration website</strong> built by{" "}
              <a
                href="https://mattyjacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff6a] underline underline-offset-2"
              >
                MattyJacks.com
              </a>
              . No real order was placed and no payment was charged. This checkout experience is a demo showcasing what a real vape shop e-commerce site could look like.
            </p>

            <div className="bg-black/30 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Wind className="w-5 h-5 text-[#00ff6a]" />
                <span className="font-bold">
                  <span className="text-white">OUT</span>
                  <span className="text-[#00ff6a]">VAPE</span>
                </span>
              </div>
              <p className="text-white/40 text-xs">
                Want a real checkout system like this for your vape shop?
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://mattyjacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#00ff6a] text-black font-bold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,106,0.4)] transition-all"
              >
                Get Your Own Store - MattyJacks.com
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-white/40 hover:text-white text-sm transition-colors py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
