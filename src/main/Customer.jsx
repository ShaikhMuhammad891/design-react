import React, { useRef, useState } from "react";
import {
  ArrowBack,
  ArrowForward,
  Line,
  QuoteEnd,
  QuoteStart,
} from "../assets/Logos";
import "./Services.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Customer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const SlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    console.log("its clicked");
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <div className=" max-w-[1280px] relative mx-auto pb-[80px]">
        <div className=" flex justify-between absolute md:inset-0 md:h-fit md:my-auto mt-[-300px] mb:inset-0">
          <button className="" onClick={goPrev}>
            <ArrowBack />
          </button>
          <button className="" onClick={goNext}>
            <ArrowForward color="red" />
          </button>
        </div>
        <div className=" lg:mt-[124px] md:mt-[80px] sm:mt-[60px] mt-[40px] flex justify-center">
          <Line />
        </div>
        <p className=" md:mt-[200px] sm:mt-[15px] mt-[12px] text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[25px] text-[20px] lg:leading-[55px] md:leading-[45px] sm:leading-[35px] font-inter font-[400] text-center">
          Why cutomers love
          <span className=" md:font-[700] font-[600]">
            <br />
            working with us
          </span>
        </p>

        <div className=" lg:mt-[63px] md:mt-[45px]  lg:max-w-[727px] md:max-w-[650px] sm:max-w-[550px] mx-auto relative">
          <div className=" absolute top-1 left-1">
            <QuoteStart />
          </div>

          <p className=" text-center text-[#718096] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] lg:leading-[36px] md:leading-[26px] sm:leading-[20px] sm:mt-[20px] md:mt-[30px]  sm:font-[400] font-[300] mt-[15px] font-inter md:max-w-[535px] sm:max-w-[480px] max-w-[310px]  mx-auto">
            Without any doubt I recommend Alcaline Solutions as one of the best
            web design and digital marketing agencies. One of the best agencies
            I’ve came across so far. Wouldn’t be hesitated to introduce their
            work to someone else.
          </p>
          <div className=" absolute  right-1 bottom-1">
            <QuoteEnd />
          </div>
        </div>
        {/* <div className=" flex justify-center items-center lg:gap-[76px] md:gap-[60px] sm:gap-[50px] gap-[10px] md:mt-[70px] sm:mt-[55px] lg:mb-[140px] md:mb-[110px] sm:mb-[80px] overflow-x-scroll example"> */}
        <Swiper
          onSlideChange={SlideChange}
          navigation={{
            nextEl: ".swiper-button-next", // Selector for your custom "Next" button
            prevEl: ".swiper-button-prev", // Selector for your custom "Previous" button
          }}
          // navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper pb-4"
          centeredSlides={true}
          ref={swiperRef}
          breakpoints={{
            375: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {data.map((e, i) => (
            <>
              <SwiperSlide className="">
                <div
                  key={i}
                  className={`${
                    activeIndex === i
                      ? " opacity-100 transform scale-110 min-w-[158px] "
                      : " opacity-60 "
                  }`}
                >
                  <div className=" flex justify-center items-center">
                    <img
                      src={e.img}
                      alt=""
                      className=" sm:w-[85px] sm:h-[85px] w-[65px] h-[65px] "
                    />
                  </div>
                  <div className=" flex items-center justify-center  md:mt-[15px] sm:mt-[10px] mt-[5px] gap-[1px]">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={e.rating}
                        alt=""
                        className=" md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] max-w-[20px] max-h-[20px]"
                      />
                    ))}
                  </div>

                  <p
                    className={` ${
                      activeIndex === i
                        ? " text-[#57007B] md:mt-[15px] sm:mt-[10px] mt-[8px] md:text-[18px] sm:text-[16px] text-[10px] text-center font-inter font-[700] leading-[21.78px]"
                        : "  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[8px] leading-[25px] font-inter font-[500] text-center text-[#A0AEC0] md:mt-[15px] sm:mt-[10px] mt-[8px]"
                    }`}
                  >
                    {e.name}
                  </p>
                  <p
                    className={`${
                      activeIndex === i
                        ? " font-inter sm:font-[400] font-[300] text-black md:text-[12px] sm:text-[11px ] text-[9px] text-center"
                        : "font-inter sm:font-[400] font-[300] md:text-[11px] sm:text-[10px] text-[8px] text-[#E2E8F0] text-center"
                    }`}
                  >
                    {e.shop}
                  </p>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        {/* </div> */}
        <div className="  w-full mx-auto sm:flex justify-center hidden sm:block">
          <div className=" sm:flex justify-between absolute max-w-[1063px] w-full">
            <div>
              <img
                src="/images/deco-up.png"
                alt=""
                className=" sm:w-[200px] sm:h-[200px]"
              />
            </div>
            <div>
              <img
                src="/images/deco-down.png"
                alt=""
                className=" sm:w-[200px] sm:h-[200px]"
              />
            </div>
          </div>
        </div>

        {/* <div className=" flex items-center justify-center">
          {data.map((e, i) => (
            <>
              <div key={i} className={``}>
                <p
                  className={`text-center text-[#718096] text-[18px] leading-[36px]  font-[400] font-inter max-w-[535px] mx-auto ${
                    i === 1 ? "" : " hidden"
                  }`}
                >
                  {e.feedback}
                </p>
                <div className=" flex justify-center items-center">
                  <img src={e.img} alt="pic" className="" />
                </div>
              </div>
            </>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Customer;

const data = [
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
];
