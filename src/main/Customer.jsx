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
  const [isClickedNext, setIsClickedNext] = useState(false);
  const [isClickedPrev, setIsClickedPrev] = useState(false);

  const SlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const swiperRef = useRef(null);

  const goNext = (event) => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
    event.stopPropagation();

    setIsClickedNext(true);
    setIsClickedPrev(false);
  };

  const goPrev = (event) => {
    console.log("its clicked");
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
    event.stopPropagation();

    setIsClickedPrev(true);
    setIsClickedNext(false);
  };
  return (
    <>
      <div className=" max-w-[1280px] relative mx-auto pb-[60px]">
        <div className=" absolute flex justify-between w-full inset-0 h-[50px] lg:my-auto md:mt-[200px]">
          <button className=" bg-transparent">
            <div
              className={`p-[11.25px] border-[2px] border-[#57007B] rounded-full${
                isClickedPrev ? " bg-[#57007B]" : ""
              }`}
              onClick={goPrev}
            >
              <ArrowBack color={`${isClickedPrev ? "white" : "#57007B"}`} />
            </div>
          </button>
          <button className=" bg-transparent">
            <div
              className={`p-[11.25px] border-[2px] border-[#57007B] rounded-full ${
                isClickedNext ? " bg-[#57007B]" : ""
              }`}
              onClick={goNext}
            >
              <ArrowForward color={`${isClickedNext ? "white" : "#57007B"}`} />
            </div>
          </button>
        </div>
        <div className=" lg:mt-[124px] md:mt-[80px] sm:mt-[60px] mt-[40px] flex justify-center">
          <Line />
        </div>
        <p className=" md:mt-[20px] sm:mt-[15px] mt-[12px] text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[25px] text-[20px] lg:leading-[55px] md:leading-[45px] sm:leading-[35px] font-inter font-[400] text-center">
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

          <p className="center-text text-center min-h-[120px] md:min-h-max  text-[#718096] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] lg:leading-[36px] md:leading-[26px] sm:leading-[20px] sm:mt-[20px] md:mt-[30px] sm:font-[400] font-[300] mt-[15px] font-inter md:max-w-[535px] sm:max-w-[480px] max-w-[310px] mx-auto transition-opacity duration-300">
            {data2[activeIndex % data2.length].text}
          </p>
          <div className=" absolute  right-1 bottom-1">
            <QuoteEnd />
          </div>
        </div>
        {/* <div className=" flex justify-center items-center lg:gap-[76px] md:gap-[60px] sm:gap-[50px] gap-[10px] md:mt-[70px] sm:mt-[55px] lg:mb-[140px] md:mb-[110px] sm:mb-[80px] overflow-x-scroll example"> */}
        <div className="last-swiper max-w-[987px] mx-auto mt-[53px]">
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
                <SwiperSlide key={i} className=" mx-auto">
                  <div
                    className={`${
                      activeIndex === i
                        ? " opacity-100 transform scale-110  "
                        : " opacity-60 "
                    }`}
                  >
                    <div className=" flex justify-center items-center">
                      <img
                        src={e.img}
                        alt=""
                        className=" w-[100px] h-[100px] "
                      />
                    </div>
                    <div className=" flex items-center justify-center  md:mt-[15px] sm:mt-[10px] mt-[5px] gap-[1px]">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={e.rating}
                          alt=""
                          className=" md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] max-w-[20px] max-h-[20px] mb:w-[15px] mb:h-[]"
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
            ))}
          </Swiper>
        </div>
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

const data2 = [
  {
    text: "Innovation is at the core of everything we do. Our team of experts is dedicated to delivering cutting-edge solutions that exceed client expectations. With our commitment to excellence and passion for technology, we strive to create impactful experiences that drive success.",
  },
  {
    text: "Our approach is client-centric, focusing on understanding your unique needs and objectives. We tailor our services to ensure that every project is a reflection of your brand and vision. From concept to execution, we are with you every step of the way, delivering results that matter.",
  },
  {
    text: "At Alcaline Solutions, and there we believe in the power of collaboration. By working closely with our clients, we cultivate strong partnerships built on trust and transparency. Together, we achieve remarkable outcomes that propel businesses forward in today's dynamic market landscape.",
  },
  {
    text: "Quality is our top priority. We adhere to the highest standards of craftsmanship and attention to detail, ensuring that every deliverable meets our stringent quality benchmarks. With a focus on precision and perfection, we consistently deliver superior results that exceed expectations.",
  },
  {
    text: "Our team is comprised of industry and their sophisticated veterans and creative minds who are passionate about what they do. With diverse expertise and a shared commitment to excellence, we bring fresh perspectives and innovative solutions to every project we undertake.",
  },
  {
    text: "We understand that every business is unique, and we approach each project with a fresh perspective and a focus on delivering tailored solutions. Our team takes the time to listen to your goals and challenges, crafting strategies that align with your vision and drive measurable results.",
  },
];
