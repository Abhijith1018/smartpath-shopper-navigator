
import React, { useState } from 'react';
import { Scan, CreditCard, CheckCircle, Camera, ShoppingBag, Receipt } from 'lucide-react';

const ScanAndGoScreen: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedItems, setScannedItems] = useState([
    { id: 1, name: 'Great Value Milk', price: 3.24, barcode: '012345678901', scanned: true },
    { id: 2, name: 'Wonder Bread', price: 2.48, barcode: '012345678902', scanned: true },
    { id: 3, name: 'Bananas (1 lb)', price: 1.96, barcode: '012345678903', scanned: true },
  ]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const total = scannedItems.reduce((sum, item) => sum + item.price, 0);
  const tax = total * 0.08;
  const finalTotal = total + tax;

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Simulate adding a new item
    }, 2000);
  };

  const handlePayment = () => {
    setShowPayment(false);
    setPaymentComplete(true);
    setTimeout(() => {
      setPaymentComplete(false);
    }, 3000);
  };

  if (paymentComplete) {
    return (
      <div className="p-4 pb-20 flex items-center justify-center min-h-full">
        <div className="text-center">
          <div className="bg-green-100 rounded-full p-8 mb-6 inline-block">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-walmart-text-dark mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">Your receipt has been sent to your email</p>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <div className="flex items-center justify-center mb-4">
              <Receipt size={24} className="text-walmart-blue mr-2" />
              <span className="font-semibold text-walmart-text-dark">Transaction Complete</span>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-walmart-blue">${finalTotal.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Charged to •••• 4532</p>
            </div>
          </div>
          <button className="walmart-gradient text-white px-8 py-3 rounded-xl font-semibold">
            Done Shopping
          </button>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-walmart-text-dark">Checkout</h1>
          <div className="bg-walmart-blue rounded-full p-3">
            <CreditCard size={24} className="text-white" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-bold text-walmart-text-dark mb-4">Order Summary</h2>
          <div className="space-y-3">
            {scannedItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span className="text-walmart-text-dark">{item.name}</span>
                <span className="font-semibold">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-walmart-blue">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-bold text-walmart-text-dark mb-4">Payment Method</h2>
          <div className="border-2 border-walmart-blue rounded-xl p-4 bg-walmart-blue/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard size={20} className="text-walmart-blue mr-3" />
                <div>
                  <p className="font-semibold text-walmart-text-dark">Visa •••• 4532</p>
                  <p className="text-sm text-gray-600">Expires 12/25</p>
                </div>
              </div>
              <CheckCircle size={20} className="text-walmart-blue" />
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          className="w-full walmart-gradient text-white p-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
        >
          Pay ${finalTotal.toFixed(2)}
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-walmart-text-dark">Scan & Go</h1>
          <p className="text-gray-600">Scan items as you shop</p>
        </div>
        <div className="bg-walmart-yellow rounded-full p-3">
          <Scan size={24} className="text-walmart-blue" />
        </div>
      </div>

      {/* Scanner */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
        <div className="relative bg-gray-900 rounded-xl overflow-hidden" style={{ height: '200px' }}>
          {/* Camera viewfinder simulation */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800 flex items-center justify-center">
            <div className="w-48 h-32 border-4 border-walmart-yellow rounded-lg relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-walmart-yellow"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-walmart-yellow"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-walmart-yellow"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-walmart-yellow"></div>
              
              {isScanning && (
                <div className="absolute inset-0 bg-walmart-yellow/20 animate-pulse flex items-center justify-center">
                  <span className="text-white font-bold">Scanning...</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-walmart-yellow text-walmart-text-dark px-6 py-2 rounded-full font-semibold flex items-center"
            >
              <Camera size={16} className="mr-2" />
              {isScanning ? 'Scanning...' : 'Scan Item'}
            </button>
          </div>
        </div>
      </div>

      {/* Scanned Items */}
      <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-walmart-text-dark">Scanned Items</h2>
          <div className="flex items-center">
            <ShoppingBag size={16} className="mr-1 text-walmart-blue" />
            <span className="text-sm font-medium text-walmart-blue">{scannedItems.length} items</span>
          </div>
        </div>

        <div className="space-y-3">
          {scannedItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-500 mr-3" />
                <div>
                  <h3 className="font-medium text-walmart-text-dark">{item.name}</h3>
                  <p className="text-xs text-gray-600">{item.barcode}</p>
                </div>
              </div>
              <span className="font-semibold text-walmart-blue">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-walmart-text-dark">
              Total: ${finalTotal.toFixed(2)}
            </span>
            <span className="text-sm text-gray-600">Tax included</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={() => setShowPayment(true)}
        disabled={scannedItems.length === 0}
        className="w-full walmart-gradient text-white p-4 rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
      >
        <div className="flex items-center justify-center">
          <CreditCard size={20} className="mr-2" />
          Proceed to Checkout
        </div>
      </button>
    </div>
  );
};

export default ScanAndGoScreen;
