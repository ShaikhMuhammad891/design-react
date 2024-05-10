import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" md:mt-[133px] dm:mt-[100px] mt-[80px] max-w-[1230px] mx-auto">
        <div className=" md:flex grid grid-cols-2 relative pb-[81px] border-b border-[#CBD5E0] px-2 ">
          <div className=" max-w-[372px]">
            <div>
              <img src="/images/main-logo.png" alt="" />
            </div>
            <p className=" lg:mt-[14px] md:mt-[12px] lg:text-[18px]  text-[12px] text-[#718096] font-[400] font-inter lg:leading-[30px] md:text-[15px] md:leading-[25px] leading-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <img src="/images/footer-left.png" alt="" className=" mt-[36px]" />
          </div>
          <div className=" sm:ml-[78px] ml-[30px] max-w-[133px] w-full">
            <p className=" font-inter lg:font-[700] md:font-[600] font-[500] lg:text-[18px] md:text-[15px] text-[14px] text-[#4A5568] leading-[21.78px] tracking-tighter">
              Links
            </p>
            <ul className=" mt-[19px]">
              <li className=" text-[#718096] font-inter font-[400] lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25px]">
                About Us
              </li>
              <li className=" text-[#718096] font-inter font-[400] lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25px]">
                Servives
              </li>
              <li className=" text-[#718096] font-inter font-[400] lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25px]">
                Case Studies
              </li>
              <li className=" text-[#718096] font-inter font-[400] lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25px]">
                How it works
              </li>
              <li className=" text-[#718096] font-inter font-[400] lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25px]">
                Blog
              </li>
              <li className=" text-[#718096] font-inter font-[400] lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25px]">
                Careers
              </li>
              <li className=" text-[#718096] font-inter font-[400] lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25px]">
                Areas We Serves
              </li>
            </ul>
          </div>
          <div className=" md:ml-[87px] max-w-[306px] w-full">
            <p className=" font-inter lg:font-[700] md:font-[600] font-[500] lg:text-[18px] md:text-[15px] text-[14px]  text-[#4A5568] leading-[21.78px] tracking-tighter">
              Contact us
            </p>
            <p className=" lg:mt-[24px] md:mt-[20px] lg:text-[18px] md:text-[15px] text-[12px] text-[#718096] font-[400] font-inter lg:leading-[30px] md:leading-[25px] leading-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className=" lg:mt-[20px] md:mt-[15px] lg:text-[18px] md:text-[15px] text-[12px] text-[#718096] font-[400] font-inter leading-[30px] ">
              +908 89097 890
            </p>
          </div>

          <div className=" flex  max-w-[184px] sm:ml-[70px] ml-[25px] items-end">
            {data.map((e, i) => {
              return (
                <>
                  <div className="">
                    <img src={e.logo} alt="" className=" w-[200px]" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <p className=" text-center text-[14px] leading-[10px] font-inter font-[400] text-[#4A5568] mt-[35px] pb-[42px] tracking-tighter">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

const data = [
  {
    logo: "/images/fb.png",
  },
  {
    logo: "/images/insta.png",
  },
  {
    logo: "/images/twitter.png",
  },
  {
    logo: "/images/linkedin.png",
  },
];
