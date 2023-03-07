import React from "react";
import { Icon } from "@iconify/react";
import { heroImg, resume } from "../assets";
import { socialLinks } from "../data";
const Hero = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="home"
      className="p-10 md:p-14 w-full flex justify-center items-center bg-backgroundColor mt-[70px] lg:min-h-[calc(100%-70px)] scroll-mt-[70px]"
    >
      <div className="flex flex-col-reverse md:flex-row w-full gap-6">
        <div className="flex justify-start items-center w-full md:w-[50%] gap-10">
          <div className="hidden md:flex flex-col justify-center items-center gap-6">
            {socialLinks.map((item) => (
              <a href={item.url} key={item.id} target="_blank">
                <Icon icon={item.icon} color="#496363" width="30" height="30" />
              </a>
            ))}
          </div>
          <div className="flex items-center justify-start w-full">
            <div className="font-robotoSlab flex flex-col font-bold gap-3  justify-center items-start">
              <div className="text-lightColor text-[36px] md:text-[48px] tracking-[0.165rem]">
                Hi, I'm <span className="text-darkColor">Vishnu</span>
              </div>
              <span className="text-darkColor text-[18px] md:text-[20px] tracking-[0.165rem]">
                Frontend Developer
              </span>
              <span className="text-lightColor font-semibold text-[14px] md:text-[16px] tracking-[0.07rem]">
                Experienced front-end developer with the ability to create
                engaging user interfaces for both web and iOS applications
              </span>
              <a href={resume} download="Vishnu_k_cv" target="_blank">
                <button className="p-4 bg-darkColor rounded-md font-robotoSlab text-backgroundColor text-[14px] md:text-[16px] shadow-md tracking-[0.07rem]">
                  Download My CV
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end flex-1 items-center ">
          <img
            src={heroImg}
            className=" lg:w-[min(100%,500px)] lg:h-[min(100%,500px)] w-[250px] h-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
