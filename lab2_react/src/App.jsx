import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <main>
        <About />
        <Education />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;