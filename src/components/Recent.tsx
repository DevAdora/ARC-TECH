export default function Recent() {
  return (
<section className="bg-[#0b0b0a] w-full h-[100%] flex flex-col">
      <h1 className="p-4 items-center justify-center text-[8rem] font-semibold text-white  select-none pointer-events-none">
        <span className="font-myfont">RECENT</span> SALES
      </h1>
      <div className="relative  w-full h-[50vh] flex gap-4 p-4">
        <div className="flex-[0.4]  z-10">
          <img src="assets/h1.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-[0.2]  z-10">
          <img src="assets/h3.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-[0.2]  z-10">
          <img src="assets/h4.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-[0.2]  z-10">
          <img src="assets/h5.png" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Second Division */}
      <div className="relative w-full h-[50vh] flex gap-4 p-4">
        <div className="flex-[0.2] z-10">
          <img src="assets/h5.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-[0.2]  z-10">
          <img src="assets/h4.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-[0.2]  z-10">
          <img src="assets/h3.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-[0.4]  z-10">
          <img src="assets/h1.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
