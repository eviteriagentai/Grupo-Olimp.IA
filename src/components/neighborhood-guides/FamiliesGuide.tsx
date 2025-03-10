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
  School,
  Utensils,
  ShoppingBag,
  Bus,
  Leaf,
  ArrowLeft,
  Building,
  DollarSign,
  Heart,
} from "lucide-react";
import ColombiaMap from "../ColombiaMap";

const FamiliesGuide: React.FC = () => {
  const familyNeighborhoods = [
    {
      id: "envigado",
      name: "Envigado",
      description:
        "A separate municipality that borders Medellín, Envigado offers a quieter, more residential atmosphere with excellent schools, parks, and family-friendly infrastructure. It's known for its strong sense of community and safety.",
      image:
        "https://images.unsplash.com/photo-1595880375954-07804a561f61?w=800&q=80",
      highlights: ["Safe", "Family-oriented", "Great schools", "Parks"],
      averageRent: 1600000,
      schools: [
        "Colegio Alemán de Medellín",
        "Columbus School",
        "Montessori School",
        "Colegio La Salle",
      ],
      parks: [
        "Parque Envigado",
        "Parque El Salado",
        "Parque Ecológico El Salado",
      ],
      supermarkets: [
        "Éxito Envigado",
        "Carulla Envigado",
        "Euro Supermercado",
        "Jumbo Envigado",
      ],
      transportation: [
        "Envigado Metro Station",
        "Ayurá Metro Station",
        "Integrated bus routes",
      ],
      familyActivities: [
        "Parque Recreativo El Dorado",
        "Biblioteca Pública y Parque Cultural Débora Arango",
        "Centro Comercial Viva Envigado",
      ],
      latitude: 6.1674,
      longitude: -75.5836,
    },
    {
      id: "laureles",
      name: "Laureles",
      description:
        "Laureles is a middle to upper-class residential area with tree-lined streets, excellent urban planning, and a family-friendly atmosphere. It offers a good balance of residential calm and convenient access to amenities.",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
      highlights: ["Well-planned", "Safe", "Good schools", "Parks"],
      averageRent: 1800000,
      schools: [
        "Colegio San Ignacio",
        "Colegio Salesiano El Sufragio",
        "Colegio UPB",
        "Colegio Palermo de San José",
      ],
      parks: [
        "Primer Parque de Laureles",
        "Segundo Parque de Laureles",
        "Parque Lineal La Presidenta",
      ],
      supermarkets: [
        "Éxito Laureles",
        "Carulla Laureles",
        "D1",
        "Justo & Bueno",
      ],
      transportation: [
        "Estadio Metro Station",
        "Floresta Metro Station",
        "Integrated bus routes",
      ],
      familyActivities: [
        "Estadio Atanasio Girardot",
        "Parque de Los Deseos",
        "Aeroparque Juan Pablo II",
      ],
      latitude: 6.2546,
      longitude: -75.5748,
    },
    {
      id: "el-poblado",
      name: "El Poblado (Family Areas)",
      description:
        "While known for its nightlife, El Poblado also has quieter, family-oriented sections like Los Balsos, La Calera, and El Tesoro. These areas offer luxury living with excellent private schools, shopping centers, and green spaces.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: [
        "Upscale",
        "International schools",
        "Safe",
        "Modern amenities",
      ],
      averageRent: 2500000,
      schools: [
        "The Columbus School",
        "Colegio Alemán",
        "Montessori School",
        "Colegio Marymount",
      ],
      parks: [
        "Parque Lleras (family-friendly during daytime)",
        "Parque Lineal La Presidenta",
        "Parque El Poblado",
      ],
      supermarkets: [
        "Carulla El Poblado",
        "Éxito El Poblado",
        "PriceSmart",
        "Carulla Oviedo",
      ],
      transportation: [
        "Poblado Metro Station",
        "Integrated bus routes",
        "Taxi services",
      ],
      familyActivities: [
        "Centro Comercial El Tesoro",
        "Centro Comercial Santafé",
        "Parque Arví (accessible via Metro Cable)",
      ],
      latitude: 6.2086,
      longitude: -75.5659,
    },
    {
      id: "belen",
      name: "Belén",
      description:
        "Belén is a traditional, middle-class neighborhood with a strong local character. It offers good value for money with family-friendly amenities, parks, and schools at more affordable prices than El Poblado or Laureles.",
      image:
        "https://images.unsplash.com/photo-1595880723089-69933d1ff663?w=800&q=80",
      highlights: [
        "Affordable",
        "Traditional",
        "Family-oriented",
        "Local character",
      ],
      averageRent: 1200000,
      schools: [
        "Colegio Militar José María Córdoba",
        "Institución Educativa Yermo y Parres",
        "Colegio La Salle de Belén",
        "Institución Educativa Pedro Justo Berrío",
      ],
      parks: [
        "Parque de Belén",
        "Parque Biblioteca Belén",
        "Unidad Deportiva de Belén",
      ],
      supermarkets: ["Éxito Belén", "Consumo Belén", "D1", "Justo & Bueno"],
      transportation: [
        "Integrated bus routes",
        "Close to Metro stations",
        "Taxi services",
      ],
      familyActivities: [
        "Parque Biblioteca Belén",
        "Centro Comercial Los Molinos",
        "Unidad Deportiva de Belén",
      ],
      latitude: 6.2326,
      longitude: -75.6037,
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
        <div className="relative h-[300px] bg-gradient-to-r from-blue-500/90 to-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Family-Friendly Neighborhoods in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the best areas for raising a family with great schools,
              parks, and safe environments
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
                Finding Your Family's Perfect Neighborhood
              </h2>
              <p className="text-lg text-gray-600">
                Medellín offers several excellent neighborhoods for families,
                each with its own unique character and amenities. From
                international schools and modern facilities to traditional
                Colombian neighborhoods with strong community ties, you'll find
                the perfect place to raise your children in this vibrant city.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-blue-700">
                  <School className="mr-2 h-5 w-5" />
                  Education in Medellín
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín boasts excellent educational options, from
                  prestigious international schools to quality public
                  institutions. Many neighborhoods have bilingual schools
                  following American, European, or International Baccalaureate
                  curricula.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span>
                      International schools: Columbus School, Colegio Alemán,
                      Montessori
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span>
                      Quality private schools in most family neighborhoods
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span>Public schools with improving standards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center text-green-700">
                  <Leaf className="mr-2 h-5 w-5" />
                  Family Activities & Recreation
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín is known as the "City of Eternal Spring" with perfect
                  weather for outdoor activities year-round. The city offers
                  numerous parks, recreational centers, and family-friendly
                  attractions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                    </span>
                    <span>
                      Parque Explora: Interactive science museum and aquarium
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                    </span>
                    <span>
                      Jardín Botánico: Botanical gardens with family events
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                    </span>
                    <span>
                      Parque Arví: Nature reserve accessible by Metro Cable
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
              Family-Friendly Neighborhoods Map
            </h2>
            <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
              <ColombiaMap
                markers={familyNeighborhoods.map((neighborhood) => ({
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
              Top Family-Friendly Neighborhoods
            </h2>

            <div className="space-y-12">
              {familyNeighborhoods.map((neighborhood, index) => (
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
                          <Badge className="bg-blue-600 text-white font-bold px-3 py-1">
                            Family-Friendly
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
                            className="bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <Tabs defaultValue="schools" className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                          <TabsTrigger
                            value="schools"
                            className="text-xs md:text-sm"
                          >
                            Schools
                          </TabsTrigger>
                          <TabsTrigger
                            value="parks"
                            className="text-xs md:text-sm"
                          >
                            Parks
                          </TabsTrigger>
                          <TabsTrigger
                            value="shopping"
                            className="text-xs md:text-sm"
                          >
                            Shopping
                          </TabsTrigger>
                          <TabsTrigger
                            value="transport"
                            className="text-xs md:text-sm"
                          >
                            Transport
                          </TabsTrigger>
                          <TabsTrigger
                            value="activities"
                            className="text-xs md:text-sm"
                          >
                            Activities
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="schools" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <School className="h-4 w-4 mr-2 text-blue-600" />
                            Notable Schools
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.schools.map((school, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-blue-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-blue-600"></span>
                                </span>
                                <span className="text-sm">{school}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>

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

                        <TabsContent value="shopping" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <ShoppingBag className="h-4 w-4 mr-2 text-amber-600" />
                            Supermarkets & Shopping
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.supermarkets.map((store, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="bg-amber-100 p-1 rounded-full mr-2">
                                  <span className="block h-1 w-1 rounded-full bg-amber-600"></span>
                                </span>
                                <span className="text-sm">{store}</span>
                              </li>
                            ))}
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

                        <TabsContent value="activities" className="pt-4">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Heart className="h-4 w-4 mr-2 text-rose-600" />
                            Family Activities
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {neighborhood.familyActivities.map(
                              (activity, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="bg-rose-100 p-1 rounded-full mr-2">
                                    <span className="block h-1 w-1 rounded-full bg-rose-600"></span>
                                  </span>
                                  <span className="text-sm">{activity}</span>
                                </li>
                              ),
                            )}
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

        {/* Family Living Tips */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tips for Family Living in Medellín
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <School className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Education Planning</h3>
                  <p className="text-gray-600">
                    Research schools early as the best international and private
                    schools often have waiting lists. Consider proximity to
                    schools when choosing your neighborhood to minimize commute
                    times.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Housing Considerations
                  </h3>
                  <p className="text-gray-600">
                    Look for apartments or homes in gated communities (unidades)
                    which often include playgrounds, pools, and other family
                    amenities. Consider noise levels and proximity to main
                    roads.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-amber-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Community Integration
                  </h3>
                  <p className="text-gray-600">
                    Medellín has a welcoming culture for families. Look for
                    neighborhoods with community events, and consider joining
                    local parent groups to connect with other families and learn
                    about activities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Family's Perfect Home in Medellín?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Let our AI-powered platform match you with properties that truly
              fit your family's lifestyle and preferences
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8"
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

export default FamiliesGuide;
