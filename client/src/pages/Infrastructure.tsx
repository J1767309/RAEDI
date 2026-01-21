/**
 * Infrastructure Page - What We Do Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Plane, Train, Truck, Building, Wifi, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const transportModes = [
  {
    icon: Plane,
    title: "Rochester International Airport",
    description: "Direct flights to major hubs including Chicago, Minneapolis, and other destinations. The airport serves over 100,000 passengers annually and offers convenient access for business travelers."
  },
  {
    icon: Truck,
    title: "Highway Access",
    description: "Rochester is served by US Highways 52, 63, and 14, as well as Interstate 90, providing excellent connectivity to Minneapolis-St. Paul, Chicago, and other major markets."
  },
  {
    icon: Train,
    title: "Rail Service",
    description: "Freight rail service is provided by Canadian Pacific Railway and Union Pacific Railroad, offering efficient transportation for manufacturing and distribution operations."
  }
];

const infrastructure = [
  {
    title: "Regional Transportation Hub",
    description: "The Rochester MSA serves as a regional transportation hub serving southeastern Minnesota, northern Iowa, and western Wisconsin with vital road, rail, and air service links to national and foreign destinations."
  },
  {
    title: "Modern Telecommunications",
    description: "High-speed fiber optic networks and 5G wireless coverage ensure businesses have access to cutting-edge telecommunications infrastructure for their operations."
  },
  {
    title: "Utility Infrastructure",
    description: "Reliable electric, natural gas, and water utilities support industrial and commercial operations with competitive rates and excellent service reliability."
  },
  {
    title: "Healthcare Infrastructure",
    description: "World-class healthcare facilities, anchored by Mayo Clinic, provide exceptional medical services and drive significant infrastructure investment in the region."
  }
];

export default function Infrastructure() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rochester-sunset.jpg"
            alt="Rochester Infrastructure"
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
              Infrastructure
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              The Rochester MSA serves as a regional transportation hub with vital road, 
              rail, and air service links to national and international destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transportation Modes */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Transportation Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rochester offers excellent connectivity through multiple transportation modes, 
              making it easy to move people and products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {transportModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-6">
                  <mode.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-4">{mode.title}</h3>
                <p className="text-gray-600">{mode.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              World-Class Infrastructure
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Rochester's infrastructure supports businesses with reliable utilities, 
              modern telecommunications, and excellent transportation networks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {infrastructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#D97B4A] mb-4">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distance Chart */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Distance to Major Markets
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#1d3557] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-display">Destination</th>
                    <th className="px-6 py-4 text-right font-display">Distance</th>
                    <th className="px-6 py-4 text-right font-display">Drive Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Minneapolis-St. Paul</td>
                    <td className="px-6 py-4 text-right text-gray-600">85 miles</td>
                    <td className="px-6 py-4 text-right text-gray-600">1.5 hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Chicago, IL</td>
                    <td className="px-6 py-4 text-right text-gray-600">300 miles</td>
                    <td className="px-6 py-4 text-right text-gray-600">5 hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Des Moines, IA</td>
                    <td className="px-6 py-4 text-right text-gray-600">180 miles</td>
                    <td className="px-6 py-4 text-right text-gray-600">3 hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Milwaukee, WI</td>
                    <td className="px-6 py-4 text-right text-gray-600">250 miles</td>
                    <td className="px-6 py-4 text-right text-gray-600">4 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#D97B4A]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Find Your Perfect Location
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Search available commercial properties in the Rochester area.
            </p>
            <Link
              href="/property-search"
              className="inline-flex items-center gap-2 bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Search Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
