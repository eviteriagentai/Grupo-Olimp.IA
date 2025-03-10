import React from "react";
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id?: string;
  image?: string;
  title?: string;
  address?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  featured?: boolean;
  tags?: string[];
  onViewDetails?: (id: string) => void;
  onFavorite?: (id: string) => void;
}

const PropertyCard = ({
  id = "1",
  image = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  title = "Modern Apartment with Mountain View",
  address = "El Poblado, Medellín",
  price = 1200000,
  bedrooms = 3,
  bathrooms = 2,
  area = 120,
  featured = false,
  tags = ["New", "Pool", "Furnished"],
  onViewDetails = (id) => {
    window.location.href = `/property/${id}`;
  },
  onFavorite = () => {},
}: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="w-full max-w-[380px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative">
        {featured && (
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 z-10 bg-amber-500 text-white"
          >
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full"
          onClick={() => onFavorite(id)}
        >
          <Heart className="h-5 w-5 text-rose-500" />
        </Button>
        <div className="h-[220px] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="mr-1 h-4 w-4" />
              <span>{address}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary">
              {formatPrice(price)}
            </p>
            <p className="text-xs text-gray-500">per month</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4 text-gray-500" />
            <span className="text-sm">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4 text-gray-500" />
            <span className="text-sm">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="mr-1 h-4 w-4 text-gray-500" />
            <span className="text-sm">{area} m²</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button className="w-full" onClick={() => onViewDetails(id)}>
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
