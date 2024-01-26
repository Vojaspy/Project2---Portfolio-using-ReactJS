import logo from "./logo.svg";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.css";



function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
