function Header() {
  return (
    <header className="bg-[#122143] text-white pt-[60px] pb-[80px] px-5 text-center">
      
      <h1 className="text-5xl font-bold mb-4 tracking-wide">Karina Buival</h1>
      
      <ul className="flex justify-center flex-wrap gap-8 list-none">
        <li><strong>Phone:</strong> +380676701982</li>
        
        <li>
          <strong>Email:</strong>{' '}
          <a 
            href="mailto:karina.buival.kb.2023@lpnu.ua" 
            className="text-white no-underline hover:text-[#7c92c7] transition-colors duration-300"
          >
            karina.buival.kb.2023@lpnu.ua
          </a>
        </li>
        
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a 
            href="https://www.linkedin.com/in/karina-buival" 
            className="text-white no-underline hover:text-[#7c92c7] transition-colors duration-300"
          >
            Karina Buival
          </a>
        </li>
      </ul>

    </header>
  );
}

export default Header;