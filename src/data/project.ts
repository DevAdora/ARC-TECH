export interface Project {
  id: string;
  number: string;
  title: string;
  author: string;
  image: string;
  description: string;
  gallery: string[];
  details: {
    location: string,
    year: string,
    area: string,
    category: string,
  };
}

export const projects: Project[] = [
  {
    id: "arki",
    number: "(01)",
    title: "Arki",
    author: "Arkitekno",
    image: "/assets/arki-1.jpg",
    description:
      "A stunning architectural masterpiece that combines modern design principles with sustainable living. This project showcases innovative use of natural light, open spaces, and eco-friendly materials to create a harmonious living environment.",
    gallery: ["/assets/arki-1.jpg", "/assets/arki-2.jpg", "/assets/arki-3.jpg", "/assets/arki-4.jpg", "/assets/arki-5.jpg", "/assets/arki-6.jpg", "/assets/arki-7.jpg"],
    details: {
      location: "Barcelona, Spain",
      year: "2023",
      area: "450 m²",
      category: "Residential",
    },
  },
  {
    id: "casa-gu",
    number: "(02)",
    title: "CASA GU",
    author: "Estudio Eva",
    image: "/assets/casa-gu-1.jpg",
    description:
      "An elegant contemporary home that seamlessly blends indoor and outdoor spaces. The design emphasizes clean lines, natural materials, and a strong connection to the surrounding landscape.",
    gallery: ["/assets/casa-gu-1.jpg", "/assets/casa-gu-2.jpg", "/assets/casa-gu-3.jpg", "/assets/casa-gu-4.jpg", "/assets/casa-gu-5.jpg", "/assets/casa-gu-6.jpg", "/assets/casa-gu-7.jpg", "/assets/casa-gu-8.jpg"],
    details: {
      location: "Madrid, Spain",
      year: "2022",
      area: "380 m²",
      category: "Residential",
    },
  },
  {
    id: "menorca-house",
    number: "(03)",
    title: "MENORCA HOUSE",
    author: "OOAA",
    image: "/assets/menorca-1.jpg",
    description:
      "A Mediterranean retreat that celebrates traditional island architecture while incorporating modern amenities. The design respects the local vernacular while creating a contemporary living experience.",
    gallery: ["/assets/menorca-1.jpg", "/assets/menorca-2.jpg", "/assets/menorca-3.jpg", "/assets/menorca-4.jpg", "/assets/menorca-5.jpg", "/assets/menorca-6.jpg", "/assets/menorca-7.jpg", "/assets/menorca-8.jpg", "/assets/menorca-9.jpg", "/assets/menorca-10.jpg"],
    details: {
      location: "Menorca, Spain",
      year: "2023",
      area: "320 m²",
      category: "Vacation Home",
    },
  },
  {
    id: "villa-k",
    number: "(04)",
    title: "VILLA K",
    author: "Estudio Eva",
    image: "/assets/villa-1.jpg",
    description:
      "A luxurious villa that epitomizes modern elegance. Featuring expansive glass walls, infinity pools, and carefully curated spaces that frame breathtaking views.",
    gallery: ["/assets/villa-1.jpg", "/assets/villa-2.jpg", "/assets/villa-3.jpg", "/assets/villa-4.jpg", "/assets/villa-5.jpg"],
    details: {
      location: "Costa Brava, Spain",
      year: "2023",
      area: "520 m²",
      category: "Luxury Residential",
    },
  },
  {
    id: "villas-lunaya",
    number: "(05)",
    title: "VILLAS LUNAYA",
    author: "Fabian Martinez",
    image: "/assets/lunaya-1.jpg",
    description:
      "A collection of minimalist villas that embrace simplicity and functionality. Each unit is designed to maximize natural light and create a sense of tranquility.",
    gallery: ["/assets/lunaya-1.jpg", "/assets/lunaya-2.jpg", "/assets/lunaya-3.jpg", "/assets/lunaya-4.jpg", "/assets/lunaya-5.jpg", "/assets/lunaya-6.jpg", "/assets/lunaya-7.jpg"],
    details: {
      location: "Valencia, Spain",
      year: "2022",
      area: "280 m²",
      category: "Multi-unit Residential",
    },
  },
  {
    id: "wabi-sabi",
    number: "(06)",
    title: "WABI SABI",
    author: "BAPTISTE BOHU",
    image: "/assets/wabi-sabi-1.jpg",
    description:
      "Inspired by Japanese aesthetics, this project celebrates imperfection and natural beauty. The design uses raw materials and simple forms to create spaces of profound calm and contemplation.",
    gallery: ["/assets/wabi-sabi-1.jpg", "/assets/wabi-sabi-2.jpg", "/assets/wabi-sabi-3.jpg", "/assets/wabi-sabi-4.jpg", "/assets/wabi-sabi-5.jpg", "/assets/wabi-sabi-6.jpg", "/assets/wabi-sabi-7.jpg", "/assets/wabi-sabi-8.jpg"],
    details: {
      location: "Kyoto, Japan",
      year: "2023",
      area: "350 m²",
      category: "Residential",
    },
  },
];
