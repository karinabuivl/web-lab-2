import { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const currentOS = navigator.platform;
    const currentBrowser = navigator.userAgent;

    localStorage.setItem('userOS', currentOS);
    localStorage.setItem('userBrowser', currentBrowser);

    setSystemInfo({
      os: localStorage.getItem('userOS'),
      browser: localStorage.getItem('userBrowser')
    });
  }, []); 

  return (
    <footer className="text-center py-8 text-slate-500 text-sm mt-4">
      <p>&copy; 2026 Karina Buival. Lviv, Ukraine.</p>
      
      <div className="mt-3 text-xs text-slate-400">
        <p><strong className="text-slate-500">OS:</strong> {systemInfo.os}</p>
        <p className="mt-1"><strong className="text-slate-500">Browser:</strong> {systemInfo.browser}</p>
      </div>
    </footer>
  );
}

export default Footer;