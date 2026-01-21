/**
 * R.A.V.E. Veterans Program Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Shield, Users, Briefcase, Award, Target, Heart } from 'lucide-react';
import { Link } from 'wouter';

const programFeatures = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "One-on-one consulting with experienced business advisors who understand the unique challenges veterans face when starting a business."
  },
  {
    icon: Users,
    title: "Mentorship Network",
    description: "Connect with successful veteran entrepreneurs and business leaders who can provide guidance and support."
  },
  {
    icon: Target,
    title: "Training Programs",
    description: "Access specialized training programs designed to help veterans develop business skills and industry knowledge."
  },
  {
    icon: Award,
    title: "Funding Assistance",
    description: "Learn about veteran-specific funding programs, grants, and loan opportunities to help launch your business."
  }
];

const successStories = [
  {
    name: "John Peterson",
    business: "Peterson Security Solutions",
    branch: "U.S. Army",
    quote: "The R.A.V.E. program gave me the confidence and resources I needed to turn my military experience into a successful security consulting business."
  },
  {
    name: "Maria Rodriguez",
    business: "MR Logistics",
    branch: "U.S. Marine Corps",
    quote: "Thanks to the mentorship and training I received through R.A.V.E., I was able to start my logistics company and now employ 15 people."
  }
];

export default function RAVE() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&h=1080&fit=crop"
            alt="Veterans in business"
            className="w-full h-full object-cover hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1d3557]/70 via-[#1d3557]/50 to-[#1d3557]/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Shield className="w-12 h-12 text-[#D97B4A]" />
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
              R.A.V.E.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow-md"
          >
            Rochester Area Veteran Entrepreneurs
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl max-w-3xl mx-auto drop-shadow-md"
          >
            Supporting veterans in their journey from service to successful business ownership
          </motion.p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1d3557] mb-6">About the Program</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The R.A.V.E. (Rochester Area Veteran Entrepreneurs) program is designed to help 
                military veterans successfully transition to business ownership. We recognize the 
                unique skills, discipline, and leadership abilities that veterans bring to 
                entrepreneurship, and we're committed to helping them succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1d3557] text-white p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Why Veterans Make Great Entrepreneurs</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Veterans possess many qualities that translate directly to business success: 
                leadership, discipline, problem-solving skills, the ability to work under pressure, 
                and a commitment to mission accomplishment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The R.A.V.E. program helps veterans leverage these strengths while providing the 
                business-specific training and resources they need to launch and grow successful enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Program Features
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-14 h-14 bg-[#D97B4A]/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#D97B4A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Success Stories
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex items-center gap-2 text-[#D97B4A] mb-4">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">{story.branch}</span>
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{story.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-[#1d3557]">{story.name}</div>
                  <div className="text-gray-600">{story.business}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#D97B4A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you're a veteran interested in starting or growing a business, the R.A.V.E. 
              program is here to help. Contact us today to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/sbdc"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About SBDC
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
