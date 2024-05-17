import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const MainSwiper = () => {
  return (
    <>
      <div className=" max-w-[1440px] mx-auto over-the-top w-full bg-gray-300">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-[50vh] bg-green-500 p-0"
        >
         <div className=" w-[1440px] bg-blue-500 mt-10">
         {data.map((e, i) => {
            return (
              <>
                <div className=" w-[180px]">
                  <SwiperSlide
                    key={i}
                    className=" bg-gray-400 h-[300px] mt-[40px] "
                  >
                    <img src={e.img} alt="" />
                    <p>{i}</p>
                    <p>{e.title}</p>
                  </SwiperSlide>
                </div>
              </>
            );
          })}
         </div>
        </Swiper>
      </div>
    </>
  );
};

export default MainSwiper;

const data = [
  {
    title: "Web Design & Development",
    img: "/images/code.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },

  {
    title: "Software Testing Services",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Software Testing Services",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/dashboard.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/dashboard.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];
