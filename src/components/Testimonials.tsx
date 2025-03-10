import React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  content: string;
  rating: number;
  location: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

const Testimonials = ({
  testimonials = [
    {
      id: "1",
      name: "Maria Rodriguez",
      role: "Property Buyer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      content:
        "The AI matching system found me the perfect apartment in El Poblado that matched all my requirements. I couldn't be happier with my new home!",
      rating: 5,
      location: "El Poblado, Medellín",
    },
    {
      id: "2",
      name: "Carlos Mendoza",
      role: "Rental Client",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      content:
        "I was amazed at how quickly the platform matched me with properties that fit my budget and lifestyle. The process was seamless and stress-free.",
      rating: 5,
      location: "Laureles, Medellín",
    },
    {
      id: "3",
      name: "Sofia Gutierrez",
      role: "International Investor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
      content:
        "As someone investing from abroad, the AI recommendations and virtual tours made the process incredibly easy. I found a great investment property without even visiting Medellín first.",
      rating: 4,
      location: "Envigado, Medellín",
    },
    {
      id: "4",
      name: "Juan Perez",
      role: "Long-term Renter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
      content:
        "The chatbot was incredibly helpful in answering all my questions about different neighborhoods. I found a beautiful apartment in a location I hadn't even considered before.",
      rating: 5,
      location: "Belén, Medellín",
    },
    {
      id: "5",
      name: "Ana Valencia",
      role: "First-time Buyer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      content:
        "As a first-time buyer, I was nervous about the process, but the AI questionnaire helped me clarify what I was looking for. Found my dream home within two weeks!",
      rating: 5,
      location: "Sabaneta, Medellín",
    },
  ],
  title = "What Our Clients Say",
  subtitle = "Hear from satisfied clients who found their perfect properties through our AI-powered platform",
}: TestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
      />
    ));
  };

  return <></>;
};

export default Testimonials;
