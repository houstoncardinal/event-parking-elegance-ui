import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface HoustonMapProps {
  onCitySelect?: (cityIndex: number) => void;
  activeCity?: number;
}

const HoustonMap: React.FC<HoustonMapProps> = ({ onCitySelect, activeCity = 0 }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  
  // Use the provided Mapbox API key
  const mapboxToken = "pk.eyJ1IjoiaHVuYWlucTY1MDAiLCJhIjoiY21kNmd4dHpsMDA0ZjJscHRvajQ3OG44bCJ9.jskKvYRHlHVADMSB3S1AZg";

  const cities = [
    // All Premium Service Areas
    { name: 'Houston', lat: 29.7604, lng: -95.3698, color: '#fbbf24' },
    { name: 'Sugar Land', lat: 29.6196, lng: -95.6349, color: '#fbbf24' },
    { name: 'The Woodlands', lat: 30.1588, lng: -95.4513, color: '#fbbf24' },
    { name: 'Katy', lat: 29.7858, lng: -95.8244, color: '#fbbf24' },
    { name: 'Pearland', lat: 29.5638, lng: -95.2861, color: '#fbbf24' },
    { name: 'Conroe', lat: 30.3118, lng: -95.4560, color: '#fbbf24' },
    { name: 'Cypress', lat: 29.9691, lng: -95.6972, color: '#fbbf24' },
    { name: 'Spring', lat: 30.0799, lng: -95.4172, color: '#fbbf24' },
    { name: 'Tomball', lat: 30.0952, lng: -95.6169, color: '#fbbf24' },
    { name: 'Kingwood', lat: 30.0474, lng: -95.1844, color: '#fbbf24' },
    { name: 'Clear Lake', lat: 29.5638, lng: -95.0949, color: '#fbbf24' },
    { name: 'Friendswood', lat: 29.5294, lng: -95.2016, color: '#fbbf24' },
    { name: 'Missouri City', lat: 29.6185, lng: -95.5377, color: '#fbbf24' },
    { name: 'Stafford', lat: 29.6161, lng: -95.5577, color: '#fbbf24' },
    { name: 'League City', lat: 29.5074, lng: -95.0949, color: '#fbbf24' },
    { name: 'River Oaks', lat: 29.7404, lng: -95.4308, color: '#fbbf24' },
    { name: 'Memorial', lat: 29.7804, lng: -95.4808, color: '#fbbf24' },
    { name: 'Downtown', lat: 29.7604, lng: -95.3698, color: '#fbbf24' }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-95.3698, 29.7604], // Houston center
      zoom: 8.5, // Slightly zoomed out to show all service areas
      pitch: 0,
      bearing: 0
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Wait for map to load then add markers
    map.current.on('load', () => {
      addMarkers();
    });
  };

  const addMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    cities.forEach((city, index) => {
      // Create marker element
      const markerElement = document.createElement('div') as HTMLDivElement & { popup?: mapboxgl.Popup };
      markerElement.className = 'custom-marker';
      
      // All markers are premium service size
      const markerSize = '18px';
      const activeSize = '22px';
      
      markerElement.style.cssText = `
        width: ${index === activeCity ? activeSize : markerSize};
        height: ${index === activeCity ? activeSize : markerSize};
        background-color: ${index === activeCity ? city.color : '#9ca3af'};
        border: 3px solid white;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        transform: ${index === activeCity ? 'scale(1.2)' : 'scale(1)'};
      `;

      // Create marker
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([city.lng, city.lat])
        .addTo(map.current!);

      // Add hover effects and popup
      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = 'scale(1.3)';
        
        // Create popup dynamically on hover
        const popup = new mapboxgl.Popup({ 
          offset: 15,
          closeButton: false,
          closeOnClick: false,
          maxWidth: '200px',
          anchor: 'bottom'
        });
        
        // Create popup content with city name and contact info
        const popupContent = document.createElement('div');
        popupContent.innerHTML = `
          <div class="p-2">
            <div class="font-semibold text-slate-900 mb-1">${city.name}</div>
            <div class="text-sm text-slate-600">Premium Valet Service</div>
            <div class="text-xs text-gold-600 font-medium mt-1">(346) 764-9163</div>
          </div>
        `;
        
        popup.setDOMContent(popupContent);
        popup.setLngLat([city.lng, city.lat]).addTo(map.current!);
        
        // Store popup reference for removal
        markerElement.popup = popup;
      });
      
      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = index === activeCity ? 'scale(1.2)' : 'scale(1)';
        if (markerElement.popup) {
          markerElement.popup.remove();
          markerElement.popup = null;
        }
      });

      // Add click handler
      markerElement.addEventListener('click', () => {
        onCitySelect?.(index);
      });

      markersRef.current.push(marker);
    });
  };

  // Initialize map on component mount
  useEffect(() => {
    if (mapContainer.current && !map.current) {
      initializeMap(mapboxToken);
    }
  }, []);

  // Update markers when active city changes
  useEffect(() => {
    if (map.current) {
      addMarkers();
    }
  }, [activeCity]);

  return (
    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-4 shadow-lg border border-white/40 h-96">
      <style>
        {`
          .mapboxgl-popup {
            z-index: 1000 !important;
          }
          .mapboxgl-popup-content {
            background: white !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
            border: 1px solid rgba(0,0,0,0.1) !important;
          }
          .mapboxgl-popup-tip {
            border-top-color: white !important;
          }
        `}
      </style>
      <div ref={mapContainer} className="w-full h-full rounded-xl overflow-hidden" />
      
      {/* Map overlay with legend */}
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/60">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-gold-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-xs text-slate-700 font-medium">Premium Service Areas</span>
        </div>
        <div className="text-xs text-slate-500 font-medium">18 Premium Service Areas</div>
      </div>

      {/* Zoom to Houston button */}
      <div className="absolute top-6 left-6">
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            if (map.current) {
              map.current.flyTo({
                center: [-95.3698, 29.7604],
                zoom: 9,
                duration: 1000
              });
            }
          }}
          className="bg-white/95 backdrop-blur-sm border-white/60 hover:bg-white text-slate-700 shadow-sm"
        >
          <MapPin className="w-4 h-4 mr-1" />
          Houston
        </Button>
      </div>
    </div>
  );
};

export default HoustonMap;