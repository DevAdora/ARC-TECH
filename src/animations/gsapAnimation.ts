import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateShowcase = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    }
  );
};
