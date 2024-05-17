import React from "react";
import { Line, LongLine, VerticleMini } from "../assets/Logos";
import "./Services.css";

const Alcline = () => {
  return (
    <>
      <div className=" border-t border-[#E7DAED]">
        <div className=" mt-[90px]  max-w-[1440px] mx-auto">
          <div className=" md:mt-[93px] sm:mt-[60px] mt-[40px]">
            <div className=" flex justify-center">
              <Line />
            </div>
            <p className=" xl:text-[35px] lg:text-[32px] md:text-[28px] sm:text-[25px] text-[20px] font-inter font-[400] text-center lg:leading-[55px] md:leading-[45px] sm:leading-[40px] sm:mt-[20px] mt-[10px] text-[#1A202C]">
              How development
              <span className=" md:font-[700] font-[600]">
                <br /> through Alcaline works
              </span>
            </p>
          </div>

          <div className="hidden xl:max-w-[1040px] w-full  mx-auto mt-[88px]  lg:grid lg:grid-rows-1 grid-flow-col xl:gap-[71px] lg:gap-[31px] lg:max-w-[750px] ">
            {data.map((e, i) => {
              return (
                <div
                  key={i}
                  className=" xl:max-w-[299px] xl:pt-[22px] xl:pb-[26px] xl:pl-[22px] xl:pr-[26px] border border-[#E7DAED] rounded-[9px] lg:max-w-[230px] lg:pt-[16px] lg:pl-[16px] pb-[19px] pr-[20px]"
                >
                  <div className=" flex gap-[10px]">
                    <p className=" text-color font-inter font-[700] text-[18px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                      {e.number}
                    </p>
                    <p className=" font-inter xl:text-[18px] font-[700] leading-[21.78px] tracking-tighter lg:text-[14px]">
                      {e.title}
                    </p>
                  </div>
                  <p className=" mt-[15px] tracking-tighter xl:text-[14px] lg:text-[12px] font-inter font-[400] leading-[20px] text-[#718096] max-w-[215px]">
                    {e.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className=" xl:max-w-[1230px] xl:ml-[170px] mt-[15px] lg:max-w-[1000px] hidden xl:block mx-auto">
            <img src="/images/trophy.png" alt="" />
          </div>

          <div className=" hidden lg:grid xl:max-w-[1040px] w-full  mx-auto xl:mt-[15px] lg:mt-[24px] grid-rows-1 grid-flow-col xl:gap-[71px] lg:gap-[31px] lg:max-w-[750px] xl:ml-[235px]  ">
            {data2.map((e, i) => {
              return (
                <div
                  key={i}
                  className=" xl:max-w-[299px] xl:pt-[22px] xl:pb-[26px] xl:pl-[22px] xl:pr-[26px] border border-[#E7DAED] rounded-[9px] lg:max-w-[230px] lg:pt-[16px] lg:pl-[16px] pb-[19px] pr-[20px]"
                >
                  <div className=" flex gap-[10px]">
                    <p className=" text-color font-inter font-[700] text-[18px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                      {e.number}
                    </p>
                    <p className=" font-inter xl:text-[18px] font-[700] leading-[21.78px] tracking-tighter lg:text-[14px]">
                      {e.title}
                    </p>
                  </div>
                  <p className=" mt-[15px] tracking-tighter xl:text-[14px] lg:text-[12px] font-inter font-[400] leading-[20px] text-[#718096] max-w-[215px]">
                    {e.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className=" lg:hidden grid sm:grid-rows-3 sm:grid-flow-col grid-rows-6 mx-auto max-w-[600px] gap-4 mt-[40px]">
            {dataAll.map((e, i) => {
              return (
                <div
                  key={i}
                  className=" xl:max-w-[299px] xl:pt-[22px] xl:pb-[26px] xl:pl-[22px] xl:pr-[26px] border border-[#E7DAED] rounded-[9px] lg:max-w-[230px] lg:pt-[16px] lg:pl-[12px] md:pt-[12px] md:pl-[12px] sm:pl-3 sm:py-4 pl-4 py-4 mx-4 "
                >
                  <div className=" flex gap-[10px] justify-center sm:justify-normal">
                    <p className=" text-color font-inter font-[700] md:text-[18px] sm:text-[16px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                      {e.number}
                    </p>
                    <p className=" font-inter xl:text-[18px] md:text-[16px] sm:text-[14px] font-[700] leading-[21.78px] tracking-tighter lg:text-[14px]">
                      {e.title}
                    </p>
                  </div>
                  <p className=" text-center sm:text-start mt-[15px] tracking-tighter xl:text-[14px]  md:text-[12px] sm:text-[11px] font-inter font-[400] md:leading-[20px] sm:leading-[16px] text-[#718096] sm:max-w-[215px] md:mt-[10px] sm:mt-[10px] mr-4 sm:mr-0">
                    {e.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alcline;

const data = [
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#1",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },

  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#3",
    title: "Tech architecture",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },

  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#5",
    title: "Code reviews",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
];

const data2 = [
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#2",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#4",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#6",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
];

const dataAll = [
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#1",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },

  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#3",
    title: "Tech architecture",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },

  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#5",
    title: "Code reviews",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#2",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#4",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#6",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
];
