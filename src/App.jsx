
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Design from "./components/Design";

// Home page containing all sections except projects
const Home = () => (
  <>
    <Hero />
    <About />
    <Technologies />
    <Contacts />
  </>
);

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900">
      {/* Background Effect */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
          rgba(255,255,255,0))]"></div>
      </div>

      {/* Design Component */}
      <Design /> {/* Ensure this is outside Routes */}

      <div className="container mx-auto px-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
