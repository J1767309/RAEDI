/**
 * Workforce Page - What We Do Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, TrendingUp, Award, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const stats = [
  { value: "45%", label: "Bachelor's Degree or Higher", icon: GraduationCap },
  { value: "2.5%", label: "Unemployment Rate", icon: Briefcase },
  { value: "120,000+", label: "Labor Force", icon: Users },
  { value: "#1", label: "State for New Business Survival", icon: Award }
];

const educationPartners = [
  {
    name: "Rochester Community and Technical College",
    description: "Two-year college offering associate degrees, certificates, and workforce training programs aligned with regional employer needs."
  },
  {
    name: "University of Minnesota Rochester",
    description: "Four-year university focused on health sciences education, preparing students for careers in healthcare and related fields."
  },
  {
    name: "Winona State University - Rochester",
    description: "Branch campus offering undergraduate and graduate programs in nursing, education, and business."
  },
  {
    name: "Mayo Clinic School of Health Sciences",
    description: "World-class medical education and training programs producing highly skilled healthcare professionals."
  }
];

const workforcePrograms = [
  {
    title: "Minnesota Job Skills Partnership",
    description: "State program that provides grants to educational institutions for customized training programs developed in partnership with businesses."
  },
  {
    title: "Workforce Development Inc.",
    description: "Regional organization providing employment services, job training, and career counseling to job seekers and employers."
  },
  {
    title: "DEED Training Programs",
    description: "Minnesota Department of Employment and Economic Development offers various training incentives and programs for businesses."
  }
];

export default function Workforce() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-technology.jpg"
            alt="Workforce Development"
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
              Workforce
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Rochester boasts one of the most educated and productive workforces in the nation, 
              with strong educational institutions and training programs.
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

      {/* Education Partners */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Education Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rochester's educational institutions work closely with employers to develop 
              curriculum and training programs that meet workforce needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1d3557]">{partner.name}</h3>
                </div>
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Programs */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Workforce Development Programs
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Multiple programs are available to help businesses train and develop their workforce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {workforcePrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <BookOpen className="w-10 h-10 text-[#D97B4A] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-white/80">{program.description}</p>
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
              Learn About Business Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover all the resources available to help your business succeed in Rochester.
            </p>
            <Link
              href="/business-resources"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              Explore Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
