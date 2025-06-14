import React from "react";

const videos = [
  {
    name: "Dr. Sapna & Jaisingh Gupta",
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
  },
  {
    name: "Dr. Amit",
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  },
  {
    name: "Dr. Dhruv",
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  },
  {
    name: "Dr. Jitesh",
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
  },
];

const TestimonialVideos = () => {
  return (
    <section className="bg-[#121212] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-10">
          STILL NOT CONVINCED?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
