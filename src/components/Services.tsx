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
        <h1 className="text-[4rem] md:text-[9rem] leading-[50px] md:leading-[110px]">
          EXPERIENCE ARCHITECTURE — TECHNOLOGY
        </h1>
      </div>
      <div className="row justify-center items-center row-cols-2 w-[600px] p-5">
        <div>
          <img
            src="/assets/home-bg-1.jpg"
            className="w-full h-[400px] md:w-[500px] md:h-[500px]"
          ></img>
        </div>
        <div className="w-full grid grid-cols-[27.6%_72.5%] md:grid-cols-1 gap-4 items-start">
          {/* Left Column */}
          <div className="text-[1.3rem] md:text-[2rem] font-onest leading-[30px] flex items-start py-4">
            <span>(ARC-TECH)</span>
          </div>

          {/* Right Column (Content + Button) */}
          <div className="w-full flex flex-col pr-4">
            <h3 className="font-semibold text-[1.2rem] md:text-[1.6rem] leading-[25px] ">
              ARC-TECH provides a digital platform dedicated to exploring and
              presenting the world of architecture. It delivers carefully
              curated content that blends aesthetic appeal with factual
              accuracy, showcasing architectural styles, structures, and design
              principles from around the globe.
            </h3>

            <span className="font-semibold text-[1.2rem] md:text-[1.6rem] leading-[25px] py-4">
              By combining modern web technologies with compelling visual
              storytelling, ARC-TECH offers users an immersive educational
              experience—allowing enthusiasts, students, and professionals to
              discover, learn, and appreciate architecture in a clear and
              engaging way.
            </span>

            {/* Button aligned with the content */}
            <span className="bg-[#080807] text-white px-6 py-4 mt-4 w-fit cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-300 rounded-full">
              <a>LEARN ABOUT ARC-TECH ↘</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
