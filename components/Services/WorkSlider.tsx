"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

// Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, itemIndex) => (
        <SwiperSlide key={itemIndex}>
          <div className="grid cursor-pointer grid-cols-2 grid-rows-2 gap-4">
            {item.images.map((image, index) => (
              <div
                key={index}
                className="group relative flex h-[200px] items-center justify-center overflow-hidden rounded-lg"
              >
                <div className="group relative flex items-center justify-center overflow-hidden">
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt="project"
                  />
                  {/* gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e848cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-hover:xl:-translate-y-24">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] transition-all duration-300 delay-150 group-hover:translate-y-0">
                        PROJECT
                      </div>
                      <div className="translate-y-[600%] text-xl transition-all duration-300 delay-200 group-hover:translate-y-0">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
