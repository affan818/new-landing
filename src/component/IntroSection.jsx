import video from "../assets/video.mp4";
import Button from "./Button";

function IntroSection() {
  return (
    <div className="w-full h-auto sm:min-h-screen bg-gradient-to-t from-yellow-700 to-yellow-400 flex flex-col items-center justify-center gap-6 px-4 py-10">
      {/* Video */}
      <div className="w-full max-w-7xl px-2">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover rounded-xl shadow-xl max-h-[50vh] sm:max-h-[70vh]"
        />
      </div>
      <Button />
    </div>
  );
}

export default IntroSection;
