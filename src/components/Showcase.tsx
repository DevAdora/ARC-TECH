import { useEffect, useRef } from "react";
import { animateShowcase } from "../animations/gsapAnimation";

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) animateShowcase(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center">
      <h2 className="text-4xl font-bold">Modern Architecture Showcase</h2>
    </section>
  );
}
