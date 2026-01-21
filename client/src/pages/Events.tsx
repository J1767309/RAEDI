/**
 * Events Page - News & Publications Section
 * Design: Corporate Precision - Swiss International Style
 */

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const upcomingEvents = [
  {
    title: "RAEDI Annual Meeting 2026",
    date: "February 26, 2026",
    time: "11:30 a.m. – 1:00 p.m.",
    location: "Rochester Event Center",
    description: "Join us for the RAEDI Annual Meeting featuring keynote speaker Craig Culver, Co-Founder of Culver's.",
    featured: true
  },
  {
    title: "Small Business Workshop: Financial Planning",
    date: "March 15, 2026",
    time: "9:00 a.m. – 12:00 p.m.",
    location: "RAEDI Office",
    description: "Learn essential financial planning strategies for small business owners."
  },
  {
    title: "Networking Breakfast",
    date: "April 10, 2026",
    time: "7:30 a.m. – 9:00 a.m.",
    location: "Rochester Golf & Country Club",
    description: "Connect with local business leaders and economic development professionals."
  },
  {
    title: "Entrepreneur Pitch Competition",
    date: "May 20, 2026",
    time: "5:00 p.m. – 8:00 p.m.",
    location: "Collider Coworking",
    description: "Watch local entrepreneurs pitch their business ideas to a panel of investors."
  }
];

const pastEvents = [
  {
    title: "RAEDI Annual Meeting 2025",
    date: "February 27, 2025",
    description: "Featured keynote on economic trends and regional growth opportunities."
  },
  {
    title: "Minnesota 2030 Economic Report Webinar",
    date: "September 29, 2023",
    description: "Minnesota: 2030 Economic Report presented by Minnesota Chamber Foundation."
  },
  {
    title: "Small Business Week Celebration",
    date: "May 2023",
    description: "Week-long celebration recognizing local small businesses and entrepreneurs."
  }
];

export default function Events() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-community.jpg"
            alt="RAEDI Events"
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
              News & Publications
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Events
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Join us for networking events, workshops, and community gatherings 
              focused on economic development in the Rochester area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.filter(e => e.featured).map((event) => (
        <section key={event.title} className="py-12 bg-[#D97B4A]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-between gap-8"
            >
              <div className="text-white">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Event
                </span>
                <h2 className="text-3xl font-bold font-display mb-2">{event.title}</h2>
                <p className="text-white/90 mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {event.location}
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#D97B4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Get Tickets
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these upcoming RAEDI events and programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.filter(e => !e.featured).map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-[#1d3557] rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1d3557] mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-6 font-display">
              Past Events
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1d3557]">{event.title}</h3>
                  <p className="text-sm text-[#D97B4A] mb-1">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Stay Updated
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive event announcements and economic development news.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D97B4A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b86a3d] transition-colors"
            >
              Subscribe Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
