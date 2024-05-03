import React from "react";
import { ArrowForward, Line, ReadMore } from "../assets/Logos";
import "./Services.css";

const CaseStudies = () => {
  return (
    <>
      <div className=" border-y border-[#E7DAED] mt-2 md:pt-[89px] sm:pt-[60px] pt-[40px] bg-[#f7f7fa] md:pb-[88px] sm:mb-[60px]">
        <div className="">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" text-[#1A202C] lg:text-[35px] md:text-[28px] sm:text-[25px] text-[20px] mt-[20px] leading-[25px] lg:leading-[55px] md:leading-[45px] sm:leading-[35px] font-[400] font-inter text-center mt-[20px]">
            Our recent
            <span className=" md:font-[700] font-[600]">
              <br />
              Case studies
            </span>
          </p>
        </div>

        <div className=" max-w-[1232px] mx-auto lg:flex lg:mt-[81px] md:mt-[61px] sm:mt-[45px] mt-[35px] bg-[#F1F2FF] border rounded-[15px]">
          <div className=" md:mx-auto flex justify-center">
            <img
              src="/images/theme-one.png"
              alt=""
              className=" sm:max-w-[601px]"
            />
          </div>
          <div className=" sm:pt-[66px] sm:px-[51px] md:max-w-[540px] md:ml-[25px] inset-0 p-2 pt-[30px]">
            <p className=" md:text-[28px] sm:text-[23px] text-[18px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
              Website Design for SCFC Canada
            </p>
            <p className=" sm:text-[14px] text-[12px] text-[#4A5568] font-inter font-[400] leading-[22.68px] max-w-[529px] md:mt-[30px] sm:mt-[23px]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <div className=" flex justify-end items-center gap-2 md:mt-[60px] sm:mt-[40px] mt-[20px]">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                {/* <ArrowForward  color="#F76680" /> */}
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-[1232px] mx-auto lg:flex lg:mt-[81px] md:mt-[61px] sm:mt-[45px mt-[40px] bg-[#F1F2FF] border rounded-[15px]">
          <div className=" md:mx-auto flex justify-center">
            <img
              src="/images/theme-two.png"
              alt=""
              className="sm:max-w-[601px]"
            />
          </div>
          <div className=" sm:pt-[66px] sm:px-[51px] pt-[30px] md:max-w-[540px] md:ml-[25px] inset-0 p-2">
            <p className=" md:text-[28px] sm:text-[23px] text-[18px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
              Website Design for SCFC Canada
            </p>
            <p className=" sm:text-[14px] text-[12px] text-[#4A5568] font-inter font-[400] leading-[22.68px] max-w-[529px] md:mt-[30px] sm:mt-[23px]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <div className=" flex justify-end items-center gap-2 md:mt-[60px] sm:mt-[40px] mt-[20px]">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-[1232px] mx-auto lg:flex lg:mt-[81px] md:mt-[61px] sm:mt-[45px] mt-[40px] bg-[#F1F2FF] border rounded-[15px]">
          <div className=" md:mx-auto flex justify-center">
            <img
              src="/images/theme-three.png"
              alt=""
              className=" sm:max-w-[601px]"
            />
          </div>
          <div className=" sm:pt-[66px] sm:px-[51px] md:max-w-[540px] md:ml-[25px] inset-0 p-2">
            <p className=" md:text-[28px] sm:text-[23px] text-[18px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
              Website Design for SCFC Canada
            </p>
            <p className=" sm:text-[14px] text-[12px] text-[#4A5568] font-inter font-[400] leading-[22.68px] max-w-[529px] md:mt-[30px] sm:mt-[23px]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <div className=" flex justify-end items-center gap-2 md:mt-[60px] sm:mt-[40px] mt-[20px]">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-end items-center gap-2 sm:mt-[60px] mt-[40px] p-2 xl:w-[1240px] mx-auto lg:max-w-[920px] md:max-w-[700px]">
          <p className=" text-color font-inter sm:text-[20px] text-[15px] font-[600] leading-[27.3px]">
            Read more
          </p>
          <div className=" mt-[3px]">
            <ReadMore />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
