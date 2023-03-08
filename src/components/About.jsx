import React from "react";
import { personalImg } from "../assets";
import { motion } from "framer-motion";
const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const contents = {
  hidden: {
    opacity: 0,
    y: 10,
    // scale: "0%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
  animate: {
    // scale: "100%",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const image = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const About = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full  relative flex justify-center items-center bg-white p-10 md:p-14  scroll-mt-[70px]"
    >
      <div className="flex flex-col md:flex-row w-full 2xl:w-[1024px] justify-center">
        <div className="flex justify-center items-center w-full  ">
          <motion.div
            className="flex flex-col lg:flex-row justify-center  items-center gap-6"
            initial="hidden"
            animate="animate"
            variants={container}
          >
            <motion.img
              src={personalImg}
              className="bg-backgroundColor rounded-full w-[225px] h-[225px]"
              variants={image}
            />

            <div
              className="flex flex-col justify-center items-center lg:items-start gap-2 "
              // variants={contents}
            >
              <motion.h1
                className="text-darkColor text-[18px] md:text-[20px] font-bold tracking-[0.165rem]"
                variants={contents}
              >
                Vishnu K
              </motion.h1>
              <motion.span
                variants={contents}
                className="flex text-center lg:text-left text-[16px] md:text-[18px] font-semibold  divide-x-2 divide-lightColor"
              >
                <span className="text-lightColor mr-2 tracking-[0.07rem]">
                  iOS Dev
                </span>
                <span className="hidden sm:flex text-lightColor pl-2 tracking-[0.07rem]">
                  Market Simplified India Limited
                </span>
                <span className="flex sm:hidden text-lightColor pl-2 tracking-[0.07rem]">
                  MSIL
                </span>
              </motion.span>

              <motion.p
                variants={contents}
                className="text-lightColor text-justify lg:text-left text-[14px] md:text-[16px] font-normal tracking-[0.07rem]"
              >
                I am a passionate computer science graduate with two years of
                industry experience. My expertise lies in developing beautiful
                web experiences using React and Tailwind CSS, as well as
                creating engaging iOS applications with Objective-C.
              </motion.p>
              <motion.span
                variants={contents}
                className="text-left lg:text-left text-[14px] md:text-[16px] font-normal tracking-[0.07rem]"
              >
                <span className="text-lightColor">
                  My tech stack includes &nbsp;
                </span>
                <span className="text-darkColor font-normal">
                  React, Tailwind CSS, Type Script, Django, Firebase, and
                  Objective C.&nbsp;
                </span>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
