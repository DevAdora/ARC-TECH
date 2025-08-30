import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react"; // npm install lucide-react

export default function Hero() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section className="hero w-full min-h-screen flex flex-col justify-between px-10 py-12">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[8rem] font-myfont font-bold text-white"
        >
          ARC-TECH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[2rem] text-white w-[50%] leading-relaxed mt-6 font-myfont"
        >
          Discover the art behind the structures — explore ARC-TECH and
          experience architecture where aesthetics meet history.
        </motion.p>
      </div>

      <div className="bg-white min-h-[12vh] rounded-xl shadow-lg px-8 py-6 mb-4">
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveTab("buy")}
            className={`text-lg font-semibold ${
              activeTab === "buy"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveTab("rent")}
            className={`text-lg font-semibold ${
              activeTab === "rent"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Rent
          </button>
        </div>
        <div className="flex items-center justify-between min-h-[12npmvh] px-8 py-6">

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Location</label>
            <select className="bg-transparent text-black font-medium focus:outline-none">
              <option>BGC, Taguig</option>
              <option>Makati</option>
              <option>Quezon City</option>
            </select>
          </div>

          <div className="h-10 w-px bg-gray-300"></div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Property Type</label>
            <select className="bg-transparent text-black font-medium focus:outline-none">
              <option>Hotel & Suite</option>
              <option>Condo</option>
              <option>House</option>
              <option>Lot</option>
            </select>
          </div>

          <div className="h-10 w-px bg-gray-300"></div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Price Range</label>
            <input
              type="text"
              placeholder="$21,000 - $30,000"
              className="bg-transparent text-black font-medium focus:outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-[#2c2a27] text-white px-6 py-3 rounded-xl font-medium hover:bg-black transition"
          >
            <Search size={18} />
            <span>Search</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
