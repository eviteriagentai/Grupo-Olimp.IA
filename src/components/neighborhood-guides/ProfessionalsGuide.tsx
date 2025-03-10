import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Briefcase,
  Wifi,
  Coffee,
  Building,
  Bus,
  DollarSign,
  ArrowLeft,
  ArrowRight,
  Clock,
  Laptop,
  ShoppingBag,
} from "lucide-react";
import ColombiaMap from "../ColombiaMap";

const ProfessionalsGuide: React.FC = () => {
  const professionalNeighborhoods = [
    {
      id: "el-poblado",
      name: "El Poblado",
      description:
        "El Poblado is Medellín's most upscale neighborhood and a hub for business professionals and digital nomads. It offers modern infrastructure, excellent connectivity, premium office spaces, and a wide range of restaurants and cafes perfect for networking and meetings.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: [
        "Business Hub",
        "Coworking Spaces",
        "Upscale",
        "International",
      ],
      averageRent: 2500000,
      coworkingSpaces: [
        "WeWork Ciudad del Río",
        "Selina Cowork",
        "Tinkko",
        "Seedspace Medellín",
      ],
      cafes: ["Pergamino Café", "Velvet Café", "Café Zeppelin", "Al Alma Café"],
      businessCenters: [
        "One Plaza Business Center",
        "Milla de Oro (Golden Mile)",
        "Bancolombia Headquarters",
        "Ciudad del Río Business District",
      ],
      transportation: [
        "Poblado Metro Station",
        "Premium taxi services",
        "Uber and DiDi availability",
        "Integrated bus routes",
      ],
      internetSpeed: "High-speed fiber optic (100-300 Mbps)",
      latitude: 6.2086,
      longitude: -75.5659,
    },
    {
      id: "laureles",
      name: "Laureles",
      description:
        "Laureles offers a perfect balance for working professionals who want a more relaxed atmosphere than El Poblado but still need excellent connectivity and amenities. It features a growing number of coworking spaces, cafes with good WiFi, and a more authentic Colombian experience.",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
      highlights: [
        "Well-planned",
        "Balanced lifestyle",
        "Good connectivity",
        "Cafes",
      ],
      averageRent: 1800000,
      coworkingSpaces: [
        "Coecoworking",
        "La Casa Redonda",
        "Workia",
        "Tinkko Laureles",
      ],
      cafes: [
        "Café Revolución",
        "Café Cliché",
        "Rituales Café",
        "Café Vallejo",
      ],
      businessCenters: [
        "Unicentro Medellín",
        "Viva Laureles",
        "Primer Parque Laureles Business Area",
        "Avenida Nutibara Commercial Zone",
      ],
      transportation: [
        "Estadio Metro Station",
        "Floresta Metro Station",
        "Integrated bus routes",
        "Easy taxi access",
      ],
      internetSpeed: "Good fiber optic coverage (50-200 Mbps)",
      latitude: 6.2546,
      longitude: -75.5748,
    },
    {
      id: "ciudad-del-rio",
      name: "Ciudad del Río",
      description:
        "Ciudad del Río is a modern, up-and-coming business district built around the former Simesa industrial area. It's now home to the Museum of Modern Art, premium office buildings, and apartment complexes. This area is perfect for professionals looking for a live-work-play environment.",
      image:
        "https://images.unsplash.com/photo-1582653291997-079b4f1c9696?w=800&q=80",
      highlights: ["Modern", "Business District", "Cultural", "Convenient"],
      averageRent: 2200000,
      coworkingSpaces: [
        "WeWork Ciudad del Río",
        "Espacio Nómada",
        "HubBOG",
        "Impact Hub",
      ],
      cafes: [
        "Café Ganso & Castor",
        "Starbucks Ciudad del Río",
        "Juan Valdez Café",
        "Café de los Andes",
      ],
      businessCenters: [
        "Bancolombia Headquarters",
        "Ruta N Innovation Center",
        "Medellín Plaza",
        "Landmark Building",
      ],
      transportation: [
        "Industriales Metro Station",
        "Integrated bus routes",
        "Taxi services",
        "EnCicla bike sharing stations",
      ],
      internetSpeed: "Excellent fiber optic (100-500 Mbps)",
      latitude: 6.2329,
      longitude: -75.5771,
    },
    {
      id: "el-centro",
      name: "El Centro (Downtown)",
      description:
        "El Centro is Medellín's vibrant downtown area and traditional business district. While it has a reputation for being hectic during the day and requiring caution at night, it offers affordable office space, excellent connectivity to all parts of the city, and is home to many government offices and traditional businesses.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: [
        "Affordable",
        "Central",
        "Traditional Business",
        "Government Offices",
      ],
      averageRent: 900000,
      coworkingSpaces: [
        "Atom House",
        "La Pascasia",
        "Tinkko Centro",
        "Cowork Latam",
      ],
      cafes: [
        "Café de los Andes",
        "El Laboratorio de Café",
        "Café Botero",
        "Juan Valdez Café",
      ],
      businessCenters: [
        "Centro Administrativo La Alpujarra",
        "Edificio Coltejer",
        "Plaza Mayor Convention Center",
        "Banco de la República",
      ],
      transportation: [
        "San Antonio Metro Station",
        "Parque Berrío Metro Station",
        "Alpujarra Metro Station",
        "Multiple bus routes",
      ],
      internetSpeed:
        "Variable, with improving fiber optic coverage (30-100 Mbps)",
      latitude: 6.2518,
      longitude: -75.5636,
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
        <div className="relative h-[300px] bg-gradient-to-r from-purple-500/90 to-indigo-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Best Neighborhoods for Professionals in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover areas with excellent connectivity, coworking spaces, and
              business amenities
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
                Working in the City of Eternal Spring
              </h2>
              <p className="text-lg text-gray-600">
                Medellín has transformed into a thriving business hub and a
                favorite destination for digital nomads and remote workers. With
                excellent internet infrastructure, a growing number of coworking
                spaces, and a perfect climate, the city offers professionals an
                ideal environment to work and network while enjoying a high
                quality of life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-indigo-700">
                  <Wifi className="mr-2 h-5 w-5" />
                  Digital Infrastructure
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín boasts impressive digital infrastructure with
                  reliable high-speed internet throughout most of the city.
                  Fiber optic connections are widely available in business
                  districts and residential areas popular with professionals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-indigo-600"></span>
                    </span>
                    <span>Fiber optic internet with speeds up to 500 Mbps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-indigo-600"></span>
                    </span>
                    <span>
                      Reliable mobile data networks with 4G/LTE coverage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-indigo-600"></span>
                    </span>
                    <span>Free WiFi in many public spaces and parks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-purple-700">
                  <Laptop className="mr-2 h-5 w-5" />
                  Coworking & Business Culture
                </h3>
                <p className="text-gray-700 mb-4">
                  The city has embraced the coworking trend with numerous spaces
                  catering to different needs and budgets. Medellín also hosts
                  regular networking events, tech meetups, and entrepreneurial
                  gatherings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-purple-600"></span>
                    </span>
                    <span>Over 30 coworking spaces across the city</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-purple-600"></span>
                    </span>
                    <span>Ruta N: Innovation and business center</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-purple-600"></span>
                    </span>
                    <span>Regular tech and entrepreneurial events</span>
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
              Top Neighborhoods for Professionals
            </h2>

            <div className="space-y-12">
              {professionalNeighborhoods.map((neighborhood, index) => (
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
                          <Badge className="bg-indigo-600 text-white font-bold px-3 py-1">
                            Professional Hub
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
                            className="bg-indigo-50 text-indigo-700 border-indigo-200"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <Tabs defaultValue="coworking" className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                          <TabsTrigger
                            value="coworking"
                            className="text-xs md:text-sm"
                          >
                            Coworking
                          </TabsTrigger>
                          <TabsTrigger
                            value="cafes"
                            className="text-xs md:text-sm"
                          >
                            Cafes
                          </TabsTrigger>
                          <TabsTrigger
                            value="business"
                            className="text-xs md:text-sm"
                          >
                            Business
                          </TabsTrigger>
                          <TabsTrigger
                            value="transport"
                            className="text-xs md:text-sm"
                          >
                            Transport
                          </TabsTrigger>
                          <TabsTrigger
                            value="internet"
                            className="text-xs md:text-sm"
                          >
                            Internet
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="coworking" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Laptop className="h-4 w-4 mr-2 text-indigo-600" />
                            Coworking Spaces
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.coworkingSpaces.map((space, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-indigo-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-indigo-600"></span>
                                </span>
                                <span className="text-sm">{space}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="cafes" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Coffee className="h-4 w-4 mr-2 text-amber-600" />
                            Work-Friendly Cafes
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.cafes.map((cafe, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-amber-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-amber-600"></span>
                                </span>
                                <span className="text-sm">{cafe}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="business" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                            Business Centers & Offices
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.businessCenters.map((center, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-blue-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-blue-600"></span>
                                </span>
                                <span className="text-sm">{center}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="transport" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Bus className="h-4 w-4 mr-2 text-green-600" />
                            Transportation Options
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.transportation.map((option, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-green-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-green-600"></span>
                                </span>
                                <span className="text-sm">{option}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="internet" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Wifi className="h-4 w-4 mr-2 text-purple-600" />
                            Internet Connectivity
                          </h4>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <p className="text-sm">
                              {neighborhood.internetSpeed}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            Major providers: Claro, Tigo, Movistar, ETB
                          </p>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Professional Living Tips */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tips for Working Professionals in Medellín
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    Medellín's perfect climate and relaxed pace make it ideal
                    for work-life balance. Take advantage of the city's many
                    parks, outdoor cafes, and year-round pleasant weather to
                    avoid burnout and enjoy your surroundings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Wifi className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Internet Reliability
                  </h3>
                  <p className="text-gray-600">
                    When choosing an apartment, verify the internet speed and
                    reliability. Consider having a backup connection option like
                    a good mobile data plan or a portable WiFi device for
                    important meetings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Networking Opportunities
                  </h3>
                  <p className="text-gray-600">
                    Take advantage of Medellín's growing professional community
                    by attending networking events, tech meetups, and
                    entrepreneurial gatherings. Join groups like Medellín
                    Digital Nomads or visit Ruta N for innovation events.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Ideal Professional Space in Medellín?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Let our AI-powered platform match you with properties that fit
              your work needs and lifestyle preferences
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8"
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

export default ProfessionalsGuide;
