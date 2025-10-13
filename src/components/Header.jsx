import { useState, useEffect } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if(currentScroll > document.documentElement.clientHeight * .9 && currentScroll > lastScrollY) {
        setShowHeader(true);
      } 
      else if(currentScroll < lastScrollY) {
        setShowHeader(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky-header ${showHeader ? "visible" : ""}`}>
      <div className="flex justify-evenly gap-6 px-8">
          <a href="#home" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Home</a>
          <a href="#about" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">About</a>
          <a href="#experience" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Experience</a>
          <a href="#portfolio" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Projects</a>
          <a href="#skills" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Skills</a>
          {/* <a href="#contact" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Contact</a>  */}
      </div>
    </header>
  );
};

export default Header;
