import React from 'react';
import logo from "../image/illustration.jpg"
export default function Home() {
  return (
    <div className="">
      <section className="grid md:grid-cols-2 gap-8 items-center py-16">
     
        <div>
          <div className="md:text-5xl text-4xl font-bold flex flex-col gap-5 mb-6">
           <div className="">Navigating the</div><div className="">digital landscape</div><div className="">for success</div> 
          </div>
          <div className="flex justify-center items-center md:hidden">
          <img
            src={logo}
            alt="Digital marketing illustration"
            className="max-w-full h-auto"
          />
        </div>
          <p className="text-gray-600 text-lg mb-6 text-xl font-semi-bold">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">Book a consultation</button>
        </div>

       
        <div className="md:flex justify-center items-center hidden">
          <img
            src={logo}
            alt="Digital marketing illustration"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Brands Section */}
      <section className="flex md:justify-between flex-wrap gap-x-10 items-center">
  <img src="/amazo.png" alt="Amazon" className="md:h-9 h-6 filter grayscale" />
  <img src="/dribble.png" alt="Dribbble" className="md:h-9 h-6 filter grayscale" />
  <img src="/hubspot.png" alt="HubSpot" className="md:h-9 h-6 filter grayscale" />
  <img src="/notion.png" alt="Notion" className="md:h-9 h-6 filter grayscale" />
  <img src="/netflix.png" alt="Netflix" className="md:h-9 h-6 filter grayscale" />
  <img src="/zoom.png" alt="Zoom" className="md:h-9 h-6 filter grayscale" />
</section>
    </div>
  );
}
