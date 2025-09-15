import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

const highlightsData = [
  {
    id: 1,
    name: "Ocean Veranda",
    type: "Mansion",
    location: "Miami, Florida",
    price: "$1,000,000",
    image: "assets/h1.png",
    preview:"assets/h2.png",

  },
  {
    id: 2,
    name: "Ocean Breeze",
    type: "Villa",
    location: "Malibu, California",
    price: "$2,500,000",
    image: "assets/service2.png",
    preview: "assets/service2.png",
  },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);
  const current = highlightsData[index];
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, x: 50 },
        { autoAlpha: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % highlightsData.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + highlightsData.length) % highlightsData.length
    );
  };

  return (
    <div className="w-full h-screen items-center justify-between  overflow-hidden">
      <div className="flex flex-row w-full h-[100vh] justify-center items-center">
        {/* Left Title */}
        <div className="left-0 top-0 px-4 w-[12%] h-full justify-center items-center flex">
          <div className="text-black text-[7rem] font-bold tracking-widest rotate-90 font-myfont">
            HIGHLIGHTS
          </div>
        </div>

        <div className="px-4 w-[100%] h-full justify-center items-center flex font-myfont">
          {/*  Number */}
         
          <div className="flex flex-col">
            <h1 className="text-5xl font-thin tracking-widest mb-6 text-[10rem]">
              {current.name}
            </h1>
            <div className="flex flex-col">
              <div className="flex gap-6 text-lg mb-6 items-start justify-start">
                <span className="text-[2rem]">{current.type}</span>
              </div>
              <div className="flex gap-6 text-lg mb-6 items-end justify-end">
                <span className="text-[2rem]">{current.location}</span>
              </div>
              <div className="flex gap-6 text-lg mb-6 items-start justify-start">
                <span className="text-[2rem]">{current.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 w-[100%] h-full justify-center items-center flex">
          <div
            ref={containerRef}
            className="w-[100%] items-start justify-start flex flex-col p-8"
          >
            <div className="relative group w-full">
              <img
                src={current.image}
                alt={current.name}
                className=" w-full
                 h-[100%] object-contain "
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-3xl transition-all">
                DETAILS →
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <img
                src={current.preview}
                alt="preview"
                className="w-[50%] h-full object-contain"
              />

              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
