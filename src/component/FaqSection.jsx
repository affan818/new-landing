import React, { useRef, useState, useEffect } from "react";

const faqItems = [
  {
    question:
      "What makes Mediaforum stand out from other digital marketing companies?",
    answer:
      "We don’t just create ads or websites — we build digital systems and holistic platforms to help drive your business forward. All of our work is strategy-first and ROI-driven.",
  },
  {
    question: "Can I  subscribe to services on an à la carte basis?",
    answer:
      "Absolutely. Whether you need SEO, branding, or a full 360° strategy, we have you covered.",
  },
  {
    question: "Do you offer reporting and analytics?",
    answer:
      "Yes. Our guiding principle is transparency. You'll get performance reports with real-time tracking and actionable insights.",
  },
  {
    question: "How much ROI can I expect?",
    answer:
      "That depends on what you’re trying to accomplish, which industry you’re in, and how much you’re willing to invest, but our clients generally start seeing results within 60-90 days.",
  },
  {
    question: "Do you also do content creation?",
    answer:
      "Yes. Videos, graphics, blog writing, reels – everything you need from our in-house team!",
  },
  {
    question:
      "Do you only work with big brands, or do you also work with local businesses?",
    answer:
      "Both. Whether we’re a homegrown chase or you’re scaling to new heights, our team customizes solutions for your stage and size.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-16 px-4">
      <h2 className="text-center text-6xl font-extrabold pb-10">
        Frequently Asked Questions
      </h2>
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
