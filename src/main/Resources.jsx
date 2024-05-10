import React from "react";
import { Line, PurpleLogo } from "../assets/Logos";
import "./Services.css";

const Resources = () => {
  return (
    <>
      <div className=" md:mt-[96px] sm:mt-[60px] mt-[40px]">
        <div className=" lg:mt-[93px] sm:mt-[60px] ">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" xl:text-[35px] lg:text-[32px] md:text-[28px] sm:text-[25px] text-[20px] mt-[10px]  font-inter font-[400] text-center lg:leading-[55px] md:leading-[45px] sm:leading-[35px] sm:mt-[20px] text-[#1A202C]">
            Featured
            <span className=" md:font-[700] font-[600]">
              <br /> Resources
            </span>
          </p>
        </div>

        <div className=" example flex max-w-[1440px] mx-auto w-full overflow-x-scroll  lg:gap-[60px] md:gap-[40px] sm:gap-[20px] gap-4 lg:mt-[66px] md:mt-[46px] mt-[30px]">
          {data.map((e, i) => {
            return (
              <>
                <div className="md:min-w-[254px] min-w-[220px]">
                  <div>
                    <img
                      src={e.image}
                      alt=""
                      className=" md:min-w-[254px] md:max-h-[175px] min-w-[220px] max-h-[160px]"
                    />
                  </div>
                  <p className=" text-[#2D3748] md:text-[16px] mb:text-[14px]  font-inter md:font-[500] sm:font-[400] md:leading-[25px] sm:leading-[20px] mt-[20px]">
                    {e.description}
                  </p>

                  <div className=" flex justify-end gap-[19px] items-center mt-[20px]">
                    <p className=" text-[#57007B] md:text-[16px] sm:text-[14px] font-inter font-[500] leading-[25px]">
                      Read more
                    </p>
                    <div>
                      <PurpleLogo
                        className={` sm:w-[12px] h-[12px] md:w-[17px] md:h-[17px]`}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div
          style={{
            background: "linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)",
          }}
          className=" max-w-[1230px] w-full  mt-[90px] mx-auto rounded-[15px] lg:py-[88px] md:py-[44px] sm:py-[40px] sm:px-4 py-[30px] px-4"
        >
          <div className=" max-w-[1062px] w-full mx-auto flex justify-between items-center relative">
            <div className=" absolute lg:right-[60.54px] md:right-[38px] sm:right-[26px] right-4 ">
              <img
                src="/images/beam.png"
                alt=""
                className=" md:max-h-[150px] sm:max-h-[100px] max-h-[80px]"
              />
            </div>
            <p
              style={{
                color: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
              }}
              className=" md:max-w-[531px] sm:max-w-[400px] font-inter lg:text-[35px] md:text-[28px] mb:text-[14px] font-[700] lg:leading-[55px] md:leading-[45px]"
            >
              Hire the best developers and designers around!
            </p>

            <div>
              <p
                style={{
                  background:
                    "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
                }}
                className=" lg:px-[43px] lg:py-[17.5px] md:px-[33px] md:py-[14.5px] sm:py-[12px] sm:px-[20px] py-2 px-3 text-[8px]  font-inter md:font-[700] sm:font-[500] md:text-[12px]  text-[#FAFAFA] tracking-tighter lg:leading-[21.78px] md:leading-[15px]"
              >
                Hire Top Developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;

const data = [
  {
    image: "/images/rthree.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rthree.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rfour.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rfive.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rone.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
];
