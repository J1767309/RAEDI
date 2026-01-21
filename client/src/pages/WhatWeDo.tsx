import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Users,
  Building,
  Factory,
  GraduationCap,
  Receipt,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Utilities",
    description: "Minnesota is one of the few states to exempt energy used in the manufacturing process from sales tax. The exemption includes natural gas, electricity and other utilities, providing bottom-line savings to heavy energy users.",
    href: "/what-we-do#utilities",
  },
  {
    icon: Users,
    title: "Demographics",
    description: "The Rochester MSA continually ranks high in polls relating to quality of life and employee productivity. Money magazine reported that the city of Rochester 'radiates cosmopolitan style without big city ills.'",
    href: "/why-rochester#demographics",
  },
  {
    icon: Building,
    title: "Infrastructure",
    description: "The Rochester MSA serves as a regional transportation hub serving southeastern Minnesota, northern Iowa, and western Wisconsin with vital road, rail, and air service links to national and foreign destinations.",
    href: "/why-rochester#infrastructure",
  },
  {
    icon: Factory,
    title: "Major Employers",
    description: "Located in the southeastern section of Minnesota, the Rochester area's strong diverse economy is built around health care, computer technology, manufacturing, food processing, and convention and tourism.",
    href: "/industries",
  },
  {
    icon: GraduationCap,
    title: "Workforce",
    description: "Access to a highly educated and skilled workforce is one of Rochester's greatest assets. The region boasts exceptional educational institutions and training programs.",
    href: "/why-rochester#workforce",
  },
  {
    icon: Receipt,
    title: "Taxes",
    description: "Businesses receive good value for their taxes by having access to solid public infrastructure, quality education, and second-to-none recreational amenities.",
    href: "/what-we-do#taxes",
  },
];

const fundingPrograms = [
  {
    title: "Economic Development Fund (EDF)",
    amount: "$600,000",
    description: "Low-interest loans (minimum $50,000) for Base Businesses in Rochester city limits. Funded by the half-cent sales tax initiative.",
    href: "/business-funding#edf",
  },
  {
    title: "Emerging Entrepreneur Loan Program",
    amount: "Varies",
    description: "Loan capital for businesses owned by BIPOC, low-income persons, women, veterans, and persons with disabilities.",
    href: "/business-funding#eelp",
  },
  {
    title: "SBA Loans",
    amount: "Up to $5M",
    description: "Small Business Administration backed loans for startups and growing businesses.",
    href: "/business-funding#sba",
  },
  {
    title: "State Incentive Programs",
    amount: "Varies",
    description: "Minnesota state programs including DEED grants, tax credits, and workforce development funding.",
    href: "/business-funding#state",
  },
];

export default function WhatWeDo() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-business-growth.jpg"
            alt="Business Growth and Innovation"
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
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Rochester and surrounding communities have been recognized for their collaborative 
              and innovative spirit; ranking number three in patent filings per capita and 
              supporting entrepreneurial communities and start up ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Business Environment
            </h2>
            <p className="text-gray-600 text-lg">
              Discover what makes Rochester an ideal location for your business.
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
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#1d3557] rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[#D97B4A] font-semibold hover:gap-3 gap-2 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Financing Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Whether through loans, grants or tax incentives, access to sufficient capital is 
              essential when starting and growing your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold font-display text-[#1d3557]">
                        {program.title}
                      </h3>
                      <span className="bg-[#D97B4A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {program.amount}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <Link
                      href={program.href}
                      className="inline-flex items-center text-[#1d3557] font-semibold hover:text-[#D97B4A] transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
            >
              <Link href="/business-funding">View All Funding Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Search CTA */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                Property Search
              </h2>
              <p className="text-gray-200 text-lg mb-6">
                RAEDI provides comprehensive commercial real estate listings across the Rochester, 
                Minnesota Metropolitan Statistical Area (MSA).
              </p>
              <p className="text-gray-300 mb-8">
                Whether you're expanding, relocating, or investing, RAEDI connects you with 
                the right opportunities to succeed in this dynamic market.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
              >
                <Link href="/property-search">
                  Search Properties <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/hero-business-growth.jpg"
                alt="Commercial Real Estate"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-6">
              Business Resources
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Learn more about understanding and overcoming the challenges of starting and 
              running a successful business in Minnesota and the Rochester area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
              >
                <Link href="/business-resources">Explore Resources</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#D97B4A] text-[#D97B4A] hover:bg-[#D97B4A] hover:text-white font-display font-semibold"
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
