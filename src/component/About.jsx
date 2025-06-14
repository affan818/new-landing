import React from "react";
import Button from "./Button";
import { BsCheckCircle } from "react-icons/bs";
import TrustedClients from "./TrustedClients";

import ExtraCard from "./ExtraCard";
import TestimonialVideos from "./TestimonialVideos";
import FaqSection from "./FaqSection";
import { FaQ } from "react-icons/fa6";

function About() {
  const items = [
    "Physiotherapists & Chiropractors",
    "Psychologists and Psychiatrists",
    "Ayurvedic and Naturopathy",
    "Gynecologists & Fertility Clinics",
    "Dermatologists",
    "Ophthalmologists",
    "Nutritionists and Dietitians",
    "Plastic & Aesthetic Surgeons",
  ];

  const itemsTwo = [
    "card one",
    "card two",
    "card three",
    "card four",
    "card five",
    "card six",
    "card seven",
    "card eight",
    "card nine",
    "card tenth",
    "card eleventh",
    "card twelve",
  ];

  return (
    <div className="w-full h-auto bg-black text-white">
      <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 leading-relaxed font-extrabold pt-5">
        What you’ll discover after{" "}
        <span className="text-yellow-400">Booking a Call</span> with us?
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-10 py-10 bg-black">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[23%] bg-black rounded-xl p-[2px] transition-transform hover:scale-105"
          >
            <div
              className="h-full w-full rounded-xl bg-black p-6 border border-transparent"
              style={{
                border: "2px solid",
                borderImage: "linear-gradient(to right, #00FFB2, #00FFE0) 1",
              }}
            >
              <div className="flex justify-center mb-4">
                <BsCheckCircle
                  size={28}
                  className="text-[#00FFB2] flex-shrink-0 mt-1"
                />
              </div>
              <p className="text-white text-sm leading-relaxed text-center">
                Discover the proven marketing strategies that we have learnt and
                developed by working with successful clinics and hospitals that
                are generating 8-Figure revenues.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button />
      </div>
      <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-white   leading-relaxed font-extrabold pt-5">
        This Strategy Call is Exclusively For –
      </h1>
      <p className="text-xl sm:text-2xl text-center md:text-3xl lg:text-4xl text-yellow-400 mb-6 sm:mb-8 leading-relaxed">
        HEALTHCARE ENTREPRENEURS
      </p>
      <ExtraCard items={items} />

      <div className="flex justify-center">
        <Button />
      </div>

      <h1 className="text-xl text-center sm:text-4xl md:text-9xl lg:text-4xl text-white  leading-relaxed pt-5">
        Who We Are
      </h1>
      <div className="px-10 py-10 ">
        <p className="text-center pb-5">
          At Grow Medico, we are more than just a healthcare marketing agency;
          we are dreamers, innovators, and coffee enthusiasts on a mission to
          revolutionise the healthcare industry. With a cup of coffee and a
          heart full of passion, we embark on a journey to transform clinics and
          hospitals into thriving beacons of success.{" "}
        </p>
        <p className="text-center pb-5">
          Like master alchemists, we concoct value-driven marketing strategies
          that cater to every step of your patient’s journey. From the first sip
          of awareness to the final drop of loyalty, our magic blends
          seamlessly, ensuring an unforgettable experience for both you and your
          patients.
        </p>
        <p className="text-center pb-5">
          We started this agency with only 2 people, and within 1.5 years, we
          grew to a team of 20 with 2 offices in India, serving clients
          globally. Just like a symphony, our diverse team harmonises expertise,
          creativity, and empathy to create symphonies of success for our
          clients—all while enjoying cups of coffee that infuse our
          brainstorming sessions with inspiration and ideas.
        </p>
        <p className="text-center font-bold">
          So, grab your favourite coffee blend, and let’s dive into this
          exhilarating journey together! At Grow Medico, healthcare thrives, and
          coffee ignites our creative spirits. Our passion for value-driven
          marketing and love for coffee come together perfectly, making us your
          ideal growth partner. Let’s blend magic into your healthcare practice,
          sip by sip, as we brew success together. Cheers, to Grow Medico –
          where dreams come true, one cup of coffee at a time!
        </p>
      </div>
      <div className="flex justify-center pb-5">
        <Button />
      </div>
      <TrustedClients />
      <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-white   leading-relaxed font-extrabold pt-5">
        Our Clients’ Challenges: (That we’ve solved)
      </h1>
      <ExtraCard items={itemsTwo} />
      <TestimonialVideos />
      <FaqSection />
     
    </div>
  );
}

export default About;
