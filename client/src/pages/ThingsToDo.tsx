/**
 * Things To Do Page - Why Rochester Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Music, Palette, TreePine, Utensils, ShoppingBag, Bike, Theater, Camera, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const categories = [
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "World-class museums, galleries, and cultural institutions including the Rochester Art Center and History Center of Olmsted County."
  },
  {
    icon: Music,
    title: "Music & Entertainment",
    description: "Live music venues, Rochester Civic Theatre, and the Mayo Civic Center hosting concerts and events year-round."
  },
  {
    icon: TreePine,
    title: "Parks & Nature",
    description: "Over 100 parks, 85+ miles of trails, and beautiful natural areas including Quarry Hill Nature Center."
  },
  {
    icon: Utensils,
    title: "Dining",
    description: "Diverse culinary scene from farm-to-table restaurants to international cuisine, reflecting Rochester's global community."
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    description: "Apache Mall, downtown boutiques, and unique local shops offering everything from antiques to the latest fashions."
  },
  {
    icon: Bike,
    title: "Recreation",
    description: "Golf courses, sports complexes, fitness centers, and year-round recreational activities for all ages."
  }
];

const attractions = [
  {
    name: "Mayo Civic Center",
    description: "Premier event venue hosting concerts, conventions, and community events."
  },
  {
    name: "Quarry Hill Nature Center",
    description: "329-acre park with hiking trails, caves, and nature education programs."
  },
  {
    name: "Rochester Art Center",
    description: "Contemporary art museum featuring rotating exhibitions and educational programs."
  },
  {
    name: "Soldiers Field",
    description: "Historic sports complex with golf course, pool, and recreational facilities."
  },
  {
    name: "Peace Plaza",
    description: "Downtown gathering space with public art, fountains, and community events."
  },
  {
    name: "Silver Lake Park",
    description: "Urban park featuring a lake, walking paths, and seasonal activities."
  }
];

export default function ThingsToDo() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rochester-sunset.jpg"
            alt="Things to Do in Rochester"
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
              Things To Do
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Rochester offers a vibrant mix of arts, culture, outdoor recreation, 
              dining, and entertainment for residents and visitors alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Explore Rochester
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From world-class arts and culture to outdoor adventures, Rochester has 
              something for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D97B4A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-[#D97B4A]" />
                </div>
                <h3 className="text-xl font-bold text-[#1d3557] mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Featured Attractions
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Discover some of Rochester's most popular destinations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <Camera className="w-8 h-8 text-[#D97B4A] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{attraction.name}</h3>
                <p className="text-white/80">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Ready to Make Rochester Home?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Learn more about what makes Rochester one of the best places to live in America.
            </p>
            <Link
              href="/why-rochester"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              Why Rochester
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
