import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  CalendarIcon,
  Clock,
  MapPin,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

const ScheduleVisitPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This would normally be fetched from an API based on the ID
  const property = {
    id: id || "1",
    title: "Modern Apartment with Mountain View",
    address: "Calle 10 #43E-31, El Poblado, Medellín",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    agent: {
      name: "Maria Rodriguez",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
  };

  // Available time slots
  const availableTimeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to an API
    console.log({
      propertyId: id,
      date,
      timeSlot,
      name,
      email,
      phone,
      message,
    });

    // Show success message
    setIsSubmitted(true);

    // In a real app, you might redirect after a delay
    setTimeout(() => {
      navigate(`/property/${id}`);
    }, 5000);
  };

  const handleBack = () => {
    navigate(`/property/${id}`);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-md mx-auto text-center">
              <div className="mb-6 text-green-500 flex justify-center">
                <CheckCircle2 className="h-16 w-16" />
              </div>
              <h1 className="text-2xl font-bold mb-4">
                Visit Scheduled Successfully!
              </h1>
              <p className="text-gray-600 mb-6">
                Your visit to {property.title} has been scheduled for{" "}
                {date && format(date, "MMMM d, yyyy")} at {timeSlot}. We've sent
                a confirmation to your email. Our agent will contact you shortly
                to confirm the details.
              </p>
              <Button
                onClick={handleBack}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300"
              >
                Return to Property Details
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-6 hover:bg-transparent hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Property
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-6">Schedule a Visit</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            // Disable past dates and Sundays
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today || date.getDay() === 0;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Time</label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              {slot}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+57 300 123 4567"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Information (Optional)
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any specific questions or requirements for your visit?"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                  disabled={!date || !timeSlot || !name || !email || !phone}
                >
                  Schedule Visit
                </Button>
              </form>
            </div>

            {/* Property Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-semibold mb-4">Property Details</h2>

                  <div className="mb-4">
                    <div className="h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="font-medium">{property.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.address}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Your Agent</h3>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                        <img
                          src={property.agent.image}
                          alt={property.agent.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span>{property.agent.name}</span>
                    </div>
                  </div>

                  <div className="border-t border-b py-4 my-4">
                    <h3 className="font-medium mb-2">Visit Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <CalendarIcon className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <div>
                          <p className="font-medium">Date</p>
                          <p className="text-gray-600">
                            {date
                              ? format(date, "MMMM d, yyyy")
                              : "Please select a date"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <div>
                          <p className="font-medium">Time</p>
                          <p className="text-gray-600">
                            {timeSlot || "Please select a time slot"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    <p>
                      Our agent will meet you at the property at the scheduled
                      time. Please arrive on time and bring your ID.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleVisitPage;
