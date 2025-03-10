import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Music,
  Utensils,
  Wine,
  Coffee,
  Ticket,
  Bus,
  ArrowLeft,
  ArrowRight,
  Heart,
  Star,
  Clock,
  Camera,
} from "lucide-react";
import ColombiaMap from "../ColombiaMap";

const LifestyleGuide: React.FC = () => {
  const lifestyleNeighborhoods = [
    {
      id: "el-poblado",
      name: "El Poblado",
      description:
        "El Poblado is the epicenter of Medellín's nightlife and restaurant scene. This upscale neighborhood is home to Parque Lleras, the city's most famous entertainment district, with countless bars, clubs, restaurants, and cafes. It's the go-to area for those seeking vibrant nightlife and international cuisine.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: [
        "Nightlife Hub",
        "International Cuisine",
        "Upscale",
        "Expat-friendly",
      ],
      averageRent: 2500000,
      restaurants: [
        "Carmen (High-end Colombian)",
        "Oci.Mde (Mediterranean)",
        "El Cielo (Molecular gastronomy)",
        "Mondongo's (Traditional Colombian)",
      ],
      bars: [
        "Vintrash (Alternative/Rock)",
        "Envy Rooftop (Upscale)",
        "La Octava (Craft beer)",
        "Calle 9+1 (Salsa)",
      ],
      cafes: ["Pergamino Café", "Velvet Café", "Café Zeppelin", "Al Alma Café"],
      culturalSpots: [
        "Museo de Arte Moderno (MAMM)",
        "Teatro Metropolitano",
        "Parque Lleras",
        "Provenza art galleries",
      ],
      transportation: [
        "Poblado Metro Station",
        "Integrated bus routes",
        "Taxi services",
        "Uber and DiDi availability",
      ],
      latitude: 6.2086,
      longitude: -75.5659,
    },
    {
      id: "laureles",
      name: "Laureles",
      description:
        "Laureles offers a more authentic Colombian nightlife experience than El Poblado, with a great mix of traditional and modern venues. La 70 (Carrera 70) is the main entertainment strip, lined with bars, restaurants, and clubs that cater more to locals. The area has a relaxed vibe with excellent food options and more affordable prices.",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
      highlights: ["Local vibe", "Authentic", "Affordable", "Sports bars"],
      averageRent: 1800000,
      restaurants: [
        "Mondongo's (Traditional Colombian)",
        "Il Castello (Italian)",
        "Hacienda (Colombian steakhouse)",
        "Sushi Market (Japanese)",
      ],
      bars: [
        "La Tienda de La 70 (Traditional/Crossover)",
        "El Deck (Sports bar)",
        "Beer Station (Craft beer)",
        "Son Havana (Salsa)",
      ],
      cafes: [
        "Café Revolución",
        "Café Cliché",
        "Rituales Café",
        "Café Vallejo",
      ],
      culturalSpots: [
        "Primer Parque de Laureles",
        "Segundo Parque de Laureles",
        "Estadio Atanasio Girardot",
        "Universidad Pontificia Bolivariana",
      ],
      transportation: [
        "Estadio Metro Station",
        "Floresta Metro Station",
        "Integrated bus routes",
        "Taxi services",
      ],
      latitude: 6.2546,
      longitude: -75.5748,
    },
    {
      id: "provenza",
      name: "Provenza",
      description:
        "Provenza is a trendy sub-neighborhood within El Poblado that has become Medellín's hippest area for dining, shopping, and nightlife. It features tree-lined streets with boutique shops, artisanal cafes, gourmet restaurants, and stylish bars. The area attracts a fashionable crowd and is perfect for those seeking a sophisticated lifestyle experience.",
      image:
        "https://images.unsplash.com/photo-1582653291997-079b4f1c9696?w=800&q=80",
      highlights: ["Trendy", "Boutique", "Gourmet", "Fashion"],
      averageRent: 2700000,
      restaurants: [
        "Oci.Mde (Mediterranean)",
        "Moshi (Asian fusion)",
        "Bárbaro (Meat specialists)",
        "Lemuria (International)",
      ],
      bars: [
        "Cervecería Libre (Craft beer)",
        "Woka Lounge (Cocktails)",
        "Panorama Rooftop Bar",
        "Burdo (Bar & Restaurant)",
      ],
      cafes: [
        "Pergamino Café",
        "Hija Mía Coffee Roasters",
        "Café Zeppelin",
        "Urbania Café",
      ],
      culturalSpots: [
        "Art galleries",
        "Design shops",
        "Fashion boutiques",
        "Weekend artisanal markets",
      ],
      transportation: [
        "Close to Poblado Metro Station",
        "Taxi services",
        "Uber and DiDi availability",
        "Walking distance to many attractions",
      ],
      latitude: 6.2106,
      longitude: -75.5689,
    },
    {
      id: "manila",
      name: "Manila",
      description:
        "Manila is a small but vibrant neighborhood adjacent to El Poblado, offering a slightly more relaxed alternative to Parque Lleras while still providing excellent nightlife options. It's becoming increasingly popular for its diverse dining scene, cozy bars, and boutique hotels. The area attracts both tourists and locals looking for quality entertainment without the intense crowds.",
      image:
        "https://images.unsplash.com/photo-1595880375954-07804a561f61?w=800&q=80",
      highlights: ["Relaxed", "Diverse dining", "Boutique", "Up-and-coming"],
      averageRent: 2300000,
      restaurants: [
        "Alambique (Colombian fusion)",
        "Botanika (Vegetarian/Vegan)",
        "La Provincia (Italian)",
        "Naan (Indian)",
      ],
      bars: [
        "Tres Cordilleras (Brewery)",
        "El Social (Cocktail bar)",
        "Kabala (Lounge)",
        "La Pascasia (Art bar)",
      ],
      cafes: [
        "Café de los Andes",
        "Café Macanas",
        "Juan Valdez Café",
        "Starbucks",
      ],
      culturalSpots: [
        "Casa Teatro El Poblado",
        "Lokkus Arte Contemporáneo",
        "Boutique galleries",
        "Design stores",
      ],
      transportation: [
        "Walking distance to Poblado Metro Station",
        "Taxi services",
        "Uber and DiDi availability",
        "Integrated bus routes",
      ],
      latitude: 6.2126,
      longitude: -75.5679,
    },
  ];

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
        <div className="relative h-[300px] bg-gradient-to-r from-rose-500/90 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lifestyle & Nightlife Neighborhoods in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the best areas for dining, entertainment, and vibrant
              cultural experiences
            </p>
          </div>
        </div>
        {/* Back to Neighborhoods */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/neighborhoods")}
              className="flex items-center text-gray-600 hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Neighborhoods
            </Button>
          </div>
        </div>
        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Experience Medellín's Vibrant Culture
              </h2>
              <p className="text-lg text-gray-600">
                Medellín offers a rich tapestry of entertainment options, from
                world-class dining and pulsating nightlife to charming cafes and
                cultural venues. The city's perfect climate allows for
                year-round outdoor activities, making it an ideal destination
                for those seeking a vibrant lifestyle in a beautiful setting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-rose-700">
                  <Utensils className="mr-2 h-5 w-5" />
                  Culinary Scene
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín's food scene has exploded in recent years, offering
                  everything from traditional Colombian cuisine to international
                  fine dining. The city is home to several award-winning
                  restaurants and a growing number of innovative chefs pushing
                  culinary boundaries.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-rose-600"></span>
                    </span>
                    <span>
                      Traditional Colombian: Bandeja Paisa, Mondongo, Arepas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-rose-600"></span>
                    </span>
                    <span>
                      International cuisine: Italian, Japanese, Peruvian fusion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rose-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-rose-600"></span>
                    </span>
                    <span>Growing vegetarian and vegan restaurant options</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-amber-700">
                  <Music className="mr-2 h-5 w-5" />
                  Nightlife & Entertainment
                </h3>
                <p className="text-gray-700 mb-4">
                  From salsa clubs and electronic music venues to craft beer
                  bars and rooftop lounges, Medellín offers diverse nightlife
                  options. Each neighborhood has its own unique vibe, catering
                  to different tastes and preferences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-amber-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-amber-600"></span>
                    </span>
                    <span>
                      Parque Lleras: The main nightlife hub with dozens of
                      venues
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-amber-600"></span>
                    </span>
                    <span>
                      La 70: More authentic Colombian nightlife experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-amber-600"></span>
                    </span>
                    <span>Growing craft beer scene with local breweries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Neighborhood Map */}

        {/* Neighborhood Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Top Neighborhoods for Lifestyle & Entertainment
            </h2>

            <div className="space-y-12">
              {lifestyleNeighborhoods.map((neighborhood, index) => (
                <div
                  key={neighborhood.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full relative">
                        <img
                          src={neighborhood.image}
                          alt={neighborhood.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-rose-600 text-white font-bold px-3 py-1">
                            Lifestyle Hotspot
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {neighborhood.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>Medellín, Colombia</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">
                            {formatPrice(neighborhood.averageRent)}
                          </div>
                          <div className="text-sm text-gray-500">
                            avg. monthly rent
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">
                        {neighborhood.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {neighborhood.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-rose-50 text-rose-700 border-rose-200"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <Tabs defaultValue="restaurants" className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                          <TabsTrigger
                            value="restaurants"
                            className="text-xs md:text-sm"
                          >
                            Restaurants
                          </TabsTrigger>
                          <TabsTrigger
                            value="bars"
                            className="text-xs md:text-sm"
                          >
                            Bars
                          </TabsTrigger>
                          <TabsTrigger
                            value="cafes"
                            className="text-xs md:text-sm"
                          >
                            Cafes
                          </TabsTrigger>
                          <TabsTrigger
                            value="culture"
                            className="text-xs md:text-sm"
                          >
                            Culture
                          </TabsTrigger>
                          <TabsTrigger
                            value="transport"
                            className="text-xs md:text-sm"
                          >
                            Transport
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="restaurants" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Utensils className="h-4 w-4 mr-2 text-rose-600" />
                            Top Restaurants
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.restaurants.map((restaurant, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-rose-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-rose-600"></span>
                                </span>
                                <span className="text-sm">{restaurant}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="bars" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Wine className="h-4 w-4 mr-2 text-amber-600" />
                            Popular Bars & Clubs
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.bars.map((bar, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-amber-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-amber-600"></span>
                                </span>
                                <span className="text-sm">{bar}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="cafes" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Coffee className="h-4 w-4 mr-2 text-green-600" />
                            Cafes & Coffee Shops
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.cafes.map((cafe, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-green-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-green-600"></span>
                                </span>
                                <span className="text-sm">{cafe}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="culture" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Ticket className="h-4 w-4 mr-2 text-purple-600" />
                            Cultural Attractions
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.culturalSpots.map((spot, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-purple-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-purple-600"></span>
                                </span>
                                <span className="text-sm">{spot}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="transport" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Bus className="h-4 w-4 mr-2 text-blue-600" />
                            Transportation Options
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.transportation.map((option, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-blue-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-blue-600"></span>
                                </span>
                                <span className="text-sm">{option}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Lifestyle Tips */}
        <section className="py-16 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tips for Enjoying Medellín's Lifestyle Scene
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-rose-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Timing Your Night Out
                  </h3>
                  <p className="text-gray-600">
                    Medellín's nightlife starts late by North American and
                    European standards. Dinner typically begins around 8-9 PM,
                    bars fill up after 10 PM, and clubs don't get busy until
                    midnight or later, often staying open until 4 AM.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-amber-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Special Events & Festivals
                  </h3>
                  <p className="text-gray-600">
                    Look out for Medellín's famous events like the Flower
                    Festival (Feria de las Flores) in August, the Christmas
                    Lights (Alumbrados) in December, and the growing number of
                    food festivals and cultural events throughout the year.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Cultural Experiences
                  </h3>
                  <p className="text-gray-600">
                    Beyond nightlife, explore Medellín's rich cultural offerings
                    including the Museum of Antioquia, Botero Plaza, the
                    Botanical Garden, and the city's growing art scene with
                    galleries and street art tours in neighborhoods like Comuna
                    13.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-rose-600 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Medellín's Vibrant Lifestyle?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Let our AI-powered platform match you with properties in the
              perfect location for your entertainment preferences
            </p>
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-rose-50 px-8"
              onClick={() => (window.location.href = "/ai-matching")}
            >
              Start AI Matching
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LifestyleGuide;
