import { useState, useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичне перемикання за часом
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Ручне перемикання
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    /* Головна обгортка. Якщо тема темна, додаємо клас "dark" */
    <div className={theme === 'dark' ? 'dark' : ''}>
      
      {/* Загальний фон сайту: світлий вдень (slate-50), темний вночі (slate-900) */}
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 pb-10 relative">
        
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="max-w-[900px] mx-auto -mt-10 px-5 grid gap-6 relative z-10">
          <About />
          <Education />
          <Skills />
          <Experience />
          <Reviews />
        </main>

        <Footer />
        <ContactForm />
        
      </div>
    </div>
  );
}

export default App;