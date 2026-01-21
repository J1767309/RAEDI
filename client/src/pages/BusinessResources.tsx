import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Lightbulb,
  Building,
  Users,
  Award,
  ArrowRight,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const resources = [
  {
    id: "sbdc",
    icon: GraduationCap,
    title: "Small Business Development Center (SBDC)",
    tagline: "Free, Confidential Business Consulting",
    description: "The Rochester SBDC provides free, confidential business consulting services to help you start, grow, and succeed. Our experienced consultants offer guidance on business planning, financial analysis, marketing strategies, and more.",
    services: [
      "Business plan development",
      "Financial projections and analysis",
      "Marketing strategy",
      "Access to capital guidance",
      "Government contracting assistance",
      "Export and international trade support",
    ],
    website: "https://rochestersbdc.com",
    cta: "Visit SBDC Website",
  },
  {
    id: "collider",
    icon: Lightbulb,
    title: "Collider Coworking",
    tagline: "Where Innovation Meets Community",
    description: "Collider is Rochester's premier coworking space, providing affordable workspace, networking opportunities, and resources for entrepreneurs and small businesses. Located in the heart of downtown Rochester.",
    services: [
      "Flexible workspace options",
      "Meeting rooms and event space",
      "High-speed internet and amenities",
      "Networking events and workshops",
      "Mentorship opportunities",
      "Access to investor network",
    ],
    website: "https://collidermn.com",
    cta: "Explore Collider",
  },
  {
    id: "dmc",
    icon: Building,
    title: "Destination Medical Center (DMC)",
    tagline: "$5.6 Billion Economic Development Initiative",
    description: "The Destination Medical Center is a 20-year, $5.6 billion economic development initiative designed to position Rochester as the world's premier destination for health and wellness. DMC creates unprecedented opportunities for businesses.",
    services: [
      "Infrastructure investments",
      "Business incentive programs",
      "Real estate development opportunities",
      "Workforce development initiatives",
      "Transit and transportation improvements",
      "Quality of life enhancements",
    ],
    website: "https://dmc.mn",
    cta: "Learn About DMC",
  },
  {
    id: "rave",
    icon: Award,
    title: "R.A.V.E. (Rochester Area Veterans Entrepreneurs)",
    tagline: "Supporting Veteran-Owned Businesses",
    description: "R.A.V.E. is dedicated to supporting veteran entrepreneurs in the Rochester area. The program provides resources, mentorship, and networking opportunities specifically designed for veterans starting or growing businesses.",
    services: [
      "Veteran-specific business consulting",
      "Access to veteran business networks",
      "Mentorship from veteran entrepreneurs",
      "Funding and grant information",
      "Government contracting assistance",
      "Networking events and workshops",
    ],
    website: "#",
    cta: "Learn More",
  },
];

const additionalResources = [
  {
    title: "Economic Development Center",
    description: "The Economic Development Center houses RAEDI, SBDC, and other business support services under one roof.",
    icon: Building,
  },
  {
    title: "Workforce Development",
    description: "Connect with training programs, workforce initiatives, and talent pipeline resources.",
    icon: Users,
  },
  {
    title: "Industry Associations",
    description: "Join industry-specific associations and networks in the Rochester area.",
    icon: Users,
  },
];

const startYourBusiness = [
  {
    step: 1,
    title: "Develop Your Idea",
    description: "Work with SBDC consultants to refine your business concept and create a solid business plan.",
  },
  {
    step: 2,
    title: "Secure Funding",
    description: "Explore funding options including RAEDI programs, SBA loans, and investor networks.",
  },
  {
    step: 3,
    title: "Find Your Space",
    description: "Start at Collider coworking or search for commercial property through RAEDI.",
  },
  {
    step: 4,
    title: "Launch & Grow",
    description: "Access ongoing support, networking, and resources to help your business thrive.",
  },
];

export default function BusinessResources() {
  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/hero-technology.jpg"
            alt="Business Resources and Support"
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
              Business Resources
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Learn more about understanding and overcoming the challenges of starting and 
              running a successful business in Minnesota and the Rochester area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Start Your Business Journey */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Start Your Business Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you're just starting out or looking to grow, we're here to help at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {startYourBusiness.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D97B4A] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl font-display">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#1d3557] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < startYourBusiness.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="space-y-16">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                id={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`bg-[#1d3557] p-8 lg:p-12 text-white ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="w-14 h-14 bg-[#D97B4A] rounded-lg flex items-center justify-center mb-6">
                          <resource.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold font-display mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-[#D97B4A] font-semibold text-lg mb-4">
                          {resource.tagline}
                        </p>
                        <p className="text-gray-200 mb-6">{resource.description}</p>
                        <Button
                          asChild
                          className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
                        >
                          <a href={resource.website} target="_blank" rel="noopener noreferrer">
                            {resource.cta} <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                      <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h4 className="font-bold font-display text-[#1d3557] text-lg mb-6">
                          Services & Resources:
                        </h4>
                        <ul className="space-y-4">
                          {resource.services.map((service, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#D97B4A] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Explore more resources available to businesses in the Rochester area.
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
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#1d3557] rounded-full flex items-center justify-center mx-auto mb-6">
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600">{resource.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Contact us today to learn how we can help you start, grow, or relocate 
              your business in the Rochester area.
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
                className="border-white text-white hover:bg-white hover:text-[#1d3557] font-display font-semibold"
              >
                <Link href="/business-funding">Explore Funding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
