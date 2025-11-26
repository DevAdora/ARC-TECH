import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Feedback() {
  const feedbackData = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Company A",
      feedback:
        "Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros.",
      image: "assets/service.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO, Company B",
      feedback:
        "Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros.",
      image: "assets/service.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Founder, Startup C",
      feedback:
        "Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros. Nunc quis orci consequat, vehicula elit at, varius metus. Suspendisse potenti. Integer posuere orci nec eros.",
      image: "assets/service.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % feedbackData.length);
  };

  const getPosition = (cardIndex: any) => {
    const diff =
      (cardIndex - index + feedbackData.length) % feedbackData.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center px-8 py-12 z-20">
      <div className="text-[8rem] w-[70%] text-center">
        RECENT <span className="font-myfont">FEEDBACK</span> FROM OUR CLIENTS
      </div>
      <div className="flex gap-4 mb-8">
        <button
          onClick={prev}
          className="p-3 rounded-full border-black border text-black hover:bg-black hover:text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border-black border text-black hover:bg-black hover:text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative flex w-full h-[500px] justify-center items-center">
        {feedbackData.map((feedback, i) => {
          const position = getPosition(i);

          const variants = {
            center: {
              x: 0,
              scale: 1.1,
              zIndex: 20,
              opacity: 1,
            },
            left: {
              x: "-90%",
              scale: 0.9,
              zIndex: 10,
              opacity: 0.6,
            },
            right: {
              x: "90%",
              scale: 0.9,
              zIndex: 10,
              opacity: 0.6,
            },
          };

          return (
            <motion.div
              key={feedback.id}
              variants={variants}
              animate={position}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-[600px] h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-between p-6"
            >
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-black text-center flex-1">
                {feedback.feedback}
              </p>
              <div className="mt-4 text-center">
                <h3 className="font-bold text-xl">{feedback.name}</h3>
                <p className="italic text-gray-500">{feedback.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
