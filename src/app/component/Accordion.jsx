"use client"

import { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b">
      <button
        className="flex justify-between w-full p-4 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
        onClick={onToggle}>
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : ''
            }`}
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;