import { motion } from "framer-motion";
import Header from "../../components/Header";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const process = [
  {
    title: "Initial Planning",
    description:
      "From concept to completion, we create spaces that inspire and function beautifully.",
    features: ["Residential Design", "Commercial Spaces", "Urban Planning"],
    image: "/assets/cobogo-house-CHX Arquitetos-1.jpg",
  },
  {
    title: "Launching Website",
    description:
      "Transforming interiors into cohesive, functional, and aesthetically pleasing spaces.",
    features: ["Space Planning", "Material Selection", "Custom Furniture"],
    image: "/assets/cobogo-house-CHX Arquitetos-2.jpg",
  },
  {
    title: "Project Management",
    description:
      "Comprehensive oversight ensuring your project is delivered on time and within budget.",
    features: ["Timeline Management", "Budget Control", "Quality Assurance"],
    image: "/assets/cobogo-house-CHX Arquitetos-3.jpg",
  },
  {
    title: "Present",
    description:
      "Expert guidance on feasibility studies, sustainability, and design optimization.",
    features: [
      "Feasibility Studies",
      "Sustainability Consulting",
      "Code Compliance",
    ],
    image: "/assets/cobogo-house-CHX Arquitetos-4.jpg",
  },
];

export default function ProcessPage() {
  const stepsSectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const section = stepsSectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;

    if (!section || !pin || !track) return;

    if (isMobile) {
      cardsRef.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { opacity: 1, scale: 1, y: 0 });
      });
      return;
    }

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const setActive = (idx: number) => {
      setActiveIndex(idx);

      const percent = `${((idx + 1) / process.length) * 100}%`;
      gsap.set(track, { "--progress": percent } as any);

      cards.forEach((card, i) => {
        gsap.to(card, {
          opacity: i === idx ? 1 : 0.4,
          scale: i === idx ? 1 : 0.97,
          y: i === idx ? 0 : 20,
          duration: 0.25,
          ease: "power2.out",
          overwrite: true,
        });
      });
    };

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0.4,
          scale: i === 0 ? 1 : 0.97,
          y: i === 0 ? 0 : 20,
        });
      });

      gsap.set(track, {
        "--progress": `${(1 / process.length) * 100}%`,
      } as any);

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: pin,
        pinSpacing: true,
        anticipatePin: 1,
      });

      const cardTriggers = cards.map((card, idx) =>
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(idx),
          onEnterBack: () => setActive(idx),
        })
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: (value) => {
            const step = 1 / (process.length - 1);
            return Math.round(value / step) * step;
          },
          duration: { min: 0.12, max: 0.35 },
          delay: 0.02,
          ease: "power2.out",
        },
      });

      setActive(0);

      return () => {
        cardTriggers.forEach((t) => t.kill());
      };
    }, stepsSectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const active = process[activeIndex];

  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />

      <section className="relative mt-20 py-10 md:py-10 md:min-h-screen flex items-center text-black overflow-hidden">
        <div className="w-full mx-auto px-4 md:px-8">
          <div className="grid gap-10 md:gap-14">
            {/* Title + Description Row */}
            <div className="grid md:grid-cols-[40%_60%] gap-6 md:gap-8 items-start">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm md:text-base font-onestsemibold"
              >
                (PROCESS)
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="text-[2rem] md:text-[4rem] font-onestsemibold md:leading-[60px] tracking-[-3px]"
              >
                Your love, your love, your love, I miss that Your touch, your
                touch, your touch, I need that
              </motion.p>
            </div>

            <div className="grid md:grid-cols-[40%_60%] gap-6 md:gap-8 items-end">
              <div className="hidden md:block" />
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="w-full flex justify-end"
              >
                <img
                  src="/assets/green-1.jpg"
                  alt="Process hero"
                  className="w-full max-w-none h-[280px] sm:h-[320px] md:h-[560px] lg:h-[700px] xl:h-[760px] object-cover rounded-lg"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-[40%_60%] gap-6 md:gap-8 items-start">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-sm md:text-base font-onestsemibold"
              >
                (APPROACH)
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="text-[2rem] md:text-[4rem] font-onestsemibold md:leading-[60px] tracking-[-3px]"
              >
                A systematic method to transform your vision into reality
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={stepsSectionRef}
        className="relative bg-gradient-to-b from-white to-zinc-50"
      >
        <div className="w-full mx-auto px-4 md:px-8 py-20 md:py-32">
          {isMobile ? (
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-onestsemibold tracking-wider text-black/60">
                  OUR PROCESS
                </p>
                <h3 className="text-3xl font-onestsemibold tracking-[-2px] leading-tight">
                  Step by Step Approach
                </h3>
              </div>

              {process.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-black/10 shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg font-onestsemibold shadow-lg">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-onestsemibold text-black/50 tracking-wider mb-2">
                        STEP {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h4 className="text-2xl font-onestsemibold tracking-[-1px]">
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-black/70 font-onest leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {step.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-sm text-black/70 font-onest"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-[42%_58%] gap-10 md:gap-16 items-start">
              <div ref={pinRef} className="md:pr-8">
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-6 border-b border-black/10">
                    <p className="text-xs md:text-sm font-onestsemibold tracking-wider text-black/60">
                      STEP GUIDE
                    </p>
                    <p className="text-sm md:text-base font-onestsemibold tabular-nums">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(process.length).padStart(2, "0")}
                    </p>
                  </div>

                  <motion.div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                    <motion.img
                      key={activeIndex}
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>

                  <motion.h3
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl md:text-5xl font-onestsemibold tracking-[-2.5px] leading-[1.1]"
                  >
                    {active.title}
                  </motion.h3>

                  <motion.p
                    key={`desc-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-black/70 text-base md:text-lg font-onest leading-relaxed"
                  >
                    {active.description}
                  </motion.p>

                  <div className="space-y-3">
                    <div
                      ref={trackRef}
                      className="relative h-1 w-full bg-black/5 rounded-full overflow-hidden"
                      style={{ ["--progress" as any]: "0%" }}
                    >
                      <div
                        className="absolute inset-y-0 left-0 bg-black transition-all duration-300 ease-out"
                        style={{ width: "var(--progress)" }}
                      />
                    </div>
                    <p className="text-xs text-black/40 font-onest">
                      Step {activeIndex + 1} of {process.length}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs text-black/40 font-onest">
                    <svg
                      className="w-4 h-4 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    Scroll to explore each step
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                {process.map((step, idx) => (
                  <div
                    key={idx}
                    ref={(el) => {
                      cardsRef.current[idx] = el;
                    }}
                    className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      <div className="absolute top-6 right-6">
                        <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-xl font-onestsemibold shadow-xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs md:text-sm font-onestsemibold text-black/50 tracking-wider">
                            STEP {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1 h-px bg-black/10" />
                        </div>

                        <h4 className="text-2xl md:text-3xl font-onestsemibold tracking-[-1px] mb-4">
                          {step.title}
                        </h4>

                        <p className="text-black/70 font-onest leading-relaxed mb-6">
                          {step.description}
                        </p>

                        <ul className="grid grid-cols-1 gap-3">
                          {step.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-3 text-sm text-black/70 font-onest group-hover:text-black transition-colors"
                            >
                              <span className="w-2 h-2 rounded-full bg-black/30 group-hover:bg-black transition-colors" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="h-20 md:h-32" />
              </div>
            </div>
          )}
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
