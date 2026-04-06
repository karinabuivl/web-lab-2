function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-slate-800 text-white pt-16 pb-20 px-5 text-center transition-colors duration-500">
      <h1 className="text-4xl font-bold tracking-wide mb-4">Karina Buival</h1>
      
      <button 
        onClick={toggleTheme}
        className="mb-6 px-6 py-2 border-2 border-white/30 rounded-full font-medium hover:bg-white hover:text-slate-800 transition-all duration-300"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      
      <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-slate-300 text-sm md:text-base">
        <li><strong>Phone:</strong> +380676701982</li>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:karina.buival.kb.2023@lpnu.ua" className="hover:text-white underline decoration-slate-500 transition">
            karina.buival.kb.2023@lpnu.ua
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/karina-buival-63a794367" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-slate-500 transition">
            Karina Buival
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;