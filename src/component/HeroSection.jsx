import React from "react";
import Button from "./Button";

function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-black text-center px-4 py-10">
      {/* Main Text */}
      <div className="max-w-5xl">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 p-2 sm:p-4 leading-snug">
          Get <span className="text-yellow-400">new patients</span>, improve{" "}
          <span className="text-yellow-400">case acceptance</span>, and patient
          retention & <span className="text-yellow-400">Grow Referrals</span> in
          90-Days
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 leading-relaxed">
          Value-Driven Marketing For Clinics & Hospitals
        </p>
      </div>

      {/* Button */}

      <Button />
    </section>
  );
}

export default HeroSection;
