import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-slate-800 dark:bg-slate-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors z-40"
      >
        Contact Me
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-[0_15px_40px_-5px_rgba(15,23,42,0.12)] w-full max-w-md relative transition-all duration-300 transform-gpu">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-2xl font-bold transition-colors"
            >
              &times;
            </button>
            
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors">Contact Me</h2>
            
            <form action="https://formspree.io/f/mojpyjqd" method="POST" className="flex flex-col gap-4">
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Phone:</label>
                <input 
                  type="tel" 
                  name="phone" 
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Message:</label>
                <textarea 
                  name="message" 
                  rows="3" 
                  required 
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-slate-800 dark:bg-slate-600 text-white font-semibold py-3 rounded-lg mt-2 hover:bg-slate-700 dark:hover:bg-slate-500 transition-colors"
              >
                Send Message
              </button>
              
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;