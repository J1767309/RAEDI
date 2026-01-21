/**
 * Education Page - Why Rochester Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Award, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const schools = [
  {
    name: "Rochester Public Schools",
    type: "K-12 Public",
    description: "One of Minnesota's largest school districts, serving over 17,000 students with award-winning programs in academics, arts, and athletics."
  },
  {
    name: "Lourdes High School",
    type: "Private Catholic",
    description: "Private Catholic high school offering rigorous academics and faith-based education."
  },
  {
    name: "Rochester STEM Academy",
    type: "Charter School",
    description: "Focus on science, technology, engineering, and mathematics education."
  }
];

const colleges = [
  {
    name: "Mayo Clinic School of Health Sciences",
    type: "Medical Education",
    description: "World-renowned medical education programs producing highly skilled healthcare professionals in numerous specialties."
  },
  {
    name: "University of Minnesota Rochester",
    type: "4-Year University",
    description: "Focused on health sciences education with innovative programs preparing students for healthcare careers."
  },
  {
    name: "Rochester Community and Technical College",
    type: "2-Year College",
    description: "Comprehensive community college offering associate degrees, certificates, and workforce training programs."
  },
  {
    name: "Winona State University - Rochester",
    type: "Branch Campus",
    description: "Offers undergraduate and graduate programs in nursing, education, and business."
  }
];

export default function Education() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-community.jpg"
            alt="Education in Rochester"
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
              Why Rochester MSA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Education
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Rochester offers excellent educational opportunities from pre-K through 
              graduate and professional programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1d3557]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <School className="w-10 h-10 text-[#D97B4A] mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">17,000+</p>
              <p className="text-white/80">K-12 Students</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <GraduationCap className="w-10 h-10 text-[#D97B4A] mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">45%</p>
              <p className="text-white/80">Adults with Bachelor's+</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Award className="w-10 h-10 text-[#D97B4A] mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">A+</p>
              <p className="text-white/80">School District Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Users className="w-10 h-10 text-[#D97B4A] mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">4</p>
              <p className="text-white/80">Higher Ed Institutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* K-12 Schools */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              K-12 Education
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rochester's schools consistently rank among the best in Minnesota, offering 
              excellent academics, arts, and athletics programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {schools.map((school, index) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <span className="inline-block bg-[#D97B4A]/10 text-[#D97B4A] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {school.type}
                </span>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{school.name}</h3>
                <p className="text-gray-600">{school.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Higher Education */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Higher Education
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rochester's higher education institutions provide world-class training and 
              education, particularly in healthcare and health sciences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {colleges.map((college, index) => (
              <motion.div
                key={college.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="inline-block bg-[#D97B4A]/10 text-[#D97B4A] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {college.type}
                    </span>
                    <h3 className="text-xl font-bold text-[#1d3557] mb-3">{college.name}</h3>
                    <p className="text-gray-600">{college.description}</p>
                  </div>
                </div>
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
              Explore Rochester Communities
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover the vibrant communities that make Rochester a great place to live and work.
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
