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
  ArrowRight,
  Building,
  DollarSign,
  Heart,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const FamiliesGuide: React.FC = () => {
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
              Family-Friendly Neighborhoods in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the best areas for families with children in Medellín
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
                Finding Your Family's Perfect Home
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                When relocating with a family, finding the right neighborhood is
                crucial. Medellín offers several excellent options for families,
                with safe streets, quality schools, parks, and family-oriented
                amenities.
              </p>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  What Makes a Neighborhood Family-Friendly?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-5">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mr-4">
                          <School className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Quality Schools</h4>
                          <p className="text-sm text-gray-600">
                            Access to good public and private schools, including
                            international options
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
                          <h4 className="font-medium mb-1">
                            Parks & Recreation
                          </h4>
                          <p className="text-sm text-gray-600">
                            Green spaces, playgrounds, and recreational
                            facilities for children
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
                            Safety & Security
                          </h4>
                          <p className="text-sm text-gray-600">
                            Low crime rates, well-lit streets, and secure
                            housing options
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
                          <h4 className="font-medium mb-1">Family Amenities</h4>
                          <p className="text-sm text-gray-600">
                            Supermarkets, healthcare facilities, and
                            family-friendly restaurants
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  Top Family-Friendly Neighborhoods
                </h3>

                <Tabs defaultValue="envigado">
                  <TabsList className="mb-4">
                    <TabsTrigger value="envigado">Envigado</TabsTrigger>
                    <TabsTrigger value="laureles">Laureles</TabsTrigger>
                    <TabsTrigger value="poblado">El Poblado</TabsTrigger>
                    <TabsTrigger value="sabaneta">Sabaneta</TabsTrigger>
                  </TabsList>

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
                            <Badge>Top Pick for Families</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Envigado is a separate municipality that borders
                            Medellín, offering a quieter, more residential
                            atmosphere with excellent infrastructure and a
                            strong sense of community. It's particularly popular
                            with families due to its safety, abundance of parks,
                            and excellent schools.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Highlights for Families:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Numerous parks and recreational areas
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Top-rated public and private schools
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Safe streets with low crime rates</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Family-oriented community events</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>3-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $1.6-2.2M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>International school:</span>
                                  <span className="font-medium">
                                    $1-2M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Family meal out:</span>
                                  <span className="font-medium">
                                    $120-200K COP
                                  </span>
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
                            <Badge>Great for Families</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Laureles is a middle to upper-class residential area
                            with tree-lined streets, parks, and a more authentic
                            Colombian feel. Its excellent urban planning makes
                            it very walkable, and it offers a good balance of
                            residential calm and urban amenities.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Highlights for Families:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Walkable neighborhood with wide sidewalks
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Several good schools in the area</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>
                                    Family-friendly restaurants and cafes
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Excellent public transportation</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>3-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $1.8-2.5M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Private school:</span>
                                  <span className="font-medium">
                                    $800K-1.5M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Family meal out:</span>
                                  <span className="font-medium">
                                    $100-180K COP
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
                            <Badge>Premium Family Option</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            El Poblado is an upscale, leafy neighborhood known
                            for its restaurants, nightlife, and shopping. While
                            it's popular with expats and tourists, it also
                            offers excellent options for families, particularly
                            in its quieter residential sections.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Highlights for Families:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Top international schools nearby</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Gated communities with security</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Excellent healthcare facilities</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Family-friendly shopping malls</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>3-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $2.5-4M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>International school:</span>
                                  <span className="font-medium">
                                    $1.5-3M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Family meal out:</span>
                                  <span className="font-medium">
                                    $150-300K COP
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

                  <TabsContent value="sabaneta">
                    <Card>
                      <CardContent className="p-0">
                        <div className="h-64 overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1595880723089-69933d1ff663?w=800&q=80"
                            alt="Sabaneta"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold">Sabaneta</h4>
                            <Badge>Traditional Family Area</Badge>
                          </div>

                          <p className="text-gray-700 mb-4">
                            Sabaneta is a smaller municipality south of Medellín
                            known for its relaxed pace of life, friendly locals,
                            and traditional Colombian atmosphere. It's growing
                            in popularity with families who want a more
                            authentic experience while still having access to
                            modern amenities.
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium mb-2">
                                Highlights for Families:
                              </h5>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Strong community atmosphere</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Good public and private schools</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>Family-oriented public spaces</span>
                                </li>
                                <li className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                  <span>More affordable housing options</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium mb-2">
                                Average Costs:
                              </h5>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span>3-bedroom apartment:</span>
                                  <span className="font-medium">
                                    $1.4-2M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Private school:</span>
                                  <span className="font-medium">
                                    $700K-1.2M COP/month
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Family meal out:</span>
                                  <span className="font-medium">
                                    $80-150K COP
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button className="w-full">
                            View Properties in Sabaneta
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">
                  International Schools in Medellín
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín offers several high-quality international schools
                  that follow American, British, or International Baccalaureate
                  curricula. Here are some of the most popular options for expat
                  families:
                </p>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">
                        Columbus School (Colegio Columbus)
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        American curriculum, Pre-K to Grade 12
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Envigado</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Montessori School</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Montessori methodology, Ages 1-18
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Poblado</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">
                        Colegio Alemán (German School)
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        German/International curriculum, Pre-K to Grade 12
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Poblado (Itagüí)</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">
                        The New School (El Nuevo Colegio)
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Bilingual education, International Baccalaureate
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>El Poblado</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Family Activities in Medellín
                </h3>
                <p className="text-gray-700 mb-4">
                  Medellín offers numerous activities and attractions for
                  families with children of all ages:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Parque Explora</h4>
                      <p className="text-sm text-gray-600">
                        Interactive science museum with aquarium and planetarium
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Jardín Botánico</h4>
                      <p className="text-sm text-gray-600">
                        Botanical garden with butterfly house and children's
                        play areas
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Parque Arví</h4>
                      <p className="text-sm text-gray-600">
                        Nature reserve accessible by cable car with hiking
                        trails and activities
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <h4 className="font-bold mb-1">Parque Norte</h4>
                      <p className="text-sm text-gray-600">
                        Amusement park with rides and attractions for different
                        ages
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
                  <h3 className="text-xl font-bold mb-4">
                    Family Relocation Tips
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">
                          Research Schools Early
                        </span>
                        <p className="text-gray-600 text-sm">
                          International schools often have waiting lists, so
                          apply well in advance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">
                          Consider Commute Times
                        </span>
                        <p className="text-gray-600 text-sm">
                          Traffic can be heavy during rush hours, so consider
                          proximity to schools and work
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">Healthcare Options</span>
                        <p className="text-gray-600 text-sm">
                          Research pediatricians and family doctors in your area
                          before moving
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                        <span className="block h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <div>
                        <span className="font-medium">Childcare Services</span>
                        <p className="text-gray-600 text-sm">
                          Nannies and domestic help are affordable and widely
                          available
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold mb-3">
                      Ready to Find Your Family Home?
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Our AI matching system can help you find the perfect
                      property based on your family's specific needs and
                      preferences.
                    </p>
                    <Button className="w-full">Start AI Matching</Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Need Personalized Advice?
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Speak with our family relocation specialists who can
                      provide customized guidance for your move to Medellín.
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact an Expert
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

export default FamiliesGuide;
