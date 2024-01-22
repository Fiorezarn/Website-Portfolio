import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content/Content";
import About from "./components/About";
import Project from "./components/Project";
import ParticleBg from "./components/Particle";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <ParticleBg />
      <Navbar />
      <Content />
      <About />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}

export default App;
