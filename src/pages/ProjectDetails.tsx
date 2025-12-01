"use client";

import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, type Project } from "../data/project";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const project = projects.find((p: Project) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-lg hover:opacity-70 transition-opacity"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderEnhancedGallery = () => {
    const images = project.gallery;
    const layouts = [];
    let i = 0;

    while (i < images.length) {
      const remaining = images.length - i;
      const patternIndex = Math.floor(i / 3) % 4;

      if (patternIndex === 0 && remaining >= 1) {
        layouts.push(
          <motion.div
            key={`img-${i}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-[16/9] lg:aspect-[21/9] mb-8 lg:mb-12"
          >
            <div className="w-full h-full overflow-hidden bg-gray-100">
              <img
                src={images[i]}
                alt={`${project.title} - Image ${i + 1}`}
                className="w-full h-full object-cover object-[50%_50%] hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>
        );
        i++;
      }
      // Pattern 2: Two images side by side
      else if (patternIndex === 1 && remaining >= 2) {
        layouts.push(
          <div
            key={`img-${i}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] overflow-hidden bg-gray-100"
            >
              <img
                src={images[i]}
                alt={`${project.title} - Image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="aspect-[4/5] overflow-hidden bg-gray-100"
            >
              <img
                src={images[i + 1]}
                alt={`${project.title} - Image ${i + 2}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          </div>
        );
        i += 2;
      }
      // Pattern 3: Asymmetric grid (1 large + 2 small)
      else if (patternIndex === 2 && remaining >= 3) {
        layouts.push(
          <div
            key={`img-${i}`}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 aspect-[16/10] overflow-hidden bg-gray-100"
            >
              <img
                src={images[i]}
                alt={`${project.title} - Image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
            <div className="grid grid-rows-2 gap-4 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className="aspect-square overflow-hidden bg-gray-100"
              >
                <img
                  src={images[i + 1]}
                  alt={`${project.title} - Image ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="aspect-square overflow-hidden bg-gray-100"
              >
                <img
                  src={images[i + 2]}
                  alt={`${project.title} - Image ${i + 3}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        );
        i += 3;
      }
      // Pattern 4: Three columns
      else if (patternIndex === 3 && remaining >= 3) {
        layouts.push(
          <div
            key={`img-${i}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12"
          >
            {[0, 1, 2].map((offset) => (
              <motion.div
                key={`${i + offset}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: offset * 0.1,
                }}
                className="aspect-[3/4] overflow-hidden bg-gray-100"
              >
                <img
                  src={images[i + offset]}
                  alt={`${project.title} - Image ${i + offset + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        );
        i += 3;
      }
      // Fallback: Handle remaining images
      else if (remaining === 2) {
        layouts.push(
          <div
            key={`img-${i}`}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-8 lg:mb-12"
          >
            {[0, 1].map((offset) => (
              <motion.div
                key={`${i + offset}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: offset * 0.1,
                }}
                className="aspect-[4/5] overflow-hidden bg-gray-100"
              >
                <img
                  src={images[i + offset]}
                  alt={`${project.title} - Image ${i + offset + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        );
        i += 2;
      } else {
        layouts.push(
          <motion.div
            key={`img-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-[16/9] mb-8 lg:mb-12 overflow-hidden bg-gray-100"
          >
            <img
              src={images[i]}
              alt={`${project.title} - Image ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </motion.div>
        );
        i++;
      }
    }

    return layouts;
  };

  return (
    <div ref={containerRef} className="bg-white">
      <Header />

      {/* HERO SECTION - Fixed with smooth parallax */}
      <motion.section
        ref={heroRef}
        style={{ opacity }}
        className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10 "
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120vh] -top-[10vh]"
        >
          <div
            className="w-full h-full max-w-[screen]"
            style={{
              backgroundImage: `url("${project.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />

        {/* Header remains fixed and always visible */}
        {/* PROJECT TITLE - CENTER */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[2] px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl font-onest leading-none text-center"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mt-4 font-onest"
          >
            {project.author}
          </motion.p>
        </div>

        {/* PROJECT DETAILS - BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="absolute left-4 right-4 bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16 z-[2]"
        >
          <div className="absolute flex justify-between left-2 sm:left-16 md:left-8 right-2 md:right-8 bottom-[50%] md:bottom-[50%] lg:bottom-[50%] z-[10] pointer-events-none text-white font-onest text-[0.7rem] md:text-[1.3rem]">
            {" "}
            <p className="text-sm md:text-lg lg:text-xl font-semibold">
              {project.details.area}
            </p>
            <p className="text-sm md:text-lg lg:text-xl font-semibold">
              {project.details.category}
            </p>
            <p className="text-sm md:text-lg lg:text-xl font-semibold">
              {project.details.location}
            </p>
            <p className="text-sm md:text-lg lg:text-xl font-semibold">
              {project.details.year}
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Spacer for scroll */}
      <div className="h-screen w-full" />

      {/* CONTENT SECTION */}
      <section className="relative z-10 bg-white">
        {/* GALLERY */}
        <div className="p-8">{renderEnhancedGallery()}</div>

        {/* EXPLORE MORE PROJECTS */}
        <div className="p-8 bg-gray-50">
          <div className="w-full">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 lg:mb-16 font-onest"
            >
              Explore More Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects
                .filter((p: Project) => p.id !== project.id)
                .slice(0, 3)
                .map((p: Project, idx: number) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    onClick={() => {
                      navigate(`/project/${p.id}`);
                      window.scrollTo(0, 0);
                    }}
                    whileHover={{ y: -8 }}
                    className="cursor-pointer group"
                  >
                    <div className="overflow-hidden mb-4 aspect-[4/5] bg-gray-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-lg md:text-xl font-semibold font-onest mb-1">
                      {p.number} {p.title}
                    </p>
                    <p className="text-gray-600 font-onest">{p.author}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
