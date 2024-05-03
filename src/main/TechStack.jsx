import React from "react";
import { Line } from "../assets/Logos";
import "./Services.css";

const TechStack = () => {
  return (
    <>
      <div>
        <div className=" lg:mt-[80px] md:mt-[60px] sm:mt-[50px] mt-[40px]">
          <div className=" flex justify-center ">
            <Line />
          </div>
          <p className=" lg:mt-[20px] md:mt-[15px] sm:mt-[12px] text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[23px] text-[20px] mt-[10px] lg:leading-[55px] md:leading-[45px] font-inter font-[400] text-center">
            Our
            <span className=" md:font-[700] font-[600]">
              <br /> Tech Stack
            </span>
          </p>
          <ul className=" flex justify-center mt-[38px] xl:gap-x-[60px] lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[20px]">
            <l className=" lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[600] leading-[30px] text-color">
              Backend
            </l>
            <l className=" lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] text-[#1A202C] ">
              Frontend
            </l>
            <l className=" lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] text-[#1A202C] ">
              Database
            </l>
            <l className=" lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] text-[#1A202C] ">
              CMS
            </l>
            <l className=" lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] text-[#1A202C] ">
              CloudTesting
            </l>
            <l className=" lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] font-inter font-[400] leading-[30px] text-[#1A202C] ">
              DevOps
            </l>
          </ul>

          <div className=" max-w-[1064px] mx-auto flex justify-between mt-[72px]">
            {upperLine.map((e, i) => {
              return (
                <>
                  <div className=" ">
                    <img src={e.logo} alt="" />
                  </div>
                </>
              );
            })}
          </div>

          <div className=" flex max-w-[735px] mx-auto mt-[30px]">
            {lowerLine.map((e, i) => {
              return (
                <>
                  <div>
                    <img src={e.logo} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;

const upperLine = [
  {
    logo: "/images/node.png",
  },
  {
    logo: "/images/php.png",
  },
  {
    logo: "/images/sql.png",
  },
  {
    logo: "/images/java.png",
  },
  {
    logo: "/images/net.png",
  },
];

const lowerLine = [
  {
    logo: "/images/python.png",
  },
  {
    logo: "/images/rails.png",
  },
  {
    logo: "/images/go.png",
  },
  {
    logo: "/images/mongo.png",
  },
];
