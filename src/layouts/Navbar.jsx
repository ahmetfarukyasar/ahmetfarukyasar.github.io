import React, { useState } from "react";
import { Link } from "react-scroll";
import { Contact, Home, Info, Package, Menu, X, Code, CodeXml } from "lucide-react";
import logo from '../assets/Ahmet.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  const link =
    "cursor-pointer p-2 flex flex-row items-center gap-2 font-medium transition relative group";

  return (
    <nav className="sticky top-0 z-50 bg-[#D7D9CE] shadow-md">
      <div className="flex flex-row items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src={logo} alt="" className="w-60 pointer-events-none"/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-8 text-[#040404]">
          <Link to="welcome" smooth={true} duration={600} offset={-80} className={link}>
            <Home size={20} />
            <li>Home</li>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#040404] group-hover:w-full transition-all"></span>
          </Link>
          <Link to="about" smooth={true} duration={600} offset={-80} className={link}>
            <Info size={20} />
            <li>About</li>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#040404] group-hover:w-full transition-all"></span>
          </Link>
          <Link to="projects" smooth={true} duration={600} offset={-80} className={link}>
            <Package size={20} />
            <li>Projects</li>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#040404] group-hover:w-full transition-all"></span>
          </Link>
          <Link to="contact" smooth={true} duration={600} offset={-80} className={link}>
            <Contact size={20} />
            <li>Contact</li>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#040404] group-hover:w-full transition-all"></span>
          </Link>
        </ul>

        {/* Resume Button */}
        <a href="https://www.github.com" className="hidden md:block py-3 px-4 bg-[#040404] text-[#D7D9CE] rounded-xl hover:scale-105 transition cursor-pointer">
          <CodeXml />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#040404]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-6 items-center bg-[#D7D9CE] py-6 md:hidden text-[#040404]">
          <Link to="welcome" smooth={true} duration={600} offset={-80} onClick={() => setOpen(false)} className={link}>
            <Home size={20} /> Home
          </Link>
          <Link to="about" smooth={true} duration={600} offset={-80} onClick={() => setOpen(false)} className={link}>
            <Info size={20} /> About
          </Link>
          <Link to="projects" smooth={true} duration={600} offset={-80} onClick={() => setOpen(false)} className={link}>
            <Package size={20} /> Projects
          </Link>
          <Link to="contact" smooth={true} duration={600} offset={-80} onClick={() => setOpen(false)} className={link}>
            <Contact size={20} /> Contact
          </Link>
          <a href="https://github.com/ahmetfarukyasar/ahmetfarukyasar.github.io" className="py-3 px-6 bg-[#040404] text-[#D7D9CE] rounded-xl hover:scale-105 transition">
            <CodeXml />
          </a>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
