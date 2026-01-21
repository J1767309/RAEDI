import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Users,
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileText,
} from "lucide-react";

const fundingPrograms = [
  {
    id: "edf",
    icon: DollarSign,
    title: "Economic Development Fund (EDF)",
    amount: "$600,000 Available",
    minLoan: "$50,000 minimum",
    description: "RAEDI has allocated $600,000 in Economic Development Funds to support Base Businesses in the city limits of Rochester. Funding is available as a result of the passage of the half-cent sales tax voted on by the residents of Rochester from 2012.",
    eligibility: [
      "Must be a Base Business in Rochester city limits",
      "Business must create or retain jobs",
      "Must demonstrate economic impact",
      "Funds can be used for expansion, equipment, or working capital",
    ],
    cta: "Apply for EDF",
  },
  {
    id: "eelp",
    icon: Users,
    title: "Emerging Entrepreneur Loan Program",
    amount: "Flexible Amounts",
    minLoan: "Varies by need",
    description: "The Minnesota Emerging Entrepreneur Loan Program provides loan capital for businesses that are owned and operated by BIPOC (Black, Indigenous, Persons of Color), low-income persons, women, veterans, and/or persons with disabilities.",
    eligibility: [
      "Business owned by BIPOC, women, veterans, or persons with disabilities",
      "Low-income business owners",
      "Goals include creating jobs for BIPOC and low-income persons",
      "Promotes economic development in low-income areas",
    ],
    cta: "Learn More",
  },
  {
    id: "sba",
    icon: Building,
    title: "SBA Loan Programs",
    amount: "Up to $5 Million",
    minLoan: "Varies by program",
    description: "Small Business Administration backed loans provide favorable terms for startups and growing businesses. RAEDI can help you navigate the SBA loan process and connect with approved lenders.",
    eligibility: [
      "Must meet SBA size standards",
      "For-profit business operating in the U.S.",
      "Owner must have invested equity",
      "Must demonstrate need for financing",
    ],
    cta: "Explore SBA Loans",
  },
  {
    id: "state",
    icon: TrendingUp,
    title: "State Incentive Programs",
    amount: "Varies by Program",
    minLoan: "Program dependent",
    description: "Minnesota offers various state-level incentive programs including DEED grants, tax credits, and workforce development funding. RAEDI can help identify which programs best fit your business needs.",
    eligibility: [
      "Minnesota DEED Business Development Programs",
      "Job Creation Fund",
      "Minnesota Investment Fund",
      "Greater Minnesota Business Expansion Grants",
    ],
    cta: "View State Programs",
  },
];

const additionalResources = [
  {
    title: "SBDC Business Consulting",
    description: "Free, confidential business consulting services to help you develop your business plan and funding strategy.",
    href: "/business-resources#sbdc",
  },
  {
    title: "Collider Coworking",
    description: "Affordable workspace and networking opportunities for startups and entrepreneurs.",
    href: "/business-resources#collider",
  },
  {
    title: "R.A.V.E. Veteran Program",
    description: "Specialized resources and support for veteran-owned businesses.",
    href: "/business-resources#rave",
  },
];

export default function BusinessFunding() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-business-growth.jpg"
            alt="Business Funding and Growth"
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
              Business Funding
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Whether through loans, grants, or tax incentives, access to sufficient capital 
              is essential when starting and growing your business. Learn more about local 
              and state finance programs available for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Funding Programs */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Funding Programs
            </h2>
            <p className="text-gray-600 text-lg">
              RAEDI offers access to multiple funding sources to help your business grow.
            </p>
          </div>

          <div className="space-y-12">
            {fundingPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                id={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3">
                      <div className="bg-[#1d3557] p-8 text-white">
                        <div className="w-14 h-14 bg-[#D97B4A] rounded-lg flex items-center justify-center mb-6">
                          <program.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-2">
                          {program.title}
                        </h3>
                        <p className="text-[#D97B4A] font-bold text-xl mb-1">
                          {program.amount}
                        </p>
                        <p className="text-gray-300 text-sm">{program.minLoan}</p>
                      </div>
                      <div className="lg:col-span-2 p-8">
                        <p className="text-gray-600 mb-6">{program.description}</p>
                        <div className="mb-6">
                          <h4 className="font-bold font-display text-[#1d3557] mb-3">
                            Eligibility & Uses:
                          </h4>
                          <ul className="space-y-2">
                            {program.eligibility.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#D97B4A] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          asChild
                          className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
                        >
                          <Link href="/contact">
                            {program.cta} <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a Base Business */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold font-display text-[#1d3557]">
                    What is a Base Business?
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  A Base Business is defined as a company that derives more than 50% of its 
                  revenue from outside the Rochester area. These businesses bring new money 
                  into the local economy and are eligible for Economic Development Fund support.
                </p>
                <p className="text-gray-600 mb-6">
                  Examples of Base Businesses include:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Manufacturing companies",
                    "Technology firms",
                    "Healthcare services",
                    "Professional services",
                    "Distribution centers",
                    "Corporate headquarters",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D97B4A]" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
                >
                  <Link href="/contact">Check Your Eligibility</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Additional Resources
            </h2>
            <p className="text-gray-600 text-lg">
              Beyond funding, RAEDI offers comprehensive support services to help your business succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{resource.description}</p>
                    <Link
                      href={resource.href}
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

      {/* CTA Section */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Ready to Explore Your Funding Options?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Our team can help you identify the best funding sources for your business 
              and guide you through the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1d3557] font-display font-semibold"
              >
                <Link href="/business-resources">View All Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
