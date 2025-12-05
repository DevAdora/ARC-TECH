import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../../components/Footer";
import type { Project } from "../../data/project"; // adjust import to where your interface lives
import { projects } from "../../data/project"; // adjust import

const duplicatedProjects: Project[] = [...projects, ...projects];

type ProjectCardProps = {
  project: Project;
  index: number;
  size: "lg" | "sm";
};

function ProjectCard({ project, index, size }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const widthClass =
    size === "lg"
      ? "w-[300px] sm:w-[420px] md:w-[560px] lg:w-[720px]"
      : "w-[240px] sm:w-[320px] md:w-[420px] lg:w-[520px]";

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
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex items-center justify-center text-black overflow-hidden mt-10 py-10 sm:py-12 md:py-20">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-16"
          >
            <h1 className="text-[3.25rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-bold font-onestsemibold leading-none mb-4">
              OUR WORKS
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 font-onest max-w-2xl mx-auto">
              Explore our collection of architectural projects that blend
              innovation with timeless design
            </p>
          </motion.div>
        </div>
      </section>

      {/* ONE LINE Infinite Scroll */}
      <section className="relative pb-16 md:pb-24 overflow-hidden">
        <div className="mb-6 md:mb-10 px-4 md:px-8">
          <h2 className="font-onestsemibold tracking-[-1px] text-sm md:text-base lg:text-[1.5rem]">
            (FEATURED PROJECTS)
          </h2>
        </div>

        <div className="relative">
          <motion.div
            className="flex items-stretch"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
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
      </section>

      <Footer />
    </div>
  );
}
