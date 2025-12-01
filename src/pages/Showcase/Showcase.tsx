import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { projects } from "../../data/project";

export default function ShowcasePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white">
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 font-onest"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-onest"
          >
            Explore our collection of architectural excellence
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => {
                navigate(`/project/${project.id}`);
                window.scrollTo(0, 0);
              }}
              whileHover={{ y: -8 }}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden mb-4 aspect-[4/5] bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 font-onest group-hover:text-purple-600 transition">
                {project.number} {project.title}
              </h3>
              <p className="text-gray-600 font-onest">{project.author}</p>
              <p className="text-sm text-gray-500 mt-2 font-onest">
                {project.details.category} • {project.details.year}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}