import React from "react";
// import { ComputerGuy, Eclips } from "../assets/Logos";
import StartedButton from "../components/StartedButton";
import { Eclips } from "../assets/Logos";

const TopFront = () => {
  return (
    <>
      <div className=" relative">
        <div className=" md:mt-[69px] sm:mt-[50px] md:ml-[104px] sm:ml-[77px] sm:flex ml-4 ">
          <div className=" xl:max-w-[531px] xl:w-full xl:my-[103px] lg:max-w-[450px] w-full lg:my-[80px] md:max-w-[300px] md:my-[50px] sm:max-w-[280px] max-w-[300px] sm:my-[40px] my-[30px]">
            <div>
              <p className=" xl:text-[53px] lg:text-[34px] md:text-[25px] text-[23px] font-[300] xl:leading-[71px] lg:leading-[51px] md:leading-[40px] sm:leading-[30px] leading-[25px] font-inter">
                Great <span className=" text-[#ae387e]">software</span> is
              </p>
              <p className=" xl:font-[800] lg:font-[700] font-[600]  xl:text-[53px] lg:text-[35px] md:text-[25px] text-[23px] xl:leading-[71px] lg:leading-[50px] md:leading-[40px] sm:leading-[31px] leading-[25px] font-inter">
                built by great
                <span className="text-[#ae387e]"> teams</span>
              </p>
            </div>
            <div className=" xl:mt-[28px] lg:mt-[22px]  sm:mt-[18px]">
              <p className=" font-inter font-[400] xl:text-[18px] lg:text-[16px] text-[14px]  xl:leading-[36px] lg:leading-[30px] md:leading-[23px] leading-[20px]  text-[#4A5568] mt-2">
                We help build and manage a team of world-class developers to
                bring your vision to life
              </p>
            </div>
            <div className=" xl:mt-[75px] lg:mt-[50px] md:mt-30 sm:mt-[20px] mt-[10px]">
              <StartedButton />
            </div>
          </div>
          <div>
            <img src="/images/pc-guy.png" alt="pc-guy" />
          </div>
        </div>
        <div className=" mt-[51px] sm:ml-[483px] absolute bottom-[-35.5px]">
          <Eclips />
        </div>
      </div>
    </>
  );
};

export default TopFront;
