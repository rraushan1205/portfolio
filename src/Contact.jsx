import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import mail from "../img/mail.png";
import x from "../img/Twitterx.png";
import dot2 from "../img/dot2.png";
function Contact() {
  return (
    <>
      <div className="bg-background font-fira">
        <Navbar />
        <div className="flex mt-[47px] text-white text-[24px] lg:text-[32px] mx-10 lg:mx-[171px]">
          <span className="text-primary">/</span>
          <div>contacts</div>
        </div>
        <div className="mx-10 lg:mx-[171px] text-white text-[16px]">
          <div className="my-5">Who am i?</div>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="mt-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus at iure, dolorem rerum ad eaque quisquam non obcaecati
              modi iusto repudiandae aliquid? Sed, iste. Assumenda?
            </div>
            <div className="flex w-fit lg:ml-6 flex-col lg:flex-row">
              <div className="my-4 lg:my-7 border-[1px] h-fit w-fit border-gray px-[8px] py-[8px] flex flex-col">
                <span className="font-bold">Support me here!</span>
                <span>+123456789</span>
              </div>
              <div className="lg:ml-2 my-2 lg:my-7 border-[1px] border-gray h-fit px-[8px] py-[8px]">
              <div className="text-white font-semibold text-base">
                  message me here
                </div>
                <div className="flex my-2">
                  <img src={mail} alt="" className="shrink-0"/>
                  <p className="text-clip overflow-hidden">raushanraj1205@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={dot2} alt=""  className=" absolute bottom-[200px] hidden lg:flex scale-[0.8]"/>
        <div className="flex mt-[47px] text-white text-[24px] lg:text-[32px] mx-10 lg:mx-[171px]">
          <span className="text-primary">#</span>
          <div>all-media</div>
        </div> 
        <div className="mx-10 lg:mx-[171px] flex text-white mt-5 gap-8 flex-col lg:flex-row">
          <span className="flex ">
            <img src={x} alt="" />
            <span>@raushanraj1205</span>
          </span>
          <span className="flex">
            <img src={x} alt="" />
            <span>@raushanraj1205</span>
          </span>
          </div> 
        <Footer />
      </div>
    </>
  );
}

export default Contact;
