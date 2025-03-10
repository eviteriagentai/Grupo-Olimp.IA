import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: string;
  image: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  featured: boolean;
  tags: string[];
}

interface FeaturedPropertiesProps {
  title?: string;
  subtitle?: string;
  properties?: Property[];
  onViewDetails?: (id: string) => void;
  onFavorite?: (id: string) => void;
  onViewAll?: () => void;
}

const FeaturedProperties = ({
  title = "Featured Properties",
  subtitle = "Discover our handpicked selection of premium properties in Medellín",
  properties = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      title: "Modern Apartment with Mountain View",
      address: "El Poblado, Medellín",
      price: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      featured: true,
      tags: ["New", "Pool", "Furnished"],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Luxury Villa with Private Garden",
      address: "Laureles, Medellín",
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      featured: true,
      tags: ["Luxury", "Garden", "Security"],
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Cozy Studio in City Center",
      address: "Centro, Medellín",
      price: 800000,
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      featured: true,
      tags: ["Studio", "Central", "Renovated"],
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      title: "Family Home with Terrace",
      address: "Envigado, Medellín",
      price: 1800000,
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      featured: true,
      tags: ["Family", "Terrace", "Parking"],
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      title: "Modern Loft with City Views",
      address: "Belén, Medellín",
      price: 1500000,
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      featured: true,
      tags: ["Loft", "Views", "Modern"],
    },
  ],
  onViewDetails = () => {},
  onFavorite = () => {},
  onViewAll = () => {},
}: FeaturedPropertiesProps) => {
  const [activeTab, setActiveTab] = useState<
    "all" | "apartments" | "houses" | "villas"
  >("all");

  // Filter properties based on active tab
  const filteredProperties = properties.filter((property) => {
    if (activeTab === "all") return true;
    if (activeTab === "apartments")
      return property.tags.some(
        (tag) =>
          tag.toLowerCase().includes("apartment") ||
          property.title.toLowerCase().includes("apartment"),
      );
    if (activeTab === "houses")
      return property.tags.some(
        (tag) =>
          tag.toLowerCase().includes("house") ||
          property.title.toLowerCase().includes("house"),
      );
    if (activeTab === "villas")
      return property.tags.some(
        (tag) =>
          tag.toLowerCase().includes("villa") ||
          property.title.toLowerCase().includes("villa"),
      );
    return true;
  });

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-2">{subtitle}</p>
          </div>

          <div className="flex space-x-2">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
              className="text-sm"
            >
              All
            </Button>
            <Button
              variant={activeTab === "apartments" ? "default" : "outline"}
              onClick={() => setActiveTab("apartments")}
              className="text-sm"
            >
              Apartments
            </Button>
            <Button
              variant={activeTab === "houses" ? "default" : "outline"}
              onClick={() => setActiveTab("houses")}
              className="text-sm"
            >
              Houses
            </Button>
            <Button
              variant={activeTab === "villas" ? "default" : "outline"}
              onClick={() => setActiveTab("villas")}
              className="text-sm"
            >
              Villas
            </Button>
          </div>
        </div>
        {/* Featured Properties Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredProperties.map((property) => (
                <CarouselItem
                  key={property.id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="p-1">
                    <PropertyCard
                      id={property.id}
                      image={property.image}
                      title={property.title}
                      address={property.address}
                      price={property.price}
                      bedrooms={property.bedrooms}
                      bathrooms={property.bathrooms}
                      area={property.area}
                      featured={property.featured}
                      tags={property.tags}
                      onViewDetails={onViewDetails}
                      onFavorite={onFavorite}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-0 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Button variant="outline" onClick={onViewAll} className="group">
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        {/* Testimonial */}
      </div>
    </section>
  );
};

export default FeaturedProperties;
