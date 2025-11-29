import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen h-full flex flex-col justify-center items-center bg-white z-20 relative border-t border-gray-450">
      <div className="grid md:grid-cols-3 gap-10 text-left md:text-center font-onestsemibold w-full h-full p-4 md:p-10">
        <div className="order-3 md:order-1 max-w-[600px]">
          <img src="/assets/Featured-1.jpg" className="w-[600px] h-auto" />
          <h1 className="text-left md:text-center text-[4rem] md:text-[7.6rem] tracking-[-5px] max-w-full">
            ARC-TECH
          </h1>
        </div>
        <div className="order-1 md:order-2 items-start justify-start text-left">
          <h1 className="text-[1.6rem]">(Navigation)</h1>
          <ul className="text-onestsemibold text-[2.5rem] md:text-[4.5rem] leading-[40px] md:leading-[80px] w-[40%]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Archive</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Process</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="h-full w-full order-2 md:order-3 justify-start items-start grid grid-cols gap-10 md:grid-rows-[60%_40%]">
          <div className="w-full md:w-[80%] text-left leading-[30px] font-onest  md:font-onestsemibold ">
            <p className="text-[1rem] md:text-[1.4rem] md:text-[1.6rem]">
              (ACKNOWLEDGEMENT)
            </p>
            <span className="text-[1.2rem] md:text-[1.4rem]">
              We respectfully acknowledge and give our Gratitude for the
              Application Cosmos, for the resources and inspiration it provides
              to our work. Also, big credits for the OH Architecture by Monolog
              for the inspiration. This work would not be possible without the
              dedication and creativity of those people mentioned. The sole
              purpose of this work is to showcase architectural design and to
              inspire others in the field. We are deeply grateful for the
              opportunity to contribute to this vibrant community.
            </span>
          </div>
          <div className="text-left text-[1rem] md:text-[1.4rem] md:text-[1.6rem] font-onest md:font-onestsemibold leading-[30px]">
            <h1>(INFO)</h1>
            <p>ADDRESS: COSMOS</p>
            <p>EMAIL: oh.cosmos@gmail.com</p>
            <p>NO#: 9-123-45678</p>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-4 w-full h-full justify-end items-end p-4 md:px-10 gap-5 md:gap-10 ">
        <div className="font-onestsemibold ">
          <h3 className="text-[0.8rem] md:text-[1.4rem]"> ARC-TECH © 2024</h3>
          <p className="text-[0.8rem] md:text-[1.2rem]">
            {localTime}
            <span className="">, PHI</span>
          </p>
        </div>
        <div className="font-onestsemibold">
          <h3 className="text-[0.8rem]  md:text-[1.4rem]"> PRIVACY POLICY</h3>
          <h3 className="text-[0.8rem]  md:text-[1.4rem]"> TERMS OF SERVICE</h3>
        </div>
        <div className="font-onestsemibold ">
          <h3 className="text-[0.8rem]  md:text-[1.4rem]"> INSTAGRAM</h3>
        </div>
        <div className="absolute bottom-5 right-5 md:bottom-0 md:right-0 flex md:relative md:justify-end md:items-end">
          <button onClick={scrollToTop} aria-label="Scroll to top">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="md:py-2 text-[1rem] md:text-[1.4rem] tracking-wide border-b border-black font-onestsemibold"
            >
              BACK TO TOP ↑
            </motion.a>{" "}
          </button>{" "}
        </div>
      </div>
    </section>
  );
}
