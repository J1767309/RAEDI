import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Navigation structure matching the old RAEDI site exactly
const whoWeAreLinks = [
  { title: "Mission / Vision", href: "/about", description: "Our mission, vision, and services" },
  { title: "Investors", href: "/investors", description: "Our valued partners and supporters" },
  { title: "Partners", href: "/partners", description: "Organizations we work with" },
  { title: "Board of Directors", href: "/board", description: "Meet our leadership team" },
  { title: "Staff", href: "/staff", description: "Our dedicated team members" },
  { title: "RAEDI Foundation", href: "/foundation", description: "Supporting economic development" },
];

const whatWeDoLinks = [
  { title: "Business Funding", href: "/business-funding", description: "Loans, grants, and incentives" },
  { title: "Business Resources", href: "/business-resources", description: "Support for your business" },
  { title: "Economic Development Center", href: "/edc", description: "Our facilities and services" },
  { title: "Small Business Development Center (SBDC)", href: "/sbdc", description: "Free business consulting" },
  { title: "R.A.V.E.", href: "/rave", description: "Rochester Area Veterans Entrepreneurship" },
  { title: "Real Estate/Site Selection", href: "/real-estate", description: "Find the right location" },
];

const whyRochesterLinks = [
  { title: "Communities", href: "/communities", description: "Explore the Rochester MSA" },
  { title: "Demographics", href: "/demographics", description: "Population and workforce data" },
  { title: "DMC", href: "/dmc", description: "Destination Medical Center" },
  { title: "Education", href: "/education", description: "Schools and higher education" },
  { title: "Commercial and Residential", href: "/real-estate", description: "Real estate options" },
  { title: "Infrastructure", href: "/infrastructure", description: "Transportation and utilities" },
  { title: "Major Employers", href: "/major-employers", description: "Leading companies in the region" },
  { title: "Workforce", href: "/workforce", description: "Talent and training programs" },
  { title: "Taxes", href: "/taxes", description: "Tax information and incentives" },
  { title: "Utilities", href: "/utilities", description: "Energy and utility providers" },
  { title: "Things to Do", href: "/things-to-do", description: "Arts, culture, and recreation" },
];

const newsLinks = [
  { title: "Latest News", href: "/news", description: "Latest updates and announcements" },
  { title: "Events", href: "/events", description: "Upcoming events and programs" },
  { title: "E-Blasts", href: "/e-blasts", description: "Monthly newsletter archive" },
  { title: "Quarterly Reports & Surveys", href: "/quarterly-reports", description: "Economic data and reports" },
  { title: "Annual Reports", href: "/annual-reports", description: "Yearly reports and publications" },
  { title: "Community Profile", href: "/community-profile", description: "Rochester MSA data book" },
  { title: "Join Our Newsletter", href: "/newsletter", description: "Subscribe to updates" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location]);

  const isTransparent = !isScrolled;

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Bar */}
      <div 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 text-sm transition-all duration-300",
          isTransparent 
            ? "bg-transparent text-white" 
            : "bg-[#1d3557] text-white"
        )}
      >
        <div className="container flex justify-between items-center py-2 hidden md:flex">
          <div className="flex items-center gap-6">
            <a href="tel:507.288.0208" className="flex items-center gap-2 hover:text-[#D97B4A] transition-colors">
              <Phone className="w-4 h-4" />
              507.288.0208
            </a>
            <a href="mailto:info@raedi.com" className="flex items-center gap-2 hover:text-[#D97B4A] transition-colors">
              <Mail className="w-4 h-4" />
              info@raedi.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-[#D97B4A] transition-colors">
              Contact Us
            </Link>
            <Link href="/property-search" className="hover:text-[#D97B4A] transition-colors">
              Property Search
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300",
          isTransparent
            ? "top-8 md:top-10 bg-transparent py-4"
            : "top-0 md:top-8 bg-white shadow-lg py-3"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/raedi-logo.png" 
              alt="RAEDI - Retain. Grow. Diversify." 
              className={cn(
                "h-12 md:h-14 w-auto transition-all duration-300",
                isTransparent ? "brightness-0 invert" : ""
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-display font-semibold transition-colors",
                      isTransparent 
                        ? "text-white hover:text-[#D97B4A] bg-transparent hover:bg-white/10" 
                        : "text-gray-700 hover:text-[#1d3557]"
                    )}
                  >
                    Who We Are
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-white">
                      {whoWeAreLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none font-display text-gray-900">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-display font-semibold transition-colors",
                      isTransparent 
                        ? "text-white hover:text-[#D97B4A] bg-transparent hover:bg-white/10" 
                        : "text-gray-700 hover:text-[#1d3557]"
                    )}
                  >
                    What We Do
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-white">
                      {whatWeDoLinks.map((link) => (
                        <li key={link.href + link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none font-display text-gray-900">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-display font-semibold transition-colors",
                      isTransparent 
                        ? "text-white hover:text-[#D97B4A] bg-transparent hover:bg-white/10" 
                        : "text-gray-700 hover:text-[#1d3557]"
                    )}
                  >
                    Why Rochester MSA
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-white">
                      {whyRochesterLinks.map((link) => (
                        <li key={link.href + link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none font-display text-gray-900">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "font-display font-semibold transition-colors",
                      isTransparent 
                        ? "text-white hover:text-[#D97B4A] bg-transparent hover:bg-white/10" 
                        : "text-gray-700 hover:text-[#1d3557]"
                    )}
                  >
                    News & Publications
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-white">
                      {newsLinks.map((link) => (
                        <li key={link.href + link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none font-display text-gray-900">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/contact"
              className="ml-4 bg-[#D97B4A] text-white px-5 py-2 rounded-lg font-display font-semibold hover:bg-[#c26a3d] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isTransparent ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="container py-4">
              {/* Who We Are */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown('who-we-are')}
                  className="flex items-center justify-between w-full py-3 text-left font-display font-semibold text-gray-900"
                >
                  Who We Are
                  <ChevronDown className={cn("w-5 h-5 transition-transform", openMobileDropdown === 'who-we-are' && "rotate-180")} />
                </button>
                {openMobileDropdown === 'who-we-are' && (
                  <div className="pb-3 pl-4 space-y-2">
                    {whoWeAreLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="block py-2 text-gray-600 hover:text-[#D97B4A]">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* What We Do */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown('what-we-do')}
                  className="flex items-center justify-between w-full py-3 text-left font-display font-semibold text-gray-900"
                >
                  What We Do
                  <ChevronDown className={cn("w-5 h-5 transition-transform", openMobileDropdown === 'what-we-do' && "rotate-180")} />
                </button>
                {openMobileDropdown === 'what-we-do' && (
                  <div className="pb-3 pl-4 space-y-2">
                    {whatWeDoLinks.map((link) => (
                      <Link key={link.href + link.title} href={link.href} className="block py-2 text-gray-600 hover:text-[#D97B4A]">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Why Rochester MSA */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown('why-rochester')}
                  className="flex items-center justify-between w-full py-3 text-left font-display font-semibold text-gray-900"
                >
                  Why Rochester MSA
                  <ChevronDown className={cn("w-5 h-5 transition-transform", openMobileDropdown === 'why-rochester' && "rotate-180")} />
                </button>
                {openMobileDropdown === 'why-rochester' && (
                  <div className="pb-3 pl-4 space-y-2">
                    {whyRochesterLinks.map((link) => (
                      <Link key={link.href + link.title} href={link.href} className="block py-2 text-gray-600 hover:text-[#D97B4A]">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* News & Publications */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileDropdown('news')}
                  className="flex items-center justify-between w-full py-3 text-left font-display font-semibold text-gray-900"
                >
                  News & Publications
                  <ChevronDown className={cn("w-5 h-5 transition-transform", openMobileDropdown === 'news' && "rotate-180")} />
                </button>
                {openMobileDropdown === 'news' && (
                  <div className="pb-3 pl-4 space-y-2">
                    {newsLinks.map((link) => (
                      <Link key={link.href + link.title} href={link.href} className="block py-2 text-gray-600 hover:text-[#D97B4A]">
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact & Property Search */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/property-search"
                  className="block py-2 text-gray-600 hover:text-[#D97B4A] font-display font-semibold"
                >
                  Property Search
                </Link>
                <Link
                  href="/contact"
                  className="block w-full bg-[#D97B4A] text-white text-center px-5 py-3 rounded-lg font-display font-semibold hover:bg-[#c26a3d] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
