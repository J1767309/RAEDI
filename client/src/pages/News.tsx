import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, FileText, Download } from "lucide-react";

const newsItems = [
  {
    date: "August 2, 2024",
    category: "News",
    title: "Cytotheryx Expands in Rochester",
    excerpt: "Rochester business, Cytotheryx, Inc., is applying for $870,000 in state funding to buy a new lab building and create 22 new jobs in Rochester. After the Rochester City Council voted to support the application, the company is poised for significant growth.",
    image: "/images/hero-healthcare.jpg",
  },
  {
    date: "September 29, 2023",
    category: "Webinar",
    title: "Minnesota 2030 Economic Report",
    excerpt: "Minnesota: 2030 Economic Report presented by Minnesota Chamber Foundation. Webinar hosted by Rochester Area Economic Development, Inc. (RAEDI). This comprehensive report outlines the economic outlook for Minnesota through 2030.",
    image: "/images/hero-technology.jpg",
  },
  {
    date: "August 31, 2023",
    category: "News",
    title: "RAEDI Board Votes to Support Renewal of Sales Tax",
    excerpt: "The Rochester Area Economic Development, Inc. (RAEDI) Board of Directors passed a resolution last week to support the renewal of the city's half-cent sales tax that would continue funding economic development initiatives.",
    image: "/images/hero-business-growth.jpg",
  },
  {
    date: "July 15, 2023",
    category: "Event",
    title: "RAEDI Annual Meeting Highlights Regional Growth",
    excerpt: "The annual RAEDI meeting brought together business leaders, government officials, and community members to celebrate the region's economic achievements and discuss future opportunities.",
    image: "/images/hero-community.jpg",
  },
  {
    date: "June 1, 2023",
    category: "News",
    title: "New Manufacturing Facility Announced",
    excerpt: "A major manufacturing company has announced plans to build a new facility in the Rochester area, bringing hundreds of new jobs and significant investment to the region.",
    image: "/images/hero-manufacturing.jpg",
  },
  {
    date: "May 10, 2023",
    category: "Report",
    title: "Q1 2023 Economic Development Report",
    excerpt: "RAEDI releases its quarterly economic development report highlighting key metrics, business expansions, and workforce development initiatives in the Rochester MSA.",
    image: "/images/rochester-hero.jpg",
  },
];

const publications = [
  { title: "2024 Annual Report", type: "PDF", size: "2.4 MB" },
  { title: "2023 Annual Report", type: "PDF", size: "2.1 MB" },
  { title: "Q4 2024 Economic Report", type: "PDF", size: "1.8 MB" },
  { title: "Q3 2024 Economic Report", type: "PDF", size: "1.6 MB" },
  { title: "2026-2027 Strategic Work Plan", type: "PDF", size: "890 KB" },
];

const upcomingEvents = [
  {
    date: "February 26, 2026",
    time: "11:30 a.m. – 1:00 p.m.",
    title: "RAEDI Annual Meeting",
    location: "Rochester Event Center",
    description: "Keynote Speaker: Craig Culver, Co-Founder of Culver's.",
  },
];

export default function News() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-community.jpg"
            alt="Rochester Community Events"
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
              News & Publications
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Stay updated with the latest economic development news, events, and publications 
              from Rochester Area Economic Development, Inc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-12 bg-[#D97B4A]">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-[#1d3557]">FEB</p>
                  <p className="text-3xl font-bold font-display text-[#1d3557]">26</p>
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold font-display">{upcomingEvents[0].title}</h3>
                  <p className="text-white/80">{upcomingEvents[0].time} • {upcomingEvents[0].location}</p>
                  <p className="text-white/90 mt-1">{upcomingEvents[0].description}</p>
                </div>
              </div>
              <Button
                className="bg-white text-[#D97B4A] hover:bg-gray-100 font-display font-semibold"
              >
                Get Tickets
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Latest News
            </h2>
            <p className="text-gray-600 text-lg">
              Read about the latest developments in Rochester's economic landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D97B4A] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    <button className="inline-flex items-center text-[#D97B4A] font-semibold hover:gap-3 gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557] hover:text-white font-display font-semibold"
            >
              Load More News
            </Button>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Publications List */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold font-display text-[#1d3557] mb-8">
                Publications & Reports
              </h2>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={pub.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold font-display text-[#1d3557]">{pub.title}</h3>
                            <p className="text-sm text-gray-500">{pub.type} • {pub.size}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#D97B4A] hover:text-[#b86a3d] hover:bg-[#D97B4A]/10"
                        >
                          <Download className="w-5 h-5" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <Card className="border-0 shadow-xl bg-[#1d3557] text-white sticky top-24">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-display mb-4">
                    Stay Informed
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Subscribe to our newsletter to receive the latest economic development 
                    news and updates directly in your inbox.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97B4A]"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
                    >
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-gray-400 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
