import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Bike,
  Leaf,
  Mountain,
  Droplet,
  Bus,
  ArrowLeft,
  ArrowRight,
  Sun,
  Umbrella,
  Dumbbell,
} from "lucide-react";
import ColombiaMap from "../ColombiaMap";

const ActiveLivingGuide: React.FC = () => {
  const activeNeighborhoods = [
    {
      id: "laureles",
      name: "Laureles",
      description:
        "Laureles is one of Medellín's most walkable and bike-friendly neighborhoods, with tree-lined streets, excellent urban planning, and numerous parks. The flat terrain makes it perfect for cycling, jogging, and outdoor activities. It's home to the Estadio sports complex and several fitness facilities.",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
      highlights: [
        "Flat terrain",
        "Bike-friendly",
        "Parks",
        "Sports facilities",
      ],
      averageRent: 1800000,
      parks: [
        "Primer Parque de Laureles",
        "Segundo Parque de Laureles",
        "Parque Lineal La Presidenta",
        "Aeroparque Juan Pablo II",
      ],
      sportsFacilities: [
        "Estadio Atanasio Girardot",
        "Unidad Deportiva Atanasio Girardot",
        "Coliseo Iván de Bedout",
        "Multiple gyms and fitness centers",
      ],
      outdoorActivities: [
        "Cycling on dedicated bike lanes",
        "Running/jogging paths",
        "Outdoor fitness stations",
        "Soccer fields and basketball courts",
      ],
      transportation: [
        "Estadio Metro Station",
        "Floresta Metro Station",
        "EnCicla bike sharing stations",
        "Integrated bus routes",
      ],
      latitude: 6.2546,
      longitude: -75.5748,
    },
    {
      id: "el-poblado",
      name: "El Poblado (Eastern Hills)",
      description:
        "While known for its nightlife, the eastern hills of El Poblado offer excellent hiking and trail running opportunities with stunning city views. The area features premium fitness clubs, yoga studios, and access to natural reserves. The hilly terrain provides a good workout even for casual walks.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: [
        "Hiking trails",
        "Premium gyms",
        "Yoga studios",
        "Hill training",
      ],
      averageRent: 2500000,
      parks: [
        "Parque Lleras (for people watching)",
        "Parque El Poblado",
        "Parque Lineal La Presidenta",
        "Cerro El Volador (nearby)",
      ],
      sportsFacilities: [
        "Bodytech Premium Fitness Centers",
        "SmartFit Gyms",
        "Yoga studios (Yoga Mística, Happy Yoga)",
        "CrossFit boxes",
      ],
      outdoorActivities: [
        "Hiking in the eastern hills",
        "Trail running with city views",
        "Hill training for cyclists and runners",
        "Outdoor yoga sessions",
      ],
      transportation: [
        "Poblado Metro Station",
        "Integrated bus routes",
        "Taxi services",
        "Some EnCicla stations (though hilly terrain)",
      ],
      latitude: 6.2086,
      longitude: -75.5659,
    },
    {
      id: "belen",
      name: "Belén",
      description:
        "Belén offers a good balance of urban amenities and access to outdoor recreation. The neighborhood features several parks, sports facilities, and is close to Cerro Nutibara, a prominent hill with hiking trails and panoramic views. The area is more affordable than El Poblado or Laureles while still providing good options for active living.",
      image:
        "https://images.unsplash.com/photo-1595880723089-69933d1ff663?w=800&q=80",
      highlights: [
        "Affordable",
        "Cerro Nutibara access",
        "Sports complexes",
        "Parks",
      ],
      averageRent: 1200000,
      parks: [
        "Parque de Belén",
        "Cerro Nutibara",
        "Parque Biblioteca Belén",
        "Unidad Deportiva de Belén",
      ],
      sportsFacilities: [
        "Unidad Deportiva de Belén",
        "Public swimming pools",
        "Soccer fields",
        "Community fitness centers",
      ],
      outdoorActivities: [
        "Hiking at Cerro Nutibara",
        "Recreational sports in public facilities",
        "Community fitness events",
        "Cycling routes",
      ],
      transportation: [
        "Integrated bus routes",
        "EnCicla bike sharing stations",
        "Close to Metro stations",
        "Taxi services",
      ],
      latitude: 6.2326,
      longitude: -75.6037,
    },
    {
      id: "estadio",
      name: "Estadio",
      description:
        "Named after the city's main sports stadium, Estadio is a hub for sports and active living. The neighborhood is centered around the Atanasio Girardot Sports Complex, which includes multiple facilities for various sports. The area has a vibrant atmosphere, especially during sporting events, and offers excellent infrastructure for active lifestyles.",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
      highlights: [
        "Sports complex",
        "Swimming pools",
        "Athletic tracks",
        "Vibrant",
      ],
      averageRent: 1600000,
      parks: [
        "Atanasio Girardot Sports Complex",
        "Parque del Estadio",
        "Velódromo Martín Emilio 'Cochise' Rodríguez",
        "Nearby parks and green spaces",
      ],
      sportsFacilities: [
        "Atanasio Girardot Stadium",
        "Olympic-sized swimming pools",
        "Tennis courts",
        "Basketball and volleyball courts",
      ],
      outdoorActivities: [
        "Swimming",
        "Track and field",
        "Cycling at the velodrome",
        "Team sports in dedicated facilities",
      ],
      transportation: [
        "Estadio Metro Station",
        "Integrated bus routes",
        "EnCicla bike sharing stations",
        "Walking distance to many facilities",
      ],
      latitude: 6.2566,
      longitude: -75.5818,
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
        <div className="relative h-[300px] bg-gradient-to-r from-green-500/90 to-teal-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Active Living Neighborhoods in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the best areas for outdoor activities, sports, and
              maintaining an active lifestyle
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
                Living Actively in the City of Eternal Spring
              </h2>
              <p className="text-lg text-gray-600">
                Medellín's perfect year-round climate, innovative urban
                planning, and abundant green spaces make it an ideal city for
                active living. From cycling on dedicated lanes to hiking in
                nearby hills, swimming in public pools to playing team sports in
                world-class facilities, the city offers countless opportunities
                to stay active and enjoy the outdoors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-green-700">
                  <Bike className="mr-2 h-5 w-5" />
                  Urban Mobility & Recreation
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín has invested heavily in infrastructure that promotes
                  active transportation and recreation. The city's EnCicla
                  bike-sharing program, extensive network of bike lanes, and
                  weekly Ciclovía (where main roads are closed to cars) make it
                  easy to incorporate physical activity into daily life.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                    </span>
                    <span>
                      EnCicla: Free bike-sharing system with stations throughout
                      the city
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                    </span>
                    <span>
                      Ciclovía: Sunday road closures for cycling, running, and
                      walking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                    </span>
                    <span>Outdoor gyms and fitness stations in many parks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-teal-700">
                  <Mountain className="mr-2 h-5 w-5" />
                  Natural Surroundings
                </h3>
                <p className="text-gray-700 mb-4">
                  Nestled in a valley surrounded by mountains, Medellín offers
                  easy access to nature and outdoor adventures. Within the city
                  and its immediate surroundings, you'll find hills for hiking,
                  parks for recreation, and natural reserves for exploration.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-teal-600"></span>
                    </span>
                    <span>
                      Cerro El Volador: Hill with hiking trails and panoramic
                      city views
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-teal-600"></span>
                    </span>
                    <span>
                      Parque Arví: Extensive nature reserve accessible by Metro
                      Cable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-teal-600"></span>
                    </span>
                    <span>
                      Jardín Botánico: Botanical gardens with walking paths and
                      open spaces
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Map */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Active Living Neighborhoods Map
            </h2>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
              <ColombiaMap
                markers={activeNeighborhoods.map((neighborhood) => ({
                  id: neighborhood.id,
                  latitude: neighborhood.latitude,
                  longitude: neighborhood.longitude,
                  title: neighborhood.name,
                  price: neighborhood.averageRent,
                }))}
                height="100%"
                width="100%"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Neighborhood Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Top Neighborhoods for Active Living
            </h2>

            <div className="space-y-12">
              {activeNeighborhoods.map((neighborhood, index) => (
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
                          <Badge className="bg-green-600 text-white font-bold px-3 py-1">
                            Active Living
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
                            className="bg-green-50 text-green-700 border-green-200"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <Tabs defaultValue="parks" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger
                            value="parks"
                            className="text-xs md:text-sm"
                          >
                            Parks & Spaces
                          </TabsTrigger>
                          <TabsTrigger
                            value="facilities"
                            className="text-xs md:text-sm"
                          >
                            Sports Facilities
                          </TabsTrigger>
                          <TabsTrigger
                            value="activities"
                            className="text-xs md:text-sm"
                          >
                            Activities
                          </TabsTrigger>
                          <TabsTrigger
                            value="transport"
                            className="text-xs md:text-sm"
                          >
                            Transport
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="parks" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Leaf className="h-4 w-4 mr-2 text-green-600" />
                            Parks & Green Spaces
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.parks.map((park, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-green-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-green-600"></span>
                                </span>
                                <span className="text-sm">{park}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="facilities" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Dumbbell className="h-4 w-4 mr-2 text-blue-600" />
                            Sports & Fitness Facilities
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.sportsFacilities.map(
                              (facility, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="bg-blue-100 p-1 rounded-full mr-2">
                                    <span className="block h-1 w-1 rounded-full bg-blue-600"></span>
                                  </span>
                                  <span className="text-sm">{facility}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </TabsContent>

                        <TabsContent value="activities" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Bike className="h-4 w-4 mr-2 text-amber-600" />
                            Popular Outdoor Activities
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.outdoorActivities.map(
                              (activity, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="bg-amber-100 p-1 rounded-full mr-2">
                                    <span className="block h-1 w-1 rounded-full bg-amber-600"></span>
                                  </span>
                                  <span className="text-sm">{activity}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </TabsContent>

                        <TabsContent value="transport" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Bus className="h-4 w-4 mr-2 text-purple-600" />
                            Transportation Options
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.transportation.map((option, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-purple-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-purple-600"></span>
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

        {/* Active Living Tips */}
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tips for Active Living in Medellín
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Weather Considerations
                  </h3>
                  <p className="text-gray-600">
                    While Medellín enjoys spring-like weather year-round, it's
                    best to plan outdoor activities in the morning or late
                    afternoon to avoid the midday sun. The rainy season
                    (April-May and September-November) brings afternoon showers,
                    so carry a light rain jacket.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Droplet className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Hydration & Altitude
                  </h3>
                  <p className="text-gray-600">
                    At 1,500 meters (4,900 feet) above sea level, Medellín's
                    altitude can affect those not accustomed to it. Stay
                    well-hydrated, especially when exercising, and give yourself
                    a few days to acclimate before engaging in strenuous
                    activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-amber-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Umbrella className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Community Activities
                  </h3>
                  <p className="text-gray-600">
                    Look for community fitness events like free yoga in parks,
                    group runs, and cycling clubs. Many neighborhoods have
                    WhatsApp groups for coordinating activities, and apps like
                    Meetup feature numerous sports and fitness groups welcoming
                    newcomers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Active Living Home in Medellín?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Let our AI-powered platform match you with properties that support
              your active lifestyle
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8"
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

export default ActiveLivingGuide;
