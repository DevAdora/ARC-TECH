import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Header from "./components/Header";
import Services from "./components/Services";
import Feedback from "./components/Feedback";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <Showcase />
      <Feedback />
    </div>
  );
}
