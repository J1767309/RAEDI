/**
 * Utilities Page - What We Do Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Zap, Flame, Droplets, Factory, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const utilityProviders = [
  {
    name: "Rochester Public Utilities",
    type: "Electric & Water",
    description: "Provides reliable electricity and water services to Rochester and surrounding areas."
  },
  {
    name: "Peoples Energy Cooperative",
    type: "Natural Gas",
    description: "Delivers natural gas to residential and commercial customers throughout the region."
  },
  {
    name: "Xcel Energy",
    type: "Electric & Gas",
    description: "Major utility provider serving portions of the Rochester MSA."
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Sales Tax Exemption",
    description: "Minnesota exempts energy used in manufacturing from sales tax, including natural gas, electricity, and other utilities."
  },
  {
    icon: Zap,
    title: "Reliable Power Grid",
    description: "Rochester's power infrastructure is designed for reliability with redundant systems and modern grid technology."
  },
  {
    icon: Factory,
    title: "Industrial Rates",
    description: "Competitive industrial utility rates help manufacturers maintain cost-effective operations."
  },
  {
    icon: Droplets,
    title: "Water Resources",
    description: "Abundant water supply from deep aquifers ensures reliable access for industrial and commercial needs."
  }
];

export default function Utilities() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-manufacturing.jpg"
            alt="Utilities Infrastructure"
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
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Utilities
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Minnesota is one of the few states to exempt energy used in the manufacturing 
              process from sales tax, providing bottom-line savings to heavy energy users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Utility Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Rochester area offers competitive utility rates and tax advantages 
              that benefit businesses of all sizes.
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

      {/* Utility Providers */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Utility Providers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Rochester area is served by reliable utility providers committed to 
              supporting business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {utilityProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1d3557]">{provider.name}</h3>
                    <p className="text-[#D97B4A] font-semibold text-sm">{provider.type}</p>
                  </div>
                </div>
                <p className="text-gray-600">{provider.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Learn More About Business Resources
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover all the resources available to help your business thrive in the Rochester area.
            </p>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              Explore What We Do
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
