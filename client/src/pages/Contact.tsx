import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: ["221 First Ave SW, Suite 600", "Rochester, MN 55902"],
  },
  {
    icon: Phone,
    title: "Phone",
    content: ["507.288.0208"],
    href: "tel:507.288.0208",
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@raedi.com"],
    href: "mailto:info@raedi.com",
  },
  {
    icon: Clock,
    title: "Hours",
    content: ["Monday – Friday", "8:00 am – 5:00 pm"],
  },
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "business-assistance", label: "Business Assistance" },
  { value: "funding", label: "Funding Programs" },
  { value: "property", label: "Property Search" },
  { value: "relocation", label: "Business Relocation" },
  { value: "sbdc", label: "SBDC Services" },
  { value: "media", label: "Media Inquiry" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Hero Section with Clear Visible Image */}
      <section className="hero-section relative min-h-[70vh] flex items-end">
        {/* Hero Image with Zoom Animation */}
        <div className="hero-image-container">
          <img
            src="/images/rochester-hero.jpg"
            alt="Rochester Skyline"
            className="hero-image hero-image-zoom"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d3557]/70 via-transparent to-transparent" />
        
        <div className="container relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md">
              Ready to grow your business in Rochester? Our team is here to help you 
              navigate resources, find funding, and connect with opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold font-display text-[#1d3557] mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(507) 555-0123"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Type of Inquiry *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-[#D97B4A] hover:bg-[#b86a3d] text-white font-display font-semibold"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#1d3557] rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold font-display text-[#1d3557] mb-1">
                            {info.title}
                          </h3>
                          {info.content.map((line, i) => (
                            <p key={i} className="text-gray-600">
                              {info.href ? (
                                <a href={info.href} className="hover:text-[#D97B4A] transition-colors">
                                  {line}
                                </a>
                              ) : (
                                line
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-[#1d3557] mx-auto mb-4" />
                    <p className="text-gray-600">
                      221 First Ave SW, Suite 600<br />
                      Rochester, MN 55902
                    </p>
                    <a
                      href="https://maps.google.com/?q=221+First+Ave+SW+Suite+600+Rochester+MN+55902"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[#D97B4A] font-semibold hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Online Payment CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-display text-[#1d3557] mb-4">
              Need to Make a Payment?
            </h2>
            <p className="text-gray-600 mb-6">
              RAEDI offers secure online payment options for loan payments and other services.
            </p>
            <Button
              className="bg-[#1d3557] hover:bg-[#152a45] text-white font-display font-semibold"
            >
              Online Payment Portal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
