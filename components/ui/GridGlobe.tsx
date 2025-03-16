"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Simple fallback component that shows a static globe image instead of 3D
const GridGlobe = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Only render the component on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null during SSR to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center relative w-full h-full">
      <div className="absolute -top-16 right-0 w-[112%] relative overflow-hidden h-[300px] md:h-[300px] px-0 z-0">
        {/* Gradient overlay for smooth transition */}
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-[#04071D] z-10" />
        
        {/* Static globe image instead of 3D globe */}
        <div className="absolute w-full h-full z-0 flex items-center justify-center" style={{ transform: 'translateY(25%)' }}>
          <div className="w-full h-full flex items-center justify-center">
            <Image 
              src="/globe.svg" 
              alt="Globe visualization" 
              width={400} 
              height={400}
              className="opacity-70 animate-pulse"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;