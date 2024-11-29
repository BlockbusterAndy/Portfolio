import ScrollToPlugin from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

const scrollTo = (id) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${id}`,
      offsetY: 50 // Offset from the top
    },
    ease: "power2.inOut"
  });
};

export default scrollTo;