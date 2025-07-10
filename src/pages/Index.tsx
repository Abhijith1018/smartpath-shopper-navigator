
import React, { useState } from 'react';
import MobileFrame from '../components/MobileFrame';
import BottomNavigation from '../components/BottomNavigation';
import HomeScreen from '../components/screens/HomeScreen';
import StoreMapScreen from '../components/screens/StoreMapScreen';
import ARNavigationScreen from '../components/screens/ARNavigationScreen';
import ScanAndGoScreen from '../components/screens/ScanAndGoScreen';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'map':
        return <StoreMapScreen />;
      case 'scan':
        return <ScanAndGoScreen />;
      case 'cart':
        return <HomeScreen />; // Simplified - could be separate cart screen
      case 'profile':
        return <HomeScreen />; // Simplified - could be separate profile screen
      default:
        return <HomeScreen />;
    }
  };

  // Show different screen based on active tab
  const getSpecialScreen = () => {
    // Show AR Navigation when coming from map with navigation started
    if (activeTab === 'map' && Math.random() > 0.5) { // Simulate navigation state
      return <ARNavigationScreen />;
    }
    return renderScreen();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-walmart-blue/5 via-walmart-gray to-walmart-yellow/10 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* App Description */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-walmart-text-dark mb-4">
              SmartPath <span className="text-walmart-blue">Shopper</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your intelligent in-store shopping assistant for Walmart. Plan, navigate, and checkout with ease.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-walmart-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="font-semibold text-walmart-text-dark mb-2">Smart Navigation</h3>
              <p className="text-sm text-gray-600">Optimized routes through store aisles with AR guidance</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-walmart-yellow/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-walmart-text-dark mb-2">Scan & Go</h3>
              <p className="text-sm text-gray-600">Skip the checkout lines with mobile scanning</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-walmart-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-walmart-text-dark mb-2">Smart Suggestions</h3>
              <p className="text-sm text-gray-600">Personalized deals and product recommendations</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-walmart-yellow/20 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-walmart-text-dark mb-2">Fast Checkout</h3>
              <p className="text-sm text-gray-600">Seamless payment integration and receipts</p>
            </div>
          </div>
        </div>

        {/* Mobile App Demo */}
        <div className="flex justify-center">
          <MobileFrame>
            {getSpecialScreen()}
            <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          </MobileFrame>
        </div>
      </div>
    </div>
  );
};

export default Index;
