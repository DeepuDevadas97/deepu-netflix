"use client";

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import PrevIcon from "../../../public/icons/PrevIcon";
import NextIcon from "../../../public/icons/NextIcon";
import Image from "next/image";
import NetflixIcon from "../../../public/icons/NetflixIcon";
import PlayIcon from "../../../public/icons/PlayIcon";
import AddIcon from "../../../public/icons/AddIcon";
import ThumbIcon from "../../../public/icons/ThumbIcon";
import DownIcon from "../../../public/icons/DownIcon";
import PlayVideo from "../VideoPlay/PlayVideo";
import PublishBadge from "../PublishBadge/PublishBadge";
import { Swiper as SwiperType } from "swiper";

const API_KEY = "88e2f94415a2e12bd04570b917a425b5";
const BASE_URL = "https://api.themoviedb.org/3";


type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
};


const SliderMain = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activePopoverIndex, setActivePopoverIndex] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef(null);

  const [showPrev, setShowPrev] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setShowPrev(true);
    }
    setTrigger(true);
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const [visibleVideoIndex, setVisibleVideoIndex] = useState(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (activePopoverIndex !== null) {
      timeout = setTimeout(() => {
        setVisibleVideoIndex(activePopoverIndex);
      }, 400);
    } else {
      setVisibleVideoIndex(null);
    }

    return () => clearTimeout(timeout);
  }, [activePopoverIndex]);

  return (
    <div className="w-full relative">
      <div className="container flex justify-between items-end !mb-4">
        <h3 className="text-[14px] sm:text-[21px] sm:leading-[28px] text-textColor font-normal">
          We Think You’ll Love These
        </h3>
        <div
          ref={paginationRef}
          className="flex justify-end pagination-container !w-fit"
        ></div>
      </div>

      <div className="h-[130px] w-full relative slider-container">
        {showPrev && (
          <button
            ref={prevRef}
            onClick={handlePrevClick}
            className="flex justify-center items-center absolute h-full w-[42px] sm:w-[56px] top-0 left-0 z-20 slider-btn cursor-pointer"
          >
            <PrevIcon />
          </button>
        )}

        <button
          ref={nextRef}
          onClick={handleNextClick}
          className="flex justify-center items-center absolute h-full w-[42px] sm:w-[56px] top-0 right-0 z-20 slider-btn cursor-pointer"
        >
          <NextIcon />
        </button>

        <div
          className={`${
            trigger
              ? "absolute left-0 w-[6%] h-full bg-gradient-to-r from-[#000000b3] to-transparent z-10"
              : ""
          }`}
        ></div>
        <div className="absolute right-0 w-[6%] h-full bg-gradient-to-l from-[#000000b3] to-transparent z-10"></div>

        <div className="h-full group relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={6}
            speed={500}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            // onBeforeInit={(swiper) => {
            //   swiper.params.pagination.el = paginationRef.current;
            // }}
            onBeforeInit={(swiper) => {
              const pagination = swiper.params.pagination;
            
              if (pagination && typeof pagination !== "boolean") {
                pagination.el = paginationRef.current;
              }
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              1086: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              1286: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {movies.map((movie, i) => (
              <SwiperSlide
                key={movie.id}
                className={`relative duration-500 group ${
                  i === 0 && !trigger ? "ml-4 sm:ml-[4%]" : ""
                }`}
                onMouseEnter={() => setActivePopoverIndex(i)}
                onMouseLeave={() => setActivePopoverIndex(null)}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  alt={movie.title}
                  width={300}
                  height={180}
                  className="rounded-md object-cover w-full h-[180px] cursor-pointer"
                />
                <div className="w-[16px] h-[20px] absolute left-[6px] top-[10px]">
                  <NetflixIcon />
                </div>
                <div className="absolute bottom-0">
                  <PublishBadge />
                </div>

                <div
                  id="popover-description"
                  role="tooltip"
                  className={`absolute z-[10000] transition-all duration-300 ease-out transform pt-[25px] ${
                    activePopoverIndex === i
                      ? "visible opacity-100 scale-100"
                      : "invisible opacity-0 scale-[0.75]"
                  } w-[330px] h-[380px]`}
                >
                  <div className="text-sm bg-[#181818] w-full h-full relative rounded-[8px] overflow-hidden popover-content">
                    <div className="w-[24px] h-[28px] absolute left-[6px] top-[10px] z-20">
                      <NetflixIcon />
                    </div>

                    <div className="w-full h-[190px] relative overflow-hidden">
                      <Image
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                        width={330}
                        height={190}
                        alt={movie.title}
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                          visibleVideoIndex === i ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      <div
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                          visibleVideoIndex === i
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <PlayVideo />
                      </div>
                    </div>

                    <div className="bg-[#181818] w-full h-full p-5 text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                          <button className="w-[36px] h-[36px] bg-white rounded-full flex justify-center items-center  cursor-pointer hover:brightness-75 duration-300">
                            <div className="w-[18px] h-[18px]">
                              <PlayIcon />
                            </div>
                          </button>
                          <button className="w-[36px] h-[36px] rounded-full cursor-pointer border-2 border-gray-400 flex justify-center items-center hover:border-white hover:bg-[#2c2b2b] duration-300">
                            <div className="w-[18px] h-[18px]">
                              <AddIcon />
                            </div>
                          </button>
                          <button className="w-[36px] h-[36px] rounded-full cursor-pointer border-2 border-gray-400 flex justify-center items-center hover:border-white hover:bg-[#2c2b2b] duration-300">
                            <div className="w-[18px] h-[18px]">
                              <ThumbIcon />
                            </div>
                          </button>
                        </div>
                        <button className="w-[36px] h-[36px] rounded-full cursor-pointer border-2 border-gray-400 flex justify-center items-center hover:border-white hover:bg-[#2c2b2b] duration-300">
                          <div className="w-[18px] h-[18px]">
                            <DownIcon />
                          </div>
                        </button>
                      </div>
                      <div className="categoty-indicator flex items-center gap-x-2 mt-4">
                        <div className="uppercase text-[#bcbcbc] px-[6px] py-[2px] border border-[#bcbcbc] text-[16px] font-normal">
                          U/A 13+
                        </div>
                        <span className="text-[16px] text-[#bcbcbc] font-normal">
                          2h 29m
                        </span>
                      </div>
                      <p className="mt-4 line-clamp-1 text-white text-[16px]">
                        Nostalgic
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderMain;
