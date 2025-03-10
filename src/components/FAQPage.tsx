import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare } from "lucide-react";

const FAQPage: React.FC = () => {
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Find answers to common questions about our AI-powered property
              matching
            </p>
          </div>
        </div>

        {/* Search Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">How can we help you?</h2>
              <p className="text-gray-600">
                Search our FAQ for quick answers to common questions
              </p>
            </div>
            <div className="relative">
              <Input
                placeholder="Search for answers..."
                className="pl-10 py-6 text-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Category 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">
                  About Our AI Matching
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how our AI technology matches you with properties
                </p>
                <Button variant="link" className="p-0">
                  View 6 articles
                </Button>
              </div>

              {/* Category 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Property Listings</h3>
                <p className="text-gray-600 mb-4">
                  Information about our property listings and verification
                  process
                </p>
                <Button variant="link" className="p-0">
                  View 8 articles
                </Button>
              </div>

              {/* Category 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Account & Services</h3>
                <p className="text-gray-600 mb-4">
                  Questions about your account, services, and support
                </p>
                <Button variant="link" className="p-0">
                  View 5 articles
                </Button>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Most Common Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">
                    How does the AI property matching work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our AI property matching system analyzes your preferences,
                    lifestyle needs, and budget constraints through a detailed
                    questionnaire. It then processes this information using
                    advanced algorithms to match you with properties that best
                    fit your unique requirements. The system continuously learns
                    from your feedback to improve future recommendations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">
                    Is there a fee for using your AI matching service?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    No, our AI matching service is completely free for property
                    seekers. We earn our commission from property owners and
                    landlords when a successful match leads to a rental or
                    purchase. This allows us to provide you with unbiased
                    recommendations based solely on your needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">
                    How accurate are the property matches?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our AI matching system has a 92% satisfaction rate among
                    users. The accuracy depends on the detail and honesty in
                    your questionnaire responses. Most clients find their ideal
                    property within the top 5 recommendations. The system also
                    improves over time as it learns from your feedback on
                    suggested properties.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">
                    Can I see properties in person before making a decision?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely! While we provide detailed virtual tours and
                    information online, we always arrange in-person viewings for
                    properties you're seriously interested in. Our local agents
                    will accompany you to these viewings to answer any questions
                    and provide additional insights about the property and
                    neighborhood.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">
                    What areas in Medellín do you cover?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We cover all major neighborhoods in Medellín including El
                    Poblado, Laureles, Envigado, Sabaneta, Belén, and El Centro.
                    We also have listings in emerging areas like Ciudad del Río
                    and Las Palmas. Our local expertise spans the entire
                    metropolitan area, ensuring we can find options in any
                    neighborhood that interests you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-medium">
                    How long does the matching process take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    The initial AI matching process takes just minutes after you
                    complete the questionnaire. You'll receive your first set of
                    personalized property recommendations immediately. As you
                    provide feedback on these properties, the system refines its
                    suggestions. Most clients find their ideal property within
                    1-2 weeks of starting the process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-medium">
                    Do you help with the rental or purchase process?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, we provide full support throughout the entire process.
                    Once you've found a property you love, our team assists with
                    negotiations, paperwork, legal requirements, and closing
                    procedures. For international clients, we also offer
                    additional services like setting up bank accounts and
                    navigating residency requirements if needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-medium">
                    Can I use your services if I'm not currently in Medellín?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely! Many of our clients are international or
                    relocating from other parts of Colombia. Our virtual tours,
                    detailed property information, and video calls allow you to
                    explore options remotely. We can even conduct live video
                    walkthroughs of properties you're interested in. When you
                    arrive in Medellín, we'll have a shortlist ready for
                    in-person viewings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Still have questions?
                </h2>
                <p className="text-gray-600 max-w-xl">
                  If you couldn't find the answer to your question, our friendly
                  team is here to help you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Chat with Us
                </Button>
                <Button variant="outline">Contact Support</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
