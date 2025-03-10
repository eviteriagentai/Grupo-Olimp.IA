import React from "react";
import {
  Building,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: {
    icon: string;
    title: string;
    description: string;
  }[];
  teamMembers?: {
    name: string;
    position: string;
    image: string;
  }[];
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
  };
}

const AboutSection = ({
  title = "About Our AI-Powered Real Estate Agency",
  subtitle = "Revolutionizing Property Matching in Medellín",
  description = "We are a modern real estate agency based in Medellín, Colombia, leveraging artificial intelligence to match renters with their ideal properties. Our team combines local expertise with cutting-edge technology to provide a personalized and efficient property search experience.",
  features = [
    {
      icon: "Building",
      title: "Local Expertise",
      description:
        "Deep knowledge of Medellín's neighborhoods and property market trends.",
    },
    {
      icon: "Users",
      title: "Personalized Service",
      description:
        "Tailored property recommendations based on your unique preferences and needs.",
    },
    {
      icon: "Award",
      title: "AI-Powered Matching",
      description:
        "Advanced algorithms that learn your preferences to find your perfect property match.",
    },
  ],
  teamMembers = [
    {
      name: "Sofia Rodriguez",
      position: "Founder & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
    },
    {
      name: "Carlos Mendoza",
      position: "Head of Technology",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    },
    {
      name: "Isabella Gomez",
      position: "Lead Property Consultant",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
    },
  ],
  contactInfo = {
    address: "Calle 10 #43E-31, El Poblado, Medellín, Colombia",
    phone: "+57 604 123 4567",
    email: "info@medellinai-realty.com",
    website: "www.medellinai-realty.com",
  },
}: AboutSectionProps) => {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Building":
        return <Building className="h-10 w-10 text-primary" />;
      case "Users":
        return <Users className="h-10 w-10 text-primary" />;
      case "Award":
        return <Award className="h-10 w-10 text-primary" />;
      default:
        return <Building className="h-10 w-10 text-primary" />;
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-primary font-medium mb-6">{subtitle}</p>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    {renderIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Team Section */}

        <Separator className="my-8" />
        {/* Contact Information */}
        <div className="grid-cols-1 md:grid-cols-2 gap-8 items-center flex">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              Interested in finding your perfect property in Medellín? Contact
              us today to start your AI-powered property search journey.
            </p>
            <ul className="space-y-4">
              {contactInfo.address && (
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span className="text-gray-700">{contactInfo.address}</span>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">{contactInfo.phone}</span>
                </li>
              )}
              {contactInfo.email && (
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">{contactInfo.email}</span>
                </li>
              )}
              {contactInfo.website && (
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">{contactInfo.website}</span>
                </li>
              )}
            </ul>
            <Button className="mt-8">Contact Us</Button>
          </div>
          <div className="rounded-lg overflow-hidden h-[300px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=800&q=80"
              alt="Medellín cityscape"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
