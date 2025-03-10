import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Bike,
  Leaf,
  Mountain,
  Droplet,
  Bus,
  ArrowLeft,
  ArrowRight,
  Sun,
  Umbrella,
  Dumbbell,
} from "lucide-react";
import ColombiaMap from "../ColombiaMap";

const ActiveLivingGuide: React.FC = () => {
  const activeNeighborhoods = [
    {
      id: "laureles",
      name: "Laureles",
      description:
        "Laureles is one of Medellín's most walkable and bike-friendly neighborhoods, with tree-lined streets, excellent urban planning, and numerous parks. The flat terrain makes it perfect for cycling, jogging, and outdoor activities. It's home to the Estadio sports complex and several fitness facilities.",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80",
      highlights: ["Flat terrain", "Bike-friendly", "Parks", "Sports facilities"],
      averageRent: 1800000,
      parks: [
        "Primer Parque de Laureles",
        "Segundo Parque de Laureles",
        "Parque Lineal La Presidenta",
        "Aeroparque Juan Pablo II"
      ],
      sportsFacilities: [
        "Estadio Atanasio Girardot",
        "Unidad Deportiva Atanasio Girardot",
        "Coliseo Iván de Bedout",
        "Multiple gyms and fitness centers"
      ],
      outdoorActivities: [
        "Cycling on dedicated bike lanes",
        "Running/jogging paths",
        "Outdoor fitness stations",
        "Soccer fields and basketball courts"
      ],
      transportation: [
        "Estadio Metro Station",
        "Floresta Metro Station",
        "EnCicla bike sharing stations",
        "Integrated bus routes"
      ],
      latitude: 6.2546,
      longitude: -75.5748
    },
    {
      id: "el-poblado",
      name: "El Poblado (Eastern Hills)",
      description:
        "While known for its nightlife, the eastern hills of El Poblado offer excellent hiking and trail running opportunities with stunning city views. The area features premium fitness clubs, yoga studios, and access to natural reserves. The hilly terrain provides a good workout even for casual walks.",
      image:
        "https://images.unsplash.com/photo-1583001809873-a128495da465?w=800&q=80",
      highlights: ["Hiking trails", "Premium gyms", "Yoga studios", "Hill training"],
      averageRent: 2500000,
      parks: [
        "Parque Lleras (for people watching)",
        "Parque El Poblado",
        "Parque Lineal La Presidenta",
        "Cerro El Volador (nearby)"
      ],
      sportsFacilities: [
        "Bodytech Premium Fitness Centers",
        "SmartFit Gyms",
        "Yoga studios (Yoga Mística, Happy Yoga)",
        "CrossFit boxes"
      ],
      outdoorActivities: [
        "Hiking in the eastern hills",
        "Trail running with city views",
        "Hill training for cyclists and runners",
        "Outdoor yoga sessions"
      ],
      transportation: [
        "Poblado Metro Station",
        "Integrated bus routes",
        "Taxi services",
        "Some EnCicla stations (though hilly terrain)"
      ],
      latitude: 6.2086,
      longitude: -75.5659
    },
    {
      id: "belen",
      name: "Belén",
      description:
        "Belén offers a good balance of urban amenities and access to outdoor recreation. The neighborhood features several parks, sports facilities, and is close to Cerro Nutibara, a prominent hill with hiking trails and panoramic views. The area is more affordable than El Poblado or Laureles while still providing good options for active living.",
      image:
        "https://images.unsplash.com/photo-1595880723089-69933d1ff663?w=800&q=80",
      highlights: ["Affordable", "Cerro Nutibara access", "Sports complexes", "Parks"],
      averageRent: 1200000,
      parks: [
        "Parque de Belén",
        "Cerro Nutibara",
        "Parque Biblioteca Belén",
        "Unidad Deportiva de Belén"
      ],
      sportsFacilities: [
        "Unidad Deportiva de Belén",
        "Public swimming pools",
        "Soccer fields",
        "Community fitness centers"
      ],
      outdoorActivities: [
        "Hiking at Cerro Nutibara",