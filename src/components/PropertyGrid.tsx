import React, { useState } from "react";
import { Search, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

interface PropertyGridProps {
  properties?: Property[];
  isLoading?: boolean;
  onViewDetails?: (id: string) => void;
  onFavorite?: (id: string) => void;
  onSearch?: (query: string) => void;
  onFilter?: (filters: any) => void;
  onSort?: (sortBy: string) => void;
}

const PropertyGrid = ({
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
      featured: false,
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
      featured: false,
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
      featured: false,
      tags: ["Loft", "Views", "Modern"],
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
    },
  ],
  isLoading = false,
  onViewDetails = () => {},
  onFavorite = () => {},
  onSearch = () => {},
  onFilter = () => {},
  onSort = () => {},
}: PropertyGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onSort(value);
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <form
          onSubmit={handleSearch}
          className="relative w-full md:w-auto md:flex-1 max-w-md"
        >
          <Input
            type="text"
            placeholder="Search properties..."
            className="pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" onClick={() => onFilter({})}>
            <SlidersHorizontal className="h-4 w-4" />
          </Button>

          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="rounded-none"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              className="rounded-none"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          {properties.length} properties found
        </p>
      </div>

      {/* Property grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-200 rounded-lg h-[450px]"></div>
          ))}
        </div>
      ) : (
        <div
          className={`
          ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}
        `}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className={viewMode === "list" ? "w-full" : ""}
            >
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
          ))}
        </div>
      )}

      {/* Empty state */}
      {!isLoading && properties.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-gray-100 p-6 rounded-full mb-4">
            <Search className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No properties found</h3>
          <p className="text-gray-500 max-w-md">
            We couldn't find any properties matching your search criteria. Try
            adjusting your filters or search terms.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
