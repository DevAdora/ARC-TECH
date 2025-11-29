export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white z-20 relative">
      <div className="w-full px-4 md:px-8 py-12">
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-[35%_65%] 
            gap-10 
            items-start
          "
        >
          {/* LEFT COLUMN */}
          <div className="md:p-8 w-full font-onestsemibold flex flex-col items-start">
            <h2 className="w-full text-left tracking-[-1px] text-[1rem] md:text-[2rem] mb-4">
              (ABOUT ARC-TECH)
            </h2>

            {/* Responsive image */}
            <img
              src="/assets/casa-el-campo-1.jpg"
              alt="ARC-TECH Architecture"
              className="
                w-full
                max-w-[800px]
                h-auto
                md:h-[600px]
                object-cover
              "
            />

            {/* Timeline Rows */}
            <div className="mt-2 border-b border-black p-4 flex justify-between w-full max-w-[750px]">
              <span className="text-[1.2rem] md:text-[1.4rem]">2023</span>
              <span className="text-[1.2rem] md:text-[1.4rem]">
                Initial Planning
              </span>
            </div>

            <div className="mt-2 border-b border-black p-4 flex justify-between w-full max-w-[750px]">
              <span className="text-[1.2rem] md:text-[1.4rem]">2024</span>
              <span className="text-[1.2rem] md:text-[1.4rem]">
                Launching Website
              </span>
            </div>

            <div className="mt-2 border-b border-black p-4 flex justify-between w-full max-w-[750px]">
              <span className="text-[1.2rem] md:text-[1.4rem]">2025</span>
              <span className="text-[1.2rem] md:text-[1.4rem]">Present</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:p-4 md:p-8 w-full">
            <h2
              className="
              text-[1.8rem]
              md:text-[3rem]
              lg:text-[5.5rem]
              md:indent-20
              leading-[30px]
              md:leading-[80px]
              md:font-onestsemibold
              font-onest
            "
            >
              ARC-TECH provides a digital platform dedicated to exploring and
              presenting the world of architecture. It combines modern web
              technologies with compelling visual storytelling. Offers users an
              immersive educational experience allowing users to appreciate
              architecture in a clear and engaging way.
            </h2>

            {/* CTA Button */}
            <div className="mt-10 font-onest">
              <a className="py-2 md:py-6 px-4 md:px-4 bg-[#080807] text-white rounded-full md:text-[1.2rem]">
                GET TO KNOW OUR PROCESS ◉
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
