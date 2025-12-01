import { motion } from "framer-motion";
import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/assets/pattern.png')] bg-repeat"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 font-onest"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-onest"
          >
            Crafting architectural excellence through innovation and design
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 font-onest">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-onest">
              Founded in 2010, ARC-TECH has been at the forefront of architectural innovation, 
              creating spaces that inspire and endure. Our passion for design excellence drives 
              every project we undertake.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-onest">
              We believe architecture is more than buildings—it's about creating experiences, 
              shaping communities, and building a sustainable future.
            </p>
          </div>
          <div className="bg-gray-100 h-96 flex items-center justify-center">
            <p className="text-gray-400 font-onest">[Team Image Placeholder]</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "Innovation", desc: "Pushing boundaries in architectural design" },
            { title: "Sustainability", desc: "Building for a better tomorrow" },
            { title: "Excellence", desc: "Uncompromising quality in every detail" }
          ].map((item, idx) => (
            <div key={idx} className="text-center p-8 border border-gray-200 hover:border-black transition">
              <h3 className="text-2xl font-bold mb-4 font-onest">{item.title}</h3>
              <p className="text-gray-600 font-onest">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
