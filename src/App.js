
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Project/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
