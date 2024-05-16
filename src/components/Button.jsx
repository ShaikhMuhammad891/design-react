import React, { useRef } from "react";
import "./buttons.css";
const Button = ({ mt, text }) => {
  const ref = useRef("");
  const madeChanges = () => {
    ref.current.style.color = "white";
  };
  return (
    <>
      <div>
        <button
          onClick={madeChanges}
          style={{
            marginTop: mt,
          }}
          ref={ref}
          className="btn lg:py-[14px] lg:px-[25px] lg:text-[14px] md:py-[10px] md:px-[20px] sm:px-[15px] sm:py-[7px] md:text-[12px] sm:text-[10px] sm:mt-[12px] md:mt-0 md:font-[600] sm:font-[500] text-[#FAFAFA] rounded-[5px] leading-[14px] text-[10px] px-2 py-1"
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
