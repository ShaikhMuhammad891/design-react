import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function MainSwiper() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log("it is classname : " + className)
      return '<span class="' + className + '">'  + (index + 2) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        centeredSlides = {true}
        loop = {true}
        // loopAdditionalSlides={4}
        className="mySwiper h-[50vh] w-[80vh] z-[1] bg-green-500 text-center"
      >
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 1</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 2</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 3</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 4</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 5</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 6</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 7</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 8</SwiperSlide>
        <SwiperSlide className=' bg-slate-600 w-[120px]'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
