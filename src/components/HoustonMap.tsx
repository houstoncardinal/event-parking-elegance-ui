import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface HoustonMapProps {
  onCitySelect?: (cityIndex: number) => void;
  activeCity?: number;
}

const HoustonMap: React.FC<HoustonMapProps> = ({ onCitySelect, activeCity = 0 }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  const cities = [
    { name: 'Houston', lat: 29.7604, lng: -95.3698, color: '#fbbf24' }, // Gold
    { name: 'Sugar Land', lat: 29.6196, lng: -95.6349, color: '#6b7280' },
    { name: 'The Woodlands', lat: 30.1588, lng: -95.4513, color: '#6b7280' },
    { name: 'Katy', lat: 29.7858, lng: -95.8244, color: '#6b7280' },
    { name: 'Pearland', lat: 29.5638, lng: -95.2861, color: '#6b7280' },
    { name: 'Conroe', lat: 30.3118, lng: -95.4560, color: '#6b7280' },
    { name: 'League City', lat: 29.5074, lng: -95.0949, color: '#6b7280' },
    { name: 'Cypress', lat: 29.9691, lng: -95.6972, color: '#6b7280' }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-95.3698, 29.7604], // Houston center
      zoom: 9,
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
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.style.cssText = `
        width: ${index === 0 ? '20px' : '16px'};
        height: ${index === 0 ? '20px' : '16px'};
        background-color: ${index === activeCity ? city.color : '#9ca3af'};
        border: 3px solid white;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        transform: ${index === activeCity ? 'scale(1.2)' : 'scale(1)'};
      `;

      // Add hover effect
      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = 'scale(1.3)';
      });
      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = index === activeCity ? 'scale(1.2)' : 'scale(1)';
      });

      // Create marker
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([city.lng, city.lat])
        .addTo(map.current!);

      // Add click handler
      markerElement.addEventListener('click', () => {
        onCitySelect?.(index);
      });

      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setText(city.name);
      
      marker.setPopup(popup);
      markersRef.current.push(marker);
    });
  };

  // Update markers when active city changes
  useEffect(() => {
    if (map.current && !showTokenInput) {
      addMarkers();
    }
  }, [activeCity, showTokenInput]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap(mapboxToken);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTokenSubmit();
    }
  };

  if (showTokenInput) {
    return (
      <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-lg border border-white/40 h-96 flex flex-col items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/60 max-w-md w-full">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-gold-600" />
            <h3 className="text-lg font-playfair font-bold text-slate-900">
              Enable Interactive Map
            </h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            To display the interactive Houston map, please enter your Mapbox public token.
          </p>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGl..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full"
            />
            <Button 
              onClick={handleTokenSubmit}
              className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white"
              disabled={!mapboxToken.trim()}
            >
              Load Map
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Get your free token at{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-4 shadow-lg border border-white/40 h-96">
      <div ref={mapContainer} className="w-full h-full rounded-xl overflow-hidden" />
      
      {/* Map overlay with legend */}
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/60">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-gold-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-xs text-slate-700 font-medium">Houston HQ</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-400 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-xs text-slate-700 font-medium">Service Areas</span>
        </div>
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