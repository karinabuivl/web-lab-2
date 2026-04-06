function Skills() {
  return (
    <section className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-t-4 border-[#122143] dark:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <h2 className="text-[#122143] dark:text-white text-2xl font-bold mb-6 border-b-2 border-slate-200 dark:border-slate-700 pb-2 transition-colors">
        Skills & Languages
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        <div>
          <h3 className="text-lg font-bold text-[#122143] dark:text-white mb-4 transition-colors">Technical Skills</h3>
          <div className="flex flex-wrap gap-2.5">
            {['Python', 'C (basics)', 'Linux/Unix', 'Networking', 'Databases (SQL)', 'Wireshark', 'Git'].map((skill) => (
              <span 
                key={skill}
                className="bg-slate-100 dark:bg-slate-700 text-[#122143] dark:text-slate-200 px-3.5 py-1.5 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 transition-colors hover:bg-slate-200 dark:hover:bg-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#122143] dark:text-white mb-4 transition-colors">Languages</h3>
          
          <div className="space-y-5">
            
            <div>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="font-semibold text-slate-800 dark:text-slate-200 transition-colors">Ukrainian</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors">Native</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 transition-colors">
                <div className="bg-[#122143] dark:bg-slate-300 h-2 rounded-full w-full transition-colors"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="font-semibold text-slate-800 dark:text-slate-200 transition-colors">English</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors">Upper Intermediate</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 transition-colors">
                <div className="bg-[#122143] dark:bg-slate-300 h-2 rounded-full w-[80%] transition-colors"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </section>
  );
}

export default Skills;