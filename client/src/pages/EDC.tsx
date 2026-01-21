/**
 * Economic Development Center Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Building2, Users, Lightbulb, Coffee, Wifi, Car, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';

const amenities = [
  { icon: Wifi, name: "High-Speed Internet", description: "Fiber-optic connectivity for all tenants" },
  { icon: Coffee, name: "Conference Rooms", description: "Professional meeting spaces available" },
  { icon: Car, name: "Free Parking", description: "Ample parking for tenants and visitors" },
  { icon: Users, name: "Networking Events", description: "Regular business networking opportunities" }
];

const tenantBenefits = [
  "Access to SBDC business consulting",
  "Proximity to RAEDI staff and resources",
  "Professional business address",
  "Flexible lease terms",
  "Shared reception services",
  "Mail handling and package receiving",
  "Access to business workshops and training",
  "Networking with other entrepreneurs"
];

export default function EDC() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Economic Development Center building"
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
            Economic Development Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            A hub for business growth and entrepreneurship in Rochester
          </motion.p>
        </div>
      </section>

      {/* About the EDC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Your Business Home</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Economic Development Center (EDC) is a multi-tenant facility designed to support 
                growing businesses in the Rochester area. Located in the heart of Rochester, the EDC 
                provides affordable office space with access to business resources and support services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The EDC is home to RAEDI's offices, the Small Business Development Center (SBDC), 
                and a variety of small businesses and startups. This unique environment fosters 
                collaboration and provides tenants with easy access to business consulting, 
                networking opportunities, and economic development resources.
              </p>
              <div className="flex items-center gap-4 text-[#1d3557]">
                <MapPin className="w-6 h-6 text-[#D97B4A]" />
                <span className="text-lg font-medium">220 South Broadway, Suite 100, Rochester, MN 55904</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
                alt="Modern office space"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D97B4A] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm">Tenant Businesses</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Facility Amenities
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1d3557] mb-2">{amenity.name}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tenant Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
                alt="Business meeting"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Tenant Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                EDC tenants enjoy a range of benefits designed to support business growth and success.
              </p>
              <ul className="space-y-3">
                {tenantBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D97B4A] rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Building2 className="w-16 h-16 text-[#D97B4A] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Interested in Leasing Space?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn about available office space and leasing opportunities at the 
              Economic Development Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="tel:507-288-0208"
                className="flex items-center justify-center gap-2 text-white hover:text-[#D97B4A] transition-colors"
              >
                <Phone className="w-5 h-5" />
                (507) 288-0208
              </a>
              <a
                href="mailto:info@raedi.com"
                className="flex items-center justify-center gap-2 text-white hover:text-[#D97B4A] transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@raedi.com
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c26a3d] transition-colors"
            >
              Schedule a Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
