import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import PropertyCard from "./PropertyCard";
import AIMatchingQuestionnaire from "./AIMatchingQuestionnaire";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Brain,
  ArrowRight,
  Check,
  X,
  Home,
  Building,
  MapPin,
  DollarSign,
  Lightbulb,
} from "lucide-react";
import ColombiaMap from "./ColombiaMap";

interface UserPreferences {
  lifestyle: string;
  budget: string;
  neighborhoods: string[];
  amenities: string[];
  propertyType: string;
  bedrooms: string;
  moveInDate: string;
}

interface Property {
  id: string;
  image: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  featured: boolean;
  tags: string[];
  matchScore: number;
  matchReasons: string[];
  latitude: number;
  longitude: number;
}

const AIMatchingPage: React.FC = () => {
  const [stage, setStage] = useState<
    "intro" | "questionnaire" | "processing" | "results"
  >("intro");
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [matchedProperties, setMatchedProperties] = useState<Property[]>([]);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeInsight, setActiveInsight] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  // Sample properties data
  const sampleProperties: Property[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      title: "Modern Apartment with Mountain View",
      address: "El Poblado, Medellín",
      price: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      featured: true,
      tags: ["New", "Pool", "Furnished"],
      matchScore: 98,
      matchReasons: [
        "Matches your El Poblado location preference",
        "Within your budget range",
        "Has your requested amenities: Pool, Furnished",
        "Perfect for your social lifestyle with nearby restaurants and bars",
      ],
      latitude: 6.2476,
      longitude: -75.5658,
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Luxury Villa with Private Garden",
      address: "Laureles, Medellín",
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      featured: false,
      tags: ["Luxury", "Garden", "Security"],
      matchScore: 92,
      matchReasons: [
        "Matches your family-oriented lifestyle",
        "Has your requested bedrooms",
        "Includes your preferred amenities: Security",
        "Located in a quiet, family-friendly area",
      ],
      latitude: 6.2546,
      longitude: -75.5748,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Cozy Studio in City Center",
      address: "Centro, Medellín",
      price: 800000,
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      featured: false,
      tags: ["Studio", "Central", "Renovated"],
      matchScore: 85,
      matchReasons: [
        "Within your budget range",
        "Perfect for your professional lifestyle",
        "Central location with easy commute",
        "Recently renovated with modern amenities",
      ],
      latitude: 6.2376,
      longitude: -75.5758,
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      title: "Family Home with Terrace",
      address: "Envigado, Medellín",
      price: 1800000,
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      featured: true,
      tags: ["Family", "Terrace", "Parking"],
      matchScore: 89,
      matchReasons: [
        "Matches your family-oriented lifestyle",
        "Has your requested bedrooms",
        "Located in your preferred neighborhood",
        "Includes family-friendly features like a terrace",
      ],
      latitude: 6.2506,
      longitude: -75.5628,
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      title: "Modern Loft with City Views",
      address: "Belén, Medellín",
      price: 1500000,
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      featured: false,
      tags: ["Loft", "Views", "Modern"],
      matchScore: 82,
      matchReasons: [
        "Within your budget range",
        "Modern design matches your preferences",
        "Great views as requested",
        "Good location for your lifestyle",
      ],
      latitude: 6.2486,
      longitude: -75.5738,
    },
  ];

  // Simulate AI processing
  useEffect(() => {
    if (stage === "processing" && preferences) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setProcessingProgress(progress);

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Sort properties by match score
            const sorted = [...sampleProperties].sort(
              (a, b) => b.matchScore - a.matchScore,
            );
            setMatchedProperties(sorted);
            setStage("results");
          }, 500);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [stage, preferences]);

  const handleStartMatching = () => {
    setStage("questionnaire");
  };

  const handleQuestionnaireComplete = (userPreferences: UserPreferences) => {
    setPreferences(userPreferences);
    setStage("processing");
  };

  const handleViewDetails = (id: string) => {
    window.location.href = `/property/${id}`;
  };

  const handleFavorite = (id: string) => {
    console.log(`Added property ${id} to favorites`);
    // In a real implementation, this would add the property to favorites
  };

  const handlePropertySelect = (id: string) => {
    setSelectedProperty(id === selectedProperty ? null : id);
  };

  const renderIntroStage = () => (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 text-primary text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>AI-Powered Property Matching</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Home with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our advanced AI analyzes your preferences and lifestyle to match you
            with properties that truly fit your needs
          </p>
          <Button
            size="lg"
            onClick={handleStartMatching}
            className="text-base font-medium px-8 py-6 h-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 group animate-pulse"
          >
            <span className="relative inline-flex items-center">
              <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white animate-ping"></span>
              <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white"></span>
              Start AI Matching
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* How It Works */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:from-violet-500/40 hover:to-indigo-500/40">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Tell Us About Yourself
              </h3>
              <p className="text-gray-600">
                Answer a few questions about your lifestyle, preferences, and
                needs
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:from-violet-500/40 hover:to-indigo-500/40">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI Analyzes Your Needs
              </h3>
              <p className="text-gray-600">
                Our AI processes your preferences and matches them with
                available properties
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:from-violet-500/40 hover:to-indigo-500/40">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Get Personalized Matches
              </h3>
              <p className="text-gray-600">
                Review your personalized property matches with detailed
                compatibility insights
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="py-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use AI Matching?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p className="text-gray-600">
                  No more endless scrolling through listings that don't match
                  your needs
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Results
                </h3>
                <p className="text-gray-600">
                  Get properties that truly match your unique lifestyle and
                  preferences
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Discover Hidden Gems
                </h3>
                <p className="text-gray-600">
                  Find properties you might have overlooked with traditional
                  search methods
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Make Better Decisions
                </h3>
                <p className="text-gray-600">
                  Understand why each property matches your needs with detailed
                  insights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-amber-500 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">
                    "The AI matching system found me the perfect apartment in El
                    Poblado that matched all my requirements. I couldn't be
                    happier with my new home!"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
                        alt="Maria Rodriguez"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Maria Rodriguez</p>
                      <p className="text-sm text-gray-500">
                        El Poblado, Medellín
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-amber-500 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">
                    "I was amazed at how quickly the platform matched me with
                    properties that fit my budget and lifestyle. The process was
                    seamless and stress-free."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
                        alt="Carlos Mendoza"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Carlos Mendoza</p>
                      <p className="text-sm text-gray-500">
                        Laureles, Medellín
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-amber-500 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">
                    "As someone investing from abroad, the AI recommendations
                    made the process incredibly easy. I found a great investment
                    property without even visiting Medellín first."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
                        alt="Sofia Gutierrez"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Sofia Gutierrez</p>
                      <p className="text-sm text-gray-500">
                        Envigado, Medellín
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProcessingStage = () => (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Brain className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              AI is Finding Your Perfect Match
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI is analyzing your preferences and matching them with
              available properties
            </p>
          </div>

          <div className="mb-8">
            <Progress
              value={processingProgress}
              className="h-3 mb-2 overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)",
                backgroundSize: "200% 200%",
                animation: "gradient 2s ease infinite",
              }}
            >
              <div
                className="absolute top-0 left-0 h-full w-full opacity-30"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                  animation: "shimmer 2s infinite",
                  backgroundSize: "200% 100%",
                }}
              />
            </Progress>
            <p className="text-sm text-gray-500">
              {processingProgress}% Complete
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-violet-500/5 to-indigo-500/5 p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:border-violet-200">
              <div className="flex items-center">
                <div className="mr-3 text-violet-500 animate-pulse">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="text-gray-700">
                  Analyzing lifestyle preferences...
                </p>
              </div>
            </div>
            {processingProgress > 30 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-r from-violet-500/5 to-indigo-500/5 p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:border-violet-200"
              >
                <div className="flex items-center">
                  <div className="mr-3 text-violet-500 animate-pulse">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Matching neighborhood characteristics...
                  </p>
                </div>
              </motion.div>
            )}
            {processingProgress > 60 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-r from-violet-500/5 to-indigo-500/5 p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:border-violet-200"
              >
                <div className="flex items-center">
                  <div className="mr-3 text-violet-500 animate-pulse">
                    <Home className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Finding properties that match your criteria...
                  </p>
                </div>
              </motion.div>
            )}
            {processingProgress > 85 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-r from-violet-500/5 to-indigo-500/5 p-4 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:border-violet-200"
              >
                <div className="flex items-center">
                  <div className="mr-3 text-violet-500 animate-pulse">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">
                    Generating personalized insights...
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderResultsStage = () => (
    <div className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 text-primary text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>AI Match Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Personalized Property Matches
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based on your preferences, our AI has found these properties that
            best match your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {matchedProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-64 md:h-auto relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold animate-pulse shadow-md">
                          {property.matchScore}% Match
                        </Badge>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {property.title}
                          </h3>
                          <div className="flex items-center text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{property.address}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "COP",
                              maximumFractionDigits: 0,
                            }).format(property.price)}
                          </p>
                          <p className="text-sm text-gray-500">per month</p>
                        </div>
                      </div>

                      <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-gray-700 mr-6">
                            <span className="font-medium">
                              {property.bedrooms}
                            </span>{" "}
                            Beds
                          </span>
                          <span className="text-gray-700 mr-6">
                            <span className="font-medium">
                              {property.bathrooms}
                            </span>{" "}
                            Baths
                          </span>
                          <span className="text-gray-700">
                            <span className="font-medium">{property.area}</span>{" "}
                            m²
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Why this matches you:
                        </h4>
                        <ul className="space-y-1">
                          {property.matchReasons.map((reason, index) => (
                            <li
                              key={index}
                              className="flex items-start text-sm"
                            >
                              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {property.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-gray-100"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 group"
                          onClick={() => handleViewDetails(property.id)}
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleFavorite(property.id)}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Your Preferences</h3>

              {preferences && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Lifestyle
                    </h4>
                    <p className="font-medium">
                      {preferences.lifestyle === "social" && "Social Butterfly"}
                      {preferences.lifestyle === "family" && "Family Oriented"}
                      {preferences.lifestyle === "professional" &&
                        "Working Professional"}
                      {preferences.lifestyle === "adventurous" &&
                        "Adventure Seeker"}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Budget
                    </h4>
                    <p className="font-medium">
                      {preferences.budget === "500000-1000000" &&
                        "$500,000 - $1,000,000 COP"}
                      {preferences.budget === "1000000-2000000" &&
                        "$1,000,000 - $2,000,000 COP"}
                      {preferences.budget === "2000000-3500000" &&
                        "$2,000,000 - $3,500,000 COP"}
                      {preferences.budget === "3500000+" && "$3,500,000+ COP"}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Neighborhoods
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {preferences.neighborhoods.map((neighborhood, index) => (
                        <Badge key={index} variant="outline">
                          {neighborhood}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Property Type
                    </h4>
                    <p className="font-medium capitalize">
                      {preferences.propertyType}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Bedrooms
                    </h4>
                    <p className="font-medium">
                      {preferences.bedrooms}+ Bedrooms
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Must-have Amenities
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {preferences.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">AI Insights</h3>
                <div className="space-y-3">
                  {[
                    "Based on your preferences, El Poblado offers the best match for your lifestyle",
                    "Properties with pools are in high demand in your preferred areas",
                    "Your budget is above average for the neighborhoods you selected",
                    "Consider properties with security features for the best long-term value",
                  ].map((insight, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${activeInsight === insight ? "bg-primary/10 border border-primary/20" : "bg-gray-50 hover:bg-gray-100"}`}
                      onClick={() =>
                        setActiveInsight(
                          insight === activeInsight ? null : insight,
                        )
                      }
                    >
                      <div className="flex items-start">
                        <Lightbulb className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{insight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleStartMatching}
                >
                  Refine Preferences
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">Property Locations</h3>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <ColombiaMap
                    markers={matchedProperties.map((property) => ({
                      id: property.id,
                      latitude: property.latitude,
                      longitude: property.longitude,
                      title: property.title,
                      price: property.price,
                    }))}
                    selectedMarker={selectedProperty}
                    onMarkerClick={handlePropertySelect}
                    height="100%"
                    width="100%"
                    className="rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />

      {/* Main Content with padding for fixed header */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderIntroStage()}
            </motion.div>
          )}

          {stage === "questionnaire" && (
            <motion.div
              key="questionnaire"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AIMatchingQuestionnaire
                isOpen={true}
                onComplete={handleQuestionnaireComplete}
                onCancel={() => setStage("intro")}
              />
            </motion.div>
          )}

          {stage === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderProcessingStage()}
            </motion.div>
          )}

          {stage === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderResultsStage()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AIMatchingPage;
