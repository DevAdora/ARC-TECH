import { motion } from "framer-motion";
import Header from "../../components/Header";

const services = [
  {
    title: "Architectural Design",
    description: "From concept to completion, we create spaces that inspire and function beautifully.",
    features: ["Residential Design", "Commercial Spaces", "Urban Planning"]
  },
  {
    title: "Interior Design",
    description: "Transforming interiors into cohesive, functional, and aesthetically pleasing spaces.",
    features: ["Space Planning", "Material Selection", "Custom Furniture"]
  },
  {
    title: "Project Management",
    description: "Comprehensive oversight ensuring your project is delivered on time and within budget.",
    features: ["Timeline Management", "Budget Control", "Quality Assurance"]
  },
  {
    title: "Consulting",
    description: "Expert guidance on feasibility studies, sustainability, and design optimization.",
    features: ["Feasibility Studies", "Sustainability Consulting", "Code Compliance"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 font-onest"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-onest"
          >
            Comprehensive architectural solutions tailored to your vision
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 border border-gray-200 hover:border-black transition group"
            >
              <h2 className="text-3xl font-bold mb-4 font-onest group-hover:text-blue-600 transition">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-onest">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 font-onest">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-onest">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-onest">
            Let's bring your architectural vision to life
          </p>
          <a href="/contact">
            <button className="bg-white text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-200 transition font-onest">
              Get in Touch →
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}