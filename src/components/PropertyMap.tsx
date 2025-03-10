import React, { useState, useEffect, useRef } from "react";
import { MapPin, Home, Search, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: string;
  latitude: number;
  longitude: number;
  price: number;
  title: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  featured: boolean;
}

interface PropertyMapProps {
  properties?: Property[];
  selectedProperty?: string | null;
  onPropertySelect?: (id: string) => void;
  center?: { lat: number; lng: number };
  zoom?: number;
}

const PropertyMap = ({
  properties = [
    {
      id: "1",
      latitude: 6.2476,
      longitude: -75.5658,
      price: 1200000,
      title: "Modern Apartment with Mountain View",
      address: "El Poblado, Medellín",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      featured: true,
    },
    {
      id: "2",
      latitude: 6.2546,
      longitude: -75.5748,
      price: 950000,
      title: "Cozy Studio in Laureles",
      address: "Laureles, Medellín",
      bedrooms: 1,
      bathrooms: 1,
      area: 65,
      featured: false,
    },
    {
      id: "3",
      latitude: 6.2376,
      longitude: -75.5758,
      price: 1500000,
      title: "Luxury Penthouse with City Views",
      address: "El Poblado, Medellín",
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      featured: true,
    },
    {
      id: "4",
      latitude: 6.2506,
      longitude: -75.5628,
      price: 850000,
      title: "Charming Apartment near Parque Lleras",
      address: "El Poblado, Medellín",
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      featured: false,
    },
  ],
  selectedProperty = null,
  onPropertySelect = () => {},
  center = { lat: 6.2476, lng: -75.5658 }, // Medellín center coordinates
  zoom = 14,
}: PropertyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapZoom, setMapZoom] = useState(zoom);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Format price to COP currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Initialize map (in a real implementation, this would use a mapping library like Google Maps or Mapbox)
  useEffect(() => {
    // Simulating map initialization
    setTimeout(() => {
      setIsMapLoaded(true);
      setMapInstance({
        // This would be the actual map instance in a real implementation
        setZoom: (zoom: number) => setMapZoom(zoom),
        getZoom: () => mapZoom,
      });
    }, 500);
  }, []);

  const handleZoomIn = () => {
    if (mapInstance && mapZoom < 20) {
      setMapZoom(mapZoom + 1);
      mapInstance.setZoom(mapZoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapInstance && mapZoom > 1) {
      setMapZoom(mapZoom - 1);
      mapInstance.setZoom(mapZoom - 1);
    }
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-200 bg-white">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white shadow-md hover:bg-gray-100"
          onClick={handleZoomIn}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-white shadow-md hover:bg-gray-100"
          onClick={handleZoomOut}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-white shadow-md hover:bg-gray-100"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-full bg-gray-100"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Loading Indicator */}
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Property Markers */}
        <TooltipProvider>
          {properties.map((property) => {
            const isSelected = selectedProperty === property.id;
            const isHovered = hoveredProperty === property.id;

            // Calculate position based on latitude and longitude
            // In a real implementation, these would be converted to pixel coordinates
            const left = `${((property.longitude + 75.58) * 1000) % 100}%`;
            const top = `${((property.latitude - 6.23) * 1000) % 100}%`;

            return (
              <div
                key={property.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-200 ${isSelected || isHovered ? "scale-110" : ""}`}
                style={{ left, top }}
                onMouseEnter={() => setHoveredProperty(property.id)}
                onMouseLeave={() => setHoveredProperty(null)}
                onClick={() => onPropertySelect(property.id)}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                      flex items-center justify-center w-10 h-10 rounded-full 
                      ${isSelected ? "bg-primary text-white" : "bg-white text-primary"} 
                      shadow-lg cursor-pointer border-2 
                      ${isSelected ? "border-primary" : "border-white"}
                      ${property.featured ? "ring-2 ring-amber-500" : ""}
                    `}
                    >
                      <Home className="h-5 w-5" />
                      {property.featured && (
                        <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-1 py-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="p-0 overflow-hidden">
                    <div className="w-64 bg-white rounded-lg shadow-xl">
                      <div className="p-3">
                        <h3 className="font-semibold text-sm">
                          {property.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <MapPin className="mr-1 h-3 w-3" />
                          <span>{property.address}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm font-bold text-primary">
                            {formatPrice(property.price)}
                          </span>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{property.bedrooms} bd</span>
                            <span>•</span>
                            <span>{property.bathrooms} ba</span>
                            <span>•</span>
                            <span>{property.area} m²</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            );
          })}
        </TooltipProvider>
      </div>

      {/* Map Attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-600 bg-white bg-opacity-70 px-2 py-1 rounded">
        Map data © 2023
      </div>
    </div>
  );
};

export default PropertyMap;
