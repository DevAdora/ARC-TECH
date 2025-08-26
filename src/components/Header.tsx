export default function Header() {
  return (
    <header className="w-full px-8 py-2 bg-white text-black flex justify-between items-center">
      <h1 className="font-myfont text-[2.5rem] font-bold">A</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#showcase" className="hover:underline">
              Showcase
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="gap-4 flex">
        <button className="bg-black text-white p-4 
        ">Login</button>
        <button>Sign up</button>
      </div>
    </header>
  );
}
