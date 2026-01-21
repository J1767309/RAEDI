/**
 * Eyota Community Page
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { MapPin, Users, Building, GraduationCap, TreePine, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const stats = [
  { value: "6,000+", label: "Population", icon: Users },
  { value: "15 min", label: "To Rochester", icon: MapPin },
  { value: "A+", label: "School Rating", icon: GraduationCap },
  { value: "Growing", label: "Economy", icon: Building }
];

export default function Eyota() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-community.jpg"
            alt="Eyota, Minnesota"
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
              Rochester MSA Communities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Eyota
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              A growing community just minutes from Rochester, offering excellent schools, 
              affordable housing, and small-town charm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#D97B4A]">
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
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
                About Eyota
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Eyota is a thriving community located just 10 miles west of Rochester on 
                Highway 14. Known for its excellent school system and family-friendly 
                atmosphere, Eyota has experienced significant growth in recent years.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The city offers a perfect balance of small-town living with easy access 
                to Rochester's employment opportunities, healthcare, and amenities. 
                Eyota's growing commercial district provides local shopping and services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TreePine className="w-6 h-6 text-[#D97B4A]" />
                  <span className="text-gray-700">Beautiful parks and recreational facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-[#D97B4A]" />
                  <span className="text-gray-700">Award-winning Eyota Public Schools</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-[#D97B4A]" />
                  <span className="text-gray-700">Growing business community</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold text-[#1d3557] mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">County</span>
                  <span className="font-semibold text-[#1d3557]">Olmsted</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Distance to Rochester</span>
                  <span className="font-semibold text-[#1d3557]">10 miles</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">School District</span>
                  <span className="font-semibold text-[#1d3557]">Eyota Public Schools</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Major Highway</span>
                  <span className="font-semibold text-[#1d3557]">US Highway 14</span>
                </div>
              </div>
            </motion.div>
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
              Explore More Communities
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover all the communities that make up the Rochester MSA.
            </p>
            <Link
              href="/communities"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              View All Communities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
