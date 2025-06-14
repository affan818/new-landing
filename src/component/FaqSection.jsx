import React, { useRef, useState, useEffect } from "react";

const faqItems = [
  {
    question: "How is your agency different from other marketing agencies?",
    answer:
      "At our marketing agency, we set ourselves apart by only working with clients in the healthcare sector. We believe that this focus allows us to provide our clients with the best results possible. Additionally, we don’t believe in simply running social media and Google ads to generate leads. Instead, we focus on building a marketing system that will generate sales. By only working with a limited number of clients, we are able to maintain a focus on quality over quantity.",
  },
  {
    question: "Can you guys also help in Case Acceptance?",
    answer:
      "Yes, we help with case acceptance by training your staff and improving communication workflows to increase acceptance rates.",
  },
  {
    question: "Do you offer services that can be chosen individually?",
    answer:
      "Yes, you can choose services individually depending on your business needs.",
  },
  {
    question: "How much of an ROI can I expect?",
    answer:
      "ROI varies based on service and location, but we aim for a significant return through strategic marketing.",
  },
  {
    question: "Will you call the leads as well?",
    answer:
      "Yes, we have lead nurturing systems in place, including follow-up calling if needed.",
  },
  {
    question: "Do you guys Sell Courses or Mentorship?",
    answer:
      "Yes, we offer optional mentorship programs and courses tailored to your business model.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-16 px-4">
      <h2 className="text-center text-6xl font-extrabold pb-10">Frequently asked questions?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#0E0E0E] cursor-pointer transition-all duration-300 ease-in-out"
            >
              <div
                onClick={() => toggleIndex(index)}
                className="flex justify-between items-center px-6 py-5 text-white font-semibold text-lg"
              >
                <h3>{item.question}</h3>
                <span
                  className={`text-yellow-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▸
                </span>
              </div>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 text-white text-sm leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
