
import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
  title?: string;
}

const MobileFrame: React.FC<MobileFrameProps> = ({ children, title }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
      {/* Status Bar */}
      <div className="bg-black text-white text-xs px-4 py-1 flex justify-between items-center">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>
      
      {/* App Content */}
      <div className="bg-walmart-gray min-h-[600px] relative">
        {children}
      </div>
      
      {/* Home Indicator */}
      <div className="bg-black h-6 flex justify-center items-center">
        <div className="w-32 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default MobileFrame;
