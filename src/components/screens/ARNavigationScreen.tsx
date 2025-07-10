
import React, { useState, useEffect } from 'react';
import { Navigation, ArrowUp, ArrowLeft, ArrowRight, MapPin, CheckCircle } from 'lucide-react';

const ARNavigationScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isNavigating, setIsNavigating] = useState(true);

  const steps = [
    {
      direction: 'straight',
      distance: '15 feet',
      instruction: 'Head straight to Dairy section',
      icon: ArrowUp,
      landmark: 'Pass Electronics on your right'
    },
    {
      direction: 'left',
      distance: '30 feet',
      instruction: 'Turn left at the end of aisle',
      icon: ArrowLeft,
      landmark: 'Milk products ahead'
    },
    {
      direction: 'right',
      distance: '45 feet',
      instruction: 'Turn right toward Bakery',
      icon: ArrowRight,
      landmark: 'Fresh bread section'
    },
    {
      direction: 'straight',
      distance: '20 feet',
      instruction: 'Head to Produce section',
      icon: ArrowUp,
      landmark: 'Bananas in aisle 3'
    }
  ];

  useEffect(() => {
    if (!isNavigating) return;
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsNavigating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isNavigating, steps.length]);

  const currentInstruction = steps[currentStep];
  const DirectionIcon = currentInstruction?.icon || ArrowUp;

  return (
    <div className="p-4 pb-20 min-h-full bg-gradient-to-b from-walmart-blue/5 to-walmart-gray">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-walmart-text-dark">Live Navigation</h1>
          <p className="text-gray-600">AR-guided shopping assistance</p>
        </div>
        <div className="bg-walmart-yellow rounded-full p-3">
          <Navigation size={24} className="text-walmart-blue" />
        </div>
      </div>

      {/* AR Camera View Simulation */}
      <div className="relative bg-gray-900 rounded-2xl mb-6 overflow-hidden" style={{ height: '300px' }}>
        {/* Simulated camera feed background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800"></div>
        
        {/* Store aisle overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-32 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent"></div>
        </div>

        {isNavigating && currentInstruction ? (
          <>
            {/* AR Direction Arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-walmart-yellow/90 rounded-full p-6 animate-bounce-gentle">
                <DirectionIcon size={48} className="text-walmart-blue" />
              </div>
            </div>

            {/* Distance and Direction Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold">{currentInstruction.distance}</span>
                  <div className="bg-walmart-yellow rounded-full px-3 py-1">
                    <span className="text-walmart-text-dark text-sm font-semibold">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                </div>
                <p className="text-lg">{currentInstruction.instruction}</p>
                <p className="text-sm text-gray-300 mt-1">{currentInstruction.landmark}</p>
              </div>
            </div>
          </>
        ) : (
          /* Arrival State */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Navigation Complete!</h2>
              <p className="text-gray-300">You've reached all your items</p>
            </div>
          </div>
        )}

        {/* Crosshair/Center indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 border-2 border-white rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Shopping Progress */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-walmart-text-dark">Shopping Progress</h2>
          <span className="text-sm text-gray-600">{currentStep + 1} of {steps.length} locations</span>
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center p-3 rounded-xl transition-all ${
                index === currentStep
                  ? 'bg-walmart-blue/10 border-2 border-walmart-blue'
                  : index < currentStep
                  ? 'bg-green-50 border-2 border-green-200'
                  : 'bg-gray-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                index < currentStep
                  ? 'bg-green-500 text-white'
                  : index === currentStep
                  ? 'bg-walmart-blue text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}>
                {index < currentStep ? (
                  <CheckCircle size={16} />
                ) : (
                  <span className="text-sm font-bold">{index + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <p className={`font-medium ${
                  index === currentStep ? 'text-walmart-blue' : 'text-walmart-text-dark'
                }`}>
                  {step.instruction}
                </p>
                <p className="text-sm text-gray-600">{step.landmark}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <button className="flex-1 bg-white border-2 border-walmart-blue text-walmart-blue p-3 rounded-xl font-semibold">
          Pause Navigation
        </button>
        <button className="flex-1 walmart-gradient text-white p-3 rounded-xl font-semibold">
          <div className="flex items-center justify-center">
            <MapPin size={16} className="mr-2" />
            View Map
          </div>
        </button>
      </div>
    </div>
  );
};

export default ARNavigationScreen;
