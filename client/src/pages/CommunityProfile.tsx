/**
 * Community Profile Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Download, Users, Building2, GraduationCap, Briefcase, MapPin, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

const profileSections = [
  {
    icon: Users,
    title: "Demographics",
    stats: [
      { label: "MSA Population", value: "230,000+" },
      { label: "Median Age", value: "35.8 years" },
      { label: "Population Growth (5yr)", value: "+8.2%" }
    ]
  },
  {
    icon: Briefcase,
    title: "Employment",
    stats: [
      { label: "Labor Force", value: "125,000+" },
      { label: "Unemployment Rate", value: "2.8%" },
      { label: "Median Household Income", value: "$78,500" }
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    stats: [
      { label: "Bachelor's Degree+", value: "42%" },
      { label: "High School Diploma+", value: "95%" },
      { label: "K-12 Students", value: "18,000+" }
    ]
  },
  {
    icon: Building2,
    title: "Business",
    stats: [
      { label: "Total Businesses", value: "8,500+" },
      { label: "Major Employers", value: "50+" },
      { label: "New Businesses (Annual)", value: "400+" }
    ]
  }
];

const keyIndustries = [
  { name: "Healthcare", percentage: 35 },
  { name: "Retail Trade", percentage: 12 },
  { name: "Education", percentage: 10 },
  { name: "Manufacturing", percentage: 8 },
  { name: "Professional Services", percentage: 8 },
  { name: "Other", percentage: 27 }
];

export default function CommunityProfile() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rochester-sunset.jpg"
            alt="Rochester Minnesota community"
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
            Community Profile
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Comprehensive data about the Rochester Metropolitan Statistical Area
          </motion.p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 bg-[#D97B4A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-white">
              <MapPin className="w-10 h-10" />
              <div>
                <h2 className="text-2xl font-bold">Rochester MSA Community Profile</h2>
                <p className="text-white/80">Download our comprehensive community data book</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#D97B4A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Rochester at a Glance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key statistics about the Rochester Metropolitan Statistical Area, 
              including Olmsted, Dodge, Fillmore, and Wabasha counties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profileSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center mb-4">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{stat.label}</span>
                      <span className="font-bold text-[#D97B4A]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Employment by Industry</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Rochester's economy is anchored by the healthcare industry, with Mayo Clinic 
                as the region's largest employer. However, the economy continues to diversify 
                with growth in technology, manufacturing, and professional services.
              </p>
              <Link
                href="/industries"
                className="inline-block bg-[#D97B4A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c26a3d] transition-colors"
              >
                Explore Industries
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {keyIndustries.map((industry, index) => (
                <div key={industry.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-[#1d3557]">{industry.name}</span>
                    <span className="text-gray-600">{industry.percentage}%</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${industry.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-[#1d3557] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Trends */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <TrendingUp className="w-16 h-16 text-[#D97B4A] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Growing Community</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Rochester continues to experience strong growth, driven by the Destination Medical Center 
              initiative and a diversifying economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#D97B4A] mb-2">$5.6B</div>
              <div className="text-white">DMC Investment Target</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#D97B4A] mb-2">35,000</div>
              <div className="text-white">New Jobs Projected</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#D97B4A] mb-2">2034</div>
              <div className="text-white">DMC Timeline</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Data CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Need More Information?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team can provide additional data, customized reports, and site selection 
              assistance for businesses considering the Rochester area.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1d3557] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a4a6e] transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
