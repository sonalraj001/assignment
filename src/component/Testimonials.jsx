import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    title: 'Marketing Director at XYZ Corp',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'Jane Doe',
    title: 'Head of Marketing at ABC Inc.',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'Michael Lee',
    title: 'Co-Founder at StartupX',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'Michael Lee',
    title: 'Co-Founder at StartupX',
  },
  {
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'Michael Lee',
    title: 'Co-Founder at StartupX',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className=" py-16 bg-white">
      <div className=" flex md:flex-row flex-col gap-x-8 items-center mb-10">
        <h2 className="text-3xl font-bold inline-block bg-[#B9FF66] px-2 py-1 rounded-md text-black">
          Testimonials
        </h2>
        <p className="text-gray-600 mt-2 text-md text-center md:text-left">
          Hear from our satisfied clients: Read our testimonials to learn more about our digital marketing services.
        </p>
      </div>

      <div className="bg-[#1a1a1a] text-white rounded-[2rem] md:p-8 p-4 relative overflow-hidden md:h-[60vh]">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="md:min-w-[70%] min-w-full px-4 md:px-10"
            >
              <div className="">
                <div className="border border-[#B9FF66] rounded-2xl p-6 relative text-gray-100 custom-bubble">
                <p className="mb-6 text-sm md:text-xl">"{item.quote}"</p>
                </div>
                <div className="mt-5 ml-5">
                <div className="text-[#B9FF66] font-bold">{item.name}</div>
                <div className="text-sm text-gray-400">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

     
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button onClick={handlePrev}>
            <ArrowLeft className="text-white w-5 h-5" />
          </button>
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === activeIndex ? 'bg-lime-400' : 'bg-white'
              }`}
            />
          ))}
          <button onClick={handleNext}>
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
