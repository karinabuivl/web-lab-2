import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans pb-10">
      
      <Header />
      
      <main className="max-w-[900px] mx-auto -mt-10 px-5 grid gap-6">
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