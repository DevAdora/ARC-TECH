import { motion } from "framer-motion";
import { useState } from "react";

export default function Feedback() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white z-20 relative">
      <div className="w-full px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-10 items-start md:p-10">
          {/* LEFT COLUMN — unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center font-onest leading-relaxed"
          >
            <h2 className="text-[1rem] md:text-[2rem] mb-4 font-onestsemibold">
              (HEAR FROM OTHERS)
            </h2>

            <img
              src="/assets/feedback02.jpg"
              alt="ARC-TECH Architecture"
              className="w-full max-w-[800px] h-auto md:h-[600px] object-cover  mb-6"
            />

            <p className="text-lg md:text-[1.4rem] mb-4 w-[90%] leading-[20px]">
              “ARC-TECH elevated the entire architectural journey for our
              project. Their ability to visually communicate form, texture, and
              ambience made it easier for us to understand the essence of each
              design decision.
            </p>

            <p className="text-lg md:text-[1.4rem] mb-4 w-[90%] leading-[20px]">
              Every detail is curated with precision. The platform does not just
              display architecture — it tells a story. The combination of
              visuals and clear explanations helped us gain confidence in our
              direction.
            </p>

            <p className="text-lg md:text-[1.4rem] mb-6 w-[90%] leading-[20px]">
              We were impressed with how immersive and informative the
              experience was. ARC-TECH truly bridges the gap between concept and
              clarity.”
            </p>

            <p className="text-xl font-onestsemibold">
              — Stijn Bollaert
              <br />
              <span className="text-gray-600 text-lg">Martelaar Residence</span>
            </p>
          </motion.div>

          {/* RIGHT COLUMN — SINGLE IMAGE WITH HOVER SWAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-full md:w-[80%] md:ml-auto"
          >
            <div
              className="relative w-full h-screen rounded-xl overflow-hidden shadow-lg cursor-pointer "
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Default Image */}
              <motion.img
                src="/assets/feedback06.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: hovered ? 0 : 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Hover Image */}
              <motion.img
                src="/assets/feedback01.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* CREDITS + VIEW PROJECT */}
            <div className="mt-4 flex justify-between items-center font-onestsemibold">
              <div>
                <span className="block text-[1.4rem]">Martelaar</span>
                <span className="text-gray-600 text-[1.2rem]">
                  Machteld D'Hollander
                </span>
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="py-2 text-[1.4rem] tracking-wide border-b border-black "
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
