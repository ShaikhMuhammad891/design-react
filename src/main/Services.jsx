// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./Services.css"; // Import your custom CSS file for Services component
// import "../index.css";
// import { Pagination } from "swiper/modules";

// const Services = () => {
//   return (
//     <div className="bg-[#F9F9FF] border-y border-[#E7DAED] lg:pb-[100px] md:pb-[70px] sm:pb-[80px] pb-[40px] relative">
//       <p className="text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[25px] text-[20px]  md:font-[700] sm:font-[500] lg:leading-[55px] md:leading-[40px] sm:leading-[30px] lg:mt-[45px] md:mt-[35px] sm:mt-[25px] mt-[20px] font-inter text-center">
//         Services we offer
//       </p>
//       <Swiper
//         onChange={() => {
//           return console.log("hey there!");
//         }}
//         slidesPerView={5}
//         spaceBetween={30}
//         grabCursor={true}
//         pagination={{
//           el: ".swiper-pagination",
//           clickable: true,
//           type: "bullets",
//         }}
//         modules={[Pagination]}
//         className="mySwiper max-w-[1440px] w-full"
//       >
//         {data.map((element, index) => (
//           <SwiperSlide key={index}>
//             <div
//               key={index}
//               className={` border border-red-400 lg:max-w-[330px] md:min-w-[233px] min-w-[200px] w-full rounded-[7px] lg:pl-[16px] md:pl-[12px] lg:py-[38.5px] md:py-[20px] sm:py-[15px] sm:pl-[10px] py-2 px-2`}
//             >
//               <div className="slide-content">
//                 <img
//                   src={element.img}
//                   alt="img"
//                   className="border border-[#F76680] rounded-full p-2 logo"
//                 />
//                 <div>
//                   <p
//                     className={` lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] mt-2 font-inter md:font-[600] sm:font-[500] font-[400] lg:leading-[27.3px] md:leading-[21px] lg:mt-[15px] sm:mt-[10px] ${
//                       index === 0 ? "text-red-500" : ""
//                     } `}
//                   >
//                     {element.title}
//                   </p>
//                   <p className=" lg:mt-[20px] md:mt-[15px] sm:mt-[12px] mt-2 text-[10px] leading-3 font-inter md:font-[400] sm:font-[300] sm:text-[11px] lg:text-[14px] md:text-[10px] lg:leading-[22.68px] md:leading-4 sm:leading-4 text-[#4A5568] max-w-[301px]">
//                     {element.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="pagination-area flex items-center">
//         <div className="swiper-pagination mb-7"></div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// const data = [
//   {
//     title: "Mobile App Development 1",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Web Design & Development 2",
//     img: "/images/web-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Software Testing Service 3 ",
//     img: "/images/dashboard.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Mobile App Development 4",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Mobile App Development 5",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Mobile App Development 6",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Mobile App Development 7",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Mobile App Development 8",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Mobile App Development 9",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   // Add more data as needed
// ];

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Services.css"; // Import your custom CSS file for Services component
import "../index.css";
import { Pagination } from "swiper/modules";
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="bg-[#F9F9FF] border-y border-[#E7DAED] lg:pb-[150px] md:pb-[70px] sm:pb-[80px] pb-[40px] relative">
      <p className="text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[25px] text-[20px]  md:font-[700] sm:font-[500] lg:leading-[55px] md:leading-[40px] sm:leading-[30px] lg:mt-[45px] md:mt-[35px] sm:mt-[25px] mt-[20px] font-inter text-center">
        Services we offer
      </p>
      <Swiper
        onSlideChange={handleSlideChange}
        // slidesPerView={4}
        // spaceBetween={40}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        }}
        modules={[Pagination]}
        className="mySwiper max-w-[1440px] w-full h-auto"
      >
        {data.map((element, index) => (
          <SwiperSlide
            key={index}
            className={` border mb:mb-[50px] bg-[#FAFAFA] lg:max-w-[330px] md:min-w-[233px] min-w-[300px] w-full lg:pl-[16px] md:pl-[12px] lg:py-[20px] md:py-[20px] sm:py-[15px] sm:pl-[10px] py-2 px-2 ${
              activeIndex === index
                ? " border border-rose-500 rounded-[7px] active-slide scale-110 mt-[50px] bg-gradient-to-br transform"
                : " bg-[#FAFAFA] opacity-75"
            }`}
          >
            <div key={index} className={` `}>
              <div className="slide-content">
                <img
                  src={element.img}
                  alt="img"
                  className=" border border-rose-500 rounded-full p-2 logo w-[42px] h-[42px]"
                />
                <div>
                  <p
                    className={`lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] mt-2 font-inter md:font-[600] sm:font-[500] font-[400] lg:leading-[27.3px] md:leading-[21px] lg:mt-[15px] sm:mt-[10px] ${
                      activeIndex === index ? " text-color" : ""
                    } `}
                  >
                    {element.title}
                  </p>
                  <p className="lg:mt-[20px] md:mt-[15px] sm:mt-[12px] mt-2 text-[10px] leading-3 font-inter md:font-[400] sm:font-[300] sm:text-[11px] lg:text-[14px] md:text-[10px] lg:leading-[22.68px] md:leading-4 sm:leading-4 text-[#4A5568] max-w-[301px]">
                    {element.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination-area flex items-center">
        <div className="swiper-pagination mb-7"></div>
      </div>
    </div>
  );
};

export default Services;

const data = [
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },

  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Software Testing Service",
    img: "/images/dashboard.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Software Testing Service",
    img: "/images/dashboard.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Software Testing Service",
    img: "/images/dashboard.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Software Testing Service",
    img: "/images/dashboard.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },

  // Add more data as needed
];
