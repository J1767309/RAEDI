import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building, ArrowRight, ExternalLink } from "lucide-react";

const communities = [
  {
    name: "Rochester",
    population: "125,000+",
    description: "The largest city in the MSA and home to Mayo Clinic. Rochester offers a vibrant downtown, diverse neighborhoods, and world-class amenities.",
    highlights: ["Mayo Clinic", "Downtown Rochester", "DMC Development", "Rochester International Airport"],
    image: "/images/rochester-hero.jpg",
    website: "https://www.rochestermn.gov",
  },
  {
    name: "Byron",
    population: "6,000+",
    description: "A growing community just west of Rochester, Byron offers small-town charm with easy access to Rochester's amenities and employment centers.",
    highlights: ["Excellent Schools", "Growing Residential Areas", "Business-Friendly", "Community Events"],
    image: "/images/hero-community.jpg",
    website: "https://www.byronmn.com",
  },
  {
    name: "Stewartville",
    population: "6,500+",
    description: "Located south of Rochester, Stewartville is a thriving community with strong schools, growing businesses, and a welcoming atmosphere.",
    highlights: ["Strong School District", "Industrial Park", "Community Center", "Parks & Recreation"],
    image: "/images/hero-community.jpg",
    website: "https://www.ci.stewartville.mn.us",
  },
  {
    name: "Kasson",
    population: "6,500+",
    description: "Part of the Kasson-Mantorville community, Kasson offers affordable living, quality schools, and a strong sense of community.",
    highlights: ["Historic Downtown", "Quality Schools", "Affordable Housing", "Growing Business District"],
    image: "/images/hero-community.jpg",
    website: "https://www.cityofkasson.com",
  },
  {
    name: "Dodge Center",
    population: "2,700+",
    description: "A welcoming community in Dodge County with strong agricultural roots and growing opportunities for businesses and families.",
    highlights: ["Agricultural Heritage", "Community Events", "Affordable Living", "Central Location"],
    image: "/images/hero-community.jpg",
    website: "#",
  },
  {
    name: "Hayfield",
    population: "1,400+",
    description: "A small but vibrant community offering rural charm with access to Rochester's employment and amenities.",
    highlights: ["Rural Character", "Strong Community", "Quality Schools", "Outdoor Recreation"],
    image: "/images/hero-community.jpg",
    website: "#",
  },
  {
    name: "Chatfield",
    population: "2,800+",
    description: "Known as the 'Chosen Valley,' Chatfield offers scenic beauty, historic charm, and a welcoming business environment.",
    highlights: ["Scenic Location", "Historic Downtown", "Tourism Destination", "Arts Community"],
    image: "/images/hero-community.jpg",
    website: "#",
  },
  {
    name: "Pine Island",
    population: "3,500+",
    description: "The 'Cheese Capital of Minnesota,' Pine Island offers small-town living with easy access to Rochester.",
    highlights: ["Cheese Days Festival", "Growing Community", "Quality Schools", "Business Opportunities"],
    image: "/images/hero-community.jpg",
    website: "#",
  },
];

const counties = [
  { name: "Olmsted County", seat: "Rochester", population: "165,000+" },
  { name: "Dodge County", seat: "Mantorville", population: "21,000+" },
  { name: "Fillmore County", seat: "Preston", population: "21,000+" },
  { name: "Mower County", seat: "Austin", population: "40,000+" },
  { name: "Wabasha County", seat: "Wabasha", population: "21,000+" },
  { name: "Winona County", seat: "Winona", population: "50,000+" },
];

export default function Communities() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/rochester-hero.jpg"
            alt="Rochester Minnesota Communities"
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
              Our Communities
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              The Rochester Metropolitan Statistical Area includes vibrant communities 
              that offer diverse living and business opportunities. From urban Rochester 
              to charming small towns, find the perfect fit for your needs.
            </p>
          </motion.div>
        </div>

      </section>

      {/* MSA Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Rochester Metropolitan Statistical Area
            </h2>
            <p className="text-gray-600 text-lg">
              The Rochester MSA encompasses multiple counties in southeastern Minnesota, 
              offering a diverse range of communities for businesses and residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {counties.map((county, index) => (
              <motion.div
                key={county.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-[#1d3557]">{county.name}</h3>
                        <p className="text-sm text-gray-500">
                          County Seat: {county.seat} • Pop: {county.population}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Community - Rochester */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src="/images/rochester-hero.jpg"
                    alt="Rochester, Minnesota"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#D97B4A] rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[#D97B4A] font-semibold">Featured Community</span>
                  </div>
                  <h2 className="text-3xl font-bold font-display text-[#1d3557] mb-2">
                    Rochester
                  </h2>
                  <p className="text-gray-500 mb-4">Population: 125,000+</p>
                  <p className="text-gray-600 mb-6">
                    The largest city in the MSA and home to Mayo Clinic. Rochester offers a vibrant 
                    downtown, diverse neighborhoods, and world-class amenities. The Destination 
                    Medical Center initiative is transforming the city into a global destination 
                    for health and wellness.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Mayo Clinic", "Downtown Rochester", "DMC Development", "Rochester International Airport"].map((item) => (
                      <span key={item} className="px-3 py-1 bg-[#1d3557]/10 text-[#1d3557] rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
                  >
                    <a href="https://www.rochestermn.gov" target="_blank" rel="noopener noreferrer">
                      Visit Rochester <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Other Communities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Explore Our Communities
            </h2>
            <p className="text-gray-600 text-lg">
              Each community in the Rochester MSA offers unique advantages for businesses and residents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.slice(1).map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557]/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold font-display text-white">
                        {community.name}
                      </h3>
                      <p className="text-gray-200 text-sm flex items-center gap-1">
                        <Users className="w-4 h-4" /> {community.population}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{community.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {community.highlights.slice(0, 3).map((item) => (
                        <span key={item} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                    {community.website !== "#" && (
                      <a
                        href={community.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D97B4A] font-semibold text-sm hover:gap-2 gap-1 transition-all"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Find Your Perfect Location
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Whether you're looking to relocate, expand, or start a new business, 
              our team can help you find the right community for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
              >
                <Link href="/property-search">Search Properties</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1d3557] font-display font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
