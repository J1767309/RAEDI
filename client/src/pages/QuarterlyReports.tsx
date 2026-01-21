/**
 * Quarterly Reports & Surveys Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { FileText, Download, Calendar, BarChart3, TrendingUp } from 'lucide-react';

const reports = [
  {
    title: "Q4 2025 Economic Report",
    date: "January 2026",
    description: "Comprehensive analysis of Rochester's economic performance in Q4 2025, including employment trends, business activity, and development updates.",
    type: "Quarterly Report",
    downloadLink: "#"
  },
  {
    title: "Q3 2025 Economic Report",
    date: "October 2025",
    description: "Third quarter economic indicators, job growth data, and major project announcements.",
    type: "Quarterly Report",
    downloadLink: "#"
  },
  {
    title: "2025 Business Climate Survey",
    date: "September 2025",
    description: "Annual survey results from Rochester area businesses on economic conditions, challenges, and opportunities.",
    type: "Survey",
    downloadLink: "#"
  },
  {
    title: "Q2 2025 Economic Report",
    date: "July 2025",
    description: "Mid-year economic review with focus on healthcare sector growth and DMC progress.",
    type: "Quarterly Report",
    downloadLink: "#"
  },
  {
    title: "Q1 2025 Economic Report",
    date: "April 2025",
    description: "First quarter economic indicators and outlook for the remainder of 2025.",
    type: "Quarterly Report",
    downloadLink: "#"
  },
  {
    title: "2024 Workforce Survey",
    date: "December 2024",
    description: "Comprehensive workforce analysis including skills gaps, training needs, and employment projections.",
    type: "Survey",
    downloadLink: "#"
  }
];

const keyMetrics = [
  { label: "Unemployment Rate", value: "2.8%", trend: "down" },
  { label: "Job Growth", value: "+3.2%", trend: "up" },
  { label: "New Business Starts", value: "245", trend: "up" },
  { label: "Capital Investment", value: "$1.2B", trend: "up" }
];

export default function QuarterlyReports() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"
            alt="Data analytics and reports"
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
            Quarterly Reports & Surveys
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Data-driven insights into Rochester's economic performance
          </motion.p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">{metric.value}</span>
                  <TrendingUp className={`w-5 h-5 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400 rotate-180'}`} />
                </div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Available Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our quarterly economic reports and survey results to stay informed 
              about Rochester's business environment and economic trends.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {reports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        report.type === 'Survey' 
                          ? 'bg-[#D97B4A]/10 text-[#D97B4A]' 
                          : 'bg-[#1d3557]/10 text-[#1d3557]'
                      }`}>
                        {report.type}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {report.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1d3557] mb-2">{report.title}</h3>
                    <p className="text-gray-600">{report.description}</p>
                  </div>
                  <a
                    href={report.downloadLink}
                    className="inline-flex items-center gap-2 bg-[#1d3557] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a4a6e] transition-colors whitespace-nowrap"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Request CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <BarChart3 className="w-16 h-16 text-[#D97B4A] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Need Custom Data?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Looking for specific economic data or analysis for your business planning? 
              Our team can provide customized reports and research to meet your needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c26a3d] transition-colors"
            >
              Request Custom Data
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
