import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Smooth push transition - services pushes over hero
    gsap.fromTo(
      section,
      {
        y: "0vh", // Start halfway down for quicker appearance
      },
      {
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 1.5,
        },
      }
    );
  }, []);


  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center px-8 py-12 z-20 shadow-2xl font-onest"
    >
      {" "}
      <div className="font-onest text-start justify-start flex">
        <h1 className="text-[8rem] leading-[100px]">
          EXPERIENCE ARCHITECTURE — TECHNOLOGY
        </h1>
      </div>
      <div className="row justify-center items-center row-cols-2 w-[500px]">
        <div>
          <img
            src="/assets/home-bg-1.jpg"
            className="w-[500px] h-[500px]"
          ></img>
        </div>
        <div>
          <h3 className="font-semibold text-[1.6rem] leading-[25px] py-4">
            ARC-TECH provides a digital platform dedicated to exploring and
            presenting the world of architecture. It delivers carefully curated
            content that blends aesthetic appeal with factual accuracy,
            showcasing architectural styles, structures, and design principles
            from around the globe.
          </h3>
          <span className="font-semibold text-[1.6rem] leading-[25px] py-4">
            By combining modern web technologies with compelling visual
            storytelling, ARC-TECH offers users an immersive educational
            experience—allowing enthusiasts, students, and professionals to
            discover, learn, and appreciate architecture in a clear and engaging
            way.
          </span>
        </div>
      </div>
    </section>
  );
}
