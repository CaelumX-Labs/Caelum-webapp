import { useState, useEffect } from 'react';
import Logo from '../../../app/assets/Logo.png';
import { Button } from '../Button';

export const Headers = () => {


  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = () => {
    // Check if the scroll position is greater than 4px
    setIsScrolled(window.scrollY > 4);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex w-full justify-between items-center px-8 py-4 transition-all duration-300 z-40 ${
        isScrolled
          ? 'backdrop-blur-lg bg-zinc-950/25 shadow-md shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="size-12">
        <img src={Logo.src} alt="Logo" />
      </div>
      <div className="flex">
        <div className="inline-flex">
          <Button label="Connet Wallet" />
        </div>
      </div>
    </nav>
  );
};
