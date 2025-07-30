import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 👇  Add your logo imports / URLs here
import devprath from "../assets/clients/devprath.jpg";
import gandhi from "../assets/clients/gandhi.jpg";
import govardhan from "../assets/clients/govardhan.jpg";
import kukrejaOne from "../assets/clients/kukreja-2.jpg";
import kukreja from "../assets/clients/kukreja.jpg";
import mittal from "../assets/clients/mittal.jpg";
import nanik from "../assets/clients/nanik.jpg";
import navnirman from "../assets/clients/navnirman.jpg";
import pankaj from "../assets/clients/pankaj.jpg";
import prasanna from "../assets/clients/prasanna.jpg";
import shivganga from "../assets/clients/shivganga.jpg";

const logos = [
  kukrejaOne,
  kukreja,
  mittal,
  navnirman,
  pankaj,
  nanik,
  prasanna,
  shivganga,
  govardhan,
  gandhi,
  devprath,
];

export default function TrustedClients() {
  return (
    <section className="bg-black border-y-2 border-white py-12">
      <h2 className="text-center font-bold text-white text-3xl sm:text-5xl mb-10">
        Our trusted Clients
      </h2>

      <div className="relative pb-16">
        {" "}
        {/* Give enough space for pagination */}
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
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 custom-swiper"
        >
          {logos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center h-32 sm:h-40 md:h-48 lg:h-56">
                <img
                  src={src}
                  alt="Client Logo"
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
