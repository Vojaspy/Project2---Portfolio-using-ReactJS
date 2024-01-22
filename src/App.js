import logo from "./logo.svg";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <>
      <Navbar />
      <Resume />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
