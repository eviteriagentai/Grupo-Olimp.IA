import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Code,
  Building,
  Users,
  MessageSquare,
  Sparkles,
  Globe,
  Lightbulb,
} from "lucide-react";

const OurTeamPage: React.FC = () => {
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
              Meet Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              The people and AI agents behind Grupo Olimp.IA
            </p>
          </div>
        </div>
        {/* Team Introduction */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A unique blend of human expertise and artificial intelligence
                working together to revolutionize real estate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Founder 1 */}
              <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&backgroundColor=b6e3f4"
                    alt="Carlos Mendoza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Carlos Mendoza</h3>
                  <p className="text-primary font-medium mb-3">
                    Co-Founder & CEO
                  </p>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience in Medellín's real estate
                    market, Carlos combines deep local knowledge with a passion
                    for technology. He leads our strategic vision and ensures
                    that our AI solutions are grounded in real-world property
                    expertise.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/5">
                      Real Estate Expert
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5">
                      Strategic Vision
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5">
                      Client Relations
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia&backgroundColor=ffdfbf"
                    alt="Sofia Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Sofia Rodriguez</h3>
                  <p className="text-primary font-medium mb-3">
                    Co-Founder & CTO
                  </p>
                  <p className="text-gray-600 mb-4">
                    A pioneer in AI and machine learning with a background in
                    computer science, Sofia leads our technology development.
                    She designed our proprietary AI matching algorithm that
                    powers the personalized property recommendations our clients
                    love.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/5">
                      AI Specialist
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5">
                      Tech Innovation
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5">
                      Data Science
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-16" />

            {/* AI Team Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="mr-2 h-4 w-4" />
                <span>AI-Powered Team</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our AI Agents</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the specialized AI agents that work alongside our human
                team to deliver exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Agent 1 */}
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
                      <Brain className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">ARIA</h3>
                    <p className="text-primary font-medium mb-3">
                      AI Matching Specialist
                    </p>
                    <p className="text-gray-600 mb-4">
                      ARIA analyzes client preferences and property data to
                      create personalized matches. She continuously learns from
                      client feedback to improve recommendation accuracy.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="bg-primary/5">
                        Preference Analysis
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Pattern Recognition
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Adaptive Learning
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Agent 2 */}
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
                      <MessageSquare className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">MILO</h3>
                    <p className="text-primary font-medium mb-3">
                      Client Support Assistant
                    </p>
                    <p className="text-gray-600 mb-4">
                      MILO provides 24/7 client support through our chatbot
                      interface. He can answer questions about properties,
                      neighborhoods, and the rental/buying process in Medellín.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="bg-primary/5">
                        Natural Language
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Knowledge Base
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Multilingual
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Agent 3 */}
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
                      <Building className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">NOVA</h3>
                    <p className="text-primary font-medium mb-3">
                      Market Analysis Engine
                    </p>
                    <p className="text-gray-600 mb-4">
                      NOVA monitors Medellín's real estate market trends,
                      pricing fluctuations, and neighborhood developments to
                      provide data-driven insights for both clients and our
                      team.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="bg-primary/5">
                        Predictive Analytics
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Market Trends
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5">
                        Data Visualization
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* How We Work Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our unique approach combines human expertise with AI
                capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  Human Team Strengths
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">
                        Local Market Knowledge
                      </span>
                      <p className="text-gray-600 text-sm">
                        Deep understanding of Medellín's neighborhoods and
                        culture
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">
                        Emotional Intelligence
                      </span>
                      <p className="text-gray-600 text-sm">
                        Understanding the emotional aspects of finding a home
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">Negotiation Skills</span>
                      <p className="text-gray-600 text-sm">
                        Expert negotiation to secure the best deals for clients
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">Relationship Building</span>
                      <p className="text-gray-600 text-sm">
                        Creating lasting connections with clients and partners
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-primary mr-2" />
                  AI Team Strengths
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">Data Processing</span>
                      <p className="text-gray-600 text-sm">
                        Analyzing thousands of properties and preferences
                        instantly
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">Pattern Recognition</span>
                      <p className="text-gray-600 text-sm">
                        Identifying subtle patterns in client preferences
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">24/7 Availability</span>
                      <p className="text-gray-600 text-sm">
                        Providing support and information around the clock
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <span className="block h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <div>
                      <span className="font-medium">Continuous Learning</span>
                      <p className="text-gray-600 text-sm">
                        Improving recommendations based on feedback and outcomes
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Join Our Team CTA */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurTeamPage;
