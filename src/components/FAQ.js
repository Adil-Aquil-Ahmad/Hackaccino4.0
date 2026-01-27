import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How big can the team be?",
      answer: "The maximum team size is 5 and minimum size is 2."
    },
    {
      question: "I am a school student or under 18 years, can I participate?",
      answer: "Yes, this hackacthon is open for all, however, if you are under 18, you need to bring your parent's consent with you."
    },
    {
      question: "Is there are registration/participation fees?",
      answer: "No, participation in this hackathon is free of cost."
    },
    {
      question: "Will we get travel reimbursement?",
      answer: "No, since we are a student run hackathon and runs on non profit, we won't to able to reimburse your travel."
    },
    {
      question: "How will we get shortlisted?",
      answer: "Based on the info provided in the registration form and a telephonic interview (if required), teams will be shortlisted for the hackathon."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-6 mb-12 text-center">
          <h2 className="text-5xl font-bold text-[#D1C7FF] font-sans">FAQ</h2>
          <p className="text-[#a3a3a3] text-xl">
            Everything you need to know about the hackathon.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'bg-white/[0.08]' : 'bg-white/[0.03]'
              }`}
            >
              <button 
                className="w-full p-6 flex justify-between items-center bg-transparent border-none text-white text-lg font-medium cursor-pointer text-left"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="flex items-center text-[#D1C7FF]">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 text-[#a3a3a3] leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#a3a3a3]">Still have questions? Email us at <a href="mailto:hackaccino@bennett.edu.in" className="text-[#D1C7FF] no-underline hover:underline">hackaccino@bennett.edu.in</a></p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
