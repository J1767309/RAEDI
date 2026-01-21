import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Users,
  Briefcase,
  FileText,
  Building,
  TrendingUp,
  Globe,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Financial Packaging",
    description: "Comprehensive financial planning and packaging services for business growth.",
  },
  {
    icon: TrendingUp,
    title: "Direct Investment Funding",
    description: "Access to capital through various investment programs and partnerships.",
  },
  {
    icon: Building,
    title: "Fixed Asset Financing",
    description: "Financing solutions for equipment, facilities, and infrastructure.",
  },
  {
    icon: Globe,
    title: "Export Financing",
    description: "Support for businesses looking to expand into international markets.",
  },
  {
    icon: Briefcase,
    title: "Business Planning",
    description: "Strategic planning and market analysis to guide your business decisions.",
  },
  {
    icon: Users,
    title: "Business/Community Advocacy",
    description: "Representing business interests and supporting community development.",
  },
];

const boardMembers = [
  { name: "Dianna Robinson", title: "Chair", organization: "Associated Bank" },
  { name: "Michell Pyfferoen", title: "Vice Chair", organization: "Rochester Community and Technical College" },
  { name: "John Reed", title: "Secretary/Treasurer", organization: "Rochester International Airport" },
  { name: "Jarett Jones", title: "Immediate Past Chair", organization: "Merchants Bank" },
  { name: "Melissa Brinkman", title: "Member at Large", organization: "Custom Alarm" },
  { name: "Dana Allen-Tully", title: "Board Member", organization: "Gar-Lin Dairy Farms" },
  { name: "John Beatty", title: "Board Member", organization: "Dunlap & Seeger" },
  { name: "Adam Benike", title: "Board Member", organization: "Benike Construction" },
  { name: "Chad DeCook", title: "Board Member", organization: "Think Bank" },
  { name: "Travis Gransee", title: "Board Member", organization: "Olmsted County" },
  { name: "Bruce Gudlin", title: "Board Member", organization: "U.S. Bank" },
  { name: "Julie Henry", title: "Board Member", organization: "Mayo Clinic" },
  { name: "Tim McCollough", title: "Board Member", organization: "Rochester Public Utilities" },
  { name: "Nick Pompeian", title: "Board Member", organization: "Realty Growth, Inc." },
  { name: "Dharani Ramamoorthy", title: "Board Member", organization: "Xylo Technologies, Inc." },
  { name: "Al Roder", title: "Board Member", organization: "City of Byron" },
  { name: "Patrick Seeb", title: "Board Member", organization: "DMC (Destination Medical Center)" },
  { name: "Sam Soukup", title: "Board Member", organization: "Express Personnel Services" },
  { name: "Gwen Stevens", title: "Board Member", organization: "Peoples Energy Cooperative" },
  { name: "Alison Zelms", title: "Board Member", organization: "City of Rochester" },
];

const staff = [
  { name: "John Wade", title: "President", email: "jwade@raedi.com" },
  { name: "Kirk Bustrom", title: "Director of Economic Development", email: "kbustrom@raedi.com" },
  { name: "Tonya Bernard", title: "Director of Business Operations", email: "tbernard@raedi.com" },
  { name: "Molly Schmidt", title: "Director of Marketing and Communications", email: "mschmidt@raedi.com" },
  { name: "Mark Thein", title: "SBDC Director", email: "mthein@rochestersbdc.com" },
  { name: "Julie Herrerra-Lemler", title: "SBDC Program Manager", email: "jlemler@rochestersbdc.com" },
  { name: "Rick Indrelie", title: "SBDC Consultant", email: "rindrelie@rochestersbdc.com" },
];

export default function About() {
  return (
    <div>
      {/* Hero Section - Full Bleed like Homepage */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-community.jpg"
            alt="Rochester Community"
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
              About RAEDI
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Rochester Area Economic Development, Inc. (RAEDI) assists existing and potential 
              businesses in the Rochester area secure the private and public resources needed 
              to execute their growth plans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold font-display text-[#D97B4A]">$2B+</p>
              <p className="text-gray-600 mt-2">Economic Activity</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-display text-[#D97B4A]">30+</p>
              <p className="text-gray-600 mt-2">Years of Service</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-display text-[#D97B4A]">1000+</p>
              <p className="text-gray-600 mt-2">Businesses Helped</p>
            </div>
            <div>
              <p className="text-4xl font-bold font-display text-[#D97B4A]">1000s</p>
              <p className="text-gray-600 mt-2">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#1d3557] rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold font-display text-[#1d3557] mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Lead and support economic, community, and workforce development initiatives 
                    that grow and diversify the greater Rochester area economy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#D97B4A] rounded-lg flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold font-display text-[#1d3557] mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The Rochester area cultivates a healthy economy by providing a welcoming 
                    community environment that supports the growth and attraction of a diversity 
                    of businesses and talent.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              RAEDI Services
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive support services to help businesses succeed in the Rochester area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#1d3557]/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#1d3557]" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#1d3557] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
            >
              <a href="/documents/strategic-work-plan.pdf" target="_blank" rel="noopener noreferrer">
                View 2026-2027 Strategic Work Plan
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Board of Directors
            </h2>
            <p className="text-gray-600 text-lg">
              The RAEDI Board of Directors is a group of member volunteers who financially invest 
              in RAEDI's mission to retain, grow, and diversify the Rochester area economy.
            </p>
          </div>

          {/* Executive Committee */}
          <div className="mb-12">
            <h3 className="text-xl font-bold font-display text-[#1d3557] mb-6 text-center">
              Executive Committee
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {boardMembers.slice(0, 5).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h4 className="font-bold font-display text-[#1d3557]">{member.name}</h4>
                      <p className="text-sm text-[#D97B4A] font-semibold">{member.title}</p>
                      <p className="text-sm text-gray-500 mt-1">{member.organization}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Board Members */}
          <div>
            <h3 className="text-xl font-bold font-display text-[#1d3557] mb-6 text-center">
              Board Members
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {boardMembers.slice(5).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  <h4 className="font-semibold text-[#1d3557] text-sm">{member.name}</h4>
                  <p className="text-xs text-gray-500">{member.organization}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              RAEDI Staff
            </h2>
            <p className="text-gray-600 text-lg">
              Our dedicated team is here to help you succeed in the Rochester area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1d3557] to-[#152a45] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-bold font-display text-[#1d3557] text-lg">{member.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{member.title}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-[#D97B4A] hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors CTA */}
      <section id="investors" className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Become a RAEDI Investor
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Join the businesses and organizations that invest in Rochester's economic future. 
              Your investment supports programs that help businesses grow, create jobs, and 
              strengthen our community.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
            >
              <Link href="/contact">Learn About Investing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
