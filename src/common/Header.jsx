import React, { useState } from "react";
import { HeaderLogo } from "../assets/Logos";
import Button from "../components/Button";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Hidden } from "@mui/material";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header
        className={`header sm:px-[25px] px-2 bg-[#FFFFFF]  md:flex justify-between items-center ${
          !showNav ? "flex" : ""
        }`}
      >
        <div className="logo lg:py-[10px] md:py-[8px] sm:py-[6px] py-[4px]">
          <HeaderLogo className={` sm:w-[180px] sm:h-[59px] w-[130px]`} />
        </div>

        <div className=" md:hidden">
          <button
            onClick={() => setShowNav(!showNav)}
            className={`${
              showNav ? "absolute right-6 top-5 md:hidden" : " md:hidden"
            }`}
          >
            {showNav ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div
          className={` ${
            showNav ? "block" : " center bg-white hidden md:block "
          }`}
        >
          <ul className="  xl: md:flex lg:space-x-[48.2px] md:space-x-4 ml-[13px] sm:ml-0">
            <li className=" text-[#4A5568] font-[500] lg:text-[16px]  text-[12px] leading-[25px]  ">
              About Us
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px]  text-[12px] leading-[25px]  ">
              Services
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px]  text-[12px] leading-[25px]  ">
              Case Studies
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px]  text-[12px] leading-[25px]  ">
              Blog
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px]  text-[12px] leading-[25px]  ">
              How It Works
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px]  text-[12px] leading-[25px]  ">
              Hire
            </li>
          </ul>
        </div>
        <div className={`contact ${showNav ? " block ml-[8px]" : " hidden md:block "}`}>
          <Button />
        </div>
      </header>
    </>
  );
};

export default Header;
