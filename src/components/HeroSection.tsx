import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Best Rental Deals with AI Precision",
  subtitle = "Find your perfect home in Medellín with our AI-powered matching system that understands your unique preferences and lifestyle needs.",
  ctaText = "Start AI Matching",
  backgroundImage = "https://images.unsplash.com/photo-1583001809873-a128495da465?w=1920&q=80",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[800px] bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-6 animate-fade-in-up">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            <span>AI-Powered Real Estate in Medellín</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up animation-delay-150">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in-up animation-delay-300">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-450">
            <Button
              size="lg"
              className="text-base font-medium px-8 py-6 h-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 group"
              onClick={onCtaClick}
            >
              <span className="relative inline-flex items-center">
                <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white animate-ping"></span>
                <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white"></span>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base font-medium px-8 py-6 h-auto bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Browse Properties
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-white animate-fade-in-up animation-delay-600">
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-white/80">Properties</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-white/80">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/80 rounded-full"></div>
        </div>
        <p className="text-white/80 text-sm mt-2">Scroll Down</p>
      </div>
    </div>
  );
};

export default HeroSection;
