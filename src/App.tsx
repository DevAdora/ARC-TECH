import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
    
      <Showcase />
    </div>
  );
}
