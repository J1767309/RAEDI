/**
 * DMC Page - Destination Medical Center
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Building, Heart, DollarSign, Users, MapPin, TrendingUp, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const stats = [
  { value: "$5.6B", label: "Total Investment", icon: DollarSign },
  { value: "30,000+", label: "New Jobs", icon: Users },
  { value: "20", label: "Year Initiative", icon: TrendingUp },
  { value: "6", label: "Development Districts", icon: MapPin }
];

const districts = [
  {
    name: "Heart of the City",
    description: "Downtown Rochester's core district featuring mixed-use development, retail, and entertainment venues."
  },
  {
    name: "Discovery Square",
    description: "Innovation hub connecting Mayo Clinic research with entrepreneurs and technology companies."
  },
  {
    name: "St. Marys Place",
    description: "Healthcare-focused district near St. Marys Hospital with medical offices and patient services."
  },
  {
    name: "Central Station",
    description: "Transit-oriented development district with connections to regional transportation networks."
  },
  {
    name: "UMR/Recreation",
    description: "Education and recreation district anchored by University of Minnesota Rochester."
  },
  {
    name: "Downtown Waterfront",
    description: "Riverfront development along the Zumbro River with parks, trails, and mixed-use spaces."
  }
];

export default function DMC() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rochester-sunset.jpg"
            alt="Destination Medical Center"
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
              Destination Medical Center
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              A bold 20-year economic development initiative to position Rochester as the 
              world's premier destination for health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#D97B4A]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-white/80 mx-auto mb-4" />
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About DMC */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
                Transforming Rochester
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Destination Medical Center (DMC) is a unique partnership between Mayo Clinic, 
                the State of Minnesota, and the City of Rochester. This 20-year, $5.6 billion 
                economic development initiative is designed to position Rochester as the world's 
                premier destination for health and wellness.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                DMC will create more than 30,000 new jobs, generate billions in economic activity, 
                and transform downtown Rochester into a vibrant, walkable urban center with 
                world-class amenities.
              </p>
              <a
                href="https://dmc.mn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D97B4A] font-semibold hover:gap-3 transition-all"
              >
                Visit DMC Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/hero-healthcare.jpg"
                alt="DMC Development"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Districts */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Development Districts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DMC is organized into six distinct development districts, each with its own 
              character and focus areas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districts.map((district, index) => (
              <motion.div
                key={district.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{district.name}</h3>
                <p className="text-gray-600">{district.description}</p>
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
              Be Part of Rochester's Transformation
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Explore opportunities to invest, develop, or locate your business in the 
              DMC development area.
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
