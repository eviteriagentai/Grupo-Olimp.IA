import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import Testimonials from "./Testimonials";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { ArrowRight } from "lucide-react";

const AboutUsPage: React.FC = () => {
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
              About Grupo Olimp.IA
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Revolutionizing real estate in Medellín with AI-powered property
              matching
            </p>
          </div>
        </div>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Let our AI-powered platform match you with properties that truly
              fit your lifestyle and preferences
            </p>
            <Button size="lg" className="px-8">
              Start AI Matching
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <section className={"py-16 bg-gray-50"}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
              <div className={"text-center mb-12"}>
                <h2 className={"text-3xl font-bold mb-4"}>
                  Our Mission & Values
                </h2>
                <p className={"text-lg text-gray-600 max-w-3xl mx-auto"}>
                  We're committed to making property matching more efficient,
                  personalized, and enjoyable
                </p>
              </div>
              <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
                <div className={"bg-white p-8 rounded-lg shadow-sm"}>
                  <h3 className={"text-xl font-bold mb-4 text-primary"}>
                    Our Mission
                  </h3>
                  <p className={"text-gray-700 mb-4"}>
                    To revolutionize the real estate experience by leveraging
                    artificial intelligence to create perfect matches between
                    people and properties, saving time and reducing stress in
                    the property search process.
                  </p>
                  <p className={"text-gray-700"}>
                    We believe that finding your ideal home shouldn't be a
                    matter of luck or endless searching, but a streamlined
                    process powered by technology and guided by human expertise.
                  </p>
                </div>
                <div className={"bg-white p-8 rounded-lg shadow-sm"}>
                  <h3 className={"text-xl font-bold mb-4 text-primary"}>
                    Our Values
                  </h3>
                  <ul className={"space-y-3"}>
                    <li className={"flex items-start"}>
                      <span
                        className={"bg-primary/10 p-1 rounded-full mr-3 mt-1"}
                      >
                        <span
                          className={"block h-2 w-2 rounded-full bg-primary"}
                        />
                      </span>
                      <div className={""}>
                        <span className={"font-medium"}>Innovation</span>
                        <p className={"text-gray-600 text-sm"}>
                          Constantly improving our AI algorithms and user
                          experience
                        </p>
                      </div>
                    </li>
                    <li className={"flex items-start"}>
                      <span
                        className={"bg-primary/10 p-1 rounded-full mr-3 mt-1"}
                      >
                        <span
                          className={"block h-2 w-2 rounded-full bg-primary"}
                        />
                      </span>
                      <div className={""}>
                        <span className={"font-medium"}>Transparency</span>
                        <p className={"text-gray-600 text-sm"}>
                          Clear communication and honest property information
                        </p>
                      </div>
                    </li>
                    <li className={"flex items-start"}>
                      <span
                        className={"bg-primary/10 p-1 rounded-full mr-3 mt-1"}
                      >
                        <span
                          className={"block h-2 w-2 rounded-full bg-primary"}
                        />
                      </span>
                      <div className={""}>
                        <span className={"font-medium"}>Personalization</span>
                        <p className={"text-gray-600 text-sm"}>
                          Recognizing that each client has unique needs and
                          preferences
                        </p>
                      </div>
                    </li>
                    <li className={"flex items-start"}>
                      <span
                        className={"bg-primary/10 p-1 rounded-full mr-3 mt-1"}
                      >
                        <span
                          className={"block h-2 w-2 rounded-full bg-primary"}
                        />
                      </span>
                      <div className={""}>
                        <span className={"font-medium"}>Local Expertise</span>
                        <p className={"text-gray-600 text-sm"}>
                          Deep understanding of Medellín's neighborhoods and
                          culture
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* About Section */}
        <AboutSection
          title="Our Story"
          subtitle="Pioneering AI-Powered Real Estate in Colombia"
          description="Founded in 2023, Grupo Olimp.IA was born from a vision to transform the real estate experience in Medellín. We recognized that finding the perfect property often involved countless hours of searching through listings that didn't match clients' needs. By combining local real estate expertise with cutting-edge artificial intelligence, we've created a platform that truly understands what makes a property feel like home for each unique individual."
          features={[
            {
              icon: "Building",
              title: "Local Expertise",
              description:
                "Deep knowledge of Medellín's neighborhoods and property market trends.",
            },
            {
              icon: "Users",
              title: "Personalized Service",
              description:
                "Tailored property recommendations based on your unique preferences and needs.",
            },
            {
              icon: "Award",
              title: "AI-Powered Matching",
              description:
                "Advanced algorithms that learn your preferences to find your perfect property match.",
            },
          ]}
          contactInfo={{
            address: "Calle 10 #43E-31, El Poblado, Medellín, Colombia",
            phone: "+57 604 123 4567",
            email: "info@grupoolimpia.com",
            website: "www.grupoolimpia.com",
          }}
        />
        {/* Mission & Values */}

        {/* Testimonials */}
        <Testimonials
          title="What Our Clients Say"
          subtitle="Hear from people who found their perfect home through our AI-powered platform"
        />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
