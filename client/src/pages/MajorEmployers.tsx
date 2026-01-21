/**
 * Major Employers Page - What We Do Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Building2, Heart, Factory, Cpu, GraduationCap, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const employers = [
  {
    name: "Mayo Clinic",
    employees: "40,000+",
    industry: "Healthcare",
    description: "World-renowned medical center and the largest employer in Rochester, providing healthcare, research, and education."
  },
  {
    name: "IBM",
    employees: "2,500+",
    industry: "Technology",
    description: "Major technology company with significant operations in Rochester, focusing on software development and IT services."
  },
  {
    name: "Olmsted Medical Center",
    employees: "2,000+",
    industry: "Healthcare",
    description: "Regional healthcare provider offering comprehensive medical services to the Rochester area."
  },
  {
    name: "Rochester Public Schools",
    employees: "3,000+",
    industry: "Education",
    description: "Public school district serving Rochester and surrounding communities with quality K-12 education."
  },
  {
    name: "Crenlo",
    employees: "500+",
    industry: "Manufacturing",
    description: "Leading manufacturer of custom metal enclosures and operator cabs for heavy equipment."
  },
  {
    name: "Think Bank",
    employees: "300+",
    industry: "Financial Services",
    description: "Regional bank providing personal and business banking services throughout southeastern Minnesota."
  }
];

const industries = [
  { icon: Heart, name: "Healthcare", percentage: 45 },
  { icon: Cpu, name: "Technology", percentage: 15 },
  { icon: Factory, name: "Manufacturing", percentage: 12 },
  { icon: GraduationCap, name: "Education", percentage: 10 },
  { icon: ShoppingBag, name: "Retail & Services", percentage: 18 }
];

export default function MajorEmployers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-business-growth.jpg"
            alt="Major Employers"
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
              Major Employers
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Rochester's diverse economy is built around healthcare, technology, 
              manufacturing, food processing, and convention and tourism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16 bg-[#1d3557]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 font-display">
              Employment by Industry
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <industry.icon className="w-10 h-10 text-[#D97B4A]" />
                </div>
                <p className="text-2xl font-bold text-white">{industry.percentage}%</p>
                <p className="text-white/70 text-sm">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employers List */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Top Employers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These leading organizations drive economic growth and provide thousands of 
              jobs in the Rochester area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employers.map((employer, index) => (
              <motion.div
                key={employer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-[#D97B4A]/10 text-[#D97B4A] px-3 py-1 rounded-full text-sm font-semibold">
                    {employer.employees}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-2">{employer.name}</h3>
                <p className="text-[#D97B4A] font-semibold text-sm mb-3">{employer.industry}</p>
                <p className="text-gray-600">{employer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Join Rochester's Growing Economy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you're expanding or relocating, RAEDI can help you connect with 
              the resources you need to succeed.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
