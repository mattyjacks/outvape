import { Shield, ArrowRight } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="grid-bg min-h-screen">
      {/* Header */}
      <section className="hero-gradient pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#00ff6a]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#00ff6a]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Privacy <span className="text-[#00ff6a]">Policy</span>
            </h1>
          </div>
          <p className="text-white/50 text-sm">
            Last updated: April 2025 - <span className="text-[#00ff6a]/60">Demo Site by MattyJacks.com</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[hsl(120,8%,8%)] border border-white/5 rounded-2xl p-8 sm:p-12 space-y-10">

            {/* Demo Notice */}
            <div className="bg-[#00ff6a]/5 border border-[#00ff6a]/20 rounded-xl p-6">
              <p className="text-[#00ff6a] font-bold text-sm mb-2">DEMO SITE NOTICE</p>
              <p className="text-white/60 text-sm leading-relaxed">
                This is a demonstration website built by{" "}
                <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-[#00ff6a] underline underline-offset-2">
                  MattyJacks.com
                </a>
                . No real products are sold, no real personal data is collected, and no real transactions are processed.
                This privacy policy is provided as part of the demo to show what a compliant vape shop website looks like.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                When you visit OutVape, we may collect the following types of information:
              </p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Personal Information:</strong> Name, email address, phone number, shipping address, and billing information when you create an account or make a purchase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Age Verification Data:</strong> Date of birth or government-issued ID information to verify you are of legal age (21+) to purchase nicotine products in accordance with federal and state law.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Browsing Data:</strong> IP address, browser type, device type, pages visited, time spent on pages, and referring URLs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Cookies & Tracking:</strong> We use cookies, pixels, and similar technologies for analytics and site functionality.</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span>To process and fulfill orders, including age verification as required by federal law (the PACT Act) and New Hampshire state regulations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span>To communicate with you about your orders, account, and promotional offers (with your consent).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span>To improve our website, products, and customer experience through analytics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span>To comply with legal obligations, including tax reporting and age verification requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span>To prevent fraud and unauthorized access to our services.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Age Verification</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                In compliance with the Prevent All Cigarette Trafficking (PACT) Act, the Federal Food, Drug, and Cosmetic Act as amended by the Family Smoking Prevention and Tobacco Control Act, and New Hampshire RSA 126-K, we are required to verify that all customers purchasing nicotine and tobacco products are at least 21 years of age. We use third-party age verification services and may require government-issued identification to complete this process. We do not sell nicotine or tobacco products to anyone under the age of 21.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Information Sharing & Disclosure</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Service Providers:</strong> Payment processors, shipping carriers, and age verification services that help us operate our business.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Hosting & Infrastructure:</strong> Our website is hosted on Vercel, a cloud platform that stores website data and serves content. Our domain is managed through Cloudflare, which provides DNS services and security features. Both Vercel and Cloudflare may process your data as part of providing these services. See their privacy policies for details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Legal Requirements:</strong> When required by law, court order, or governmental authority, including compliance with the PACT Act reporting requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption for all data transmission, secure payment processing through PCI-DSS compliant processors, and restricted access to personal data on a need-to-know basis. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Depending on your state of residence, you may have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Access:</strong> Request a copy of the personal data we hold about you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Correction:</strong> Request correction of inaccurate personal data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff6a] mt-0.5">-</span>
                  <span><strong className="text-white/70">Opt-Out:</strong> Opt out of marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.</span>
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Cookies</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. Essential cookies are required for site functionality (cart, login sessions). Analytics cookies help us understand how visitors use our site. You can control cookie preferences through your browser settings. Disabling certain cookies may limit site functionality.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Third-Party Links</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Our website may contain links to third-party websites, including{" "}
                <a href="https://mattyjacks.com" target="_blank" rel="noopener noreferrer" className="text-[#00ff6a] underline underline-offset-2">
                  MattyJacks.com
                </a>
                . We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">9. Children&apos;s Privacy</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Our website is not intended for individuals under the age of 21. We do not knowingly collect personal information from anyone under 21. If we become aware that we have collected data from a person under 21, we will take immediate steps to delete that information.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">10. Changes to This Policy</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of our website after changes constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">11. Contact Us</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                If you have questions about this privacy policy or your personal data, please contact us at:
              </p>
              <div className="mt-4 bg-black/30 rounded-xl p-4 text-sm text-white/50">
                <p className="font-semibold text-white/70">OutVape (Demo)</p>
                <p>Salem, NH 03079</p>
                <p>Email: demo@outvape.com (not real)</p>
                <p className="text-[#00ff6a]/50 mt-2 text-xs">This is a demo site - contact MattyJacks.com for inquiries</p>
              </div>
            </div>

            {/* Applicable Laws */}
            <div className="border-t border-white/5 pt-8">
              <h2 className="text-xl font-bold text-white mb-3">Applicable Laws & Regulations</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                This privacy policy is designed to comply with the following U.S. laws and regulations:
              </p>
              <ul className="space-y-1 text-white/50 text-xs">
                <li>- Federal Trade Commission Act (FTC Act)</li>
                <li>- Prevent All Cigarette Trafficking Act (PACT Act)</li>
                <li>- Family Smoking Prevention and Tobacco Control Act</li>
                <li>- Children&apos;s Online Privacy Protection Act (COPPA)</li>
                <li>- CAN-SPAM Act</li>
                <li>- California Consumer Privacy Act (CCPA) - for California residents</li>
                <li>- New Hampshire RSA 126-K (Youth Access to Tobacco Products)</li>
                <li>- New Hampshire RSA 359-C (Right to Privacy)</li>
              </ul>
            </div>

          </div>

          {/* MattyJacks CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/40 text-sm mb-4">
              Need a compliant website for your vape shop?
            </p>
            <a
              href="https://mattyjacks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00ff6a] text-black font-bold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,106,0.4)] transition-all"
            >
              Contact MattyJacks.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
