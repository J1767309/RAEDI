/**
 * Real Estate / Site Selection Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Building, MapPin, Search, FileText, Users, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

const services = [
  {
    icon: Search,
    title: "Site Selection Assistance",
    description: "We help businesses identify and evaluate potential sites that meet their specific requirements for location, size, zoning, and infrastructure."
  },
  {
    icon: Building,
    title: "Property Database",
    description: "Access our comprehensive database of available commercial and industrial properties throughout the Rochester MSA."
  },
  {
    icon: FileText,
    title: "Market Analysis",
    description: "Receive detailed market analysis including demographics, traffic patterns, competition, and growth projections."
  },
  {
    icon: Users,
    title: "Broker Connections",
    description: "We connect you with qualified commercial real estate brokers who specialize in the Rochester market."
  }
];

const propertyTypes = [
  { type: "Office Space", description: "Class A, B, and C office buildings" },
  { type: "Industrial", description: "Manufacturing, warehouse, and distribution facilities" },
  { type: "Retail", description: "Storefronts, shopping centers, and mixed-use developments" },
  { type: "Land", description: "Developed and undeveloped parcels for new construction" },
  { type: "Flex Space", description: "Versatile spaces for office, light industrial, or R&D" },
  { type: "Medical", description: "Healthcare facilities and medical office buildings" }
];

export default function RealEstate() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Commercial real estate buildings"
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
            Real Estate & Site Selection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Find the perfect location for your business in the Rochester region
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Your Site Selection Partner</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Whether you're looking to relocate, expand, or start a new business, RAEDI provides 
                comprehensive site selection assistance at no cost. Our team works closely with 
                businesses to understand their needs and identify properties that match their requirements.
              </p>
              <Link
                href="/property-search"
                className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c26a3d] transition-colors"
              >
                <Search className="w-5 h-5" />
                Search Available Properties
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Our Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-14 h-14 bg-[#1d3557] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Property Types Available
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {propertyTypes.map((property, index) => (
              <motion.div
                key={property.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#D97B4A] transition-colors"
              >
                <h3 className="text-lg font-bold text-[#1d3557] mb-2">{property.type}</h3>
                <p className="text-gray-600 text-sm">{property.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <TrendingUp className="w-16 h-16 text-[#D97B4A] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Rochester Real Estate Market</h2>
            <p className="text-xl text-gray-300 mb-8">
              Rochester's commercial real estate market continues to grow, driven by the healthcare 
              industry, the Destination Medical Center initiative, and a diversifying economy. 
              The region offers competitive lease rates, quality infrastructure, and a business-friendly environment.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-[#D97B4A] mb-2">$15-25</div>
                <div className="text-gray-300">Avg. Office Rate/SF</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D97B4A] mb-2">5.2%</div>
                <div className="text-gray-300">Office Vacancy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D97B4A] mb-2">2.5M+</div>
                <div className="text-gray-300">SF Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#D97B4A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapPin className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Location?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team today for personalized site selection assistance. 
              We'll help you find the perfect property for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/property-search"
                className="inline-block bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Search Properties
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
