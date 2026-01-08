import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star } from "lucide-react";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // Create a timeline for infinite scroll
    const tl = gsap.timeline({ repeat: -1 });

    // We need to move by 50% because we duplicated the content
    tl.to(marqueeElement, {
      xPercent: -50,
      ease: "none",
      duration: 25, // Time to scroll through half the width
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Items to display
  const items = ["FULL STACK DEVELOPMENT", "UI/UX DESIGN", "DATABASE ARCHITECTURE", "API INTEGRATION", "PERFORMANCE OPTIMIZATION"];

  // Flattening duplication logic for safety
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#0F0F0F] py-8 overflow-hidden border-y border-white/5 relative z-10" id="marquee">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        {/* Wrapper for double content to seamless loop */}
        <div ref={marqueeRef} className="flex gap-12 items-center min-w-full pl-6">
          {displayItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12 shrink-0">
              <span className="text-2xl md:text-3xl font-black text-white/20 tracking-tighter hover:text-white/40 transition-colors uppercase select-none">
                {item}
              </span>
              <Star size={16} className="text-blue-500/40 fill-blue-500/40" />
            </div>
          ))}
        </div>

        {/* Side fades for smoothness */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Marquee;