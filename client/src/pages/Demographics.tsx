/**
 * Demographics Page - What We Do Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Users, TrendingUp, GraduationCap, Briefcase, Home, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const stats = [
  { value: "232,000+", label: "MSA Population", icon: Users },
  { value: "122,000+", label: "City of Rochester", icon: Home },
  { value: "45%", label: "Bachelor's Degree or Higher", icon: GraduationCap },
  { value: "2.5%", label: "Unemployment Rate", icon: Briefcase }
];

const demographics = [
  {
    title: "Population Growth",
    description: "The Rochester MSA has experienced consistent population growth, driven by the region's strong economy and high quality of life. The area attracts professionals from around the world, particularly in healthcare, technology, and research fields."
  },
  {
    title: "Educated Workforce",
    description: "Rochester boasts one of the most educated workforces in the nation, with 45% of adults holding a bachelor's degree or higher. The presence of Mayo Clinic and other research institutions attracts highly skilled professionals."
  },
  {
    title: "Diverse Economy",
    description: "While healthcare is the dominant industry, Rochester's economy is increasingly diversified across technology, manufacturing, education, and professional services sectors."
  },
  {
    title: "Quality of Life",
    description: "Money magazine has repeatedly recognized Rochester as one of the best places to live in the United States, citing its cosmopolitan style, low crime rates, and excellent schools."
  }
];

export default function Demographics() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-community.jpg"
            alt="Rochester Demographics"
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
              Demographics
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              The Rochester MSA continually ranks high in polls relating to quality of life 
              and employee productivity.
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

      {/* Demographics Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display text-center">
              A Thriving Community
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Money magazine reported that the city of Rochester "radiates cosmopolitan style 
              without big city ills." The smaller cities surrounding Rochester represent rural 
              living at its best.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {demographics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#1d3557] mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Dashboard Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Economic Data Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access real-time economic data for the Rochester MSA, including employment 
              statistics, industry trends, and workforce analytics.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-[#1d3557]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-[#1d3557]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1d3557] mb-4">Coming Soon</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              We're building an interactive dashboard with Bureau of Labor Statistics data, 
              employment trends, and economic indicators for the Rochester MSA.
            </p>
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
              Explore Rochester Communities
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover the vibrant communities that make up the Rochester Metropolitan Statistical Area.
            </p>
            <Link
              href="/communities"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              View Communities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
