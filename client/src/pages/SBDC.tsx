/**
 * SBDC Page - Small Business Development Center
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Lightbulb, Users, FileText, TrendingUp, DollarSign, Target, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Lightbulb,
    title: "Business Planning",
    description: "Get expert guidance on developing comprehensive business plans that attract investors and guide your growth strategy."
  },
  {
    icon: DollarSign,
    title: "Financial Analysis",
    description: "Receive assistance with financial projections, cash flow analysis, and understanding your business financials."
  },
  {
    icon: Target,
    title: "Marketing Strategy",
    description: "Develop effective marketing plans to reach your target customers and grow your market share."
  },
  {
    icon: FileText,
    title: "Access to Capital",
    description: "Navigate funding options including SBA loans, grants, and other financing programs available to small businesses."
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description: "Work with experienced advisors to identify opportunities and overcome challenges as your business scales."
  },
  {
    icon: Users,
    title: "Training & Workshops",
    description: "Participate in educational programs covering essential business topics from accounting to digital marketing."
  }
];

export default function SBDC() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-business-growth.jpg"
            alt="Small Business Development Center"
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
              Small Business Development Center
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Free, confidential business consulting to help you start, grow, and succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About SBDC */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
                Your Partner in Business Success
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Small Business Development Center (SBDC) at RAEDI provides free, confidential 
                consulting services to small businesses and entrepreneurs in the Rochester area. 
                Our experienced advisors help you navigate the challenges of starting and growing 
                a successful business.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're launching a new venture, expanding an existing business, or seeking 
                funding, the SBDC is here to help you achieve your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-[#1d3557] mb-6">Contact SBDC</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Location</p>
                    <p className="text-gray-600">220 South Broadway, Suite 100<br />Rochester, MN 55904</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Phone</p>
                    <p className="text-gray-600">507.288.0208</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Email</p>
                    <p className="text-gray-600">sbdc@raedi.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The SBDC offers a comprehensive range of services to help small businesses 
              at every stage of development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#D97B4A]/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#D97B4A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Schedule a free consultation with an SBDC advisor today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
