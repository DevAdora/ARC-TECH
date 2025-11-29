import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Smooth push transition - services pushes over hero
    gsap.fromTo(
      section,
      {
        y: "0vh",
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center px-4 z-20 shadow-2xl font-onest"
    >
      {/* Main Heading */}
      <div className="font-onest md:text-start justify-start flex w-full px-3 py-2 md:p-4 w-full">
        <h1 className="text-[2.8rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[11rem] leading-[40px] sm:leading-[60px] md:leading-[80px] lg:leading-[100px] xl:leading-[120px] 2xl:leading-[130px]">
          EXPERIENCE ARCHITECTURE TECHNOLOGY —
        </h1>
      </div>

      <div className="row justify-center items-center row-cols-2 w-full max-w-[1400px] p-3 sm:p-4 md:p-5">
        <div className="w-full mb-4 sm:mb-6 px-4 sm:px-6 md:px-0">
          <img
            src="/assets/home-bg-1.jpg"
            alt="Architecture showcase"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover"
          />
        </div>

        <div className="w-full grid grid-cols-[25%_75%] sm:grid-cols-[25%_75%] md:grid-cols-[27.6%_72.5%] gap-2 sm:gap-3 md:gap-4 items-start px-4 sm:px-6 md:px-0">
          <div className="text-[0.8rem] sm:text-xl md:text-2xl lg:text-3xl xl:text-[2rem] font-onestsemibold leading-tight flex items-start md:py-4">
            <span>(ARC-TECH)</span>
          </div>

          <div className="w-full flex flex-col pr-2 sm:pr-3 md:pr-4">
            <h3 className="font-semibold text-[1rem] md:text-[1.8rem] lg:text-[2rem]  leading-[20px] md:leading-[30px]">
              ARC-TECH provides a digital platform dedicated to exploring and
              presenting the world of architecture. It delivers carefully
              curated content that blends aesthetic appeal with factual
              accuracy, showcasing architectural styles, structures, and design
              principles from around the globe.
            </h3>

            <span className="font-semibold text-[1rem] md:text-[1.8rem] lg:text-[2rem] leading-[20px] md:leading-[30px] py-2 sm:py-3 md:py-4">
              By combining modern web technologies with compelling visual
              storytelling, ARC-TECH offers users an immersive educational
              experience—allowing enthusiasts, students, and professionals to
              discover, learn, and appreciate architecture in a clear and
              engaging way.
            </span>

            {/* Button */}
            <span className="bg-[#080807] text-white px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 mt-2 sm:mt-3 md:mt-4 w-fit cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-300 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base">
              <a>LEARN ABOUT ARC-TECH ↘</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
