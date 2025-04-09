import React from 'react';
import Home from './component/Home';
import Services from './component/Services';
import WorkingProcess from './component/WorkingProcess';
import Testimonials from './component/Testimonials';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

export default function App() {
  return (
   <div className='flex justify-center '>
    <div className='md:w-[82%] w-full px-4 md:px-0'>
      <Navbar/>
     <Home/>
     <Services/>
     <WorkingProcess/>
     <Testimonials/>
     <Footer/>
    </div>
   
     
   </div>
  );
}
