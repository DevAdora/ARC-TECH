// Hero.tsx
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero Component
// Hero Component
export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;

    // Parallax Background - moves slower than scroll
    gsap.to(bg, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".trigger-spacer",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Hide hero when scrolling past the spacer
    ScrollTrigger.create({
      trigger: ".trigger-spacer",
      start: "bottom bottom",
      onEnter: () => {
        if (hero) {
          hero.style.visibility = "hidden";
          hero.style.opacity = "0";
        }
      },
      onLeaveBack: () => {
        if (hero) {
          hero.style.visibility = "visible";
          hero.style.opacity = "1";
        }
      },
    });
  }, []);

  return (
    <>
      {/* FIXED HERO SECTION */}
      <section
        ref={heroRef}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[1] transition-opacity duration-300"
      >
        {/* PARALLAX BACKGROUND */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[120vh] -top-[10vh]"
          style={{
            backgroundImage: 'url("/assets/Home-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* HERO CONTENT - FIXED AT BOTTOM */}
        <div className="absolute left-4 bottom-10 md:bottom-24 md:left-12 z-[2] pointer-events-none">
          <p className="text-[1.2rem] md:text-[2rem] font-onest text-white w-[55%] leading-relaxed drop-shadow-lg">
            Discover the art behind the structures — explore ARC-TECH and
            experience architecture where aesthetics meet history.
          </p>
        </div>
      </section>

      {/* SPACER TO ENABLE SCROLLING */}
      <div className="trigger-spacer h-screen w-full relative z-[0]" />
    </>
  );
}
