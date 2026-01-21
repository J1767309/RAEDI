/**
 * E-Blasts / Newsletter Archive Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Mail, Calendar, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'wouter';

const eblasts = [
  {
    title: "January 2026 Economic Update",
    date: "January 15, 2026",
    description: "Rochester's economic outlook for 2026, including job growth projections and major development updates.",
    link: "#"
  },
  {
    title: "December 2025 Year in Review",
    date: "December 20, 2025",
    description: "A look back at RAEDI's accomplishments and Rochester's economic highlights from 2025.",
    link: "#"
  },
  {
    title: "November 2025 Business Spotlight",
    date: "November 18, 2025",
    description: "Featuring local businesses making an impact in the Rochester community.",
    link: "#"
  },
  {
    title: "October 2025 DMC Update",
    date: "October 15, 2025",
    description: "Latest developments from the Destination Medical Center initiative.",
    link: "#"
  },
  {
    title: "September 2025 Workforce Report",
    date: "September 17, 2025",
    description: "Rochester workforce trends and employment data for Q3 2025.",
    link: "#"
  },
  {
    title: "August 2025 Small Business Resources",
    date: "August 20, 2025",
    description: "New programs and resources available for small businesses in the Rochester MSA.",
    link: "#"
  }
];

export default function EBlasts() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1920&h=1080&fit=crop"
            alt="Newsletter and email communications"
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
            E-Blasts Archive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Stay informed with our monthly economic development updates
          </motion.p>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 bg-[#D97B4A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-white">
              <Mail className="w-10 h-10" />
              <div>
                <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="text-white/80">Get the latest economic development news delivered to your inbox</p>
              </div>
            </div>
            <Link
              href="/newsletter"
              className="inline-block bg-white text-[#D97B4A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* E-Blasts Archive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Recent E-Blasts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our archive of monthly newsletters and economic updates. 
              Each e-blast contains valuable information about Rochester's business community.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {eblasts.map((eblast, index) => (
              <motion.a
                key={eblast.title}
                href={eblast.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {eblast.date}
                    </div>
                    <h3 className="text-xl font-bold text-[#1d3557] group-hover:text-[#D97B4A] transition-colors mb-2">
                      {eblast.title}
                    </h3>
                    <p className="text-gray-600">{eblast.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#D97B4A] transition-colors flex-shrink-0 mt-1" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Looking for older newsletters?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#D97B4A] font-semibold hover:underline"
            >
              <FileText className="w-5 h-5" />
              Contact us for archived editions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
