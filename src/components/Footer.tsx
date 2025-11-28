export default function Footer() {
  return (
    <section className="min-h-screen h-screen flex flex-col justify-center items-center bg-white z-20 relative">
      <div>
        <img src="/assets/Featured-1.jpg" />
      </div>
      <div className="text-left md:text-center font-onestsemibold  md:leading-[140px] w-full h-full p-4">
        <h1>(Navigation)</h1>
        <ul className="mt-10 text-onestsemibold text-[4rem] md:text-[3rem] leading-[50px] md:leading-[100px] space-y-4 md:space-y-6">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <div className="w-full ">
          <p className="mt-20 text-[1.4rem] md:text-[1.6rem]">
            (ACKNOWLEDGEMENT)
          </p>
        </div>
        <div className="w-[80%] mt-10">
          <span className="">
            We respectfully acknowledge and give our Gratitude for the
            Application Cosmos, for the resources and inspiration it provides to
            our work.
          </span>
        </div>
      </div>
    </section>
  );
}
