import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building, Search, Filter, ExternalLink } from "lucide-react";

export default function PropertySearch() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-business-growth.jpg"
            alt="Commercial Real Estate"
            className="hero-image hero-image-zoom"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557]/70 via-transparent to-transparent" />
        
        <div className="container relative z-10 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 drop-shadow-lg">
              Property Search
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              RAEDI provides comprehensive commercial real estate listings across the Rochester, 
              Minnesota Metropolitan Statistical Area (MSA). Find the perfect location for your 
              business to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Property Search Widget */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Search Filters */}
            <Card className="border-0 shadow-xl mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <Filter className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold font-display text-[#1d3557]">
                    Search Filters
                  </h2>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1d3557] focus:border-transparent">
                      <option value="">All Types</option>
                      <option value="office">Office</option>
                      <option value="industrial">Industrial</option>
                      <option value="retail">Retail</option>
                      <option value="land">Land</option>
                      <option value="flex">Flex Space</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Type
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1d3557] focus:border-transparent">
                      <option value="">For Sale or Lease</option>
                      <option value="sale">For Sale</option>
                      <option value="lease">For Lease</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1d3557] focus:border-transparent">
                      <option value="">All Locations</option>
                      <option value="rochester">Rochester</option>
                      <option value="byron">Byron</option>
                      <option value="stewartville">Stewartville</option>
                      <option value="kasson">Kasson</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold">
                      <Search className="w-4 h-4 mr-2" /> Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-gray-100 h-[500px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#1d3557] mb-4">
                    Interactive Property Map
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    Our interactive property search is powered by Moody's Analytics CRE. 
                    Search by location, draw custom areas, or browse available listings.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      asChild
                      className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
                    >
                      <a 
                        href="https://www.raedi.com/property-search/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Open Full Property Search <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Property search integration coming soon
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Available Property Types
            </h2>
            <p className="text-gray-600 text-lg">
              Find the perfect space for your business needs in the Rochester MSA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building, title: "Office Space", count: "25+ listings" },
              { icon: Building, title: "Industrial", count: "15+ listings" },
              { icon: Building, title: "Retail", count: "20+ listings" },
              { icon: MapPin, title: "Land", count: "30+ listings" },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-6">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mb-2">
                      {type.title}
                    </h3>
                    <p className="text-[#D97B4A] font-semibold">{type.count}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rochester for Real Estate */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                Why Choose Rochester for Your Business Location?
              </h2>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D97B4A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </span>
                  <span>Strategic location in the heart of the Upper Midwest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D97B4A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </span>
                  <span>Growing economy driven by healthcare, technology, and manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D97B4A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </span>
                  <span>Highly educated workforce with low unemployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D97B4A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </span>
                  <span>Competitive real estate costs compared to major metros</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#D97B4A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </span>
                  <span>$5.6 billion Destination Medical Center investment</span>
                </li>
              </ul>
              <Button
                asChild
                className="mt-8 bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
              >
                <Link href="/why-rochester">Learn More About Rochester</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/hero-business-growth.jpg"
                alt="Rochester Real Estate"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-6">
              Need Help Finding the Right Property?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our team can help you navigate the Rochester commercial real estate market 
              and find the perfect location for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
