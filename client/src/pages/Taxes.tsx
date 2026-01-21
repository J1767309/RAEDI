/**
 * Taxes Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Calculator, Building2, Home, Truck, DollarSign, TrendingDown } from 'lucide-react';
import { Link } from 'wouter';

const taxCategories = [
  {
    icon: Building2,
    title: "Corporate Income Tax",
    rate: "9.8%",
    description: "Minnesota's corporate income tax rate. Various credits and incentives may reduce effective rates for qualifying businesses."
  },
  {
    icon: DollarSign,
    title: "Sales Tax",
    rate: "7.375%",
    description: "Combined state and local sales tax rate in Olmsted County. Many business purchases are exempt."
  },
  {
    icon: Home,
    title: "Property Tax",
    rate: "Varies",
    description: "Property tax rates vary by location. Rochester offers competitive rates compared to other metro areas."
  },
  {
    icon: Truck,
    title: "Personal Property Tax",
    rate: "None",
    description: "Minnesota does not levy a personal property tax on business equipment and machinery."
  }
];

const incentives = [
  {
    name: "Job Creation Fund",
    description: "Performance-based grants for businesses creating high-paying jobs"
  },
  {
    name: "Minnesota Investment Fund",
    description: "Loans for expanding businesses that create jobs"
  },
  {
    name: "Tax Increment Financing (TIF)",
    description: "Property tax incentives for qualifying development projects"
  },
  {
    name: "Greater Minnesota Job Expansion Program",
    description: "Tax credits for businesses expanding in Greater Minnesota"
  },
  {
    name: "Angel Tax Credit",
    description: "Tax credits for investors in qualified small businesses"
  },
  {
    name: "Research & Development Tax Credit",
    description: "Credits for qualified research expenditures"
  }
];

const comparisons = [
  { location: "Rochester, MN", corporateTax: "9.8%", salesTax: "7.375%", propertyTax: "Moderate" },
  { location: "Minneapolis, MN", corporateTax: "9.8%", salesTax: "8.025%", propertyTax: "Higher" },
  { location: "Des Moines, IA", corporateTax: "9.8%", salesTax: "7.0%", propertyTax: "Moderate" },
  { location: "Madison, WI", corporateTax: "7.9%", salesTax: "5.5%", propertyTax: "Higher" }
];

export default function Taxes() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop"
            alt="Financial planning and taxes"
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
            Taxes & Incentives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Understanding the tax environment in Rochester, Minnesota
          </motion.p>
        </div>
      </section>

      {/* Tax Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Tax Environment</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Minnesota offers a stable and predictable tax environment for businesses. While the 
              state has a moderate tax burden, numerous incentives and credits are available to 
              reduce costs for growing businesses. Rochester's location in Olmsted County provides 
              competitive property tax rates compared to the Twin Cities metro area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {taxCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="w-14 h-14 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d3557] mb-2">{category.title}</h3>
                <div className="text-3xl font-bold text-[#D97B4A] mb-3">{category.rate}</div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Incentives */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <TrendingDown className="w-16 h-16 text-[#D97B4A] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Available Incentives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minnesota and local governments offer various incentives to reduce the tax burden 
              for businesses that create jobs and invest in the community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {incentives.map((incentive, index) => (
              <motion.div
                key={incentive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-bold text-[#1d3557] mb-2">{incentive.name}</h3>
                <p className="text-gray-600 text-sm">{incentive.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Regional Tax Comparison
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-[#1d3557] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Location</th>
                  <th className="px-6 py-4 text-center font-semibold">Corporate Tax</th>
                  <th className="px-6 py-4 text-center font-semibold">Sales Tax</th>
                  <th className="px-6 py-4 text-center font-semibold">Property Tax</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr 
                    key={row.location}
                    className={`${index === 0 ? 'bg-[#D97B4A]/10 font-semibold' : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="px-6 py-4 text-[#1d3557]">{row.location}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.corporateTax}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.salesTax}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.propertyTax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Calculator className="w-16 h-16 text-[#D97B4A] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Need Help Understanding Incentives?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can help you navigate available tax incentives and determine which programs 
              your business may qualify for. Contact us for a personalized consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c26a3d] transition-colors"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
