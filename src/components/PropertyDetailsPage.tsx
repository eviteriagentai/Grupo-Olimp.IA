import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Home,
  Bath,
  BedDouble,
  Square,
  Calendar,
  Heart,
  Share2,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
  Check,
  Info,
  Sparkles,
} from "lucide-react";
import ColombiaMap from "./ColombiaMap";

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // This would normally be fetched from an API based on the ID
  const property = {
    id: id || "1",
    title: "Modern Apartment with Mountain View",
    address: "Calle 10 #43E-31, El Poblado, Medellín",
    price: 1200000,
    description:
      "This stunning modern apartment offers breathtaking views of the Medellín mountains from its spacious balcony. Located in the heart of El Poblado, this property features high-end finishes, an open floor plan, and access to premium building amenities including a rooftop pool, fitness center, and 24/7 security.",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    yearBuilt: 2019,
    parkingSpots: 1,
    featured: true,
    tags: ["Mountain View", "Pool", "Gym", "Security", "Furnished"],
    amenities: [
      "Swimming Pool",
      "Fitness Center",
      "24/7 Security",
      "Elevator",
      "Parking",
      "Balcony",
      "Air Conditioning",
      "Furnished",
      "High-Speed Internet",
      "Storage Unit",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?w=1200&q=80",
    ],
    agent: {
      name: "Maria Rodriguez",
      phone: "+57 300 123 4567",
      email: "maria@grupoolimpia.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    location: {
      latitude: 6.2476,
      longitude: -75.5658,
    },
    nearbyPlaces: [
      { name: "Parque Lleras", distance: "0.5 km", type: "entertainment" },
      {
        name: "Centro Comercial Santa Fe",
        distance: "1.2 km",
        type: "shopping",
      },
      { name: "Clínica Medellín", distance: "1.8 km", type: "health" },
      { name: "Universidad EAFIT", distance: "2.5 km", type: "education" },
      { name: "Restaurante Carmen", distance: "0.7 km", type: "dining" },
    ],
    matchScore: 98,
    matchReasons: [
      "Matches your El Poblado location preference",
      "Within your budget range",
      "Has your requested amenities: Pool, Furnished",
      "Perfect for your social lifestyle with nearby restaurants and bars",
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
    );
  };

  const handleScheduleVisit = () => {
    navigate(`/schedule-visit/${id}`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
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
      <main className="pt-20 pb-16">
        {/* Property Images Gallery */}
        <div className="relative h-[500px] overflow-hidden bg-gray-100">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          {/* Image Navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>

          {/* Match Score Badge */}
          {property.matchScore && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold px-3 py-1 text-sm animate-pulse">
                <Sparkles className="h-4 w-4 mr-1" />
                {property.matchScore}% Match
              </Badge>
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        <div className="container mx-auto px-4 -mt-12 relative z-10">
          <div className="flex space-x-2 overflow-x-auto pb-2 max-w-4xl mx-auto">
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`w-24 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all ${index === currentImageIndex ? "border-primary" : "border-transparent hover:border-gray-300"}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.address}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(property.price)}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {property.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <BedDouble className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-gray-500">Bedrooms</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Bath className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-gray-500">Bathrooms</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Square className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-gray-500">Area</span>
                  <span className="font-semibold">{property.area} m²</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Home className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-gray-500">Year Built</span>
                  <span className="font-semibold">{property.yearBuilt}</span>
                </div>
              </div>

              {/* Tabs for Details */}
              <Tabs defaultValue="description" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-4">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {property.description}
                    </p>

                    {property.matchReasons && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-semibold flex items-center mb-2">
                          <Sparkles className="h-5 w-5 text-primary mr-2" />
                          Why This Property Matches Your Preferences
                        </h3>
                        <ul className="space-y-2">
                          {property.matchReasons.map((reason, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-4">
                  <div className="rounded-lg overflow-hidden h-[300px] mb-6">
                    <ColombiaMap
                      markers={[
                        {
                          id: property.id,
                          latitude: property.location.latitude,
                          longitude: property.location.longitude,
                          title: property.title,
                          price: property.price,
                        },
                      ]}
                      selectedMarker={property.id}
                      height="300px"
                      width="100%"
                      className="rounded-lg shadow-md"
                    />
                  </div>

                  <h3 className="text-lg font-semibold mb-3">Nearby Places</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.nearbyPlaces.map((place, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-gray-100 p-2 rounded-full mr-3">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{place.name}</div>
                          <div className="text-sm text-gray-500">
                            {place.distance} away
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Agent Card */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={property.agent.image}
                        alt={property.agent.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-gray-500">Property Agent</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <a
                        href={`tel:${property.agent.phone}`}
                        className="text-gray-700 hover:text-primary"
                      >
                        {property.agent.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <a
                        href={`mailto:${property.agent.email}`}
                        className="text-gray-700 hover:text-primary"
                      >
                        {property.agent.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 group"
                      onClick={handleScheduleVisit}
                    >
                      <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Schedule a Visit
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={toggleFavorite}
                    >
                      <Heart
                        className={`mr-2 h-5 w-5 ${isFavorite ? "fill-rose-500 text-rose-500" : ""}`}
                      />
                      {isFavorite ? "Saved to Favorites" : "Save to Favorites"}
                    </Button>

                    <Button variant="ghost" className="w-full">
                      <Share2 className="mr-2 h-5 w-5" />
                      Share Property
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Info Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-primary mr-2" />
                    Property Information
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property ID:</span>
                      <span className="font-medium">{property.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium">Apartment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium text-green-600">
                        Available
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parking:</span>
                      <span className="font-medium">
                        {property.parkingSpots} Spot
                        {property.parkingSpots !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Furnished:</span>
                      <span className="font-medium">Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available From:</span>
                      <span className="font-medium">Immediately</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Monthly Rent</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatPrice(property.price)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        + utilities (approx. 200,000 COP)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              Similar Properties You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Similar Property Cards would go here */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="Similar Property"
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">
                    Luxury Villa with Private Garden
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Laureles, Medellín
                  </p>
                  <p className="text-primary font-bold">
                    {formatPrice(2500000)}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                    alt="Similar Property"
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">
                    Cozy Studio in City Center
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">Centro, Medellín</p>
                  <p className="text-primary font-bold">
                    {formatPrice(800000)}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                    alt="Similar Property"
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">
                    Family Home with Terrace
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Envigado, Medellín
                  </p>
                  <p className="text-primary font-bold">
                    {formatPrice(1800000)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PropertyDetailsPage;
