import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { PiStarFourThin } from "react-icons/pi";
export default function Footer() {
  return (
    <div className="w-full">
    <div className="bg-[#1a1a1a] text-white px-6 py-10 md:rounded-t-3xl">
     
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      
        <div className="flex gap-1 justify-center items-center">
         <PiStarFourThin className='text-xl'/>
        <div className="text-2xl font-bold">Positivus</div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-2 text-sm font-medium">
          <div className=''>About us</div>
          <div className=''>Services</div>
          <div className=''>Use Cases</div>
          <div className=''>Pricing</div>
          <div className=''>Blog</div>
        </div>

     
        <div className="hidden md:flex space-x-4 text-white">
          <a href="#"><FaLinkedinIn size={18} /></a>
          <a href="#"><FaFacebookF size={18} /></a>
          <a href="#"><FaTwitter size={18} /></a>
        </div>
      </div>

   
      <div className="md:mt-10 mt-5 flex flex-col md:flex-row justify-between gap-10 items-center">
     
        <div className="flex flex-col items-center md:items-start space-y-4">
          <span className="inline-block bg-[#B9FF66] text-black px-2 py-1 text-sm font-medium rounded-md w-fit">
            Contact us:
          </span>
          <p>Email: <a href="mailto:info@positivus.com" className="text-gray-300">info@positivus.com</a></p>
          <p>Phone: <a href="tel:5555678901" className="text-gray-300">555-567-8901</a></p>
          <address className="not-italic text-gray-400 text-center md:text-left">
            1234 Main St<br />
            Moonstone City, Stardust State 12345
          </address>
        </div>

      
        <div className="bg-[#2a2a2a] rounded-lg p-4 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-gray-400 px-4 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none w-full sm:w-auto"
          />
          <button className="bg-[#B9FF66] text-black font-semibold px-4 py-2 rounded-md">
            Subscribe to news
          </button>
        </div>
        <div className="md:hidden flex space-x-4 text-white">
          <a href="#"><FaLinkedinIn size={18} /></a>
          <a href="#"><FaFacebookF size={18} /></a>
          <a href="#"><FaTwitter size={18} /></a>
        </div>
      </div>

  
      <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="underline mt-2 md:mt-0">Privacy Policy</a>
      </div>
    </div>
    </div>
  );
}
