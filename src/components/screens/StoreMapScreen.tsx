
import React, { useState } from 'react';
import { Navigation, MapPin, Clock, ArrowRight, Zap } from 'lucide-react';

const StoreMapScreen: React.FC = () => {
  const [routeStarted, setRouteStarted] = useState(false);

  const route = [
    { aisle: 'Dairy', items: ['Milk'], color: '#ff6b6b' },
    { aisle: 'Bakery', items: ['Bread'], color: '#4ecdc4' },
    { aisle: 'Produce', items: ['Bananas'], color: '#45b7d1' },
    { aisle: 'Checkout', items: [], color: '#96ceb4' },
  ];

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-walmart-text-dark">Store Map</h1>
          <p className="text-gray-600">Optimized route for your items</p>
        </div>
        <div className="bg-walmart-blue rounded-full p-3">
          <Navigation size={24} className="text-white" />
        </div>
      </div>

      {/* Route Info */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Zap size={20} className="text-walmart-yellow mr-2" />
            <span className="font-bold text-walmart-text-dark">Smart Route</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">~8 minutes</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {route.map((stop, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3"
                style={{ backgroundColor: stop.color }}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-walmart-text-dark">{stop.aisle}</h3>
                {stop.items.length > 0 && (
                  <p className="text-sm text-gray-600">{stop.items.join(', ')}</p>
                )}
              </div>
              {index < route.length - 1 && (
                <ArrowRight size={16} className="text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Store Layout */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
        <h2 className="text-lg font-bold text-walmart-text-dark mb-4">Store Layout</h2>
        
        {/* Simplified Store Map */}
        <div className="relative bg-gray-100 rounded-xl p-4 h-64">
          {/* Entrance */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-walmart-blue text-white px-3 py-1 rounded-full text-sm font-medium">
            Entrance
          </div>
          
          {/* Aisles */}
          <div className="grid grid-cols-4 gap-2 h-40 mt-4">
            {/* Produce */}
            <div className="bg-green-200 rounded-lg flex items-center justify-center relative">
              <span className="text-xs font-medium text-center">Produce</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce-gentle">
                3
              </div>
            </div>
            
            {/* Dairy */}
            <div className="bg-blue-200 rounded-lg flex items-center justify-center relative">
              <span className="text-xs font-medium text-center">Dairy</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce-gentle">
                1
              </div>
            </div>
            
            {/* Bakery */}
            <div className="bg-yellow-200 rounded-lg flex items-center justify-center relative">
              <span className="text-xs font-medium text-center">Bakery</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce-gentle">
                2
              </div>
            </div>
            
            {/* Checkout */}
            <div className="bg-gray-300 rounded-lg flex items-center justify-center relative">
              <span className="text-xs font-medium text-center">Checkout</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce-gentle">
                4
              </div>
            </div>
          </div>
          
          {/* Route Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 200 240 Q 100 200 80 160 Q 120 120 160 120 Q 200 100 240 120 Q 280 140 300 180"
              stroke="#004c91"
              strokeWidth="3"
              strokeDasharray="5,5"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Start Navigation Button */}
      <button
        onClick={() => setRouteStarted(true)}
        className={`w-full p-4 rounded-2xl font-bold text-lg transition-all ${
          routeStarted
            ? 'bg-green-500 text-white'
            : 'walmart-gradient text-white hover:scale-105'
        }`}
      >
        {routeStarted ? (
          <div className="flex items-center justify-center">
            <Navigation size={20} className="mr-2" />
            Navigation Active
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <MapPin size={20} className="mr-2" />
            Start Navigation
          </div>
        )}
      </button>
    </div>
  );
};

export default StoreMapScreen;
