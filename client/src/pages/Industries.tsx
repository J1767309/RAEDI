import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Factory,
  Cpu,
  Utensils,
  ArrowRight,
  Building,
  Users,
  TrendingUp,
} from "lucide-react";

const industries = [
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & Life Sciences",
    image: "/images/hero-healthcare.jpg",
    description: "Rochester is home to Mayo Clinic, consistently ranked as the #1 hospital in the world. This anchor institution has created a thriving ecosystem of healthcare innovation, medical device companies, and life sciences research.",
    stats: [
      { label: "Mayo Clinic Employees", value: "40,000+" },
      { label: "Annual Patients", value: "1.3M+" },
      { label: "Research Spending", value: "$800M+" },
    ],
    highlights: [
      "World-renowned Mayo Clinic campus",
      "Destination Medical Center initiative",
      "Medical device manufacturing cluster",
      "Clinical research and trials",
      "Healthcare IT innovation",
      "Biotech and pharmaceutical presence",
    ],
    companies: ["Mayo Clinic", "Olmsted Medical Center", "Zumbro Valley Health Center"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    image: "/images/hero-manufacturing.jpg",
    description: "The Rochester area has a strong manufacturing tradition, with particular strengths in precision manufacturing, medical devices, and food processing. The region offers skilled workers, competitive costs, and excellent logistics.",
    stats: [
      { label: "Manufacturing Jobs", value: "15,000+" },
      { label: "Manufacturing Companies", value: "200+" },
      { label: "Avg Manufacturing Wage", value: "$65K+" },
    ],
    highlights: [
      "Precision manufacturing expertise",
      "Medical device production",
      "Food processing facilities",
      "Advanced materials",
      "Automation and robotics",
      "Strong supply chain network",
    ],
    companies: ["IBM", "Crenlo", "McNeilus", "Seneca Foods"],
  },
  {
    id: "technology",
    icon: Cpu,
    title: "Technology & Innovation",
    image: "/images/hero-technology.jpg",
    description: "Rochester has a rich technology heritage dating back to IBM's presence in the region. Today, the city is home to a growing ecosystem of tech startups, software companies, and innovation centers.",
    stats: [
      { label: "Tech Workers", value: "10,000+" },
      { label: "Tech Companies", value: "150+" },
      { label: "Patents Per Capita", value: "Top 3" },
    ],
    highlights: [
      "IBM Rochester campus",
      "Software development firms",
      "Healthcare IT companies",
      "Startup ecosystem (Collider)",
      "University research partnerships",
      "High-speed connectivity",
    ],
    companies: ["IBM", "Epic Systems", "Cerner", "Various startups"],
  },
  {
    id: "food-processing",
    icon: Utensils,
    title: "Food Processing & Agriculture",
    image: "/images/hero-community.jpg",
    description: "Southeast Minnesota is a major agricultural region, and Rochester serves as a hub for food processing and agribusiness. The area offers access to raw materials, skilled workers, and transportation infrastructure.",
    stats: [
      { label: "Ag-Related Jobs", value: "5,000+" },
      { label: "Food Processing Plants", value: "25+" },
      { label: "Farmland Acres", value: "500K+" },
    ],
    highlights: [
      "Vegetable processing facilities",
      "Dairy processing",
      "Grain and commodity handling",
      "Agricultural technology",
      "Food safety expertise",
      "Distribution infrastructure",
    ],
    companies: ["Seneca Foods", "Gar-Lin Dairy", "Various cooperatives"],
  },
];

export default function Industries() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-manufacturing.jpg"
            alt="Rochester Industries"
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
              Key Industries
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Located in the southeastern section of Minnesota, the Rochester area's strong 
              diverse economy is built around health care, computer technology, manufacturing, 
              food processing, and convention and tourism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {industries.map((industry, index) => (
              <motion.a
                key={industry.id}
                href={`#${industry.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold font-display text-[#1d3557]">
                      {industry.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Details */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#D97B4A] rounded-lg flex items-center justify-center">
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557]">
                      {industry.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-8">{industry.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {industry.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 bg-white rounded-lg shadow-md">
                        <p className="text-2xl font-bold font-display text-[#D97B4A]">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Highlights */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold font-display text-[#1d3557] mb-6">
                    Industry Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industry.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#D97B4A] rounded-full" />
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-[#1d3557] mb-2">Major Employers:</h4>
                    <p className="text-gray-600">{industry.companies.join(" • ")}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Economic Data Placeholder */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Economic Data Dashboard
            </h2>
            <p className="text-gray-200 text-lg">
              Real-time economic indicators for the Rochester MSA.
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-12 text-center">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                { icon: Users, label: "Labor Force", value: "Coming Soon" },
                { icon: TrendingUp, label: "GDP Growth", value: "Coming Soon" },
                { icon: Building, label: "Business Starts", value: "Coming Soon" },
                { icon: Factory, label: "Manufacturing Index", value: "Coming Soon" },
              ].map((item, index) => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 bg-[#D97B4A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">{item.label}</p>
                  <p className="text-gray-400 text-sm italic">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 italic">
              Interactive dashboard with Bureau of Labor Statistics data coming soon
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-6">
              Ready to Join Rochester's Growing Economy?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're expanding, relocating, or starting a new venture, 
              RAEDI is here to help you succeed in Rochester.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557] hover:text-white font-display font-semibold"
              >
                <Link href="/property-search">Search Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
