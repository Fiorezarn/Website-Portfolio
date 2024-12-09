import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content/Content";
import About from "./components/About";
import ParticleBg from "./components/Particle";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import ProjectCarousel from "./components/Project";

function App() {
  return (
    <>
      <ParticleBg />
      <Navbar />
      <Content />
      <About />
      <Skill />
      <ProjectCarousel />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
