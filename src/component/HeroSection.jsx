import React from "react";
import Button from "./Button";

function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-black text-center px-4 py-10">
      {/* Main Text */}
      <div className="max-w-5xl">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 p-2 sm:p-4 leading-snug">
          Get More<span className="text-yellow-400">Leads,</span>Increase{" "}
          <span className="text-yellow-400">Sales,</span>
          and Stand Out <span className="text-yellow-400">
            From the Crowd
          </span>{" "}
          Get
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 leading-relaxed">
          360° tailor-fitted Digital Marketing & Branding solution for your
          business
        </p>
      </div>
      {/* Button */}
      <Button btnTxt={"Schedule your call now"} />
    </section>
  );
}

export default HeroSection;
