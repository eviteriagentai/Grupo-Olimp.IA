import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Home,
  DollarSign,
  MapPin,
  Building,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AIMatchingQuestionnaireProps {
  onComplete?: (preferences: UserPreferences) => void;
  onCancel?: () => void;
  isOpen?: boolean;
}

interface UserPreferences {
  lifestyle: string;
  budget: string;
  neighborhoods: string[];
  amenities: string[];
  propertyType: string;
  bedrooms: string;
  moveInDate: string;
}

const AIMatchingQuestionnaire = ({
  onComplete = () => {},
  onCancel = () => {},
  isOpen = true,
}: AIMatchingQuestionnaireProps) => {
  const [step, setStep] = useState(1);
  const [animationDirection, setAnimationDirection] = useState<
    "forward" | "backward"
  >("forward");
  const [progress, setProgress] = useState(20);
  const [preferences, setPreferences] = useState<UserPreferences>({
    lifestyle: "",
    budget: "",
    neighborhoods: [],
    amenities: [],
    propertyType: "",
    bedrooms: "",
    moveInDate: "",
  });

  const totalSteps = 5;

  const updatePreference = (key: keyof UserPreferences, value: any) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    setAnimationDirection("forward");
    if (step < totalSteps) {
      setStep(step + 1);
      setProgress(((step + 1) / totalSteps) * 100);
    } else {
      onComplete(preferences);
    }
  };

  const handleBack = () => {
    setAnimationDirection("backward");
    if (step > 1) {
      setStep(step - 1);
      setProgress(((step - 1) / totalSteps) * 100);
    } else {
      onCancel();
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!preferences.lifestyle;
      case 2:
        return !!preferences.budget;
      case 3:
        return preferences.neighborhoods.length > 0;
      case 4:
        return preferences.amenities.length > 0;
      case 5:
        return !!preferences.propertyType && !!preferences.bedrooms;
      default:
        return true;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 bg-white">
      <Card className="w-full max-w-[800px] overflow-hidden shadow-xl bg-white border-2 border-primary/20 animate-fadeIn">
        <CardHeader className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6" />
            <CardTitle className="text-xl">AI Property Matching</CardTitle>
          </div>
          <p className="text-white/80 mt-2">
            Answer a few questions to find your perfect property in Medellín
          </p>
        </CardHeader>

        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress
            value={progress}
            className="h-2 bg-gray-200"
            style={{
              background:
                "linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)",
              backgroundSize: "200% 200%",
              animation: "gradient 2s ease infinite",
            }}
          />
        </div>

        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                x: animationDirection === "forward" ? 50 : -50,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: animationDirection === "forward" ? -50 : 50,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    What's your lifestyle?
                  </h3>
                  <p className="text-gray-500">
                    Tell us about your lifestyle to help us find properties that
                    match your daily routine.
                  </p>

                  <RadioGroup
                    value={preferences.lifestyle}
                    onValueChange={(value) =>
                      updatePreference("lifestyle", value)
                    }
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
                  >
                    {[
                      {
                        value: "social",
                        label: "Social Butterfly",
                        description:
                          "I love being close to restaurants, bars, and cultural activities",
                        icon: <Building className="h-5 w-5" />,
                      },
                      {
                        value: "family",
                        label: "Family Oriented",
                        description:
                          "I need space for family and proximity to schools and parks",
                        icon: <Home className="h-5 w-5" />,
                      },
                      {
                        value: "professional",
                        label: "Working Professional",
                        description:
                          "I need a quiet place to work and easy commute options",
                        icon: <DollarSign className="h-5 w-5" />,
                      },
                      {
                        value: "adventurous",
                        label: "Adventure Seeker",
                        description:
                          "I want to be close to outdoor activities and nature",
                        icon: <MapPin className="h-5 w-5" />,
                      },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-start space-x-3 border rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 ${preferences.lifestyle === option.value ? "border-primary bg-gradient-to-r from-primary/10 to-violet-500/10 shadow-md" : "border-gray-200 hover:border-gray-300"}`}
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="mt-1"
                        />
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <span className="text-primary mr-2">
                              {option.icon}
                            </span>
                            <span className="font-medium">{option.label}</span>
                          </div>
                          <p className="text-sm text-gray-500">
                            {option.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    What's your budget range?
                  </h3>
                  <p className="text-gray-500">
                    Select your monthly rental budget range in Colombian Pesos
                    (COP).
                  </p>

                  <Tabs defaultValue="monthly" className="w-full mt-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="monthly">Monthly Rent</TabsTrigger>
                      <TabsTrigger value="purchase">Purchase</TabsTrigger>
                    </TabsList>
                    <TabsContent value="monthly" className="pt-4">
                      <RadioGroup
                        value={preferences.budget}
                        onValueChange={(value) =>
                          updatePreference("budget", value)
                        }
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {[
                          {
                            value: "500000-1000000",
                            label: "$500,000 - $1,000,000 COP",
                          },
                          {
                            value: "1000000-2000000",
                            label: "$1,000,000 - $2,000,000 COP",
                          },
                          {
                            value: "2000000-3500000",
                            label: "$2,000,000 - $3,500,000 COP",
                          },
                          { value: "3500000+", label: "$3,500,000+ COP" },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 ${preferences.budget === option.value ? "border-primary bg-gradient-to-r from-primary/10 to-violet-500/10 shadow-md" : "border-gray-200 hover:border-gray-300"}`}
                          >
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </TabsContent>
                    <TabsContent value="purchase" className="pt-4">
                      <RadioGroup
                        value={preferences.budget}
                        onValueChange={(value) =>
                          updatePreference("budget", value)
                        }
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {[
                          { value: "100m-300m", label: "$100M - $300M COP" },
                          { value: "300m-500m", label: "$300M - $500M COP" },
                          { value: "500m-800m", label: "$500M - $800M COP" },
                          { value: "800m+", label: "$800M+ COP" },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 ${preferences.budget === option.value ? "border-primary bg-gradient-to-r from-primary/10 to-violet-500/10 shadow-md" : "border-gray-200 hover:border-gray-300"}`}
                          >
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                            />
                            <span>{option.label}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Preferred neighborhoods
                  </h3>
                  <p className="text-gray-500">
                    Select the neighborhoods in Medellín you're interested in
                    (select at least one).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {[
                      "El Poblado",
                      "Laureles",
                      "Envigado",
                      "Sabaneta",
                      "Belén",
                      "La Estrella",
                      "Estadio",
                      "Centro",
                      "Robledo",
                      "El Tesoro",
                      "Ciudad del Río",
                      "Las Palmas",
                    ].map((neighborhood) => {
                      const isSelected =
                        preferences.neighborhoods.includes(neighborhood);
                      return (
                        <div
                          key={neighborhood}
                          onClick={() => {
                            if (isSelected) {
                              updatePreference(
                                "neighborhoods",
                                preferences.neighborhoods.filter(
                                  (n) => n !== neighborhood,
                                ),
                              );
                            } else {
                              updatePreference("neighborhoods", [
                                ...preferences.neighborhoods,
                                neighborhood,
                              ]);
                            }
                          }}
                          className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${isSelected ? "border-primary bg-gradient-to-r from-primary/10 to-violet-500/10 shadow-md" : "border-gray-200 hover:border-gray-300"}`}
                        >
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{neighborhood}</span>
                          </div>
                          {isSelected && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Must-have amenities</h3>
                  <p className="text-gray-500">
                    Select the amenities that are important to you (select at
                    least one).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {[
                      "Swimming Pool",
                      "Gym",
                      "Parking",
                      "Balcony",
                      "Security",
                      "Furnished",
                      "Air Conditioning",
                      "Elevator",
                      "Laundry Room",
                      "Pet Friendly",
                      "Storage",
                      "Garden/Terrace",
                    ].map((amenity) => {
                      const isSelected =
                        preferences.amenities.includes(amenity);
                      return (
                        <div
                          key={amenity}
                          onClick={() => {
                            if (isSelected) {
                              updatePreference(
                                "amenities",
                                preferences.amenities.filter(
                                  (a) => a !== amenity,
                                ),
                              );
                            } else {
                              updatePreference("amenities", [
                                ...preferences.amenities,
                                amenity,
                              ]);
                            }
                          }}
                          className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${isSelected ? "border-primary bg-gradient-to-r from-primary/10 to-violet-500/10 shadow-md" : "border-gray-200 hover:border-gray-300"}`}
                        >
                          <span>{amenity}</span>
                          {isSelected && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Final details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Property Type
                        </label>
                        <Select
                          value={preferences.propertyType}
                          onValueChange={(value) =>
                            updatePreference("propertyType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="penthouse">Penthouse</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Bedrooms</label>
                        <Select
                          value={preferences.bedrooms}
                          onValueChange={(value) =>
                            updatePreference("bedrooms", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of bedrooms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Bedroom</SelectItem>
                            <SelectItem value="2">2 Bedrooms</SelectItem>
                            <SelectItem value="3">3 Bedrooms</SelectItem>
                            <SelectItem value="4">4+ Bedrooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Move-in Date
                        </label>
                        <Select
                          value={preferences.moveInDate}
                          onValueChange={(value) =>
                            updatePreference("moveInDate", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select move-in timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">
                              Immediately
                            </SelectItem>
                            <SelectItem value="1month">
                              Within 1 month
                            </SelectItem>
                            <SelectItem value="3months">
                              Within 3 months
                            </SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-violet-500/10 to-indigo-500/10 p-4 rounded-lg border border-primary/20 shadow-md animate-pulse">
                    <h4 className="font-medium flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-primary" />
                      AI Matching Ready
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Our AI will analyze your preferences and match you with
                      properties that best fit your needs.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex justify-between border-t p-6 bg-gradient-to-r from-gray-50 to-indigo-50">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {step === 1 ? "Cancel" : "Back"}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            {step === totalSteps ? "Find Matches" : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIMatchingQuestionnaire;
