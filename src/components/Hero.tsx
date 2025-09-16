import { useRef, useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section className="hero relative w-full min-h-screen flex flex-col justify-between px-10 py-12 overflow-hidden bg-[url('/your-image.jpg')] bg-cover bg-center">
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-[1]" />

      {/* Main heading content */}
      <div className="relative z-10">
        <h1 className="text-[8rem] font-myfont font-bold text-white drop-shadow-2xl">
          ARC-TECH
        </h1>
        <p className="text-[2rem] text-white w-[50%] leading-relaxed mt-6 font-myfont drop-shadow-lg">
          Discover the art behind the structures — explore ARC-TECH and
          experience architecture where aesthetics meet history.
        </p>
      </div>

      {/* Search Box */}
      <div className="bg-white/95 backdrop-blur-md min-h-[12vh] rounded-xl shadow-2xl px-8 py-6 mb-4 relative z-10 border border-white/20">
        {/* Tab buttons */}
        <div className="flex space-x-6 mb-4">
          <button
            onClick={() => setActiveTab("buy")}
            className={`text-lg font-semibold transition-all duration-300 ${
              activeTab === "buy"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveTab("rent")}
            className={`text-lg font-semibold transition-all duration-300 ${
              activeTab === "rent"
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Rent
          </button>
        </div>
        
        {/* Search form */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col min-w-0">
            <label className="text-sm text-gray-500 mb-1">Location</label>
            <select className="bg-transparent text-black font-medium focus:outline-none cursor-pointer">
              <option>BGC, Taguig</option>
              <option>Makati</option>
              <option>Quezon City</option>
            </select>
          </div>

          <div className="h-10 w-px bg-gray-300 mx-6"></div>

          <div className="flex flex-col min-w-0">
            <label className="text-sm text-gray-500 mb-1">Property Type</label>
            <select className="bg-transparent text-black font-medium focus:outline-none cursor-pointer">
              <option>Hotel & Suite</option>
              <option>Condo</option>
              <option>House</option>
              <option>Lot</option>
            </select>
          </div>

          <div className="h-10 w-px bg-gray-300 mx-6"></div>

          <div className="flex flex-col min-w-0">
            <label className="text-sm text-gray-500 mb-1">Price Range</label>
            <input
              type="text"
              placeholder="$21,000 - $30,000"
              className="bg-transparent text-black font-medium focus:outline-none placeholder-gray-400 min-w-0"
            />
          </div>

          <button className="flex items-center space-x-2 bg-[#2c2a27] text-white px-6 py-3 rounded-xl font-medium hover:bg-black hover:scale-105 transition-all duration-300 ml-6 shadow-lg">
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </section>
  );
}