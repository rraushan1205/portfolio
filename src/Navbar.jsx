import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-background h-[61px] px-4 sm:px-8 flex justify-between items-center">
      {/* Logo */}
      <span className="font-bold text-white">Raushan</span>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10 items-end text-gray">
        <div><span className="text-primary">#</span>Home</div>
        <div><span className="text-primary">#</span>Works</div>
        <div><span className="text-primary">#</span>About-me</div>
        <div><span className="text-primary">#</span>Contacts</div>
        <div>
          <select className="bg-transparent text-white" name="lang" id="lang">
            <option value="EN">EN</option>
            <option value="HI">HI</option>
            <option value="SP">SP</option>
            <option value="AEN">AEN</option>
          </select>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-background flex flex-col items-center gap-4 text-gray py-4">
          <div><span className="text-primary">#</span>Home</div>
          <div><span className="text-primary">#</span>Works</div>
          <div><span className="text-primary">#</span>About-me</div>
          <div><span className="text-primary">#</span>Contacts</div>
          <div>
            <select className="bg-transparent text-white" name="lang" id="lang">
              <option value="EN">EN</option>
              <option value="HI">HI</option>
              <option value="SP">SP</option>
              <option value="AEN">AEN</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}