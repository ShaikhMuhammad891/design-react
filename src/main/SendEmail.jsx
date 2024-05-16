import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Line } from "../assets/Logos";
import Button from "../components/Button";

const SendEmail = () => {
  const form = useRef();

  useEffect(() => {
    const messageTextarea = form.current.querySelector("#message");

    // Function to update the rows of the textarea based on its scroll height
    const updateRows = () => {
      messageTextarea.rows = 1; // Reset to one row to calculate new height
      messageTextarea.rows = Math.ceil(messageTextarea.scrollHeight / 50); // Set rows based on scroll height
    };

    // Call updateRows whenever the textarea content changes
    messageTextarea.addEventListener("input", updateRows);

    return () => {
      // Cleanup: remove the event listener when component unmounts
      messageTextarea.removeEventListener("input", updateRows);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wkgmtch", "template_exq6yr8", form.current, {
        publicKey: "xlXWaL-iGjFxq6YSA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className=" max-w-[1440px] mx-auto mt-[80px]">
        <div className=" flex justify-center items-center">
          <Line />
        </div>
        <p className=" text-top text-center md:text-[35px] sm:text-[30px] text-[25px] font-inter font-[400] mt-[20px] leading-[55px]">
          Want to <br /> <span className=" font-[700]">tell us something</span>
        </p>

        <div className=" max-w-[1280px] w-full mx-auto flex justify-between md:mt-[50px] sm:mt-[35px] mt-[25px] px-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" max-w-[550px]"
          >
            <label className=" text-top mt-10 block sm:text-[25px] text-[20px] font-inter font-[400] leading-[45px]">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              required
              name="user_email"
              placeholder="Write your email"
              className=" border-b  outline-none sm:w-[550px] w-[300px] border-[#57007b] sm:text-[18px] text-[16px] font-inter font-[400] leading-8"
            />
            <br />
            <label className=" text-top mt-10 block text-[25px] font-inter font-[400] leading-[45px] ">
              Message
            </label>
            <br />
            <textarea
              name="message"
              required
              id="message"
              rows={1}
              placeholder=" Write on your thoughts"
              className=" outline-none border-b sm:w-[550px] w-[300px] border-[#57007b] sm:text-[18px] text-[16px] font-inter font-[400] leading-8"
              style={{ resize: "none" }}
            />
            <br />
            <Button type="submit" mt="20px" text="Send" />
          </form>
          {/* <div className=" max-w-[560px]">
            <img src="/images/email.png" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SendEmail;
