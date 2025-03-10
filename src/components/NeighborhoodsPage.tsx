import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Search,
  Building,
  Home,
  Coffee,
  Utensils,
  Bike,
  Bus,
  Leaf,
  ShoppingBag,
  School,
  Heart,
} from "lucide-react";

interface Neighborhood {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  walkScore: number;
  transitScore: number;
  safetyScore: number;
  averageRent: number;
  propertyCount: number;
  amenities: {
    restaurants: number;
    cafes: number;
    parks: number;
    schools: number;
    shopping: number;
    transportation: number;
  };
}

const NeighborhoodsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "map">("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteNeighborhoods, setFavoriteNeighborhoods] = useState<string[]>(
    [],
  );

  // Sample neighborhoods data
  const neighborhoods: Neighborhood[] = [
    {
      id: "el-poblado",
      name: "El Poblado",
      description:
        "El Poblado is an upscale, leafy neighborhood known for its restaurants, nightlife, and shopping. It's popular with expats and tourists, offering a cosmopolitan lifestyle.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: ["Upscale", "Expat-friendly", "Nightlife", "Shopping"],
      walkScore: 85,
      transitScore: 70,
      safetyScore: 90,
      averageRent: 2500000,
      propertyCount: 245,
      amenities: {
        restaurants: 120,
        cafes: 85,
        parks: 12,
        schools: 8,
        shopping: 35,
        transportation: 18,
      },
    },
    {
      id: "laureles",
      name: "Laureles",
      description:
        "Laureles is a middle to upper-class residential area with tree-lined streets, parks, and a more authentic Colombian feel. It's known for its excellent urban planning.",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
      highlights: ["Residential", "Local vibe", "Well-planned", "Parks"],
      walkScore: 92,
      transitScore: 85,
      safetyScore: 85,
      averageRent: 1800000,
      propertyCount: 187,
      amenities: {
        restaurants: 95,
        cafes: 65,
        parks: 18,
        schools: 12,
        shopping: 25,
        transportation: 22,
      },
    },
    {
      id: "envigado",
      name: "Envigado",
      description:
        "Envigado is a separate municipality that borders Medellín, offering a quieter, more residential atmosphere with excellent infrastructure and a strong sense of community.",
      image:
        "https://images.unsplash.com/photo-1595880375954-07804a561f61?w=800&q=80",
      highlights: ["Quiet", "Family-friendly", "Community", "Infrastructure"],
      walkScore: 80,
      transitScore: 75,
      safetyScore: 88,
      averageRent: 1600000,
      propertyCount: 156,
      amenities: {
        restaurants: 75,
        cafes: 55,
        parks: 22,
        schools: 15,
        shopping: 18,
        transportation: 16,
      },
    },
    {
      id: "belen",
      name: "Belén",
      description:
        "Belén is a traditional, middle-class neighborhood with a strong local character. It offers good value for money and is becoming increasingly popular with foreigners looking for an authentic experience.",
      image:
        "https://images.unsplash.com/photo-1595880723089-69933d1ff663?w=800&q=80",
      highlights: ["Traditional", "Affordable", "Local character", "Authentic"],
      walkScore: 78,
      transitScore: 82,
      safetyScore: 75,
      averageRent: 1200000,
      propertyCount: 132,
      amenities: {
        restaurants: 65,
        cafes: 40,
        parks: 15,
        schools: 18,
        shopping: 22,
        transportation: 25,
      },
    },
    {
      id: "sabaneta",
      name: "Sabaneta",
      description:
        "Sabaneta is a smaller municipality south of Medellín known for its relaxed pace of life, friendly locals, and traditional Colombian atmosphere. It's growing in popularity while maintaining its charm.",
      image:
        "https://images.unsplash.com/photo-1595880723089-69933d1ff663?w=800&q=80",
      highlights: ["Relaxed", "Traditional", "Friendly", "Growing"],
      walkScore: 75,
      transitScore: 70,
      safetyScore: 85,
      averageRent: 1400000,
      propertyCount: 98,
      amenities: {
        restaurants: 55,
        cafes: 35,
        parks: 12,
        schools: 10,
        shopping: 15,
        transportation: 12,
      },
    },
    {
      id: "el-centro",
      name: "El Centro",
      description:
        "El Centro is Medellín's downtown area, bustling with commerce, history, and culture. It's vibrant during the day but requires caution at night. It offers an authentic urban experience.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: ["Urban", "Historic", "Cultural", "Commercial"],
      walkScore: 95,
      transitScore: 90,
      safetyScore: 60,
      averageRent: 900000,
      propertyCount: 112,
      amenities: {
        restaurants: 110,
        cafes: 75,
        parks: 8,
        schools: 5,
        shopping: 45,
        transportation: 30,
      },
    },
  ];

  const filteredNeighborhoods = neighborhoods.filter(
    (neighborhood) =>
      neighborhood.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      neighborhood.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );

  const toggleFavorite = (id: string) => {
    setFavoriteNeighborhoods((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />
      {/* Main Content with padding for fixed header */}
      <main className="pt-20">
        {/* Hero Banner */}
        <div className="relative h-[300px] bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Medellín's Neighborhoods
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore the unique character and charm of Medellín's diverse
              neighborhoods
            </p>
          </div>
        </div>
        {/* Search and Tabs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div className="relative w-full md:w-auto md:flex-1 max-w-md">
                <Input
                  type="text"
                  placeholder="Search neighborhoods..."
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
              </div>

              <Tabs
                value={activeTab}
                onValueChange={(value) =>
                  setActiveTab(value as "overview" | "map")
                }
              >
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="map">Map View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className={"py-12 bg-white"}>
              <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
                <div className={"text-center mb-10"}>
                  <h2 className={"text-3xl font-bold mb-4"}>
                    Medellín Neighborhood Guide
                  </h2>
                  <p className={"text-lg text-gray-600 max-w-3xl mx-auto"}>
                    Learn about the unique character and lifestyle of each
                    neighborhood to find your perfect match
                  </p>
                </div>
                <div
                  className={
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  }
                >
                  <Card
                    className={
                      "rounded-xl border bg-card text-card-foreground shadow hover:shadow-md transition-shadow duration-300"
                    }
                  >
                    <CardContent className={"p-6"}>
                      <div className={"flex flex-col items-center text-center"}>
                        <div className={"p-3 bg-primary/10 rounded-full mb-4"}>
                          <Home
                            xmlns={"http://www.w3.org/2000/svg"}
                            width={24}
                            height={24}
                            viewBox={"0 0 24 24"}
                            fill={"none"}
                            stroke={"currentColor"}
                            strokeWidth={2}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            className={
                              "lucide lucide-home h-8 w-8 text-primary"
                            }
                          ></Home>
                        </div>
                        <h3 className={"text-lg font-semibold mb-2"}>
                          For Families
                        </h3>
                        <p className={"text-gray-600"}>
                          Discover family-friendly neighborhoods with great
                          schools, parks, and safe streets.
                        </p>
                        <Link
                          className={
                            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                          }
                          to="/neighborhood-guides/families"
                        >
                          View Guide
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className={
                      "rounded-xl border bg-card text-card-foreground shadow hover:shadow-md transition-shadow duration-300"
                    }
                  >
                    <CardContent className={"p-6"}>
                      <div className={"flex flex-col items-center text-center"}>
                        <div className={"p-3 bg-primary/10 rounded-full mb-4"}>
                          <Building
                            xmlns={"http://www.w3.org/2000/svg"}
                            width={24}
                            height={24}
                            viewBox={"0 0 24 24"}
                            fill={"none"}
                            stroke={"currentColor"}
                            strokeWidth={2}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            className={
                              "lucide lucide-building h-8 w-8 text-primary"
                            }
                          ></Building>
                        </div>
                        <h3 className={"text-lg font-semibold mb-2"}>
                          For Professionals
                        </h3>
                        <p className={"text-gray-600"}>
                          Find neighborhoods with great connectivity, coworking
                          spaces, and urban amenities.
                        </p>
                        <Link
                          className={
                            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                          }
                          to="/neighborhood-guides/professionals"
                        >
                          View Guide
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className={
                      "rounded-xl border bg-card text-card-foreground shadow hover:shadow-md transition-shadow duration-300"
                    }
                  >
                    <CardContent className={"p-6"}>
                      <div className={"flex flex-col items-center text-center"}>
                        <div className={"p-3 bg-primary/10 rounded-full mb-4"}>
                          <Coffee
                            xmlns={"http://www.w3.org/2000/svg"}
                            width={24}
                            height={24}
                            viewBox={"0 0 24 24"}
                            fill={"none"}
                            stroke={"currentColor"}
                            strokeWidth={2}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            className={
                              "lucide lucide-coffee h-8 w-8 text-primary"
                            }
                          ></Coffee>
                        </div>
                        <h3 className={"text-lg font-semibold mb-2"}>
                          For Lifestyle
                        </h3>
                        <p className={"text-gray-600"}>
                          Explore neighborhoods with vibrant nightlife,
                          restaurants, and cultural attractions.
                        </p>
                        <Link
                          className={
                            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                          }
                          to="/neighborhood-guides/lifestyle"
                        >
                          View Guide
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className={
                      "rounded-xl border bg-card text-card-foreground shadow hover:shadow-md transition-shadow duration-300"
                    }
                  >
                    <CardContent className={"p-6"}>
                      <div className={"flex flex-col items-center text-center"}>
                        <div className={"p-3 bg-primary/10 rounded-full mb-4"}>
                          <Bike
                            xmlns={"http://www.w3.org/2000/svg"}
                            width={24}
                            height={24}
                            viewBox={"0 0 24 24"}
                            fill={"none"}
                            stroke={"currentColor"}
                            strokeWidth={2}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            className={
                              "lucide lucide-bike h-8 w-8 text-primary"
                            }
                          ></Bike>
                        </div>
                        <h3 className={"text-lg font-semibold mb-2"}>
                          For Active Living
                        </h3>
                        <p className={"text-gray-600"}>
                          Discover neighborhoods with parks, cycling paths, and
                          outdoor recreation options.
                        </p>
                        <Link
                          className={
                            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                          }
                          to="/neighborhood-guides/active-living"
                        >
                          View Guide
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Neighborhoods Content */}
        <div className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs
              value={activeTab}
              onValueChange={(value) =>
                setActiveTab(value as "overview" | "map")
              }
            >
              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNeighborhoods.map((neighborhood) => (
                    <Card
                      key={neighborhood.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={neighborhood.image}
                          alt={neighborhood.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full"
                          onClick={() => toggleFavorite(neighborhood.id)}
                        >
                          <Heart
                            className={`h-5 w-5 ${favoriteNeighborhoods.includes(neighborhood.id) ? "fill-rose-500 text-rose-500" : "text-gray-500"}`}
                          />
                        </Button>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold">
                            {neighborhood.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>Medellín</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {neighborhood.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {neighborhood.highlights.map((highlight, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-gray-100"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <div className="text-lg font-semibold">
                              {neighborhood.walkScore}
                            </div>
                            <div className="text-xs text-gray-500">
                              Walk Score
                            </div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <div className="text-lg font-semibold">
                              {neighborhood.transitScore}
                            </div>
                            <div className="text-xs text-gray-500">Transit</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <div className="text-lg font-semibold">
                              {neighborhood.safetyScore}
                            </div>
                            <div className="text-xs text-gray-500">Safety</div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Building className="mr-1 h-4 w-4" />
                            <span>{neighborhood.propertyCount} Properties</span>
                          </div>
                          <div className="font-medium text-primary">
                            Avg. {formatPrice(neighborhood.averageRent)}/mo
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="flex flex-col items-center text-center p-2">
                            <Utensils className="h-4 w-4 text-gray-500 mb-1" />
                            <span className="text-xs">
                              {neighborhood.amenities.restaurants}
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-center p-2">
                            <Coffee className="h-4 w-4 text-gray-500 mb-1" />
                            <span className="text-xs">
                              {neighborhood.amenities.cafes}
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-center p-2">
                            <Leaf className="h-4 w-4 text-gray-500 mb-1" />
                            <span className="text-xs">
                              {neighborhood.amenities.parks}
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-center p-2">
                            <School className="h-4 w-4 text-gray-500 mb-1" />
                            <span className="text-xs">
                              {neighborhood.amenities.schools}
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-center p-2">
                            <ShoppingBag className="h-4 w-4 text-gray-500 mb-1" />
                            <span className="text-xs">
                              {neighborhood.amenities.shopping}
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-center p-2">
                            <Bus className="h-4 w-4 text-gray-500 mb-1" />
                            <span className="text-xs">
                              {neighborhood.amenities.transportation}
                            </span>
                          </div>
                        </div>

                        <Button className="w-full">View Properties</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="map" className="mt-0">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">
                        Interactive Map
                      </h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Explore Medellín's neighborhoods on our interactive map.
                        Click on a neighborhood to see properties and details.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        {/* Neighborhood Guide */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NeighborhoodsPage;
