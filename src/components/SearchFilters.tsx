import React, { useState } from "react";
import { Search, MapPin, Home, Building, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  onSearch?: (filters: SearchFilters) => void;
  onReset?: () => void;
  initialFilters?: SearchFilters;
}

export interface SearchFilters {
  location?: string;
  propertyType?: string;
  priceRange?: [number, number];
  bedrooms?: string;
  bathrooms?: string;
  amenities?: string[];
}

const SearchFilters = ({
  onSearch = () => {},
  onReset = () => {},
  initialFilters = {
    location: "",
    propertyType: "any",
    priceRange: [500000, 5000000],
    bedrooms: "any",
    bathrooms: "any",
    amenities: [],
  },
}: SearchFiltersProps) => {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [expanded, setExpanded] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, location: e.target.value });
    updateActiveFilters("location", e.target.value);
  };

  const handlePropertyTypeChange = (value: string) => {
    setFilters({ ...filters, propertyType: value });
    updateActiveFilters("propertyType", value !== "any" ? value : "");
  };

  const handlePriceRangeChange = (value: [number]) => {
    setFilters({
      ...filters,
      priceRange: [filters.priceRange?.[0] || 500000, value[0]],
    });
    updateActiveFilters(
      "priceRange",
      value[0] > 500000 ? `Up to ${formatPrice(value[0])}` : "",
    );
  };

  const handleBedroomsChange = (value: string) => {
    setFilters({ ...filters, bedrooms: value });
    updateActiveFilters("bedrooms", value !== "any" ? `${value} Beds` : "");
  };

  const handleBathroomsChange = (value: string) => {
    setFilters({ ...filters, bathrooms: value });
    updateActiveFilters("bathrooms", value !== "any" ? `${value} Baths` : "");
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const updatedAmenities = checked
      ? [...(filters.amenities || []), amenity]
      : (filters.amenities || []).filter((a) => a !== amenity);

    setFilters({ ...filters, amenities: updatedAmenities });
    updateActiveFilters(
      "amenities",
      updatedAmenities.length > 0 ? `${updatedAmenities.length} Amenities` : "",
    );
  };

  const updateActiveFilters = (key: string, value: string) => {
    if (value) {
      setActiveFilters((prev) => {
        const filtered = prev.filter((filter) => !filter.startsWith(key));
        return [...filtered, `${key}:${value}`];
      });
    } else {
      setActiveFilters((prev) =>
        prev.filter((filter) => !filter.startsWith(`${key}:`)),
      );
    }
  };

  const removeFilter = (filter: string) => {
    const [key] = filter.split(":");

    switch (key) {
      case "location":
        setFilters({ ...filters, location: "" });
        break;
      case "propertyType":
        setFilters({ ...filters, propertyType: "any" });
        break;
      case "priceRange":
        setFilters({ ...filters, priceRange: [500000, 5000000] });
        break;
      case "bedrooms":
        setFilters({ ...filters, bedrooms: "any" });
        break;
      case "bathrooms":
        setFilters({ ...filters, bathrooms: "any" });
        break;
      case "amenities":
        setFilters({ ...filters, amenities: [] });
        break;
    }

    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  const handleReset = () => {
    setFilters(initialFilters);
    setActiveFilters([]);
    onReset();
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        {/* Location Search */}
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by location, neighborhood..."
            className="pl-9 w-full"
            value={filters.location}
            onChange={handleLocationChange}
          />
        </div>

        {/* Property Type */}
        <div className="w-full md:w-48">
          <Select
            value={filters.propertyType}
            onValueChange={handlePropertyTypeChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filters Toggle */}
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setExpanded(!expanded)}
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
          {activeFilters.length > 0 && (
            <Badge variant="secondary" className="ml-1">
              {activeFilters.length}
            </Badge>
          )}
        </Button>

        {/* Search Button */}
        <Button onClick={handleSearch} className="w-full md:w-auto">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {activeFilters.map((filter) => {
            const [key, value] = filter.split(":");
            return (
              <Badge
                key={filter}
                variant="outline"
                className="bg-gray-100 flex items-center gap-1"
              >
                {value}
                <button
                  onClick={() => removeFilter(filter)}
                  className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-xs"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Expanded Filters */}
      {expanded && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium mb-2">Price Range</h3>
            <div className="space-y-4">
              <Slider
                defaultValue={[filters.priceRange?.[1] || 5000000]}
                max={10000000}
                step={100000}
                onValueChange={handlePriceRangeChange as any}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{formatPrice(500000)}</span>
                <span>{formatPrice(filters.priceRange?.[1] || 5000000)}</span>
              </div>
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Bedrooms</h3>
              <Select
                value={filters.bedrooms}
                onValueChange={handleBedroomsChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Bathrooms</h3>
              <Select
                value={filters.bathrooms}
                onValueChange={handleBathroomsChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-sm font-medium mb-2">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Pool",
                "Gym",
                "Parking",
                "Balcony",
                "Furnished",
                "Security",
                "Elevator",
                "Air Conditioning",
              ].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={`amenity-${amenity}`}
                    checked={(filters.amenities || []).includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, checked === true)
                    }
                  />
                  <label
                    htmlFor={`amenity-${amenity}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
