import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchFilters from "./SearchFilters";
import PropertyMap from "./PropertyMap";
import PropertyGrid from "./PropertyGrid";

interface PropertySearchProps {
  initialView?: "grid" | "map";
  onPropertySelect?: (id: string) => void;
  onSearch?: (filters: any) => void;
  isLoading?: boolean;
}

const PropertySearch = ({
  initialView = "grid",
  onPropertySelect = () => {},
  onSearch = () => {},
  isLoading = false,
}: PropertySearchProps) => {
  const [view, setView] = useState<"grid" | "map">(initialView);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [searchFilters, setSearchFilters] = useState({});

  // Sample properties data
  const properties = [
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
      latitude: 6.2476,
      longitude: -75.5658,
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
      featured: false,
      tags: ["Luxury", "Garden", "Security"],
      latitude: 6.2546,
      longitude: -75.5748,
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
      featured: false,
      tags: ["Studio", "Central", "Renovated"],
      latitude: 6.2376,
      longitude: -75.5758,
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
      latitude: 6.2506,
      longitude: -75.5628,
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
      featured: false,
      tags: ["Loft", "Views", "Modern"],
      latitude: 6.2486,
      longitude: -75.5738,
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      title: "Penthouse with Rooftop Pool",
      address: "El Poblado, Medellín",
      price: 3500000,
      bedrooms: 3,
      bathrooms: 3,
      area: 180,
      featured: true,
      tags: ["Penthouse", "Pool", "Luxury"],
      latitude: 6.2426,
      longitude: -75.5698,
    },
  ];

  const handleSearchFilters = (filters: any) => {
    setSearchFilters(filters);
    onSearch(filters);
    // In a real application, this would filter the properties based on the search criteria
  };

  const handlePropertySelect = (id: string) => {
    setSelectedProperty(id === selectedProperty ? null : id);
    onPropertySelect(id);
  };

  const handleReset = () => {
    setSearchFilters({});
    setSelectedProperty(null);
  };

  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-sm">
      {/* Search Filters */}
      <SearchFilters
        onSearch={handleSearchFilters}
        onReset={handleReset}
        initialFilters={searchFilters}
      />

      {/* View Toggle Tabs */}
      <Tabs
        value={view}
        onValueChange={(value) => setView(value as "grid" | "map")}
        className="mt-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Properties</h2>
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid" className="mt-0">
          <PropertyGrid
            properties={properties}
            isLoading={isLoading}
            onViewDetails={handlePropertySelect}
            onFavorite={(id) => console.log(`Favorited property ${id}`)}
            onSearch={(query) => console.log(`Searching for: ${query}`)}
            onFilter={(filters) => console.log("Additional filters:", filters)}
            onSort={(sortBy) => console.log(`Sorting by: ${sortBy}`)}
          />
        </TabsContent>

        <TabsContent value="map" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-[600px]">
              <PropertyMap
                properties={properties.map((p) => ({
                  id: p.id,
                  latitude: p.latitude,
                  longitude: p.longitude,
                  price: p.price,
                  title: p.title,
                  address: p.address,
                  bedrooms: p.bedrooms,
                  bathrooms: p.bathrooms,
                  area: p.area,
                  featured: p.featured,
                }))}
                selectedProperty={selectedProperty}
                onPropertySelect={handlePropertySelect}
              />
            </div>
            <div className="lg:col-span-1 overflow-y-auto max-h-[600px] pr-2">
              <h3 className="text-lg font-medium mb-4">
                Properties in this area
              </h3>
              <div className="space-y-4">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${selectedProperty === property.id ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"}`}
                    onClick={() => handlePropertySelect(property.id)}
                  >
                    <div className="flex gap-3">
                      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-1">
                          {property.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {property.address}
                        </p>
                        <p className="text-primary font-semibold mt-1">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "COP",
                            maximumFractionDigits: 0,
                          }).format(property.price)}
                        </p>
                        <div className="flex gap-2 mt-1 text-xs text-gray-600">
                          <span>{property.bedrooms} bd</span>
                          <span>•</span>
                          <span>{property.bathrooms} ba</span>
                          <span>•</span>
                          <span>{property.area} m²</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertySearch;
