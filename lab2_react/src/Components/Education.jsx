function Education() {
  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-t-4 border-[#122143] dark:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <h2 className="text-[#122143] dark:text-white text-2xl font-bold mb-6 border-b-2 border-slate-200 dark:border-slate-700 pb-2 transition-colors">
        Education
      </h2>
      
      <div className="flex justify-between items-start text-slate-700 dark:text-slate-300 leading-relaxed mb-1 transition-colors">
        
        <strong className="text-[#122143] dark:text-white text-lg font-semibold transition-colors">
          Lviv Polytechnic National University
        </strong>
        
        <span className="text-sm font-medium text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap transition-colors">
          2023 - 2027
        </span>
        
      </div>
      
      <p className="text-slate-600 dark:text-slate-300 pl-1 transition-colors">
        Bachelor of Cybersecurity
      </p>
      
    </section>
  );
}

export default Education;