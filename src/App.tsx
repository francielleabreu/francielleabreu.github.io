import './App.css';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Bio />
      <Skills />
      <Education />
      <Certifications />
      <Experience />
      <Projects />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
