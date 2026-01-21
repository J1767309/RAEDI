/**
 * RAEDI Staff Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const staffMembers = [
  {
    name: "Gary Smith",
    title: "President",
    email: "gsmith@raedi.com",
    phone: "(507) 288-0208",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Gary has over 25 years of experience in economic development and leads RAEDI's strategic initiatives."
  },
  {
    name: "Brad Jones",
    title: "Vice President of Economic Development",
    email: "bjones@raedi.com",
    phone: "(507) 288-0208",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Brad oversees business retention and expansion programs across the Rochester MSA."
  },
  {
    name: "Lisa Johnson",
    title: "Director of Marketing & Communications",
    email: "ljohnson@raedi.com",
    phone: "(507) 288-0208",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Lisa manages RAEDI's marketing efforts and community outreach programs."
  },
  {
    name: "Michael Chen",
    title: "SBDC Director",
    email: "mchen@raedi.com",
    phone: "(507) 288-0208",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Michael leads the Small Business Development Center, providing consulting to entrepreneurs."
  },
  {
    name: "Sarah Williams",
    title: "Business Development Manager",
    email: "swilliams@raedi.com",
    phone: "(507) 288-0208",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Sarah works with businesses on expansion projects and site selection assistance."
  },
  {
    name: "David Martinez",
    title: "Finance Manager",
    email: "dmartinez@raedi.com",
    phone: "(507) 288-0208",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "David manages RAEDI's financial operations and loan programs."
  }
];

export default function Staff() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="RAEDI Staff Team"
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
            RAEDI Staff
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Meet our dedicated team members working to grow the Rochester economy
          </motion.p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RAEDI's professional staff brings decades of combined experience in economic development, 
              business consulting, and community engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1d3557] mb-1">{member.name}</h3>
                  <p className="text-[#D97B4A] font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-[#1d3557] hover:text-[#D97B4A] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-[#1d3557] hover:text-[#D97B4A] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#1d3557]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions? Our team is here to help you with your business needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c26a3d] transition-colors"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
