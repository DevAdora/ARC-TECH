export default function Services() {
  const servicesData = [
    {
      number: "$1,000,000+",
      title: "Sales",
      image: "assets/service.png",
    },
    {
      number: "100+",
      title: "Clients",
      image: "assets/service2.png",
    },
    {
      number: "8+",
      title: "Years in the Industry",
      image: "assets/service3.png",
    },
  ];

  return (
    <section className="w-full min-h-[40vh] flex flex-col justify-center items-center px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center items-center min-h-[30vh]">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full h-[250px] rounded-lg flex flex-col justify-center items-center text-white relative overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <h1 className="text-4xl font-bold z-10">{service.number}</h1>
            <span className="mt-2 text-lg z-10">{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
