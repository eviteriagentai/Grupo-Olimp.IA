import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PropertySearch from "./PropertySearch";
import FeaturedProperties from "./FeaturedProperties";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin, Building, ArrowRight, Filter } from "lucide-react";

const PropertiesPage: React.FC = () => {
  const [activeView, setActiveView] = useState<"all" | "map" | "featured">(
    "all",
  );

  const handlePropertySelect = (id: string) => {
    console.log(`Selected property: ${id}`);
    // In a real implementation, this would navigate to the property details page
  };

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
              Explore Properties in Medellín
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Browse our extensive collection of properties across Medellín's
              most desirable neighborhoods
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs
              value={activeView}
              onValueChange={(value) => setActiveView(value as any)}
              className="py-4"
            >
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="all" className="text-sm">
                    All Properties
                  </TabsTrigger>
                  <TabsTrigger value="map" className="text-sm">
                    Map View
                  </TabsTrigger>
                  <TabsTrigger value="featured" className="text-sm">
                    Featured
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filters</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Building className="h-4 w-4" />
                    <span>Property Type</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="mt-6">
                <PropertySearch
                  initialView="grid"
                  onPropertySelect={handlePropertySelect}
                  onSearch={(filters) =>
                    console.log("Search filters:", filters)
                  }
                />
              </TabsContent>

              <TabsContent value="map" className="mt-6">
                <PropertySearch
                  initialView="map"
                  onPropertySelect={handlePropertySelect}
                  onSearch={(filters) =>
                    console.log("Search filters:", filters)
                  }
                />
              </TabsContent>

              <TabsContent value="featured" className="mt-6">
                <FeaturedProperties
                  title="Featured Properties"
                  subtitle="Our handpicked selection of premium properties in Medellín"
                  onViewDetails={handlePropertySelect}
                  onFavorite={(id) =>
                    console.log(`Added property ${id} to favorites`)
                  }
                  onViewAll={() => setActiveView("all")}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">
                  Not finding what you're looking for?
                </h2>
                <p className="text-gray-600">
                  Try our AI matching system to find properties that perfectly
                  match your preferences.
                </p>
              </div>
              <Button className="whitespace-nowrap" size="lg">
                Start AI Matching
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PropertiesPage;
