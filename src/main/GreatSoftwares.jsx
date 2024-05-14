import React from "react";
import {
  ArrowForward,
  Eclips,
  Line,
  LittleEclips,
  LittleYellow,
  ReadMore,
  VerticalLine,
  YellowEclips,
} from "../assets/Logos";
import "./Services.css";
import { Description } from "@mui/icons-material";

const GreatSoftwares = () => {
  return (
    <>
      <div className="container lg:mt-[80px] md:mt-[60px] sm:mt-[40px] mt-[40px] max-w-[1440px] mx-auto">
        <div className="">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[22px] text-[20px] lg:leading-[55px] md:leading-[45px] sm:leading-[35px] font-[400] font-inter text-center mt-[20px]">
            Way of building
            <span className=" md:font-[700] font-[600]">
              <br />
              Great Softwares
            </span>
          </p>
        </div>

        <div className=" xl:max-w-[1280px] w-full mx-auto relative">
          {data.map((e, i) => {
            return (
              <>
                <div
                  className={`lg:flex lg:justify-between lg:mt-[73px] sm:mx-4 lg:mx-0 mx-2 ${
                    i === 1 ? " flex-row-reverse" : ""
                  }`}
                >
                  <div className=" xl:max-w-[534px]  lg:max-w-[380px] lg:px-2 w-full ">
                    <p className=" lg:text-[28px] md:text-[22px] sm:text-[18px] text-[16px] font-inter font-[600] leading-[38.9px] text-[#1A202C] mt-[20px]">
                      {e.title}
                    </p>
                    <p className=" text-[#2D3748] xl:text-[18px] xl:min-w-[534px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[11px] font-inter font-[400] lg:leading-[30px] md:leading-[25px] sm:leading-[20px] lg:mt-[30px] md:mt-[20px] md:max-w-[600px] lg:h-[113px]">
                      {e.Description}
                    </p>
                    <p className=" xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[11px] md:mt-[10px] font-inter font-[400] leading-[30px]">
                      {e.DescriptionTwo}
                    </p>

                    <div className=" flex gap-[15px] sm:mt-[25px] mt-[15px] items-center">
                      <div>{e.line}</div>
                      <p className=" text-color italic font-inter font-[300] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] text-[11px] md:leading-[30px] sm:leading-[20px] max-w-[435px]">
                        {e.verticalText}
                      </p>
                    </div>

                    <div className=" mt-[25px] flex gap-[10px]">
                      <div>
                        <img src={e.profile} alt="" />
                      </div>
                      <div>
                        <div className=" ">
                          <p className=" text-[#1A202C] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] text-[11px] font-inter font-[400] leading-[19.36px]">
                            {e.name}
                          </p>
                          <p className=" font-inter font-[400] text-[#718096] sm:text-[12px] text-[11px] lg:text-[14px] leading-[16px] mt-[5px]">
                            {e.profession}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" relative">
                    <img src={e.image} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GreatSoftwares;

const data = [
  {
    title: " Build the right team to scale",
    Description:
      "  Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    DescriptionTwo: (
      <p>
        Our <span className=" grad-text"> delivery model</span> helps you cut
        costs and deliver within budget.
      </p>
    ),
    line: <VerticalLine />,
    verticalText:
      " Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    profile: "/images/per-one.png",
    name: "Jeewa Mukarram",
    profession: "CEO",
    image: "/images/top.png",
  },
  {
    title: " Build the right team to scale",
    Description:
      "  Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    DescriptionTwo: (
      <p>
        Our <span className=" grad-text"> delivery model</span> helps you cut
        costs and deliver within budget.
      </p>
    ),
    line: <VerticalLine />,
    verticalText:
      " Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    profile: "/images/per-one.png",
    name: "Jeewa Mukarram",
    profession: "CEO",
    image: "/images/top2.png",
  },
  {
    title: " Build the right team to scale",
    Description:
      "  Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    DescriptionTwo: (
      <p>
        Our <span className=" grad-text"> delivery model</span> helps you cut
        costs and deliver within budget.
      </p>
    ),
    line: <VerticalLine />,
    verticalText:
      " Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    profile: "/images/per-one.png",
    name: "Jeewa Mukarram",
    profession: "CEO",
    image: "/images/top.png",
  },
];
