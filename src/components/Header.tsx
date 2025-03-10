import React, { useState } from "react";
import {
  Menu,
  Search,
  Home,
  Building,
  MapPin,
  Bell,
  Users,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
  onLogin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
  onProfileClick?: () => void;
  onNotificationsClick?: () => void;
  onFavoritesClick?: () => void;
}

const Header = ({
  isLoggedIn = false,
  userName = "John Doe",
  userAvatar = "",
  onLogin = () => {},
  onSignup = () => {},
  onLogout = () => {},
  onProfileClick = () => {},
  onNotificationsClick = () => {},
  onFavoritesClick = () => {},
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full h-20 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary hidden sm:inline-block">
              Grupo Olimp.IA
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-700 hover:text-primary flex items-center gap-1 text-sm font-medium"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </a>
          <a
            href="/properties"
            className="text-gray-700 hover:text-primary flex items-center gap-1 text-sm font-medium"
          >
            <Building className="h-4 w-4" />
            <span>Properties</span>
          </a>
          <a
            href="/neighborhoods"
            className="text-gray-700 hover:text-primary flex items-center gap-1 text-sm font-medium"
          >
            <MapPin className="h-4 w-4" />
            <span>Neighborhoods</span>
          </a>
          <a
            href="/ai-matching"
            className="text-gray-700 hover:text-primary flex items-center gap-1 text-sm font-medium"
          >
            <Search className="h-4 w-4" />
            <span>AI Matching</span>
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications - removed */}

          {/* Contact Us Button */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/contact-us")}
              className="hidden sm:flex"
            >
              Contact Us
            </Button>
            <Button
              onClick={() => (window.location.href = "/ai-matching")}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              <span className="relative inline-flex items-center">
                <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white animate-ping"></span>
                <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white"></span>
                Start AI Matching
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-20 left-0 w-full py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-gray-700 hover:text-primary flex items-center gap-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
            <a
              href="/properties"
              className="text-gray-700 hover:text-primary flex items-center gap-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Building className="h-5 w-5" />
              <span>Properties</span>
            </a>
            <a
              href="/neighborhoods"
              className="text-gray-700 hover:text-primary flex items-center gap-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MapPin className="h-5 w-5" />
              <span>Neighborhoods</span>
            </a>
            <a
              href="/ai-matching"
              className="text-gray-700 hover:text-primary flex items-center gap-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              <span>AI Matching</span>
            </a>
            <Button
              onClick={() => (window.location.href = "/contact-us")}
              className="w-full mt-2"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
