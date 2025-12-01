import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/project";

interface CursorPosition {
  x: number;
  y: number;
}

// Custom cursor component
function CustomCursor({
  isHovering,
  position,
}: {
  isHovering: boolean;
  position: CursorPosition;
}) {
  if (!isHovering) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-onestsemibold whitespace-nowrap">
        View Project
      </div>
    </div>
  );
}

export default function Showcase() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="h-full min-h-screen flex flex-col justify-center items-center font-onest bg-white z-20 relative py-10">
      {/* Custom Cursor */}
      <CustomCursor
        isHovering={hoveredIndex !== null}
        position={cursorPosition}
      />

      {/* Title */}
      <div className="w-full flex items-end justify-center md:justify-between">
        <h1 className="px-4 md:p-0 text-[3.2rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[12rem] md:leading-[140px]">
          HIGHLIGHT WORKS
        </h1>
        <span className="text-[2rem] md:text-[4rem] md:mr-10 px-4 md:p-0">
          (06)
        </span>
      </div>
      {/* GRID — keeps your spacing + becomes responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[2200px] ">
        {/* 01 */}
        <div className="p-4 md:p-0 w-full flex flex-col mb-10">
          <div
            className="w-[700px] max-w-full cursor-pointer overflow-hidden"
            onClick={() => handleProjectClick(projects[0].id)}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <img
              src="/assets/arki-1.jpg"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex justify-between w-[700px] max-w-full mt-2 font-onestsemibold">
            <span className="text-[1.4rem]">(01) Arki</span>
            <span className="text-[1.4rem]">Arkitekno</span>
          </div>
        </div>

        {/* 02 */}
        <div className="p-4 md:p-0 w-full flex flex-col items-end mb-10">
          <div
            className="w-[700px] max-w-full cursor-pointer overflow-hidden"
            onClick={() => handleProjectClick(projects[1].id)}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <img
              src="/assets/casa-gu-1.jpg"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex justify-between w-[700px] max-w-full mt-2 font-onestsemibold">
            <span className="text-[1.4rem]">(02) CASA GU</span>
            <span className="text-[1.4rem]">Estudio Eva</span>
          </div>
        </div>

        {/* 03 */}
        <div className="p-4 md:p-0 w-full flex flex-col mb-10">
          <div
            className="w-[565px] md:w-full h-[700px] max-w-full cursor-pointer overflow-hidden"
            onClick={() => handleProjectClick(projects[2].id)}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <img
              src="/assets/menorca-1.jpg"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex justify-between w-[565px] md:w-full max-w-full mt-2 font-onestsemibold">
            <span className="text-[1.4rem]">(03) MENORCA HOUSE</span>
            <span className="text-[1.4rem]">OOAA</span>
          </div>
        </div>

        {/* 04 */}
        <div className="p-4 md:p-0 w-full flex flex-col items-end mb-10">
          <div
            className="w-[700px] max-w-full cursor-pointer overflow-hidden"
            onClick={() => handleProjectClick(projects[3].id)}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <img
              src="/assets/villa-1.jpg"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex justify-between w-[700px] max-w-full mt-2 font-onestsemibold">
            <span className="text-[1.4rem]">(04) VILLA K</span>
            <span className="text-[1.4rem]">Estudio Eva</span>
          </div>
        </div>

        {/* 05 */}
        <div className="p-4 md:p-0 w-full flex flex-col mb-10">
          <div
            className="w-[500px] max-w-full cursor-pointer overflow-hidden"
            onClick={() => handleProjectClick(projects[4].id)}
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <img
              src="/assets/lunaya-1.jpg"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex justify-between w-[500px] max-w-full mt-2 font-onestsemibold">
            <span className="text-[1.4rem]">(05) VILLAS LUNAYA</span>
            <span className="text-[1.4rem]">Fabian Martinez</span>
          </div>
        </div>

        {/* 06 */}
        <div className="p-4 md:p-0 w-full flex flex-col items-end mb-10">
          <div
            className="w-[700px] md:w-full max-w-full cursor-pointer overflow-hidden"
            onClick={() => handleProjectClick(projects[5].id)}
            onMouseEnter={() => setHoveredIndex(5)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <img
              src="/assets/wabi-sabi-1.jpg"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex justify-between w-[700px] md:w-full max-w-full mt-2 font-onestsemibold">
            <span className="text-[1.4rem]">(06) WABI SABI</span>
            <span className="text-[1.4rem]">BAPTISTE BOHU</span>
          </div>
        </div>
      </div>
    </section>
  );
}
