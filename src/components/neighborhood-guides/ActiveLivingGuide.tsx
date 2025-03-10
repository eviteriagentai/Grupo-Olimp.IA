import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  MapPin,
  Home,
  Bike,
  Mountain,
  Leaf,
  ArrowLeft,
  ArrowRight,
  Building,
  Check,
  Star,
  Coffee,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

const ActiveLivingGuide: React.FC = () => {
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
              Active Living Neighborhoods in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the best areas for outdoor activities, sports, and
              healthy living
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
                Embracing an Active Lifestyle in Medellín
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Medellín's perfect year-round climate, innovative urban
                planning, and stunning natural surroundings make it an ideal
                city for those who love an active lifestyle. From cycling paths
                and outdoor gyms to hiking trails and sports facilities, the
                city offers numerous opportunities to stay active and healthy.
              </p>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  What Makes a Great Neighborhood for Active Living?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Bike className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Cycling Infrastructure
                          </h4>
                          <p className="text-sm text-gray-600">
                            Dedicated bike lanes, cycling paths, and
                            bike-sharing stations
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Leaf className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Green Spaces</h4>
                          <p className="text-sm text-gray-600">
                            Parks, gardens, and recreational areas for outdoor
                            activities
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Mountain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Proximity to Nature
                          </h4>
                          <p className="text-sm text-gray-600">
                            Access to hiking trails, natural reserves, and
                            outdoor adventures
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Home className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Sports Facilities
                          </h4>
                          <p className="text-sm text-gray-600">
                            Gyms, swimming pools, sports courts, and fitness
                            centers
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  Top Neighborhoods for Active Living
                </h3>

                <Tabs defaultValue="laureles">
                  <TabsList className="mb-4">
                    <TabsTrigger value="laureles">Laureles</TabsTrigger>
                    <TabsTrigger value="estadio">Estadio</TabsTrigger>
                    <TabsTrigger value="belen">Belén</TabsTrigger>
                    <TabsTrigger value="envigado">Envigado</TabsTrigger>
                  </TabsList>

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
                            <Badge>Top Pick for Active Living</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Laureles is one of Medellín's most walkable and
                            bike-friendly neighborhoods, with wide, tree-lined
                            streets and excellent urban planning. The flat
                            terrain makes it perfect for cycling, jogging, and
                            walking, while its numerous parks and sports
                            facilities provide ample opportunities for outdoor
                            activities.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Active Living Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Extensive network of bike lanes</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Close to Estadio sports complex</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Multiple parks with outdoor gyms</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Pedestrian-friendly streets</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Cyclists and runners</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Urban fitness enthusiasts</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Sports team participants</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Walking enthusiasts</span>
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

                  <TabsContent value="estadio">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80"
                            alt="Estadio"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">Estadio</h4>
                            <Badge>Sports Hub</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Named after the Atanasio Girardot Sports Complex at
                            its heart, Estadio is the epicenter of sports and
                            fitness in Medellín. This neighborhood offers
                            world-class sports facilities, including Olympic
                            swimming pools, soccer fields, basketball courts,
                            and a velodrome, making it ideal for serious
                            athletes and sports enthusiasts.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Active Living Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Atanasio Girardot Sports Complex</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Olympic swimming pools</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Multiple sports courts and fields</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Fitness-focused community</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Competitive athletes</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Swimming enthusiasts</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Team sports players</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Fitness class attendees</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in Estadio
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="belen">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1595880723089-69933d1ff663?w=800&q=80"
                            alt="Belén"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">Belén</h4>
                            <Badge>Nature Access</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Belén offers excellent access to natural areas,
                            including the Cerro Nutibara hill and the Belén
                            Park. This neighborhood combines urban amenities
                            with proximity to hiking trails and green spaces,
                            making it perfect for those who enjoy outdoor
                            adventures without leaving the city.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Active Living Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Cerro Nutibara hiking trails</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Belén Park with sports facilities</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Public outdoor gyms</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Growing cycling community</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Hikers and trail runners</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Nature enthusiasts</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Outdoor workout fans</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Budget-conscious active people</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in Belén
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="envigado">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1595880375954-07804a561f61?w=800&q=80"
                            alt="Envigado"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">Envigado</h4>
                            <Badge>Balanced Active Living</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Envigado offers a perfect balance of urban amenities
                            and natural beauty. This municipality adjacent to
                            Medellín features excellent parks, sports
                            facilities, and proximity to hiking trails in the
                            surrounding hills. It's ideal for families and
                            individuals seeking an active lifestyle in a more
                            relaxed setting.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Active Living Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>La Heliodora Park with trails</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Envigado Sports Complex</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Access to hiking in surrounding hills
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Family-friendly active spaces</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">Best For:</h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Active families</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Weekend hikers</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Recreational sports players</span>
                                </div>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>Balanced lifestyle seekers</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in Envigado
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  Popular Outdoor Activities in Medellín
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín's perfect climate and beautiful surroundings offer
                  numerous opportunities for outdoor activities throughout the
                  year:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Cycling</h4>
                      <p className="text-sm text-gray-600">
                        Explore the city's extensive network of bike lanes or
                        challenge yourself with mountain biking in the
                        surrounding hills
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Hiking</h4>
                      <p className="text-sm text-gray-600">
                        Discover trails in Parque Arví, Cerro El Volador, or the
                        hills surrounding the Aburrá Valley
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Outdoor Fitness</h4>
                      <p className="text-sm text-gray-600">
                        Join free exercise classes in parks or use the public
                        outdoor gyms found throughout the city
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Paragliding</h4>
                      <p className="text-sm text-gray-600">
                        Experience the thrill of paragliding from San Felix with
                        stunning views of the city below
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Medellín's Fitness Community
                </h3>
                <p className="text-gray-700 mb-4">
                  Joining Medellín's active community is easy with numerous
                  groups, events, and resources available:
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Cycling Groups</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Join SiCLas Medellín for weekly night rides or Medellín
                        Bike Tours for guided explorations
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Running Clubs</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Participate in Medellín Runners or join the weekly
                        Parkrun events in various locations
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Outdoor Yoga</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Find free or donation-based yoga classes in parks like
                        Jardín Botánico or Parque de la Vida
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Sports Leagues</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Join recreational leagues for soccer, basketball,
                        volleyball, and more through INDER Medellín
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Active Living Tips</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">
                          Weather Considerations
                        </span>
                        <p className="text-gray-600 text-sm">
                          Medellín's rainy season (April-May and
                          September-November) can affect outdoor activities
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">Altitude Adjustment</span>
                        <p className="text-gray-600 text-sm">
                          At 1,500 meters elevation, give yourself time to
                          acclimate before intense exercise
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">Cycling Safety</span>
                        <p className="text-gray-600 text-sm">
                          Use dedicated bike lanes (ciclorrutas) when possible
                          and always wear a helmet
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">Sunday Ciclovía</span>
                        <p className="text-gray-600 text-sm">
                          Don't miss the Sunday Ciclovía when major streets are
                          closed to cars for cyclists and pedestrians
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold mb-3">
                      Find Your Active Living Home
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Our AI matching system can help you find the perfect
                      property based on your active lifestyle preferences.
                    </p>
                    <Button className="w-full">Start AI Matching</Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Healthy Living Resources
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Discover healthy restaurants, fitness centers, and
                      wellness services in your preferred neighborhood.
                    </p>
                    <Button variant="outline" className="w-full">
                      Explore Resources
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
                      <Utensils className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      For Lifestyle
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Explore neighborhoods with vibrant nightlife, restaurants,
                      and cultural attractions.
                    </p>
                    <Link
                      to="/neighborhood-guides/lifestyle"
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

export default ActiveLivingGuide;
