import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import type { Project } from "../../data/project";
import { projects } from "../../data/project";
import Header from "../../components/Header";

const duplicatedProjects: Project[] = [...projects, ...projects, ...projects];

type ProjectCardProps = {
  project: Project;
  index: number;
  size: "lg" | "sm";
};

function ProjectCard({ project, index, size }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const widthClass =
    size === "lg"
      ? "w-[400px] sm:w-[420px] md:w-[560px] lg:w-[720px]"
      : "w-[340px] sm:w-[320px] md:w-[420px] lg:w-[520px]";

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex-shrink-0 ${widthClass} mx-3 sm:mx-4 cursor-pointer`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.03, 0.6) }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl group">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />

          <motion.div
            className="absolute inset-0 bg-black/40"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6"
            animate={{ y: isHovered ? 0 : 14, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-white/80 text-xs sm:text-sm font-onestsemibold">
              {project.details.category} • {project.details.year}
            </span>
            <h3 className="text-white text-2xl sm:text-3xl font-onestbold">
              {project.title}
            </h3>
          </motion.div>
        </div>

        <div className="pt-3 sm:pt-4">
          <div className="flex justify-between items-start gap-4">
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-onestbold truncate">
                {project.title}
              </h3>
              <p className="text-black/60 text-xs sm:text-sm md:text-base font-onestsemibold">
                {project.details.location}
              </p>
            </div>
            <span className="text-black/40 text-xs sm:text-sm md:text-base font-onestsemibold whitespace-nowrap">
              {project.number}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ShowcasePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      setScrollPosition((prev) => {
        const newPosition = prev - e.deltaY * 0.5;

        const maxScroll = -(
          duplicatedProjects.length * 600 -
          window.innerWidth
        );
        return Math.max(maxScroll, Math.min(0, newPosition));
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 bg-white overflow-hidden">
      <Header variant="dark" />

      {/* Scrollable Projects Container */}
      <div className="fixed top-1/2 left-0 right-0 -translate-y-1/2">
        <div className="relative overflow-visible">
          <motion.div
            className="flex items-stretch pl-4 md:pl-8"
            animate={{ x: scrollPosition }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.5,
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                index={index}
                size={index % 2 === 0 ? "lg" : "sm"}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Fixed at bottom */}
      <div className="fixed bottom-8 left-0 right-0 text-center z-10">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-black/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
            <span className="text-black/40 text-xs sm:text-sm font-onest">
              Scroll Up
            </span>
          </div>
          <div className="w-px h-4 bg-black/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-black/40 text-xs sm:text-sm font-onest">
              Scroll Down
            </span>
            <svg
              className="w-4 h-4 text-black/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          </div>
        </div>
        <p className="text-black/30 text-xs font-onest mt-2">
          Use mouse wheel to navigate
        </p>
      </div>
    </div>
  );
}
