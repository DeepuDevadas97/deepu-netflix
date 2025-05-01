"use client";
import Image from "next/image";
import PlayButton from "../PlayButton/PlayButton";
import MoreInfo from "../MoreInfo/MoreInfo";
import CategoryLabel from "../CategoryLabel/CategoryLabel";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Autoplay failed:", err);
        });
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <div className="w-full min-h-[56.25vw] bg-[#000] relative">
      <div className="absolute left-0 top-0 w-[50%] h-full bg-[linear-gradient(77deg,_rgba(0,0,0,0.6),_transparent_85%)]"></div>
      <div className="absolute w-full h-[14.7vw] left-0 bottom-0 bg-dark-gradient"></div>
      <div className="absolute right-0 bottom-[50%] sm:bottom-[34%] z-20">
        <CategoryLabel />
      </div>

      <div className="w-full h-[56.25vw] bg-[url('/images/banner-thumb.webp')] bg-cover bg-center bg-no-repeat banner-wrapper">
        <div
          className={`max-xl:hidden w-full h-full absolute top-[-100px] bottom-0 left-0 overflow-hidden transition-opacity duration-700 ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            src="/videos/dhoom-dham2.mp4"
            muted
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
            autoPlay
          />
        </div>

        <div className="container relative z-10">
          <div className="banner-left max-w-[320px] sm:max-w-[400px] lg:max-w-[504px] 2xl:max-w-[39%] pt-[114px] xl:pt-[134px]">
            <div className="banner-title w-full lg:h-[199px]">
              <Image
                src={"/images/movie-title.webp"}
                alt="movie_title"
                width={504}
                height={199}
                className="h-full w-full"
              />
            </div>

            <div
              className={`
                transition-all duration-500 ease-in-out max-xl:hidden 
                ${
                  !showVideo
                    ? "opacity-100 max-h-[400px] scale-100"
                    : "opacity-0 max-h-0 scale-95 overflow-hidden"
                }
                `}
            >
              <h1 className="text-white max-sm:text-[20px] text-[24px] my-[1vw] transition-colors duration-[1000ms] ease-[cubic-bezier(.165,.84,.44,1)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.45)] sm:line-clamp-1 max-sm:mt-2">
                Watch in Hindi, Tamil, Telugu, English
              </h1>
              <p className="text-white max-sm:text-[16px] text-[18px] font-light leading-[1.3] mt-[0.1vw] [text-shadow:2px_2px_4px_rgba(0,0,0,0.45)] line-clamp-3 max-sm:mt-2">
                She is feisty. He is shy. When they get married, unexpected
                chaos awaits their wedding night. Starring Yami Gautam Dhar and
                Pratik Gandhi.
              </p>
            </div>

            <div className="xl:hidden">
              <h1 className="text-white max-sm:text-[20px] text-[24px] my-[1vw] transition-colors duration-[1000ms] ease-[cubic-bezier(.165,.84,.44,1)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.45)] sm:line-clamp-1 max-sm:mt-2">
                Watch in Hindi, Tamil, Telugu, English
              </h1>
              <p className="text-white max-sm:text-[16px] text-[18px] font-light leading-[1.3] mt-[0.1vw] [text-shadow:2px_2px_4px_rgba(0,0,0,0.45)] line-clamp-3 max-sm:mt-2">
                She is feisty. He is shy. When they get married, unexpected
                chaos awaits their wedding night. Starring Yami Gautam Dhar and
                Pratik Gandhi.
              </p>
            </div>

            <div className="flex gap-x-3 mt-5">
              <PlayButton />
              <MoreInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
