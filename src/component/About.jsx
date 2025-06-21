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
    "Local & Regional Businesses",
    "Real Estate Agencies",
    "Education Institutes and EdTech Brands",
    "E-commerce Startups",
    "Healthcare & Wellness Brands",
    "Hospitality & Food Businesses",
    "Fashion & Lifestyle Labels",
    "Service-Based Entrepreneurs",
  ];

  const itemsTwo = [
    "No steady flow of leads",
    "Low social media activity",
    "Lack of digital marketing strategy",
    "Inconsistent brand messaging",
    "Website speed performance and UX are missing.",
    "Failure to build brand trust",
    "Confusing customer journeys",
    "Low conversion rates",
    "Struggling with ad & analytics orchestration",
  ];
  const cardText = [
    "Find the battle-tested marketing and branding know-how that we‘ve honed from working with fast-growing startups, brands, and SMEs throughout India and beyond.",
    "Discover the power of personalised messaging, full-funnel marketing, automation, and targeted ads to increase your pipeline and convert talks into sales.",
    "Create an impactful online image that makes you unique, stands out, and demonstrates value, with branding, reputation management, and content storytelling.",
    "Discover how to add new levels of visibility, trust, and community building to your brand based on strategies designed for rapid, sustainable business growth.",
    "Learn the systems and tactics that enable you to scale and exceed your revenue goals, and grow your business with customer lifetime value in mind.",
  ];
  return (
    <div className="w-full h-auto bg-black text-white">
      <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 leading-relaxed font-extrabold pt-5">
        What Will You Learn{" "}
        <span className="text-yellow-400">After You Schedule a Call</span> With
        Us?
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-10 py-10 bg-black">
        {cardText.map((text, index) => (
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

              <p className="text-white text-sm text-justify md:text-center leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button btnTxt="Reserve Your Call Now" />
      </div>
      <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-white   leading-relaxed font-extrabold pt-5">
        This Call Is For
      </h1>
      <p className="text-xl sm:text-2xl text-center md:text-3xl lg:text-4xl text-yellow-400 mb-6 sm:mb-8 leading-relaxed">
        Let’s Plan Your Digital Growth
      </p>
      <ExtraCard items={items} />

      <div className="flex justify-center">
        <Button
          btnTxt=" Schedule a Call Now
"
        />
      </div>

      <h1 className="text-xl text-center sm:text-4xl md:text-9xl lg:text-4xl text-white  leading-relaxed pt-5">
        Who Are We?
      </h1>
      <div className="px-10 py-10 ">
        <p className="text-justify md:text-center pb-5">
          Here at Mediaforum, we are much more than a digital marketing agency;
          we are storytellers, strategists, and growth partners with a single
          aspiration: to make brands impossible to ignore. Based in Nagpur, we
          began as a two-member creative team with immense dreams. Today, we are
          a 20+ member-strong force, serving clients who do business across
          India, enabling businesses to excel in a digital-first world. We
          specialize in everything from performance marketing and SEO to
          branding, website design, and influencer campaigns. We are invested in
          design, addicted to performance, and obsessed with growth. Whether
          you’re getting ready to launch a new brand or help scale a current
          one, we’ve got the perfect recipe of data, creativity, and strategy to
          bring it to life We strive to create a lasting legacy with every
          campaign and brand we help build. For us, growth is not only a numbers
          game; it’s about creating legacies.
        </p>
      </div>
      <div className="flex justify-center pb-5">
        <Button btnTxt="Let’s discuss growth and get it done." />
      </div>
      <TrustedClients />
      <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-white   leading-relaxed font-extrabold pt-5">
        Challenges (That We’ve Solved)
      </h1>
      <ExtraCard items={itemsTwo} gridClass={"lg:grid-cols-3"} />
      <p className="text-xl sm:text-2xl text-center md:text-3xl lg:text-4xl mb-6 sm:mb-8 leading-relaxed">
        We have fixed every single one of these, and we are ready to fix yours
        as well.
      </p>
      <TestimonialVideos />
      <FaqSection />
    </div>
  );
}

export default About;
