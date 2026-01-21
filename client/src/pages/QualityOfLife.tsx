/**
 * Quality of Life Page
 * Design: Corporate Precision - Swiss International Style
 * Full-bleed hero with zoom animation, clean typography
 */

import { motion } from 'framer-motion';
import { Heart, Home, GraduationCap, TreePine, Users, Briefcase, Shield, Sun } from 'lucide-react';
import { Link } from 'wouter';

const qualityFactors = [
  {
    icon: Heart,
    title: "World-Class Healthcare",
    description: "Home to Mayo Clinic, one of the world's leading medical centers, providing exceptional healthcare access for residents."
  },
  {
    icon: GraduationCap,
    title: "Excellent Education",
    description: "Top-rated public schools, private schools, and higher education institutions including University of Minnesota Rochester."
  },
  {
    icon: Home,
    title: "Affordable Housing",
    description: "Housing costs significantly lower than major metro areas, with diverse options from downtown condos to suburban homes."
  },
  {
    icon: TreePine,
    title: "Natural Beauty",
    description: "125+ miles of trails, numerous parks, and easy access to bluffs, rivers, and outdoor recreation."
  },
  {
    icon: Shield,
    title: "Safe Community",
    description: "Consistently ranked among the safest cities in Minnesota with low crime rates and strong community bonds."
  },
  {
    icon: Sun,
    title: "Four Seasons",
    description: "Experience all four seasons with activities year-round, from summer festivals to winter sports."
  }
];

const rankings = [
  { rank: "#1", title: "Best City for Families", source: "WalletHub, 2024" },
  { rank: "#3", title: "Best Place to Live in Minnesota", source: "U.S. News, 2024" },
  { rank: "#5", title: "Best Small Cities in America", source: "Money Magazine" },
  { rank: "Top 10", title: "Healthiest Cities in America", source: "Healthiest Communities" }
];

const lifestyleHighlights = [
  { category: "Arts & Culture", items: ["Rochester Art Center", "Rochester Civic Theatre", "History Center of Olmsted County", "Rochester Symphony Orchestra"] },
  { category: "Dining & Entertainment", items: ["200+ restaurants", "Craft breweries", "Live music venues", "Downtown nightlife"] },
  { category: "Sports & Recreation", items: ["Mayo Civic Center events", "Rochester Honkers baseball", "Golf courses", "Ice arenas"] },
  { category: "Shopping", items: ["Apache Mall", "Downtown boutiques", "Farmers markets", "Specialty shops"] }
];

export default function QualityOfLife() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rochester-sunset.jpg"
            alt="Rochester Minnesota skyline"
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
            Quality of Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md"
          >
            Discover what makes Rochester one of America's best places to live
          </motion.p>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-16 bg-[#1d3557]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {rankings.map((ranking, index) => (
              <motion.div
                key={ranking.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#D97B4A] mb-2">{ranking.rank}</div>
                <div className="text-white font-semibold mb-1">{ranking.title}</div>
                <div className="text-gray-400 text-sm">{ranking.source}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Factors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Why Rochester?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rochester offers an exceptional quality of life that attracts talent from around the world. 
              Here's what makes our community special.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {qualityFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="w-14 h-14 bg-[#D97B4A]/10 rounded-lg flex items-center justify-center mb-6">
                  <factor.icon className="w-7 h-7 text-[#D97B4A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#1d3557] text-center mb-16"
          >
            Lifestyle & Entertainment
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {lifestyleHighlights.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-bold text-[#1d3557] mb-4 pb-3 border-b border-gray-200">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#D97B4A] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#1d3557] mb-6">Affordable Living</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Rochester offers a cost of living that's significantly lower than major metropolitan areas 
                while providing big-city amenities. Housing, in particular, is much more affordable than 
                cities like Minneapolis, Chicago, or coastal metros.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-[#1d3557]">Median Home Price</span>
                  <span className="text-[#D97B4A] font-bold">$285,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-[#1d3557]">Cost of Living Index</span>
                  <span className="text-[#D97B4A] font-bold">98.5 (US Avg: 100)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-[#1d3557]">Average Commute</span>
                  <span className="text-[#D97B4A] font-bold">18 minutes</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
                alt="Rochester neighborhood"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
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
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make Rochester Home?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're relocating for work or considering Rochester for your business, 
              we're here to help you make the transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/communities"
                className="inline-block bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Communities
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
