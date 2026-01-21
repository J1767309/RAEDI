/**
 * RAEDI Foundation Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Heart, Users, Building2, GraduationCap, DollarSign } from 'lucide-react';
import { Link } from 'wouter';

const initiatives = [
  {
    icon: GraduationCap,
    title: "Workforce Development",
    description: "Supporting education and training programs that prepare our workforce for high-demand careers in healthcare, technology, and manufacturing."
  },
  {
    icon: Building2,
    title: "Small Business Support",
    description: "Providing grants and resources to help entrepreneurs start and grow their businesses in the Rochester region."
  },
  {
    icon: Users,
    title: "Community Investment",
    description: "Investing in projects that enhance quality of life and make Rochester an attractive place to live and work."
  },
  {
    icon: Heart,
    title: "Charitable Giving",
    description: "Supporting local nonprofits and community organizations that strengthen our regional economy."
  }
];

const impactStats = [
  { value: "$2M+", label: "Grants Awarded" },
  { value: "150+", label: "Businesses Supported" },
  { value: "500+", label: "Jobs Created" },
  { value: "25+", label: "Years of Impact" }
];

export default function Foundation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop"
            alt="Community support and giving"
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
            RAEDI Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Investing in our community's future through strategic philanthropy
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The RAEDI Foundation is the charitable arm of Rochester Area Economic Development, Inc. 
                We support initiatives that strengthen the regional economy, develop our workforce, 
                and enhance the quality of life in the Rochester Metropolitan Statistical Area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-[#1d3557] mb-4">About the Foundation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established to provide a vehicle for charitable giving that supports economic development 
                in our region, the RAEDI Foundation works alongside RAEDI's core programs to maximize 
                impact in our community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Foundation accepts tax-deductible contributions from individuals, businesses, and 
                organizations that share our commitment to building a vibrant, diverse economy in 
                Southeast Minnesota.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#D97B4A] mb-2">{stat.value}</div>
                <div className="text-white text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Our Focus Areas
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-14 h-14 bg-[#D97B4A]/10 rounded-lg flex items-center justify-center mb-6">
                  <initiative.icon className="w-7 h-7 text-[#D97B4A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 bg-[#D97B4A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DollarSign className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Support Our Mission</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your tax-deductible contribution to the RAEDI Foundation helps us invest in 
              workforce development, small business support, and community initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Make a Donation
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
