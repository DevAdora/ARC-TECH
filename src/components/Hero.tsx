import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-black"
        >
          ARC-TECH
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-xl text-black"
      >
        Where aesthetics meet history in architecture
      </motion.p>
      <div className="text-3xl font-bold text-red-500">
        🚀 Tailwind is working!
      </div>
    </section>
  );
}
