import React, { useState } from 'react';
import './FAQ.css';
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
    <section id="faq" className="section faq" style={{backgroundColor: 'black', color: 'white', padding: '5rem 1.5rem'}}>
      <div className="section-content" style={{maxWidth: '48rem', margin: '0 auto'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', textAlign: 'center'}}>
          <h2 className="section-title" style={{fontSize: '3rem', fontWeight: 'bold', color: '#D1C7FF', fontFamily: 'sans-serif'}}>FAQ</h2>
          <p className="faq-subtitle" style={{color: '#a3a3a3', fontSize: '1.25rem'}}>
            Everything you need to know about the hackathon.
          </p>
        </div>

        <div className="faq-container" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              style={{
                backgroundColor: activeIndex === index ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s'
              }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {faq.question}
                <span className="faq-icon" style={{color: '#D1C7FF', display: 'flex', alignItems: 'center'}}>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="faq-answer" style={{padding: '0 1.5rem 1.5rem 1.5rem', color: '#a3a3a3', lineHeight: '1.6'}}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact" style={{marginTop: '3rem', textAlign: 'center'}}>
          <p style={{color: '#a3a3a3'}}>Still have questions? Email us at <a href="mailto:hackaccino@bennett.edu.in" style={{color: '#D1C7FF', textDecoration: 'none'}}>hackaccino@bennett.edu.in</a></p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
