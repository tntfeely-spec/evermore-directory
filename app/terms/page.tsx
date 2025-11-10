'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TermsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/Ocean_Image.png)' }}>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/EVERMORE_LOGO.png" alt="Evermore" className="h-10 w-auto" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition">About Us</Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-teal-600 font-medium transition">How It Works</Link>
              <Link href="/resources" className="text-gray-700 hover:text-teal-600 font-medium transition">Resources</Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">About Us</Link>
              <Link href="/how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">How It Works</Link>
              <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Resources</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> November 7, 2024
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to Evermore Directory. By accessing or using our website, mobile application, or services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and Evermore Directory ("Company," "we," "us," or "our"). We reserve the right to modify these Terms at any time. Your continued use of the Services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Services</h2>
              <p>
                Evermore Directory provides an online directory of funeral homes and related services across the United States. Our Services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Searchable database of funeral home listings</li>
                <li>Contact information and service details for funeral homes</li>
                <li>Educational resources about funeral planning</li>
                <li>Tools to compare funeral home offerings</li>
                <li>Featured listing opportunities for funeral service providers</li>
              </ul>
              <p>
                We act solely as a directory service and information resource. We do not provide funeral services, legal advice, or financial planning services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Eligibility</h3>
              <p>
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.2 Account Security</h3>
              <p>
                If you create an account, you are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Keep your account information current</li>
                <li>Maintain the security of your password</li>
                <li>Notify us immediately of unauthorized use</li>
                <li>Be responsible for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.3 Prohibited Uses</h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Services for any unlawful purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Harvest or collect user information</li>
                <li>Impersonate any person or entity</li>
                <li>Post false, misleading, or defamatory content</li>
                <li>Engage in any automated use of the system</li>
                <li>Use the Services to spam or send unsolicited communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Listings and Information</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Accuracy of Information</h3>
              <p>
                We strive to provide accurate and up-to-date information about funeral homes in our directory. However, we do not guarantee the accuracy, completeness, or reliability of any information on the Services. Funeral homes are responsible for the accuracy of their own listings.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.2 No Endorsement</h3>
              <p>
                The inclusion of a funeral home in our directory does not constitute an endorsement or recommendation by Evermore Directory. We are not responsible for the quality, reliability, or conduct of any funeral home or service provider listed on our platform.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.3 Third-Party Content</h3>
              <p>
                Our Services may contain content provided by third parties. We are not responsible for third-party content and do not endorse any opinions expressed by third parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.4 Verification</h3>
              <p>
                You should independently verify all information before making decisions. We recommend contacting funeral homes directly to confirm services, pricing, and availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Ownership</h3>
              <p>
                All content on the Services, including text, graphics, logos, images, software, and design elements, is owned by or licensed to Evermore Directory and is protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.2 Limited License</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to access and use the Services for personal, non-commercial purposes. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reproduce, distribute, or publicly display our content</li>
                <li>Modify or create derivative works</li>
                <li>Use our content for commercial purposes</li>
                <li>Remove copyright or proprietary notices</li>
                <li>Use automated tools to access or scrape our content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.3 Trademarks</h3>
              <p>
                "Evermore Directory" and associated logos are trademarks of our company. You may not use our trademarks without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. User-Generated Content</h2>
              <p>
                If you submit content to our Services (such as reviews, comments, or feedback), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display that content. You represent that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You own or have rights to the content you submit</li>
                <li>Your content does not violate any laws or third-party rights</li>
                <li>Your content is accurate and not misleading</li>
                <li>Your content does not contain confidential information</li>
              </ul>
              <p>
                We reserve the right to remove any content that violates these Terms or that we find objectionable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Privacy</h2>
              <p>
                Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Disclaimers</h2>
              
              <p className="uppercase font-semibold">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties regarding accuracy, reliability, or availability</li>
                <li>Warranties that the Services will be uninterrupted or error-free</li>
                <li>Warranties regarding security or absence of viruses</li>
              </ul>

              <p className="mt-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Services will meet your requirements</li>
                <li>The information provided is accurate or complete</li>
                <li>Any errors will be corrected</li>
                <li>The Services are free from harmful components</li>
              </ul>

              <p className="mt-4 font-semibold">
                YOU ASSUME ALL RISKS ASSOCIATED WITH USING THE SERVICES AND ENGAGING WITH FUNERAL HOMES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
              
              <p className="uppercase font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EVERMORE DIRECTORY AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Personal injury or property damage</li>
                <li>Costs of substitute services</li>
                <li>Any damages arising from your use of or inability to use the Services</li>
                <li>Any actions or services of funeral homes or third parties</li>
              </ul>

              <p className="mt-4 uppercase font-semibold">
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS SHALL NOT EXCEED $100 OR THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, WHICHEVER IS GREATER.
              </p>

              <p className="mt-4">
                Some jurisdictions do not allow certain disclaimers or limitations of liability, so some of the above may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Evermore Directory and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any laws or third-party rights</li>
                <li>Your content or submissions</li>
                <li>Your interactions with funeral homes or other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Links to Third-Party Websites</h2>
              <p>
                Our Services may contain links to third-party websites. These links are provided for convenience only. We do not control or endorse third-party websites and are not responsible for their content, privacy practices, or terms. Your use of third-party websites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Payments and Refunds</h2>
              <p>
                If you purchase premium services or featured listings, payment terms will be specified at the time of purchase. Unless otherwise stated:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are non-refundable</li>
                <li>You authorize us to charge your payment method</li>
                <li>Prices are subject to change</li>
                <li>You are responsible for all applicable taxes</li>
                <li>Subscription services auto-renew unless cancelled</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Termination</h2>
              <p>
                We may suspend or terminate your access to the Services at any time, with or without cause, with or without notice. You may stop using the Services at any time. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your right to use the Services immediately ceases</li>
                <li>We may delete your account and content</li>
                <li>Provisions that by nature should survive will continue to apply</li>
              </ul>
              <p>
                We are not liable for any damages resulting from termination of your access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">14.1 Informal Resolution</h3>
              <p>
                Before filing a claim, you agree to contact us to attempt to resolve the dispute informally. Contact us at legal@evermoredirectory.com with a description of your claim.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.2 Arbitration</h3>
              <p>
                Any dispute arising from these Terms or the Services shall be resolved through binding arbitration rather than in court, except you may assert claims in small claims court. Arbitration will be conducted by a neutral arbitrator in accordance with the rules of the American Arbitration Association.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.3 Class Action Waiver</h3>
              <p>
                You agree to resolve disputes with us only on an individual basis and waive your right to participate in class actions or class arbitrations.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.4 Governing Law</h3>
              <p>
                These Terms are governed by the laws of [Your State], without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">15. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.1 Entire Agreement</h3>
              <p>
                These Terms, along with our Privacy Policy, constitute the entire agreement between you and Evermore Directory.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">15.2 Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">15.3 Waiver</h3>
              <p>
                Our failure to enforce any right or provision is not a waiver of that right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">15.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms without our consent. We may assign these Terms without restriction.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">15.5 Force Majeure</h3>
              <p>
                We are not liable for delays or failures due to circumstances beyond our reasonable control.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">15.6 Notices</h3>
              <p>
                Notices to you may be made via email or through the Services. Notices to us should be sent to legal@evermoredirectory.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">16. Contact Information</h2>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
                <p className="font-semibold text-gray-800 mb-2">Evermore Directory</p>
                <p>Email: legal@evermoredirectory.com</p>
                <p>Phone: 1-800-EVERMORE</p>
                <p>Mailing Address: [Company Address]</p>
              </div>
            </section>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <p className="font-semibold text-gray-800 mb-2">Important Notice:</p>
              <p className="text-gray-700">
                By using Evermore Directory, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our Services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/privacy"
            className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Privacy Policy</h3>
            <p className="text-gray-600">Learn how we protect your data</p>
          </Link>
          <Link 
            href="/contact"
            className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-600">Have questions? Get in touch</p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Evermore Directory</h3>
              <p className="text-gray-400">Your trusted resource for finding compassionate funeral care nationwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/search" className="text-gray-400 hover:text-white transition">Search</Link></li>
                <li><Link href="/states" className="text-gray-400 hover:text-white transition">Browse by State</Link></li>
                <li><Link href="/featured-listing" className="text-gray-400 hover:text-white transition">Featured Listings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-white transition">Planning Resources</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Evermore Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
