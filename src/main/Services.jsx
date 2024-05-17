import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Services.css"; // Import your custom CSS file for Services component
import {
  Pagination,
  EffectCoverflow,
  EffectFlip,
  Navigation,
} from "swiper/modules";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperProgress, setSwiperProgress] = useState(0);

  const a = useRef(1);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    const progress = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
    setSwiperProgress(progress);
  };

  return (
    <div className="bg-[#F9F9FF] border-y border-[#E7DAED] lg:pb-[150px] md:pb-[70px] sm:pb-[80px] pb-[40px] relative mt-[90px] ">
      <p className="text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[25px] text-[20px]  md:font-[700] sm:font-[500] lg:leading-[55px] md:leading-[40px] sm:leading-[30px] lg:mt-[45px] md:mt-[35px] sm:mt-[25px] mt-[20px] font-inter text-center">
        Services we offer
      </p>

      {/* swiper-container */}
      <div className="coverflow-swiper mx-auto">
        <Swiper
          onSlideChange={handleSlideChange}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          // createElements = {true}
          // spaceBetween={40}
          breakpoints={{
            375: {
              // slidesPerView: 1,
              // spaceBetween: 5,
            },
            640: {
              // slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              // slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              // slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              // slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              // slidesPerView: "auto",
              spaceBetween: 40,
            },
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper xxl:max-w-[1920px] xl:max-w-[1250px] lg:max-w-[990px] md:max-w-[768px] sm:max-w-[316px] w-full h-auto lg:mt-[63px] max-w-[350px] "
        >
          {data.map((element, index) => (
            <SwiperSlide
              key={index}
              className={` div-bg rounded-[7px] xxl:max-w-[330px] xl:max-w-[380px] lg:max-w-[310px]   md:max-w-[253px] sm:max-w-[316px]   w-full lg:pl-[16px] md:pl-[12px] lg:py-[38.5px] lg:px-[16px] md:py-[20px] md:px-[20px] sm:py-[15px] sm:pl-[10px] py-6 px-4 ${
                activeIndex === index
                  ? " border border-[#C2447E] rounded-[7px] active-slide scale-110 mt-[39px] bg-gradient-to-br transform"
                  : " opacity-75"
              }`}
            >
              <div key={index} className={``}>
                <div className="slide-content">
                  <div className=" max-w-[58px] w-full h-[58px] border border-[#C2447E] rounded-full flex justify-center items-center">
                    <img src={element.img} alt="img" className="" />
                  </div>
                  <div>
                    <p
                      className={`lg:text-[20px] md:text-[16px] sm:text-[14px] text-[16px] mt-4 font-inter font-[600]  lg:leading-[27.3px] md:leading-[21px] lg:mt-[15px] sm:mt-[10px] ${
                        activeIndex === index ? " text-color" : ""
                      } `}
                    >
                      {element.title}
                    </p>
                    <p className="lg:mt-[20px] md:mt-[15px] sm:mt-[12px] mt-2 font-inter font-[400] lg:text-[14px] text-[14px] lg:leading-[22.68px]  leading-5 text-[#4A5568] max-w-[301px]">
                      {element.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pagination-area mt-6">
        <div className="swiper-pagination absolute lg:mb-[40px] mb-[10px]"></div>
      </div>
      {/* progressbar */}
      {/* <div className=" max-w-[1440px] mx-auto relative"> */}
      <div className=" prog-container sm:max-w-[164px] max-w-[115px] h-[3px] w-full  absolute lg:right-[181px] lg:bottom-[59px] sm:right-[30px] sm:bottom-[25px] bottom-[22.5px] right-2   flex items-center justify-center gap-[11px]">
        <span className="progress-left font-inter font-[500] sm:text-[16px] text-[12px] leading-[25px]">
          0{activeIndex + 1}
        </span>

        <div className="progressbar-container max-w-[111px] w-full h-[3px]">
          <div
            className="progressbar h-full"
            style={{ width: `${swiperProgress}%` }}
          ></div>
        </div>
        <span className="progress-right font-inter font-[500] sm:text-[16px] text-[12px] leading-[25px]">
          0{data.length - activeIndex}
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Services;

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
