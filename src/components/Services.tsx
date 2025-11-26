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

  const servicesData = [
    {
      number: "$1,000,000+",
      title: "Sales",
      image: "/assets/service.png",
    },
    {
      number: "100+",
      title: "Clients",
      image: "/assets/service2.png",
    },
    {
      number: "8+",
      title: "Years in the Industry",
      image: "/assets/service3.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center px-8 py-12 z-20 shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center items-center max-w-7xl">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full h-[250px] rounded-lg flex flex-col justify-center items-center text-white relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 transition-colors duration-300 hover:bg-black/30"></div>
            <h1 className="text-4xl font-bold z-10">{service.number}</h1>
            <span className="mt-2 text-lg z-10">{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
