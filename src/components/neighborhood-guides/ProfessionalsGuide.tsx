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
  Briefcase,
  Wifi,
  Coffee,
  Building,
  Bus,
  ArrowLeft,
  ArrowRight,
  DollarSign,
  Clock,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfessionalsGuide: React.FC = () => {
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
              Best Neighborhoods for Professionals in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Find the perfect area for remote workers, entrepreneurs, and
              business professionals
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
              <h2 className="text-3xl font-bold mb-6">Working from Medellín</h2>

              <p className="text-lg text-gray-700 mb-6">
                Medellín has become a hub for digital nomads, remote workers,
                and entrepreneurs thanks to its excellent infrastructure,
                affordable cost of living, and growing startup ecosystem.
                Finding the right neighborhood is crucial for professionals who
                need reliable internet, access to coworking spaces, and a
                productive environment.
              </p>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  What Professionals Need in a Neighborhood
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Wifi className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Reliable Internet
                          </h4>
                          <p className="text-sm text-gray-600">
                            Fast fiber optic connections and backup options
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Coffee className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Coworking Spaces</h4>
                          <p className="text-sm text-gray-600">
                            Access to professional workspaces and networking
                            opportunities
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Bus className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Transportation</h4>
                          <p className="text-sm text-gray-600">
                            Easy access to metro, buses, and rideshare services
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            Modern Apartments
                          </h4>
                          <p className="text-sm text-gray-600">
                            Comfortable living spaces with home office potential
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  Top Neighborhoods for Professionals
                </h3>

                <Tabs defaultValue="poblado">
                  <TabsList className="mb-4">
                    <TabsTrigger value="poblado">El Poblado</TabsTrigger>
                    <TabsTrigger value="laureles">Laureles</TabsTrigger>
                    <TabsTrigger value="ciudad-rio">Ciudad del Río</TabsTrigger>
                    <TabsTrigger value="provenza">Provenza</TabsTrigger>
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
                            <Badge>Top Pick for Professionals</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            El Poblado is the most popular area for expat
                            professionals and digital nomads. This upscale
                            neighborhood offers excellent infrastructure,
                            numerous coworking spaces, cafes with good WiFi, and
                            a large international community. It's ideal for
                            networking and has the highest concentration of
                            English speakers in the city.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Professional Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Multiple coworking spaces (WeWork, Selina)
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Excellent fiber internet infrastructure
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Cafes with workspaces and reliable WiFi
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Strong expat professional community
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>1-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $1.2-2M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coworking desk:</span>
                                  <span className="font-medium">
                                    $400-800K COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Meal out:</span>
                                  <span className="font-medium">
                                    $30-60K COP
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coffee shop work session:</span>
                                  <span className="font-medium">
                                    $10-15K COP
                                  </span>
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
                            <Badge>Great Value for Professionals</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Laureles offers a more authentic Colombian
                            experience while still providing excellent amenities
                            for professionals. It's becoming increasingly
                            popular with remote workers who want a more local
                            experience and better value for money compared to El
                            Poblado.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Professional Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Growing number of coworking spaces
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Excellent walkability and bike-friendly
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Good internet connectivity</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Better value apartments with office space
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>1-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $800K-1.5M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coworking desk:</span>
                                  <span className="font-medium">
                                    $300-600K COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Meal out:</span>
                                  <span className="font-medium">
                                    $20-40K COP
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coffee shop work session:</span>
                                  <span className="font-medium">
                                    $8-12K COP
                                  </span>
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

                  <TabsContent value="ciudad-rio">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=800&q=80"
                            alt="Ciudad del Río"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">
                              Ciudad del Río
                            </h4>
                            <Badge>Up-and-Coming Area</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Ciudad del Río is a modern, up-and-coming
                            neighborhood built around the Museum of Modern Art
                            (MAMM). It features new apartment buildings, office
                            spaces, and is becoming a hub for creative
                            professionals and startups.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Professional Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Modern apartments with built-in office
                                    spaces
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Close to Ruta N innovation district
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Growing tech and creative community
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Good public transportation connections
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>1-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $1-1.8M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coworking desk:</span>
                                  <span className="font-medium">
                                    $350-700K COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Meal out:</span>
                                  <span className="font-medium">
                                    $25-45K COP
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coffee shop work session:</span>
                                  <span className="font-medium">
                                    $10-15K COP
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in Ciudad del Río
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
                            <h4 className="text-xl font-bold">
                              Provenza (El Poblado)
                            </h4>
                            <Badge>Digital Nomad Hotspot</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Provenza is a trendy sub-neighborhood within El
                            Poblado that has become particularly popular with
                            digital nomads and creative professionals. It offers
                            a high concentration of cafes, coworking spaces, and
                            a vibrant atmosphere.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Professional Highlights:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    High concentration of work-friendly cafes
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Multiple coworking options</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Strong digital nomad community</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Excellent nightlife and networking
                                    opportunities
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>1-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $1.5-2.5M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coworking desk:</span>
                                  <span className="font-medium">
                                    $500-900K COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Meal out:</span>
                                  <span className="font-medium">
                                    $35-70K COP
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Coffee shop work session:</span>
                                  <span className="font-medium">
                                    $12-20K COP
                                  </span>
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
                </Tabs>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  Top Coworking Spaces in Medellín
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín offers a wide range of coworking options for remote
                  workers and entrepreneurs:
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">WeWork</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        International coworking chain with premium facilities
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Poblado (Multiple locations)</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Selina CoWork</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Popular with digital nomads, includes accommodation
                        options
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Poblado</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Tinkko</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Local coworking chain with multiple locations
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Multiple locations (El Poblado, Laureles)</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Cámara de Comercio</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Business-focused coworking with networking opportunities
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Poblado, Centro</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Internet Connectivity in Medellín
                </h3>
                <p className="text-gray-700 mb-4">
                  Reliable internet is essential for remote workers. Here's what
                  you need to know about connectivity in Medellín:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">Fiber Optic Coverage</span>
                      <p className="text-gray-600 text-sm">
                        Most upscale neighborhoods have excellent fiber optic
                        coverage with speeds up to 300 Mbps
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">Major Providers</span>
                      <p className="text-gray-600 text-sm">
                        Claro, Tigo, and Movistar are the main ISPs with
                        competitive packages
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">Mobile Data</span>
                      <p className="text-gray-600 text-sm">
                        4G coverage is excellent throughout the city, with 5G
                        being rolled out in premium areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </div>
                    <div>
                      <span className="font-medium">Backup Solutions</span>
                      <p className="text-gray-600 text-sm">
                        Many professionals maintain mobile hotspots as backup
                        internet solutions
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
                  <h3 className="text-xl font-bold mb-4">
                    Professional Relocation Tips
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <Wifi className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">
                          Test Internet Before Committing
                        </span>
                        <p className="text-gray-600 text-sm">
                          Run speed tests at different times of day before
                          signing a lease
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Time Zone Advantage</span>
                        <p className="text-gray-600 text-sm">
                          Medellín is in the Eastern Time Zone (UTC-5),
                          convenient for working with North American clients
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Visa Considerations</span>
                        <p className="text-gray-600 text-sm">
                          Look into digital nomad visas or investor visas for
                          longer stays
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3 mt-1">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Banking Setup</span>
                        <p className="text-gray-600 text-sm">
                          Consider international banking options and tax
                          implications
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold mb-3">
                      Ready to Find Your Professional Base?
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Our AI matching system can help you find the perfect
                      property based on your work requirements and lifestyle
                      preferences.
                    </p>
                    <Button className="w-full">Start AI Matching</Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Professional Networking
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Join local professional groups and events to connect with
                      like-minded individuals in Medellín.
                    </p>
                    <Button variant="outline" className="w-full">
                      Explore Networking Events
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
                      <Coffee className="h-8 w-8 text-primary" />
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

              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <Bus className="h-8 w-8 text-primary" />
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

export default ProfessionalsGuide;
