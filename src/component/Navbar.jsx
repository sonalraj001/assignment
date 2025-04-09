import React, { useState } from 'react';
import { Menu, X } from 'react-feather'; // you can use any icon lib like react-icons too
import { PiStarFourFill } from "react-icons/pi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <nav className="flex items-center justify-between py-4 bg-white">
        <div className=" flex gap-1 justify-center items-center">
        <PiStarFourFill className='text-xl'/>
        <div className="text-2xl font-bold text-black">Positivus</div>
        </div>
        {/* Logo */}
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>About us</li>
          <li>Services</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block border border-black px-4 py-2 rounded-xl font-medium">
          Request a quote
        </button>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white space-y-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <button className="w-full border border-black px-4 py-2 rounded-full font-medium">
            Request a quote
          </button>
        </div>
      )}
    </div>
  );
}

