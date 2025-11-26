import ScrambleText from "./HeaderLinks";
export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-30 px-8 py-4 flex justify-between items-center text-white pointer-event-none">
      <h1 className="font-myfont text-[2.8rem]">A</h1>

      <nav className="font-onest">
        <ul className="flex space-x-6 text-[1.1rem]">
          <li>
            <ScrambleText label="Home" />
          </li>
          <li>
            <ScrambleText label="Showcase" />
          </li>
          <li>
            <ScrambleText label="About" />
          </li>
          <li>
            <ScrambleText label="Contact" />
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 font-onest">
        <button className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 transition">
          Get in Touch →
        </button>
      </div>
    </header>
  );
}
