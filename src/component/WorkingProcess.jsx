import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    content:
      'We dive deep into market research, competitor analysis, and trend evaluation to build a data-driven strategy that’s right for your brand.',
  },
  // Add more steps as needed
];

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-12 w-full">
      <div className=" flex flex-col md:flex-row md:gap-10 gap-3 mb-10 items-center">
      <span className="md:text-3xl text-2xl font-bold bg-[#B9FF66] px-2 py-1 rounded text-black text-center">
         Our Working Process
      </span>
        <p className="text-gray-600 text-md text-center md:text-left">
          Step-by-step guide to achieving your business goals
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`md:rounded-3xl p-6 shadow-md border ${
                isOpen ? 'bg-[#B9FF66] text-black rounded-3xl' : 'bg-gray-100 rounded-full'
              }`}
            >
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleIndex(index)}>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-extrabold">{step.number}</span>
                  <span className="md:text-xl font-semibold">{step.title}</span>
                </div>
                <div className="p-2 border rounded-full">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </div>

              {isOpen && (
                <div className="mt-4 border-t pt-4 text-sm text-gray-800">
                  {step.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
