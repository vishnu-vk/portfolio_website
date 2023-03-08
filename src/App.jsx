import { useRef } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const navHeaders = [
    {
      id: 0,
      title: "Home",
      path: "#home",
      ref: heroRef,
    },
    {
      id: 1,
      title: "About",
      path: "#about",
      ref: aboutRef,
    },
    {
      id: 2,
      title: "Projects",
      path: "#projects",
      ref: projectsRef,
    },
    {
      id: 3,
      title: "Contact",
      path: "#contact",
      ref: contactRef,
    },
  ];
  return (
    <div className="bg-backgroundColor w-full flex justify-center h-full scroll-smooth">
      <div className="w-full  font-robotoSlab h-full select-none">
        <NavBar navHeaders={navHeaders}/>
        <Hero sectionRef={heroRef} />
        <About sectionRef={aboutRef} />
        <Projects sectionRef={projectsRef} />
        <Contact sectionRef={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
