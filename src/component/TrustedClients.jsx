import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 👇  Add your logo imports / URLs here
import arisiaLogo from "../assets/favicon.jpg";
import abdulLogo from "../assets/favicon.jpg";
import alphaLogo from "../assets/favicon.jpg";
import stellarLogo from "../assets/favicon.jpg";
import dnaLogo from "../assets/favicon.jpg";
import logo2 from "../assets/favicon.jpg";
import logo3 from "../assets/favicon.jpg";
import logo4 from "../assets/favicon.jpg";

const logos = [
  arisiaLogo,
  abdulLogo,
  alphaLogo,
  stellarLogo,
  dnaLogo,
  logo2,
  logo3,
  logo4,
];

export default function TrustedClients() {
  return (
    <section className="bg-black border-y-2 border-white py-12">
      <h2 className="text-center font-bold text-white text-3xl sm:text-5xl mb-10">
        Our trusted Clients
      </h2>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={20}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {logos.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center items-center h-20 sm:h-24 ">
              <img
                src={src}
                alt="Client Logo"
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition pb-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
