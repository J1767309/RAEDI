import { Link } from "wouter";
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { title: "About RAEDI", href: "/about" },
  { title: "Business Funding", href: "/business-funding" },
  { title: "Business Resources", href: "/business-resources" },
  { title: "Property Search", href: "/property-search" },
  { title: "Why Rochester", href: "/why-rochester" },
  { title: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { title: "SBDC", href: "/business-resources#sbdc" },
  { title: "Economic Development Center", href: "/business-resources#edc" },
  { title: "Collider", href: "/business-resources#collider" },
  { title: "DMC", href: "/business-resources#dmc" },
  { title: "R.A.V.E.", href: "/business-resources#rave" },
];

const communityLinks = [
  { title: "Rochester", href: "/communities/rochester" },
  { title: "Byron", href: "/communities/byron" },
  { title: "Stewartville", href: "/communities/stewartville" },
  { title: "Kasson", href: "/communities/kasson" },
  { title: "All Communities", href: "/communities" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d3557] text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/raedi-logo.png" 
                alt="RAEDI - Retain. Grow. Diversify." 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Rochester Area Economic Development, Inc. assists existing and potential businesses 
              in the Rochester area secure the private and public resources needed to execute 
              their growth plans.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97B4A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97B4A] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D97B4A] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#D97B4A] transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#D97B4A] transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D97B4A] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>221 First Ave SW, Suite 600</p>
                  <p>Rochester, MN 55902</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D97B4A] flex-shrink-0" />
                <a href="tel:507.288.0208" className="text-sm text-gray-300 hover:text-white transition-colors">
                  507.288.0208
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D97B4A] flex-shrink-0" />
                <a href="mailto:info@raedi.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@raedi.com
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Monday – Friday<br />
                8:00 am – 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rochester Area Economic Development, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
