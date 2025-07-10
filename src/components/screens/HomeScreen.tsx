
import React from 'react';
import { Star, Plus, ArrowRight, ShoppingCart, MapPin, Clock } from 'lucide-react';

const HomeScreen: React.FC = () => {
  const cartItems = [
    { id: 1, name: 'Great Value Milk', price: '$3.24', quantity: 1, image: '🥛' },
    { id: 2, name: 'Wonder Bread', price: '$2.48', quantity: 2, image: '🍞' },
    { id: 3, name: 'Bananas', price: '$1.96', quantity: 1, image: '🍌' },
  ];

  const suggestions = [
    { id: 1, name: 'Peanut Butter', price: '$4.98', savings: '$1.50', image: '🥜' },
    { id: 2, name: 'Strawberry Jam', price: '$3.24', savings: '$0.75', image: '🍓' },
    { id: 3, name: 'Honey', price: '$5.47', savings: '$2.00', image: '🍯' },
  ];

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-walmart-text-dark">Good morning!</h1>
          <div className="flex items-center mt-1 text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">Walmart Supercenter • 0.8 mi</span>
          </div>
        </div>
        <div className="bg-walmart-yellow rounded-full p-3">
          <ShoppingCart size={24} className="text-walmart-blue" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="walmart-gradient text-white p-4 rounded-2xl flex items-center justify-between group transition-transform hover:scale-105">
          <div className="flex items-center">
            <Map size={20} className="mr-2" />
            <span className="font-semibold">Start Shopping</span>
          </div>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="bg-white border-2 border-walmart-blue text-walmart-blue p-4 rounded-2xl flex items-center justify-between group transition-transform hover:scale-105">
          <div className="flex items-center">
            <Clock size={20} className="mr-2" />
            <span className="font-semibold">Quick Reorder</span>
          </div>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Cart Preview */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-walmart-text-dark">Your Cart</h2>
          <span className="text-sm text-gray-600">{cartItems.length} items</span>
        </div>
        
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl mr-3">{item.image}</div>
                <div>
                  <h3 className="font-medium text-walmart-text-dark">{item.name}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-walmart-blue">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-walmart-text-dark">Total: $7.68</span>
            <button className="walmart-yellow-gradient text-walmart-text-dark px-4 py-2 rounded-lg font-semibold">
              View Cart
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Add-ons */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-walmart-text-dark">Perfect Pairings</h2>
          <div className="flex items-center text-walmart-yellow">
            <Star size={16} className="mr-1 fill-current" />
            <span className="text-sm font-medium text-walmart-text-dark">Save More</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {suggestions.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="text-2xl mr-3">{item.image}</div>
                <div>
                  <h3 className="font-medium text-walmart-text-dark">{item.name}</h3>
                  <div className="flex items-center">
                    <span className="text-sm text-walmart-blue font-semibold">{item.price}</span>
                    <span className="text-xs text-green-600 ml-2 bg-green-100 px-2 py-1 rounded-full">
                      Save {item.savings}
                    </span>
                  </div>
                </div>
              </div>
              <button className="bg-walmart-blue text-white p-2 rounded-full hover:bg-walmart-blue-light transition-colors">
                <Plus size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
