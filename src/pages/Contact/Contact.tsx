import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-900 to-black text-white">
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 font-onest"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-onest"
          >
            Let's discuss your next project
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 font-onest">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 font-onest">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition font-onest"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 font-onest">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition font-onest"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 font-onest">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition font-onest"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 font-onest">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition resize-none font-onest"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-800 transition font-onest"
              >
                Send Message →
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-8 font-onest">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-onest">Office</h3>
                  <p className="text-gray-600 font-onest">
                    123 Architecture Street<br />
                    Design District<br />
                    City, State 12345
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 font-onest">Phone</h3>
                  <p className="text-gray-600 font-onest">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 font-onest">Email</h3>
                  <p className="text-gray-600 font-onest">hello@arctech.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 font-onest">Hours</h3>
                  <p className="text-gray-600 font-onest">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-400 font-onest">[Map Placeholder]</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}