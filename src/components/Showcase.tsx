export default function Showcase() {
  return (
    <section className="h-full min-h-screen flex flex-col justify-center items-center font-onest bg-white z-20 relative">
      {/* Title */}
      <div className="w-full flex items-end justify-center md:justify-between">
        <h1 className=" text-[4rem] md:text-[10rem] leading-none">
          HIGHLIGHTS
        </h1>
        <span className="text-[2rem] md:text-[4rem] md:mr-10">(06)</span>
      </div>
      {/* GRID â€” keeps your spacing + becomes responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[2200px] ">
        {/* 01 */}
        <div className="p-8 md:p-0 w-full flex flex-col mb-10">
          <div className="w-[700px] max-w-full">
            <img
              src="/assets/arki-1.jpg"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-between w-[700px] max-w-full mt-2">
            <span className="text-[1.2rem]">(01) Arki</span>
            <span className="text-[1.2rem]">Arkitekno</span>
          </div>
        </div>

        {/* 02 */}
        <div className="p-8 md:p-0 w-full flex flex-col items-end mb-10">
          <div className="w-[700px] max-w-full">
            <img
              src="/assets/casa-gu-1.jpg"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-between w-[700px] max-w-full mt-2">
            <span className="text-[1.2rem]">(02) CASA GU</span>
            <span className="text-[1.2rem]">Estudio Eva</span>
          </div>
        </div>

        {/* 03 */}
        <div className="p-8 md:p-0 w-full flex flex-col mb-10">
          <div className="w-[565px] h-[700px] max-w-full">
            <img
              src="/assets/menorca-1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between w-[565px] max-w-full mt-2">
            <span className="text-[1.2rem]">(03) MENORCA HOUSE</span>
            <span className="text-[1.2rem]">OOAA</span>
          </div>
        </div>

        {/* 04 */}
        <div className="p-8 md:p-0 w-full flex flex-col items-end mb-10">
          <div className="w-[700px] max-w-full">
            <img
              src="/assets/villa-1.jpg"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-between w-[700px] max-w-full mt-2">
            <span className="text-[1.2rem]">(04) VILLA K</span>
            <span className="text-[1.2rem]">Estudio Eva</span>
          </div>
        </div>

        {/* 05 */}
        <div className="p-8 md:p-0 w-full flex flex-col mb-10">
          <div className="w-[500px] max-w-full">
            <img
              src="/assets/lunaya-1.jpg"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-between w-[500px] max-w-full mt-2">
            <span className="text-[1.2rem]">(05) VILLAS LUNAYA</span>
            <span className="text-[1.2rem]">Fabian Martinez</span>
          </div>
        </div>

        {/* 06 */}
        <div className="p-8 md:p-0 w-full flex flex-col items-end mb-10">
          <div className="w-[700px] max-w-full">
            <img
              src="/assets/wabi-sabi-1.jpg"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex justify-between w-[700px] max-w-full mt-2">
            <span className="text-[1.2rem]">(06) WABI SABI</span>
            <span className="text-[1.2rem]">BAPTISTE BOHU</span>
          </div>
        </div>
      </div>
    </section>
  );
}
