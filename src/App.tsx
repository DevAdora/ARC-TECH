import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isRevealComplete, setIsRevealComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(10);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    gsap.set(contentRef.current, {
      visibility: "hidden",
      opacity: 0,
    });

    gsap.set(overlayRef.current, {
      clipPath: "circle(10% at 50% 50%)",
    });

    const handleScroll = (e: WheelEvent | TouchEvent) => {
      if (!isRevealComplete) {
        e.preventDefault();

        let delta = 0;

        if (e instanceof WheelEvent) {
          delta = e.deltaY;
        }

        if (e instanceof TouchEvent) {
          const touch = e.touches[0] || e.changedTouches[0];
          if (touch) delta = 5;
        }

        const newProgress = Math.min(
          Math.max(scrollProgress + (delta > 0 ? 5 : -5), 0),
          100
        );

        setScrollProgress(newProgress);

        const circleSize = (newProgress / 100) * 150;

        gsap.to(overlayRef.current, {
          clipPath: `circle(${circleSize}% at 50% 50%)`,
          duration: 0.3,
          ease: "power2.out",
        });

        if (newProgress >= 100 && !isRevealComplete) {
          setIsRevealComplete(true);

          gsap.to(contentRef.current!, {
            visibility: "visible",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          });

          gsap.to(overlayRef.current!, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              document.body.style.overflow = "auto";
              document.body.style.height = "auto";
              overlayRef.current!.style.display = "none";
            },
          });
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("DOMMouseScroll", handleScroll as EventListener, {
      passive: false,
    });
    window.addEventListener("touchmove", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener(
        "DOMMouseScroll",
        handleScroll as EventListener
      );
      window.removeEventListener("touchmove", handleScroll);
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollProgress, isRevealComplete]);

  return (
    <div className="font-sans relative min-h-screen">
      <div ref={contentRef} style={{ visibility: "hidden", opacity: 0 }}>
        <Header />
        <Hero />
        <Services />
        <Showcase />
        <About />
        <Feedback />
        <Contact />
        <Footer />
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-[url('/assets/home-bg-2.jpg')]"
        style={{
          display: isRevealComplete ? "none" : "block",
          clipPath: "circle(10% at 50% 50%)",
        }}
      >
        <div className="absolute inset-0 bg-[url('/assets/Home-bg.jpg')] bg-no-repeat bg-cover bg-center h-screen w-full">
          <div className="absolute inset-0 bg-black/40 z-[1]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-6xl text-white font-bold mb-4 drop-shadow-lg font-myfont">
                ARC-TECH
              </h2>
              <p className="text-xl opacity-80 mb-6 text-white">
                Scroll to reveal ({Math.round(scrollProgress)}%)
              </p>
              <div className="w-64 h-2 bg-white/20 rounded-full mx-auto mb-6">
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
