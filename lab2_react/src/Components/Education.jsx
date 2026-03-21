function Education() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#122143] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <h2 className="text-[#122143] text-2xl font-bold mb-6 border-b-2 border-slate-200 pb-2">
        Education
      </h2>
      
      <div className="flex justify-between items-start text-slate-700 leading-relaxed mb-1">
        
        <strong className="text-[#122143] text-lg font-semibold">
          Lviv Polytechnic National University
        </strong>
        
        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
          2023 - 2027
        </span>
        
      </div>
      
      <p className="text-slate-600 pl-1">Bachelor of Cybersecurity</p>
      
    </section>
  );
}

export default Education;