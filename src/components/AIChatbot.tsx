import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  Send,
  X,
  Maximize2,
  Minimize2,
  Bot,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIChatbotProps {
  initialOpen?: boolean;
  onClose?: () => void;
  onSendMessage?: (message: string) => Promise<string>;
  propertyRecommendations?: Array<{
    id: string;
    title: string;
    image: string;
    price: number;
  }>;
}

const AIChatbot = ({
  initialOpen = false,
  onClose = () => {},
  onSendMessage = async (message) => {
    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (
      message.toLowerCase().includes("property") ||
      message.toLowerCase().includes("home")
    ) {
      return "I can help you find the perfect property in Medellín! What neighborhoods are you interested in? What's your budget range?";
    } else if (message.toLowerCase().includes("budget")) {
      return "Great! Based on your budget, I can recommend several properties in El Poblado and Laureles. Would you like to see some options?";
    } else if (
      message.toLowerCase().includes("hello") ||
      message.toLowerCase().includes("hi")
    ) {
      return "Hello! I'm your AI real estate assistant. How can I help you find your perfect home in Medellín today?";
    } else {
      return "I'm here to help you find the perfect property in Medellín. Would you like me to recommend some properties based on your preferences?";
    }
  },
  propertyRecommendations = [
    {
      id: "1",
      title: "Modern Apartment with Mountain View",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      price: 1200000,
    },
    {
      id: "2",
      title: "Luxury Villa with Private Garden",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      price: 2500000,
    },
    {
      id: "3",
      title: "Cozy Studio in City Center",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      price: 800000,
    },
  ],
}: AIChatbotProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Hello! I'm your AI real estate assistant. How can I help you find your perfect home in Medellín today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await onSendMessage(inputValue);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Sorry, I'm having trouble connecting. Please try again later.",
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsMinimized(false);
      setIsOpen(false);
      onClose();
    }
  };

  const openFullDialog = () => {
    setIsDialogOpen(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Floating chat button
  const renderChatButton = () => (
    <Button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg z-50 bg-primary hover:bg-primary/90"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );

  // Minimized chat header
  const renderMinimizedChat = () => (
    <div className="fixed bottom-6 right-6 w-72 rounded-t-lg shadow-lg overflow-hidden z-50 bg-white border border-gray-200">
      <div
        className="bg-primary text-white p-3 flex justify-between items-center cursor-pointer"
        onClick={toggleMinimize}
      >
        <div className="flex items-center">
          <Bot className="h-5 w-5 mr-2" />
          <span className="font-medium">AI Assistant</span>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-white hover:bg-primary/90"
            onClick={toggleMinimize}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-white hover:bg-primary/90"
            onClick={toggleChat}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  // Full chat interface
  const renderChatInterface = () => {
    const chatContent = (
      <div className="flex flex-col h-full bg-white">
        {/* Chat Header */}
        <div className="bg-primary text-white p-3 flex justify-between items-center">
          <div className="flex items-center">
            <Bot className="h-5 w-5 mr-2" />
            <span className="font-medium">AI Property Assistant</span>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-primary/90"
              onClick={openFullDialog}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-primary/90"
              onClick={toggleMinimize}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-primary/90"
              onClick={toggleChat}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="flex items-start max-w-[80%]">
                {message.sender === "ai" && (
                  <Avatar className="h-8 w-8 mr-2 mt-1">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ai-assistant" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 ${message.sender === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"}`}
                >
                  <div className="whitespace-pre-wrap text-sm">
                    {message.content}
                  </div>
                  <div className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 ml-2 mt-1">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          ))}

          {/* Property Recommendations */}
          {messages.some(
            (m) =>
              m.content.toLowerCase().includes("recommend") ||
              m.content.toLowerCase().includes("options") ||
              m.content.toLowerCase().includes("show me"),
          ) && (
            <div className="flex justify-start">
              <div className="flex items-start max-w-[80%]">
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ai-assistant" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="rounded-lg p-3 bg-gray-100 text-gray-800">
                  <div className="whitespace-pre-wrap text-sm">
                    Here are some properties you might like:
                  </div>
                  <div className="flex flex-col space-y-2 mt-2">
                    {propertyRecommendations.map((property) => (
                      <div
                        key={property.id}
                        className="flex bg-white rounded-md overflow-hidden border border-gray-200"
                      >
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2 flex-1">
                          <div className="text-xs font-medium line-clamp-2">
                            {property.title}
                          </div>
                          <div className="text-xs text-primary font-bold mt-1">
                            {formatPrice(property.price)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs mt-2 text-primary font-medium cursor-pointer hover:underline">
                    View all recommendations →
                  </div>
                  <div className="text-xs mt-1 opacity-70">
                    {new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start max-w-[80%]">
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ai-assistant" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="rounded-lg p-3 bg-gray-100 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-3">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="rounded-full"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-center mt-2 text-gray-500">
            Powered by AI - Ask me about properties in Medellín
          </div>
        </div>
      </div>
    );

    return isDialogOpen ? (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] h-[600px] p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Property Assistant</DialogTitle>
          </DialogHeader>
          {chatContent}
        </DialogContent>
      </Dialog>
    ) : (
      <div className="fixed bottom-6 right-6 w-80 h-[500px] rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200">
        {chatContent}
      </div>
    );
  };

  return (
    <div className="bg-white">
      {!isOpen && renderChatButton()}
      {isOpen && isMinimized && renderMinimizedChat()}
      {isOpen && !isMinimized && renderChatInterface()}
    </div>
  );
};

export default AIChatbot;
