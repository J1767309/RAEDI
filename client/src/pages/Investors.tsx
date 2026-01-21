/**
 * RAEDI Investors Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with transparent nav overlay, straight edge
 */

import { motion } from "framer-motion";
import { Building2, Users, Handshake, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const investorCategories = [
  {
    title: "Platinum Investors",
    companies: [
      "Mayo Clinic",
      "Rochester Public Utilities",
      "Olmsted County",
      "City of Rochester"
    ]
  },
  {
    title: "Gold Investors",
    companies: [
      "Associated Bank",
      "Think Bank",
      "Merchants Bank",
      "U.S. Bank",
      "Custom Alarm",
      "Peoples Energy Cooperative"
    ]
  },
  {
    title: "Silver Investors",
    companies: [
      "Benike Construction",
      "Express Personnel Services",
      "Realty Growth, Inc.",
      "Xylo Technologies, Inc.",
      "Gar-Lin Dairy Farms",
      "Dulap & Seeger"
    ]
  },
  {
    title: "Community Investors",
    companies: [
      "City of Byron",
      "City of Chatfield",
      "City of Kasson",
      "City of Oronoco",
      "City of Pine Island",
      "City of Stewartville"
    ]
  }
];

const benefits = [
  {
    icon: Building2,
    title: "Economic Growth",
    description: "Support initiatives that drive $2+ billion in local economic activity"
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Help create thousands of jobs and strengthen the Rochester area economy"
  },
  {
    icon: Handshake,
    title: "Business Network",
    description: "Connect with other business leaders committed to regional prosperity"
  },
  {
    icon: TrendingUp,
    title: "Strategic Influence",
    description: "Shape economic development priorities and initiatives"
  }
];

export default function Investors() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-business-growth.jpg"
            alt="RAEDI Investors"
            className="w-full h-full object-cover hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d3557]/80 to-[#1d3557]/40" />
        </div>
        <div className="relative z-10 container h-full flex flex-col justify-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#D97B4A] text-white px-4 py-2 text-sm font-semibold rounded mb-6">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              RAEDI Investors
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Our investors are the backbone of economic development in the Rochester area, 
              providing the resources needed to grow and diversify our regional economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investor Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Why Invest in RAEDI?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RAEDI investors play a crucial role in shaping the economic future of the Rochester area. 
              Your investment directly supports programs that help businesses grow and create jobs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D97B4A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#D97B4A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Categories */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Our Valued Investors
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We thank our investors for their commitment to economic development in the Rochester area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {investorCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-[#D97B4A] mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.companies.map((company) => (
                    <li key={company} className="text-white/90 flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#D97B4A] rounded-full" />
                      {company}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become an Investor CTA */}
      <section className="py-20 bg-[#D97B4A]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Become a RAEDI Investor
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join the businesses and organizations that are investing in the future of the Rochester area economy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
