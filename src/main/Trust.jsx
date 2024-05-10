import React, { useRef, useState } from "react";
import {
  ArrowBack,
  ArrowForward,
  Eclips,
  Line,
  Smartpath,
} from "../assets/Logos";
import "./Services.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

const Trust = () => {
  const swiperRefe = useRef(null);

  const goNext = () => {
    if (swiperRefe.current !== null && swiperRefe.current.swiper !== null) {
      swiperRefe.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    console.log("its clicked");
    if (swiperRefe.current !== null && swiperRefe.current.swiper !== null) {
      swiperRefe.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <div className=" relative">
        <div className=" absolute  z-[-1] md:top-[-185px] md:left-[105px] sm:top-[-135px] sm:left-[80px] left-[30px] top-[-118px]">
          <Eclips />
        </div>
        <div className=" md:ml-[105px] ml-4">
          <div className="xl:flex md:mt-[149px] sm:mt-[100px] mt-[80px] gap-[96px]">
            <div className=" text-area max-w-[535px] ">
              <Line />
              <p className=" lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#1A202C] lg:leading-[55px] md:leading-[40px] sm:leading-[35px] font-inter font-[400] mt-[20px]">
                Leading companies trust us
                <span className=" md:font-[700] font-[600]">
                  <br />
                  to develop software
                </span>
              </p>
              <p className=" md:text-[18px] sm:text-[16px] text-[12px] leading-[20px] md:leading-[36px] sm:leading-[26px] font-inter font-[400] text-[#718096] md:mt-[30px] sm:mt-[25px]">
                We <span className=" grad-text">add development capacity</span>{" "}
                to tech teams. Our value isn’t limited to building teams but is
                equally distributed across the project lifecycle. We are a
                custom software development company that guarantees the
                successful delivery of your project.
              </p>

              <div className=" flex gap-[15px] sm:mt-[51px] mt-[25px]">
                <p className=" text-[#57007B] md:text-[16px] sm:text-[14px] text-[12px] font-inter font-[500] leading-[25px]">
                  See more Informations
                </p>
                <ArrowForward color="#57007B" />
              </div>
            </div>
            <div className=" video-section relative sm:mt-4">
              <img
                src="images/about.png"
                alt=""
                className=" sm:max-w-[601px] max-w-[350px]"
              />
            </div>
          </div>
        </div>
        <div className=" xl:mt-[201px] lg:mt-[160px] md:mt-[130px] sm:mt-[100px] ml-[105px] sm:w-[412px]  ">
          <Line />
          <p className=" lg:text-[35px] md:text-[30px] sm:text-[25px] lg:leading-[55px] md:leading-[45px] sm:leading-[30px] font-inter font-[400] text-[#1A202C] mt-[20px]">
            Meet the People
            <span className=" md:font-[700] sm:font-[600]">
              <br />
              We are Working With
            </span>
          </p>
        </div>
        <div className=" flex gap-[22px] justify-end sm:mr-[81px] mb-[60px] mt-[30px]">
          <button
            className=" sm:py-[15.5px] sm:px-[15px] border-[2px] border-[#57007B] rounded-full"
            onClick={goPrev}
          >
            <ArrowBack />
          </button>
          <button
            className=" sm:py-[15.5px] sm:px-[15px] bg-[#57007B]  rounded-full"
            onClick={goNext}
          >
            <ArrowForward color="white" />
          </button>
        </div>

        <div className=" absolute right-[553px] bottom-[-95px] ">
          <Eclips />
        </div>
      </div>

      <div className=" example bg-[#F7F7FA] py-[60px] relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next", // Selector for your custom "Next" button
            prevEl: ".swiper-button-prev", // Selector for your custom "Previous" button
          }}
          // navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
          ref={swiperRefe}
          slidesPerView={6}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <img src="/images/smartpath.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/logo5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Logo-6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Logo-7.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/logo8.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/logo9.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Logo-6.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Trust;
