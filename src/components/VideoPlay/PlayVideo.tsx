"use client";

import { useEffect, useRef } from "react";

const PlayVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Autoplay failed:", err);
        });
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-[330px] h-[190px]">
      <video
        ref={videoRef}
        src={"/videos/video-sample.mp4"}
        muted
        playsInline
        loop={true}
        className="w-full h-auto"
      />
    </div>
  );
};

export default PlayVideo;
