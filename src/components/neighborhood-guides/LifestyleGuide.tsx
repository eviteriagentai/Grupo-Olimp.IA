import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Home,
  Music,
  Utensils,
  Wine,
  Coffee,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  Building,
  Check,
  Star,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const LifestyleGuide: React.FC = () => {
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
              Lifestyle & Entertainment Districts in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the best neighborhoods for dining, nightlife, and
              cultural experiences
            </p>
          </div>
        </div>

        {/* Back to Neighborhoods */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/neighborhoods"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Neighborhoods
          </Link>
        </div>

        {/* Guide Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Medellín's Vibrant Lifestyle Scene
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Medellín has transformed into one of Latin America's most
                exciting cities for dining, nightlife, and cultural experiences.
                From upscale restaurants and trendy bars to art galleries and
                music venues, the city offers diverse entertainment options
                across several distinct neighborhoods.
              </p>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  What Makes a Great Lifestyle Neighborhood?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Utensils className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Dining Scene</h4>
                          <p className="text-sm text-gray-600">
                            Diverse restaurants, cafes, and food markets
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Wine className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Nightlife</h4>
                          <p className="text-sm text-gray-600">
                            Bars, clubs, and entertainment venues
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Music className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Cultural Attractions
                          </h4>
                          <p className="text-sm text-gray-600">
                            Museums, galleries, theaters, and music venues
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <ShoppingBag className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Shopping & Markets
                          </h4>
                          <p className="text-sm text-gray-600">
                            Boutiques, malls, and local markets
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  Top Lifestyle Neighborhoods
                </h3>

                <Tabs defaultValue="poblado">
                  <TabsList className="mb-4">
                    <TabsTrigger value="poblado">El Poblado</TabsTrigger>
                    <TabsTrigger value="provenza">Provenza</TabsTrigger>
                    <TabsTrigger value="laureles">Laureles</TabsTrigger>
                    <TabsTrigger value="centro">El Centro</TabsTrigger>
                  </TabsList>

                  <TabsContent value="poblado">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80"
                            alt="El Poblado"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">El Poblado</h4>
                            <Badge>Premium Lifestyle Area</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            El Poblado is Medellín's upscale district and the
                            center of the city's international dining and
                            nightlife scene. This leafy neighborhood is home to
                            some of the city's best restaurants, bars, and
                            clubs, particularly around Parque Lleras and the
                            Golden Mile (Milla de Oro).
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Lifestyle Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>International dining scene</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Vibrant nightlife around Parque Lleras
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Luxury shopping malls</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Boutique hotels and rooftop bars</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Fine dining enthusiasts</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Nightlife lovers</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Luxury shoppers</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>International scene</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in El Poblado
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="provenza">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=800&q=80"
                            alt="Provenza"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">Provenza</h4>
                            <Badge>Trendy Hotspot</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Provenza is a trendy sub-neighborhood within El
                            Poblado that has become the epicenter of Medellín's
                            hip dining and nightlife scene. Its tree-lined
                            streets are packed with stylish restaurants, craft
                            cocktail bars, boutique shops, and artisanal cafes.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Lifestyle Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Trendy restaurants and cafes</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Craft cocktail bars</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Boutique shopping</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Street art and galleries</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Foodies and coffee enthusiasts</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Craft cocktail aficionados</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Fashion-forward shoppers</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Digital nomads and expats</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in Provenza
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="laureles">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80"
                            alt="Laureles"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">Laureles</h4>
                            <Badge>Local Lifestyle</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Laureles offers a more authentic Colombian lifestyle
                            experience with tree-lined streets, local
                            restaurants, and neighborhood bars. The area around
                            La 70 (Carrera 70) is particularly known for its
                            lively atmosphere, sports bars, and traditional
                            Colombian dining.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Lifestyle Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Authentic Colombian restaurants</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Local bars and breweries</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Sports venues and fan zones</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Walkable streets with local shops</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Local cuisine enthusiasts</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Sports fans</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>
                                    Those seeking authentic experiences
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Budget-conscious socializers</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in Laureles
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="centro">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80"
                            alt="El Centro"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">El Centro</h4>
                            <Badge>Cultural Hub</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            El Centro (downtown) is Medellín's historic and
                            cultural heart. While requiring more caution,
                            especially at night, it offers the richest cultural
                            experiences with museums, theaters, plazas, and
                            traditional markets. The area around Botero Plaza
                            and the Museum of Antioquia is particularly vibrant.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Lifestyle Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Museums and art galleries</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Traditional markets</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Historic architecture</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Authentic street food</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Art and culture enthusiasts</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>History buffs</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Bargain shoppers</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Adventurous travelers</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in El Centro
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  Top Entertainment Venues
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín offers a diverse range of entertainment options for
                  all tastes:
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Parque Lleras</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        The epicenter of Medellín's nightlife with dozens of
                        bars, clubs, and restaurants
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Poblado</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Museo de Antioquia</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Home to a significant collection of works by Fernando
                        Botero and other Colombian artists
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Centro</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Teatro Metropolitano</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Medellín's premier venue for classical music, opera, and
                        theatrical performances
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>La Alpujarra</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Mercado del Río</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Modern food hall with over 40 restaurants offering
                        diverse cuisines
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Ciudad del Río</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Annual Events & Festivals
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín's vibrant cultural scene includes several major
                  annual events:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">
                        Feria de las Flores (August)
                      </span>
                      <p className="text-gray-600 text-sm">
                        The Flower Festival is Medellín's most important
                        cultural event, featuring parades, concerts, and
                        exhibitions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">
                        Christmas Lights (December)
                      </span>
                      <p className="text-gray-600 text-sm">
                        El Alumbrado transforms the city with millions of lights
                        and decorations along the river and throughout
                        neighborhoods
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">Colombia Moda (July)</span>
                      <p className="text-gray-600 text-sm">
                        Latin America's important fashion event featuring
                        Colombian and international designers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">
                        Jazz Festival (September)
                      </span>
                      <p className="text-gray-600 text-sm">
                        International jazz musicians perform at venues
                        throughout the city
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Lifestyle Tips</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <Coffee className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Coffee Culture</span>
                        <p className="text-gray-600 text-sm">
                          Experience Colombia's world-famous coffee at specialty
                          cafes throughout the city
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <Music className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Dance Lessons</span>
                        <p className="text-gray-600 text-sm">
                          Take salsa or reggaeton classes to fully immerse
                          yourself in the local culture
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <Utensils className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Local Cuisine</span>
                        <p className="text-gray-600 text-sm">
                          Try traditional Paisa dishes like bandeja paisa,
                          arepas, and mazamorra
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <Wine className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Nightlife Safety</span>
                        <p className="text-gray-600 text-sm">
                          Use trusted transportation services when enjoying
                          Medellín's nightlife
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold mb-3">
                      Find Your Lifestyle Property
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Our AI matching system can help you find the perfect
                      property based on your lifestyle preferences and
                      entertainment priorities.
                    </p>
                    <Button className="w-full">Start AI Matching</Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Upcoming Events</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Stay updated on the latest cultural events, concerts, and
                      exhibitions happening in Medellín.
                    </p>
                    <Button variant="outline" className="w-full">
                      View Events Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Explore Other Neighborhood Guides
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <Home className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">For Families</h3>
                    <p className="text-gray-600 mb-4">
                      Discover family-friendly neighborhoods with great schools,
                      parks, and safe streets.
                    </p>
                    <Link
                      to="/neighborhood-guides/families"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      View Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      For Professionals
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Find neighborhoods with great connectivity, coworking
                      spaces, and urban amenities.
                    </p>
                    <Link
                      to="/neighborhood-guides/professionals"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      View Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      For Active Living
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover neighborhoods with parks, cycling paths, and
                      outdoor recreation options.
                    </p>
                    <Link
                      to="/neighborhood-guides/active-living"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      View Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LifestyleGuide;
