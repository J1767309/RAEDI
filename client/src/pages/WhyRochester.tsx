import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  GraduationCap,
  Building,
  Plane,
  Heart,
  TreePine,
  Home,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const rankings = [
  { title: "Top 100 places to live in the U.S.", year: "2024", source: "U.S. News & World Report" },
  { title: "Top 25 places to retire in the U.S.", year: "2024", source: "U.S. News & World Report" },
  { title: "Ranked 8 out of 25 Best Places to Live in the Midwest", year: "2024", source: "U.S. News & World Report" },
  { title: "Highest five-year survival rate for new businesses", year: "2024", source: "Minnesota DEED" },
  { title: "World's Best Hospital", year: "2024", source: "Newsweek" },
  { title: "Top 10 States for Business", year: "2025", source: "CNBC" },
  { title: "Top 5 Safest and Most Affordable US Cities", year: "2024", source: "WalletHub" },
];

const qualityOfLife = [
  {
    icon: Heart,
    title: "World-Class Healthcare",
    description: "Home to Mayo Clinic, consistently ranked as the #1 hospital in the world.",
  },
  {
    icon: GraduationCap,
    title: "Excellent Education",
    description: "Top-rated K-12 schools, Rochester Community and Technical College, and University of Minnesota Rochester.",
  },
  {
    icon: TreePine,
    title: "Outdoor Recreation",
    description: "Over 100 miles of trails, 85+ parks, and easy access to lakes and natural areas.",
  },
  {
    icon: Building,
    title: "Cultural Amenities",
    description: "Vibrant arts scene, diverse dining, and year-round community events.",
  },
  {
    icon: Home,
    title: "Affordable Living",
    description: "Cost of living below national average with excellent housing options.",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Welcoming, inclusive community with residents from around the world.",
  },
];

const demographics = [
  { label: "Population (MSA)", value: "230,000+" },
  { label: "Median Household Income", value: "$78,000+" },
  { label: "Bachelor's Degree or Higher", value: "45%+" },
  { label: "Unemployment Rate", value: "2.5%" },
  { label: "Median Age", value: "36 years" },
  { label: "Labor Force", value: "140,000+" },
];

const infrastructure = [
  {
    icon: Plane,
    title: "Rochester International Airport",
    description: "Direct flights to major hubs including Chicago, Minneapolis, and seasonal destinations.",
  },
  {
    icon: Building,
    title: "Highway Access",
    description: "US Highway 52, US Highway 14, and Interstate 90 provide excellent connectivity.",
  },
  {
    icon: Users,
    title: "Public Transit",
    description: "Rochester Public Transit provides comprehensive bus service throughout the city.",
  },
];

export default function WhyRochester() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-community.jpg"
            alt="Rochester Community Street Festival"
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
              Why Rochester MSA
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Whether you are searching for a new corporate home, a place to expand your business, 
              or a new place to live, the Rochester area offers the finest in business climate, 
              labor force, real estate, utilities, transportation, education, and quality of life.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Rankings */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Award-Winning Community
            </h2>
            <p className="text-gray-600 text-lg">
              Rochester consistently ranks among the best places to live, work, and do business in America.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankings.map((ranking, index) => (
              <motion.div
                key={ranking.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#D97B4A] rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-[#1d3557] mb-1">
                          {ranking.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {ranking.source} • {ranking.year}
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

      {/* Quality of Life */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Quality of Life
            </h2>
            <p className="text-gray-600 text-lg">
              Rochester offers an exceptional quality of life that attracts and retains top talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityOfLife.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#1d3557] rounded-lg flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section id="demographics" className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Demographics
            </h2>
            <p className="text-gray-200 text-lg">
              A highly educated, productive workforce ready to power your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {demographics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold font-display text-[#D97B4A]">
                  {stat.value}
                </p>
                <p className="text-gray-300 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Economic Data Dashboard Placeholder */}
          <div className="mt-16 bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold font-display text-white mb-4">
              Economic Data Dashboard
            </h3>
            <p className="text-gray-300 mb-6">
              Real-time economic indicators powered by Bureau of Labor Statistics data.
            </p>
            <div className="bg-white/5 rounded-lg p-12 border-2 border-dashed border-white/20">
              <p className="text-gray-400 italic">
                Interactive dashboard coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Infrastructure
            </h2>
            <p className="text-gray-600 text-lg">
              The Rochester MSA serves as a regional transportation hub serving southeastern Minnesota, 
              northern Iowa, and western Wisconsin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {infrastructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#D97B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DMC Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#D97B4A] text-white text-sm font-semibold rounded-full mb-6">
                Destination Medical Center
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-6">
                A $5.6 Billion Investment in Rochester's Future
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                The Destination Medical Center (DMC) initiative is transforming Rochester into a 
                global destination for health and wellness. This 20-year, $5.6 billion economic 
                development initiative is creating unprecedented opportunities for businesses.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D97B4A]" />
                  <span className="text-gray-600">35,000+ new jobs projected</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D97B4A]" />
                  <span className="text-gray-600">$7.5 billion in new construction</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D97B4A]" />
                  <span className="text-gray-600">World-class transit and infrastructure</span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
              >
                <Link href="/business-resources#dmc">Learn About DMC</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/hero-business-growth.jpg"
                alt="Destination Medical Center"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Communities CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Explore Our Communities
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              The Rochester MSA includes vibrant communities that offer diverse living and 
              business opportunities. From urban Rochester to charming small towns, find 
              the perfect fit for your needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
            >
              <Link href="/communities">
                View All Communities <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
