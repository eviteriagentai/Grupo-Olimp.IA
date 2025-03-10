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

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full bg-gray-50 border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary opacity-20 mr-2" />
                    </div>
                    <p className="text-gray-700 mb-6 line-clamp-4">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                          {testimonial.avatar ? (
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                          ) : (
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className="ml-3">
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500">
                            <span>{testimonial.role}</span>
                            <span className="hidden sm:inline mx-2">•</span>
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </div>
        </Carousel>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Join hundreds of satisfied clients who found their perfect property
            match in Medellín
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
