import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
  Play,
  Briefcase,
  GraduationCap,
  Heart,
  Factory,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: 2, suffix: "B+", label: "Economic Activity Generated", prefix: "$" },
  { value: 30, suffix: "+", label: "Years of Service", prefix: "" },
  { value: 1000, suffix: "+", label: "Businesses Assisted", prefix: "" },
  { value: 600, suffix: "K", label: "EDF Funding Available", prefix: "$" },
];

const services = [
  {
    icon: Building2,
    title: "Who We Are",
    description: "Learn about RAEDI's mission to retain, grow, and diversify the Rochester area economy.",
    href: "/about",
  },
  {
    icon: Briefcase,
    title: "What We Do",
    description: "Discover our programs that help growing and new businesses in Rochester and surrounding communities.",
    href: "/what-we-do",
  },
  {
    icon: MapPin,
    title: "Why Rochester MSA",
    description: "Explore why Rochester offers the finest in business climate, workforce, and quality of life.",
    href: "/why-rochester",
  },
];

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Home to Mayo Clinic, the world's best hospital",
    image: "/images/hero-healthcare.jpg",
    href: "/industries/healthcare",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Advanced manufacturing and food processing hub",
    image: "/images/hero-manufacturing.jpg",
    href: "/industries/manufacturing",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Innovation and entrepreneurship ecosystem",
    image: "/images/hero-technology.jpg",
    href: "/industries/technology",
  },
];

const newsItems = [
  {
    date: "August 2, 2024",
    title: "Cytotheryx Expands in Rochester",
    excerpt: "Rochester business, Cytotheryx, Inc., is applying for $870,000 in state funding to buy a new lab building and create 22 new jobs in Rochester.",
    href: "/news/cytotheryx-expands",
  },
  {
    date: "September 29, 2023",
    title: "Webinar – Minnesota 2030 Economic Report",
    excerpt: "Minnesota: 2030 Economic Report presented by Minnesota Chamber Foundation. Webinar hosted by RAEDI.",
    href: "/news/minnesota-2030",
  },
  {
    date: "August 31, 2023",
    title: "RAEDI Board Supports Sales Tax Renewal",
    excerpt: "The RAEDI Board of Directors passed a resolution to support the renewal of the city's half-cent sales tax.",
    href: "/news/sales-tax-renewal",
  },
];

const rankings = [
  "Top 100 places to live in the U.S. in 2024",
  "Top 25 places to retire in the U.S. in 2024",
  "Ranked 8 out of 25 Best Places to Live in the Midwest in 2024",
  "Minnesota has highest five-year survival rate for new businesses in 2024",
  "World's Best Hospital 2024",
  "Minnesota Ranked in Top 10 States for Business in 2025",
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold font-display text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - GFMEDC Style with Full Bleed Navigation Overlay */}
      <section className="hero-section relative min-h-screen flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/rochester-hero.jpg"
            alt="Rochester Minnesota Skyline at Sunset"
            className="hero-image hero-image-zoom"
          />
        </div>
        
        {/* Very Light Gradient Overlay - Allows Image to Show Through */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557]/70 via-transparent to-transparent" />
        
        {/* Content positioned at bottom */}
        <div className="container relative z-10 pb-32 pt-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#D97B4A] text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
                Rochester Area Economic Development
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white leading-tight mb-6 drop-shadow-lg"
            >
              Retain. Grow.{" "}
              <span className="text-[#D97B4A]">Diversify.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md max-w-2xl"
            >
              Lead and support economic, community, and workforce development initiatives 
              that retain, grow, and diversify the greater Rochester area economy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold text-lg px-8 shadow-lg"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1d3557] font-display font-semibold text-lg px-8 backdrop-blur-sm bg-white/10"
              >
                <Link href="/property-search">Search Properties</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Curved bottom - White */}
      </section>

      {/* Video Section - Embedded YouTube */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
                Discover the RAEDI Ecosystem
              </h2>
              <p className="text-gray-600 text-lg">
                Learn how RAEDI, SBDC, Collider, and DMC work together to support your business
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9AzggRoTxHY?si=lTtWnEDZwBCjp0PK"
                title="RAEDI Ecosystem Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <p className="text-gray-300 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-gray-600 text-lg">
              For over 30 years, RAEDI has been dedicated to driving economic development, 
              supporting local businesses, and creating jobs that power our area's future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Property Search CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-6">
                Find Your Perfect Location
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                RAEDI provides comprehensive commercial real estate listings across the Rochester, 
                Minnesota Metropolitan Statistical Area (MSA). Located in scenic southeast Minnesota, 
                the region is known for its strong economic growth, vibrant communities, and 
                world-renowned healthcare and research institutions.
              </p>
              <p className="text-gray-600 mb-8">
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
                alt="Rochester Commercial Real Estate"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1d3557] text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold font-display">100+</p>
                <p className="text-sm text-gray-300">Available Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
              Key Industries
            </h2>
            <p className="text-gray-600 text-lg">
              Rochester's diverse economy is built around healthcare, technology, and manufacturing, 
              creating a robust ecosystem for business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={industry.href}>
                  <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557] via-[#1d3557]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <industry.icon className="w-6 h-6 text-[#D97B4A]" />
                        <h3 className="text-xl font-bold font-display text-white">
                          {industry.title}
                        </h3>
                      </div>
                      <p className="text-gray-300">{industry.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Programs */}
      <section className="py-20 bg-[#1d3557]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* EDF */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-xl"
            >
              <div className="w-12 h-12 bg-[#D97B4A] rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-[#1d3557] mb-4">
                Economic Development Funding
              </h3>
              <p className="text-gray-600 mb-4">
                RAEDI has allocated <strong>$600,000</strong> in Economic Development Funds (EDF) 
                to support Base Businesses in the city limits of Rochester.
              </p>
              <p className="text-gray-600 mb-6">
                The EDF program offers low-interest loans (minimum $50,000) tailored to meet 
                the needs of local businesses, providing them with the financial resources 
                necessary to thrive and expand.
              </p>
              <Button
                asChild
                className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
              >
                <Link href="/business-funding">Learn More</Link>
              </Button>
            </motion.div>

            {/* EELP */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-xl"
            >
              <div className="w-12 h-12 bg-[#D97B4A] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-[#1d3557] mb-4">
                Emerging Entrepreneur Loan Program
              </h3>
              <p className="text-gray-600 mb-4">
                The Minnesota Emerging Entrepreneur Loan Program provides loan capital for 
                businesses owned and operated by BIPOC, low-income persons, women, veterans, 
                and/or persons with disabilities.
              </p>
              <p className="text-gray-600 mb-6">
                The program promotes economic development in low-income areas and strengthens 
                BIPOC business enterprises throughout the region.
              </p>
              <Button
                asChild
                className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
              >
                <Link href="/business-funding#eelp">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-4">
                Latest News
              </h2>
              <p className="text-gray-600 text-lg">
                Stay updated with the latest economic development news from Rochester.
              </p>
            </div>
            <Link
              href="/news"
              className="hidden md:inline-flex items-center text-[#D97B4A] font-semibold hover:gap-3 gap-2 transition-all"
            >
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <span className="text-sm text-[#D97B4A] font-semibold">{item.date}</span>
                    <h3 className="text-xl font-bold font-display text-[#1d3557] mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-[#1d3557] font-semibold hover:text-[#D97B4A] transition-colors"
                    >
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-[#1d3557] text-[#1d3557]">
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* RAEDI Investors Section */}
      <section className="py-20 bg-[#D97B4A]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              RAEDI Investors
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our investors are the backbone of economic development in the Rochester area
            </p>
          </motion.div>

          {/* Animated Logo Carousel */}
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-investor-scroll">
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 px-4">
                  {[
                    { name: "504 Corporation", logo: "/images/investors/504-corporation.png" },
                    { name: "Altra Federal Credit Union", logo: "/images/investors/altra.png" },
                    { name: "PACE", logo: "/images/investors/pace.png" },
                    { name: "Post Bulletin", logo: "/images/investors/post-bulletin.jpg" },
                    { name: "Premier Bank", logo: "/images/investors/premier-bank.png" },
                    { name: "Think Bank", logo: "/images/investors/think-bank.jpg" },
                    { name: "Express Employment", logo: "/images/investors/express-employment.jpg" },
                    { name: "First Security Bank", logo: "/images/investors/first-security-bank.jpg" },
                    { name: "F&M Community Bank", logo: "/images/investors/fm-bank.jpg" },
                    { name: "Mayo Clinic", logo: "/images/investors/mayo-clinic.jpg" },
                    { name: "Foresight Bank", logo: "/images/investors/foresight-bank.svg" },
                    { name: "US Bank", logo: "/images/investors/us-bank.png" },
                    { name: "People's Energy Cooperative", logo: "/images/investors/peoples-energy.png" },
                    { name: "Rochester Public Utilities", logo: "/images/investors/rpu.png" },
                    { name: "Olmsted County", logo: "/images/investors/olmsted-county.png" },
                    { name: "Rochester Area Chamber", logo: "/images/investors/chamber.png" },
                    { name: "DMC", logo: "/images/investors/dmc.png" },
                    { name: "KTTC", logo: "/images/investors/kttc.jpg" },
                    { name: "MetroNet", logo: "/images/investors/metronet.jpg" },
                    { name: "Powers Ventures", logo: "/images/investors/powers-ventures.webp" },
                  ].map((investor, index) => (
                    <motion.div
                      key={`${setIndex}-${index}`}
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 bg-white rounded-lg p-6 shadow-lg h-24 w-48 flex items-center justify-center"
                    >
                      <img
                        src={investor.logo}
                        alt={investor.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-[#1d3557] font-semibold text-sm text-center">${investor.name}</span>`;
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#D97B4A] font-display font-semibold"
            >
              <Link href="/investors">View All Investors</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Rankings Ticker */}
      <section className="py-4 bg-[#1d3557] overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee">
            {[...rankings, ...rankings, ...rankings].map((ranking, index) => (
              <div key={index} className="flex-shrink-0 px-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <span className="text-white font-semibold whitespace-nowrap text-sm">{ranking}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1d3557] mb-6">
              Ready to Grow Your Business in Rochester?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're starting a new venture, expanding an existing business, or 
              relocating to the Rochester area, RAEDI is here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold text-lg px-8"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#1d3557] text-[#1d3557] hover:bg-[#1d3557] hover:text-white font-display font-semibold text-lg px-8"
              >
                <Link href="/business-resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: fit-content;
        }
        @keyframes investor-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-investor-scroll {
          animation: investor-scroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-investor-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
