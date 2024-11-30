import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const PaperPlaneAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        onEnter: () => {
            gsap.from("#paperPlane", {
                duration: .6,
                opacity: 0,
            });
        },
        onEnterBack: () => {
            gsap.from("#paperPlane", {
                duration: .6,
                opacity: 0,
            });
        },
        trigger: "#paperPlaneAnimation",
        start: "top center",
        end: "+=800", // Adjust the scroll distance for the animation
        scrub: 1,
        pin: true, // Pins the section until the animation ends
        anticipatePin: 1, // Pinning starts before the animation ends
        markers: true, // Set to true for debug markers
      },
    });

    tl.to("#paperPlane", {
      motionPath: {
        path: "#paperPlanePath",
        align: "#paperPlanePath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1,
        ease: "power1.inOut",
      },
        duration: 5,
      onComplete: () => {
        gsap.to("#paperPlane", {
          duration: 0.5,
          opacity: 0,
        });
      }
    });

    return () => {
      tl.scrollTrigger?.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="hidden md:block h-[35vh]" id="paperPlaneAnimation">
      <div className="relative h-full w-full flex items-center justify-center">
        {/* SVG Path */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 65 10" className="absolute w-full -rotate-12 object-cover">
          <path
            id="paperPlanePath"
            d="M 0 0 C 5.936 0.853 13.546 -1.305 16.396 -3.712 C 19.219 -5.788 21.682 -9.081 27.549 -6.341 C 30.039 -5.234 30.9067 -4.5883 36.404 -4.238 C 39.504 -4.154 40.002 -6.0827 46.146 -7.558 C 49.273 -8.2313 52.4 -8.9047 63.248 -8.001"
            fill="none"
          />
        </svg>
        {/* Plane Image */}
        <img
          src="https://i.postimg.cc/W1w9dT1x/paper.png"
          alt="paper plane"
          id="paperPlane"
          className="absolute w-16 md:w-40"
        />
      </div>
    </section>
  );
};

export default PaperPlaneAnimation;
