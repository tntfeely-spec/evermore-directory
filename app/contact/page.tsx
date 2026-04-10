'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0" style={{ backgroundImage: 'url(/Ocean_Image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.4 }} />
      <div className="relative z-10">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We are here to help. Reach out with any questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

              {submitted && (
                <div className="mb-6 bg-slate-50 border border-slate-200 text-slate-800 px-4 py-3 rounded-lg">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="listing">Listing Information</option>
                    <option value="business">Business/Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <a href="mailto:listings@funeralhomedirectories.com" className="text-slate-600 hover:text-slate-700 font-medium">
                        listings@funeralhomedirectories.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Response Time</h3>
                      <p className="text-gray-600">Within 24 hours</p>
                      <p className="text-sm text-gray-500 mt-1">Most inquiries answered same day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Inquiries */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Business Inquiries</h2>
                <p className="mb-6">
                  Interested in listing your funeral home or exploring partnership opportunities?
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Featured listing opportunities</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Partnership programs</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Advertising options</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Custom solutions</span></li>
                </ul>
                <Link
                  href="/featured-listing"
                  className="inline-block bg-white text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Learn More About Featured Listings
                </Link>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                <p className="text-gray-600 mb-4">
                  Looking for quick answers? Check out our blog for helpful guides and planning information.
                </p>
                <Link
                  href="/blog"
                  className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  View Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
