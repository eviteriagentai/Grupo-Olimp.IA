import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PropertySearch from "./PropertySearch";
import AIMatchingQuestionnaire from "./AIMatchingQuestionnaire";
import FeaturedProperties from "./FeaturedProperties";
import Testimonials from "./Testimonials";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import AIChatbot from "./AIChatbot";

const Home: React.FC = () => {
  const [isAIMatchingOpen, setIsAIMatchingOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleStartAIMatching = () => {
    // Navigate to AI Matching page instead of opening the questionnaire directly
    window.location.href = "/ai-matching";
  };

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
        {/* Hero Section */}
        <HeroSection
          onCtaClick={handleStartAIMatching}
          ctaText="Start AI Matching"
          subtitle="Find your perfect home in Medellín with our AI-powered matching system that understands your unique preferences and lifestyle needs."
        />

        {/* AI Matching Questionnaire (conditionally rendered) */}
        {isAIMatchingOpen && (
          <AIMatchingQuestionnaire
            isOpen={isAIMatchingOpen}
            onComplete={(preferences) => {
              console.log("AI Matching Preferences:", preferences);
              setIsAIMatchingOpen(false);
              // In a real implementation, this would navigate to results page
            }}
            onCancel={() => setIsAIMatchingOpen(false)}
          />
        )}

        {/* Property Search Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Find Your Perfect Property
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use our advanced search tools to find properties that match your
                criteria in Medellín's most desirable neighborhoods.
              </p>
            </div>
            <PropertySearch
              onPropertySelect={handlePropertySelect}
              onSearch={(filters) => console.log("Search filters:", filters)}
            />
          </div>
        </section>

        {/* Featured Properties Section */}
        <FeaturedProperties
          onViewDetails={handlePropertySelect}
          onFavorite={(id) => console.log(`Added property ${id} to favorites`)}
          onViewAll={() => console.log("View all properties clicked")}
        />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Footer */}
        <Footer />
      </main>

      {/* AI Chatbot (always rendered, visibility controlled by state) */}
      <AIChatbot
        initialOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onSendMessage={async (message) => {
          console.log(`User message: ${message}`);
          // In a real implementation, this would call an API
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return "I can help you find the perfect property in Medellín! What neighborhoods are you interested in?";
        }}
      />
    </div>
  );
};

export default Home;
