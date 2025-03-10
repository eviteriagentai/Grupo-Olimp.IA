import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FooterProps {
  companyName?: string;
  companyLogo?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  navigationLinks?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

const Footer = ({
  companyName = "Grupo Olimp.IA",
  companyLogo = "/vite.svg",
  socialLinks = {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  contactInfo = {
    email: "info@grupoolimpia.com",
    phone: "+57 123 456 7890",
    address: "Calle 10 #30-45, El Poblado, Medellín, Colombia",
  },
  navigationLinks = [
    {
      title: "Properties",
      links: [
        { label: "For Rent", href: "/properties" },
        { label: "For Sale", href: "/properties" },
        { label: "New Listings", href: "/properties" },
        { label: "Featured Properties", href: "/properties" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Our Team", href: "/our-team" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Neighborhoods", href: "/neighborhoods" },
        { label: "AI Matching", href: "/ai-matching" },
        { label: "Schedule a Visit", href: "/schedule-visit/1" },
        { label: "Property Details", href: "/property/1" },
      ],
    },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={companyLogo}
                alt={companyName}
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">{companyName}</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for finding the perfect property in Medellín
              with AI-powered matching technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          {navigationLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Get the latest property listings and news delivered to your inbox.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white rounded-r-none focus-visible:ring-primary"
              />
              <Button className="rounded-l-none">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.email && (
              <div className="flex items-center">
                <Mail className="text-primary mr-2" size={18} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            )}
            {contactInfo.phone && (
              <div className="flex items-center">
                <Phone className="text-primary mr-2" size={18} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            )}
            {contactInfo.address && (
              <div className="flex items-center">
                <MapPin className="text-primary mr-2" size={18} />
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
