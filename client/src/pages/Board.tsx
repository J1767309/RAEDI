/**
 * RAEDI Board of Directors Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with transparent nav overlay, straight edge
 */

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Layout from "@/components/Layout";

const executiveCommittee = [
  { name: "Dianna Robinson", title: "Chair", company: "Associated Bank" },
  { name: "Michell Pyfferoen", title: "Vice Chair", company: "Rochester Community and Technical College" },
  { name: "John Reed", title: "Secretary/Treasurer", company: "Rochester International Airport" },
  { name: "Jarett Jones", title: "Immediate Past Chair", company: "Merchants Bank" },
  { name: "Melissa Brinkman", title: "Member at Large", company: "Custom Alarm" }
];

const boardMembers = [
  { name: "Dana Allen-Tully", company: "Gar-Lin Dairy Farms" },
  { name: "John Beatty", company: "Dulap & Seeger" },
  { name: "Adam Benike", company: "Benike Construction" },
  { name: "Chad DeCook", company: "Think Bank" },
  { name: "Travis Gransee", company: "Olmsted County" },
  { name: "Bruce Gudlin", company: "U.S. Bank" },
  { name: "Julie Henry", company: "Mayo Clinic" },
  { name: "Tim McCollough", company: "Rochester Public Utilities" },
  { name: "Nick Pompeian", company: "Realty Growth, Inc." },
  { name: "Dharani Ramamoorthy", company: "Xylo Technologies, Inc." },
  { name: "Al Roder", company: "City of Byron" },
  { name: "Patrick Seeb", company: "DMC (Destination Medical Center)" },
  { name: "Sam Soukup", company: "Express Personnel Services" },
  { name: "Gwen Stevents", company: "Peoples Energy Cooperative" },
  { name: "Alison Zelms", company: "City of Rochester" }
];

const staff = [
  { name: "John Wade", title: "President", email: "jwade@raedi.com" },
  { name: "Kirk Bustrom", title: "Director of Economic Development", email: "kbustrom@raedi.com" },
  { name: "Tonya Bernard", title: "Director of Business Operations", email: "tbernard@raedi.com" },
  { name: "Molly Schmidt", title: "Director of Marketing and Communications", email: "mschmidt@raedi.com" },
  { name: "Mark Thein", title: "SBDC Director", email: "mthein@rochestersbdc.com" },
  { name: "Julie Herrerra-Lemler", title: "SBDC Program Manager", email: "jlemler@rochestersbdc.com" },
  { name: "Rick Indrelie", title: "SBDC Consultant", email: "rindrelie@rochestersbdc.com" }
];

export default function Board() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-community.jpg"
            alt="RAEDI Board of Directors"
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
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Board of Directors & Staff
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Meet the dedicated leaders guiding RAEDI's mission to retain, grow, and diversify 
              the Rochester area economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Executive Committee
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Executive Committee provides strategic leadership and oversight for RAEDI's operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {executiveCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="w-20 h-20 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-1">{member.name}</h3>
                <p className="text-[#D97B4A] font-semibold mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Board Members
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Board of Directors is a group of member volunteers who financially invest in RAEDI's 
              mission to retain, grow & diversify the Rochester area economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg text-center shadow-sm"
              >
                <h3 className="font-bold text-[#1d3557] mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              RAEDI Staff
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our dedicated team works every day to support businesses and drive economic 
              development in the Rochester area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-[#D97B4A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#D97B4A] text-sm font-semibold mb-3">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
