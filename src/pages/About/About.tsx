import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

interface TeamMemberData {
  role: string;
  name: string;
  img: string;
}

const team: TeamMemberData[] = [
  {
    role: "Developer",
    name: "Rai M. Reyes Jr.",
    img: "/assets/green-1.jpg",
  },
  {
    role: "Designer",
    name: "Reymart Louie Capapas",
    img: "/assets/green-2.jpg",
  },
  {
    role: "Project Manager",
    name: "Vhyron S. Barieza",
    img: "/assets/green-3.jpg",
  },
  {
    role: "Application Architecture",
    name: "Niel Angelo Gencaya",
    img: "/assets/green-4.jpg",
  },
  {
    role: "Quality Analyst",
    name: "Japheth Gonzales",
    img: "/assets/green-5.jpg",
  },
  {
    role: "Design Consultant",
    name: "Roy Kevin Duayan",
    img: "/assets/green-6.jpg",
  },
];

interface TeamMemberProps {
  role: string;
  name: string;
  img: string;
}

function TeamMember({ role, name, img }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-t border-black/10 py-4 md:py-6 lg:py-8 cursor-pointer group transition-all duration-300 hover:bg-gray-50/50"
    >
      <div className="px-4 md:px-8 flex flex-col gap-0.5">
        <span className="font-onestsemibold text-[0.625rem] md:text-xs lg:text-sm opacity-50 uppercase tracking-wide group-hover:opacity-70 transition-opacity">
          {role}
        </span>
        <h3 className="font-onestbold tracking-[-1px] text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight group-hover:translate-x-2 transition-transform duration-300">
          {name}
        </h3>
      </div>

      {/* Floating Image (appears on hover, doesn't affect layout) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden lg:block absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-[280px] xl:w-[320px] pointer-events-none z-50"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-black overflow-hidden">
        <div className="w-full h-full min-h-screen flex flex-col md:grid md:grid-cols-[75%_25%] justify-end items-end">
          <div className="relative z-10 text-center px-4 flex items-center justify-center flex-1 md:flex-none">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10rem] sm:text-[10rem] md:text-[8rem] lg:text-[15rem] xl:text-[20rem] 2xl:text-[31rem] font-bold font-onestsemibold leading-[1.1] md:leading-[360px]"
            >
              ARC- <br />
              <span className="hidden md:block">TECH</span>
            </motion.h1>
          </div>
          <div className="absolute right-2 bottom-2 w-[150px] sm:w-[200px] md:w-auto md:relative">
            <img
              src="/assets/green-1.jpg"
              alt="About Hero"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-contain p-2 md:p-6"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen flex justify-center items-center bg-white py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl px-4 md:px-8"
        >
          <div className="mb-8 md:mb-12">
            <h2 className="font-onestsemibold tracking-[-1px] text-sm md:text-base lg:text-[1.5rem] mb-4">
              (ABOUT ARC-TECH)
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.3] md:leading-[1.4] lg:leading-[60px] font-onestsemibold md:font-onestsemibold w-full md:w-[80%] lg:w-[70%] text-left">
              ARC-TECH provides a digital platform dedicated to exploring and
              presenting the world of architecture. It combines modern web
              technologies with compelling visual storytelling. Offers users an
              immersive educational experience allowing users to appreciate
              architecture in a clear and engaging way.
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen bg-white py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full"
        >
          {/* Header */}
          <div className="px-4 md:px-8 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-onestsemibold tracking-[-1px] text-sm md:text-base lg:text-[1.5rem] mb-4">
              (OUR TEAM)
            </h2>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-tight md:leading-[1.2] lg:leading-[90px] w-full md:w-[90%] lg:w-[80%] font-onest">
              MEET THE TEAM BEHIND THE ARCHITECHTURE
            </h2>
          </div>

          {/* Team Grid */}
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="w-full">
              {team.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
              <div className="border-t border-black/10" />
            </div>
          </div>
        </motion.div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
