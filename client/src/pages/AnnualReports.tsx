/**
 * Annual Reports Page - News & Publications Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { FileText, Download, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const annualReports = [
  { year: "2024", title: "RAEDI Annual Report 2024", description: "Comprehensive overview of economic development activities and achievements in 2024." },
  { year: "2023", title: "RAEDI Annual Report 2023", description: "Highlights of business growth, job creation, and community investment in 2023." },
  { year: "2022", title: "RAEDI Annual Report 2022", description: "Summary of economic development initiatives and regional progress in 2022." },
  { year: "2021", title: "RAEDI Annual Report 2021", description: "Overview of pandemic recovery efforts and economic resilience in 2021." },
  { year: "2020", title: "RAEDI Annual Report 2020", description: "Report on economic response to COVID-19 and business support programs." }
];

const quarterlyReports = [
  { quarter: "Q4 2024", title: "Fourth Quarter Report 2024" },
  { quarter: "Q3 2024", title: "Third Quarter Report 2024" },
  { quarter: "Q2 2024", title: "Second Quarter Report 2024" },
  { quarter: "Q1 2024", title: "First Quarter Report 2024" }
];

export default function AnnualReports() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-business-growth.jpg"
            alt="Annual Reports"
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
              News & Publications
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Annual Reports
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Review our annual and quarterly reports documenting RAEDI's economic 
              development activities and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Annual Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our annual reports provide comprehensive overviews of RAEDI's activities, 
              achievements, and impact on the Rochester area economy.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {annualReports.map((report, index) => (
              <motion.div
                key={report.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#1d3557] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="inline-block bg-[#D97B4A]/10 text-[#D97B4A] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {report.year}
                    </span>
                    <h3 className="text-xl font-bold text-[#1d3557]">{report.title}</h3>
                    <p className="text-gray-600">{report.description}</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 bg-[#1d3557] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#152a45] transition-colors whitespace-nowrap">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly Reports */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Quarterly Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our quarterly progress reports.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
            {quarterlyReports.map((report, index) => (
              <motion.div
                key={report.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#D97B4A]" />
                  <span className="font-semibold text-[#1d3557]">{report.title}</span>
                </div>
                <Download className="w-5 h-5 text-gray-400 hover:text-[#1d3557] cursor-pointer" />
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
              Stay Informed
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest news and updates from RAEDI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
