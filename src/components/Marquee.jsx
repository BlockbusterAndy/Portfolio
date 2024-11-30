import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // Duplicate the content for seamless scrolling
    const marqueeItems = marqueeElement.querySelectorAll(".marquee-item");
    marqueeElement.innerHTML += marqueeElement.innerHTML;

    // GSAP Animation
    gsap.to(marqueeElement, {
      xPercent: -50, // Move 50% of the width
      ease: "none",
      duration: 10,
      repeat: -1,
    });
  }, []);

  return (
    <div className="overflow-hidden relative w-full bg-black py-4 border-t-2 border-b-2 border-dashed border-primaryText" id="marquee">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-white text-xl md:text-4xl font-bold tracking-wide text-primaryText"
      >
        <span className="marquee-item mx-4">PROJECTS</span>
        <span className="marquee-item mx-4">PROJECTS</span>
        <span className="marquee-item mx-4">PROJECTS</span>
        <span className="marquee-item mx-4">PROJECTS</span>
        <span className="marquee-item mx-4">PROJECTS</span>
        <span className="marquee-item mx-4">PROJECTS</span>
      </div>
    </div>
  );
};

export default Marquee;