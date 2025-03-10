import React from "react";

interface ColombiaMapProps {
  markers?: Array<{
    id: string;
    latitude: number;
    longitude: number;
    title?: string;
    price?: number;
  }>;
  selectedMarker?: string | null;
  onMarkerClick?: (id: string) => void;
  height?: string;
  width?: string;
  className?: string;
}

const ColombiaMap: React.FC<ColombiaMapProps> = ({
  markers = [],
  selectedMarker = null,
  onMarkerClick = () => {},
  height = "100%",
  width = "100%",
  className = "",
}) => {
  // Medellín coordinates
  const medellinLat = 6.2476;
  const medellinLng = -75.5658;

  // Function to convert lat/lng to SVG coordinates (simplified for this example)
  // This is a very basic transformation and would need to be adjusted for accuracy
  const transformCoordinates = (lat: number, lng: number) => {
    // These values would need to be calibrated for a real implementation
    // This is just a simple approximation for Medellín area
    const centerLat = medellinLat;
    const centerLng = medellinLng;

    // Scale factors (would need adjustment for real implementation)
    const latScale = 200;
    const lngScale = 200;

    // Transform to SVG coordinates
    const x = (lng - centerLng) * lngScale + 400; // 400 is roughly center x of our SVG
    const y = (centerLat - lat) * latScale + 300; // 300 is roughly center y of our SVG

    return { x, y };
  };

  const formatPrice = (price?: number) => {
    if (!price) return "";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className={`relative overflow-hidden bg-blue-50 ${className}`}
      style={{ height, width }}
    >
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Colombia map outline - simplified version */}
        <path
          d="M400,150 C450,170 500,200 520,250 C540,300 550,350 530,400 C510,450 480,500 450,550 C420,600 400,650 350,670 C300,690 250,680 200,650 C150,620 120,580 100,530 C80,480 70,430 90,380 C110,330 150,290 200,260 C250,230 300,210 350,200 C380,190 380,160 400,150 Z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          strokeWidth="2"
        />

        {/* Medellín area highlight */}
        <circle
          cx="400"
          cy="300"
          r="50"
          fill="#dbeafe"
          stroke="#3b82f6"
          strokeWidth="1"
          opacity="0.7"
        />
        <text
          x="400"
          y="300"
          textAnchor="middle"
          fill="#1e40af"
          fontSize="12"
          fontWeight="bold"
        >
          Medellín
        </text>

        {/* Property markers */}
        {markers.map((marker) => {
          const { x, y } = transformCoordinates(
            marker.latitude,
            marker.longitude,
          );
          const isSelected = selectedMarker === marker.id;

          return (
            <g
              key={marker.id}
              onClick={() => onMarkerClick(marker.id)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={x}
                cy={y}
                r={isSelected ? 12 : 8}
                fill={isSelected ? "#8b5cf6" : "#6366f1"}
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-300"
              />
              {isSelected && (
                <>
                  <rect
                    x={x - 60}
                    y={y - 45}
                    width="120"
                    height="35"
                    rx="4"
                    fill="white"
                    stroke="#8b5cf6"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y - 25}
                    textAnchor="middle"
                    fill="#1f2937"
                    fontSize="10"
                  >
                    {marker.title || `Property ${marker.id}`}
                  </text>
                  {marker.price && (
                    <text
                      x={x}
                      y={y - 15}
                      textAnchor="middle"
                      fill="#8b5cf6"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {formatPrice(marker.price)}
                    </text>
                  )}
                </>
              )}
            </g>
          );
        })}

        {/* Compass */}
        <g transform="translate(730, 70)">
          <circle
            cx="0"
            cy="0"
            r="20"
            fill="white"
            stroke="#9ca3af"
            strokeWidth="1"
          />
          <path d="M0,-15 L5,-5 L0,-8 L-5,-5 Z" fill="#ef4444" />
          <path d="M0,15 L5,5 L0,8 L-5,5 Z" fill="#6b7280" />
          <text x="0" y="-20" textAnchor="middle" fill="#6b7280" fontSize="10">
            N
          </text>
        </g>

        {/* Scale */}
        <g transform="translate(70, 730)">
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="0"
            stroke="#6b7280"
            strokeWidth="2"
          />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="#6b7280" strokeWidth="2" />
          <line
            x1="100"
            y1="-5"
            x2="100"
            y2="5"
            stroke="#6b7280"
            strokeWidth="2"
          />
          <text x="50" y="20" textAnchor="middle" fill="#6b7280" fontSize="10">
            10 km
          </text>
        </g>
      </svg>

      {/* Map attribution */}
      <div className="absolute bottom-1 right-1 text-xs text-gray-500">
        © Grupo Olimp.IA Maps
      </div>
    </div>
  );
};

export default ColombiaMap;
