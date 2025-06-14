import React from "react";
import { BsCheckCircle } from "react-icons/bs";
function ExtraCard({ items }) {
  return (
    <div className="bg-black py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {items.map((title, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-5 rounded-xl border border-transparent shadow-lg bg-black text-white hover:scale-105 transition-transform"
            style={{
              border: "2px solid",
              borderRadius: "10px",
              borderImage: "linear-gradient(to right, #d15c08, #dbc602) 1",
              boxShadow: "0 0 15px rgba(209, 92, 8, 0.4)",
            }}
          >
            <BsCheckCircle
              size={28}
              className="text-[#00FFB2] flex-shrink-0 mt-1"
            />
            <p className="text-md font-medium leading-snug">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtraCard;
