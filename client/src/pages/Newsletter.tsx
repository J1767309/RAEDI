/**
 * Newsletter Signup Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Mail, CheckCircle, Bell, FileText, Calendar, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

const benefits = [
  {
    icon: TrendingUp,
    title: "Economic Updates",
    description: "Monthly insights on Rochester's economic performance and business trends"
  },
  {
    icon: Calendar,
    title: "Event Announcements",
    description: "Be the first to know about networking events, workshops, and seminars"
  },
  {
    icon: FileText,
    title: "Reports & Data",
    description: "Access to quarterly reports, surveys, and economic data releases"
  },
  {
    icon: Bell,
    title: "Funding Opportunities",
    description: "Alerts about grants, loans, and incentive programs for businesses"
  }
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a newsletter service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1920&h=1080&fit=crop"
            alt="Newsletter subscription"
            className="w-full h-full object-cover hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1d3557]/60 via-[#1d3557]/40 to-[#1d3557]/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Join Our Newsletter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Stay connected with Rochester's economic development community
          </motion.p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-green-50 p-8 rounded-xl text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-[#1d3557] mb-4">Thank You!</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    You've been successfully subscribed to the RAEDI newsletter. 
                    Look for our next update in your inbox soon.
                  </p>
                  <Link
                    href="/"
                    className="inline-block bg-[#1d3557] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a4a6e] transition-colors"
                  >
                    Return to Homepage
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-[#1d3557] mb-6">Subscribe to Our Newsletter</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Fill out the form below to receive monthly economic development updates, 
                    event announcements, and business resources directly in your inbox.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-[#1d3557] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97B4A] focus:border-transparent outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-[#1d3557] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97B4A] focus:border-transparent outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1d3557] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97B4A] focus:border-transparent outline-none transition-all"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#1d3557] mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97B4A] focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c26a3d] transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Subscribe to Newsletter
                    </button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1d3557] mb-6">What You'll Receive</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#D97B4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#D97B4A]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1d3557] mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-bold text-[#1d3557] mb-3">Already Subscribed?</h3>
                <p className="text-gray-600 mb-4">
                  Check out our newsletter archive to catch up on past editions.
                </p>
                <Link
                  href="/e-blasts"
                  className="inline-flex items-center gap-2 text-[#D97B4A] font-semibold hover:underline"
                >
                  <FileText className="w-5 h-5" />
                  View E-Blast Archive
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
