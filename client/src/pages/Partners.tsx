/**
 * Partners Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

const partners = [
  {
    category: "Government Partners",
    organizations: [
      { name: "City of Rochester", url: "https://www.rochestermn.gov", description: "Municipal government partner" },
      { name: "Olmsted County", url: "https://www.olmstedcounty.com", description: "County government partner" },
      { name: "State of Minnesota DEED", url: "https://mn.gov/deed", description: "Department of Employment and Economic Development" },
      { name: "Minnesota Chamber of Commerce", url: "https://www.mnchamber.com", description: "Statewide business advocacy" }
    ]
  },
  {
    category: "Healthcare Partners",
    organizations: [
      { name: "Mayo Clinic", url: "https://www.mayoclinic.org", description: "World-renowned healthcare and research institution" },
      { name: "Olmsted Medical Center", url: "https://www.olmmed.org", description: "Regional healthcare provider" },
      { name: "Destination Medical Center", url: "https://dmc.mn", description: "Economic development initiative" }
    ]
  },
  {
    category: "Education Partners",
    organizations: [
      { name: "University of Minnesota Rochester", url: "https://r.umn.edu", description: "Higher education partner" },
      { name: "Rochester Community and Technical College", url: "https://www.rctc.edu", description: "Technical and community college" },
      { name: "Winona State University - Rochester", url: "https://www.winona.edu", description: "Regional university campus" },
      { name: "Rochester Public Schools", url: "https://www.rochesterschools.org", description: "K-12 education partner" }
    ]
  },
  {
    category: "Business Organizations",
    organizations: [
      { name: "Rochester Area Chamber of Commerce", url: "https://www.rochestermnchamber.com", description: "Local business advocacy" },
      { name: "Rochester Downtown Alliance", url: "https://www.downtownrochestermn.com", description: "Downtown business development" },
      { name: "Minnesota Technology Association", url: "https://www.mntech.org", description: "Technology industry advocacy" }
    ]
  },
  {
    category: "Regional Partners",
    organizations: [
      { name: "Southeast Minnesota Together", url: "#", description: "Regional collaboration initiative" },
      { name: "Greater MSP", url: "https://www.greatermsp.org", description: "Regional economic development" },
      { name: "Southern Minnesota Initiative Foundation", url: "https://www.smifoundation.org", description: "Regional foundation partner" }
    ]
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
            alt="Partnership collaboration"
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
            Our Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Working together to build a stronger Rochester region
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Collaborative Success</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              RAEDI works closely with a network of government agencies, educational institutions, 
              healthcare organizations, and business groups to foster economic growth throughout 
              the Rochester Metropolitan Statistical Area. These partnerships enable us to provide 
              comprehensive support for businesses at every stage of development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      {partners.map((category, categoryIndex) => (
        <section 
          key={category.category}
          className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-[#1d3557] mb-8 text-center"
            >
              {category.category}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {category.organizations.map((org, index) => (
                <motion.a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#1d3557] group-hover:text-[#D97B4A] transition-colors">
                      {org.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#D97B4A] transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-gray-600 text-sm">{org.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Become a Partner CTA */}
      <section className="py-20 bg-[#D97B4A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Interested in partnering with RAEDI to support economic development in the Rochester region? 
              We're always looking for organizations that share our vision.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us to Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
