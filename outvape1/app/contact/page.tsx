"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="grid-bg min-h-screen">
      {/* Header */}
      <section className="hero-gradient pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#00ff6a]/10 rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#00ff6a]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Get in <span className="text-[#00ff6a]">Touch</span>
            </h1>
          </div>
          <p className="text-white/50">
            Questions about our products? Want to partner with us? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email */}
              <div className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-2xl p-6 card-lift neon-border-hover neon-box-hover">
                <div className="w-12 h-12 bg-[#00ff6a]/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#00ff6a]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                <a
                  href="mailto:Matt@MattyJacks.com"
                  className="text-[#00ff6a] hover:text-white transition-colors font-medium break-all"
                >
                  Matt@MattyJacks.com
                </a>
                <p className="text-white/40 text-sm mt-2">
                  We typically respond within 24 hours.
                </p>
              </div>

              {/* Phone */}
              <div className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-2xl p-6 card-lift neon-border-hover neon-box-hover">
                <div className="w-12 h-12 bg-[#00ff6a]/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#00ff6a]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
                <a
                  href="tel:603-999-9420"
                  className="text-[#00ff6a] hover:text-white transition-colors font-medium text-lg"
                >
                  603-999-9420
                </a>
                <p className="text-white/40 text-sm mt-2">
                  Mon-Fri: 9am - 5pm EST
                </p>
              </div>

              {/* Location */}
              <div className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-2xl p-6 card-lift neon-border-hover neon-box-hover">
                <div className="w-12 h-12 bg-[#00ff6a]/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#00ff6a]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Location</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Salem, NH 03079
                  <br />
                  <span className="text-white/40 text-xs mt-1 block">
                    (Demo - address not real)
                  </span>
                </p>
              </div>

              {/* MattyJacks Info */}
              <div className="bg-gradient-to-br from-[#00ff6a]/10 to-transparent border border-[#00ff6a]/20 rounded-2xl p-6">
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  OutVape is a demo site built by <strong className="text-white">MattyJacks.com</strong>, a
                  full-service agency specializing in e-commerce websites for vape shops and retail businesses.
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

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-2xl p-8 neon-box">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-[#00ff6a]/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-[#00ff6a]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/50 max-w-sm">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible at the email or
                      phone number you provided.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 focus:ring-1 focus:ring-[#00ff6a]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 focus:ring-1 focus:ring-[#00ff6a]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(603) 999-9420"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 focus:ring-1 focus:ring-[#00ff6a]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is this about?"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 focus:ring-1 focus:ring-[#00ff6a]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-white/50 text-xs font-medium uppercase tracking-wider block mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you're thinking..."
                        rows={6}
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ff6a]/40 focus:ring-1 focus:ring-[#00ff6a]/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#00ff6a] text-black font-bold py-4 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(0,255,106,0.4)] transition-all"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Demo Notice */}
              <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white/40 text-xs leading-relaxed">
                  <strong className="text-white/60">Demo Site Notice:</strong> This contact form is for demonstration
                  purposes. For real inquiries about OutVape or to discuss building a custom vape shop website,
                  contact{" "}
                  <a
                    href="https://mattyjacks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ff6a]/50 hover:text-[#00ff6a] transition-colors"
                  >
                    MattyJacks.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Frequently Asked <span className="text-[#00ff6a]">Questions</span>
            </h2>
            <p className="text-white/50">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the OutVape System?",
                a: "The OutVape System is a semi-disposable vape with a permanent battery and LCD display. You purchase the device once, then buy pre-filled coil meshes with your preferred nicotine strength (0%, 2%, or 5%) and size.",
              },
              {
                q: "What nicotine strengths are available?",
                a: "We offer three nicotine levels: 0% (nicotine-free), 2% (moderate), and 5% (high). Each is available in Standard, Large, and XL coil sizes.",
              },
              {
                q: "How long does a coil mesh last?",
                a: "Coil mesh lifespan depends on usage, but typically they last 1-2 weeks with regular use. You'll notice a decrease in flavor when it's time to replace.",
              },
              {
                q: "Is this a real store?",
                a: "This is a demo website built by MattyJacks.com to showcase what a professional vape shop e-commerce site looks like. No real products are sold here.",
              },
              {
                q: "Can I get a custom website like this?",
                a: "Yes! MattyJacks.com builds custom e-commerce websites for vape shops and other retail businesses. Contact Matt@MattyJacks.com or call 603-999-9420 to discuss your project.",
              },
              {
                q: "What payment methods do you accept?",
                a: "This is a demo site, so no real payments are processed. A real OutVape store would accept all major credit cards, PayPal, and other modern payment methods.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-xl p-6 card-lift neon-border-hover"
              >
                <h3 className="text-white font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
