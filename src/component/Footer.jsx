import React from "react";

function Footer() {
  return (
    <div className="w-full h-auto bg-black py-8 px-4 md:px-20 flex flex-col items-center text-center space-y-4">
      <p className="text-amber-50 text-base md:text-lg leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        deleniti ipsa quibusdam pariatur magni fugit quos nisi veniam. Ipsam
        unde cum assumenda libero, vero accusantium, nostrum dolore adipisci
        impedit aut quaerat quibusdam soluta illo corrupti nemo aspernatur
        maiores, neque laboriosam dicta! Incidunt id neque in nam vitae unde
        tempore consectetur.
      </p>
      <p className="text-amber-50 text-sm md:text-base">
        &copy; 2023 Design and Developed by{" "}
        <a
          href="https://mediaforumdigital.com/"
          className="text-yellow-500 hover:underline"
        >
          Mediaforum Digital
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
