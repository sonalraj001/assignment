import React from 'react';
import { MdArrowOutward } from "react-icons/md";
export default function Services() {
  return (
    <div className="">
      <section className=" py-16">
        <div className=" flex flex-col md:flex-row md:gap-10 gap-3 mb-10">
      <div className="text-3xl font-bold inline-block bg-lime-300 px-2 py-2 rounded-md text-black text-center">
          Services
        </div>
        <p className="text-gray-700 max-w-xl text-center md:text-left">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
        </div>

        <div className="flex md:flex-row flex-col gap-6">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[200px]">
            <div className="flex flex-col md:flex-row">
            <div className="text-xl font-bold p-1">
              <span className="bg-[#B9FF66] px-2 py-1 rounded">Search engine optimization</span>
            </div>
           
              <img src="https://ouch-prod-var-cdn.icons8.com/sq/illustrations/thumbs/0iCHQPDwPCgFGaWU.webp" alt="SEO Illustration" className="h-[250px]" />
      
            </div>
            <div className="flex gap-2">
              <div className="h-[2rem] w-[2rem] rounded-full bg-black flex justify-center items-center">

              <MdArrowOutward className='text-lime-400 text-xl'/>  
              </div>
              <span className="md:flex items-center text-black font-medium hidden">
                Learn more
              </span>
            </div>
          </div>

          <div className="bg-[#B9FF66] p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[200px]">
            <div className="flex flex-col md:flex-row">
            <div className="text-xl font-bold p-1">
              <span className="bg-gray-100 px-2 py-1 rounded">Search engine optimization</span>
            </div>
            
              <img src="https://ouch-prod-var-cdn.icons8.com/xh/illustrations/thumbs/mdCVe-PSnnrZ5wym.webp" alt="SEO Illustration" className="h-[250px]" />
              </div>
            <div className="flex gap-2">
              <div className="h-[2rem] w-[2rem] rounded-full bg-black flex justify-center items-center">

              <MdArrowOutward className='text-lime-400 text-xl'/>  
              </div>
              <span className="md:flex items-center text-black font-medium hidden">
                Learn more
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
