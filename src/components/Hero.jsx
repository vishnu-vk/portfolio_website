import React from "react";
import { Icon } from "@iconify/react";
import { heroImg, resume } from "../assets";
import { socialLinks } from "../data";
import { motion } from "framer-motion";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socailLinks = {
  hidden: {
    x: "-100%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const contents = {
  hidden: {
    opacity:0,
    y : 10,
    // scale: "0%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
  animate: {
    // scale: "100%",
    y : 0,
    opacity:1,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const image = {
  hidden: {
    opacity:0,
    scale:0.8,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
  animate: {
    opacity:1,
    scale:1,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "easeInOut",
      
    },
  },
};

const Hero = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="home"
      className="p-10 md:p-14 w-full flex justify-center items-center bg-backgroundColor mt-[70px] lg:min-h-[calc(100%-70px)] scroll-mt-[70px]"
    >
      <div
        className="flex flex-col-reverse overflow-hidden md:flex-row w-full 2xl:w-[1024px] gap-6"
        // initial="hidden"
        // animate="animate"
        // variants={container}
      >
        <motion.div
          className="flex justify-start items-center w-full md:w-[50%] gap-10"
          // variants={container}
          // initial="hidden"
          // animate="animate"
        >
          <motion.div
            className="hidden md:flex flex-col justify-center overflow-hidden items-center gap-6"
            initial="hidden"
            whileInView="animate"
            variants={container}
            viewport={{ once: true, amount: 0.1 }}
          >
            {socialLinks.map((item) => (
              <motion.div
                className="w-[30px] h-[30px] overflow-hidden"
                key={item.id}
                variants={socailLinks}
              >
                <a
                  href={item.url}
                  target="_blank"
                  // variants={socailLinks}
                >
                  <Icon
                    icon={item.icon}
                    color="#496363"
                    width="30"
                    height="30"
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex items-center justify-start w-full">
            <motion.div
              className="font-robotoSlab flex flex-col  font-bold gap-3  justify-center items-start"
              initial="hidden"
              whileInView="animate"
              variants={container}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="overflow-hidden flex">
                <motion.div
                  variants={contents}
                  className="text-lightColor text-[36px]  md:text-[48px] tracking-[0.165rem]"
                >
                  Hi, I'm <span className="text-darkColor">Vishnu</span>
                </motion.div>
              </div>
              <div className="overflow-hidden flex">
                <motion.span
                  variants={contents}
                  className="text-darkColor text-[18px] md:text-[20px] tracking-[0.165rem]"
                >
                  Frontend Developer
                </motion.span>
              </div>
              <div className="overflow-hidden flex">
                <motion.span
                  variants={contents}
                  className="text-lightColor font-semibold text-[14px] md:text-[16px] tracking-[0.07rem]"
                >
                  Experienced front-end developer with the ability to create
                  engaging user interfaces for both web and iOS applications
                </motion.span>
              </div>

              <div className="overflow-hidden flex">
                <motion.a
                  href={resume}
                  download="Vishnu_k_cv"
                  target="_blank"
                  variants={contents}
                >
                  <button className="p-4 bg-darkColor rounded-md font-robotoSlab text-backgroundColor text-[14px] md:text-[16px] shadow-md tracking-[0.07rem]">
                    Download My CV
                  </button>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div
          className="flex justify-center md:justify-end flex-1 items-center overflow-hidden"
          // variants={contents}
        >
          <motion.img
            src={heroImg}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={image}
            className=" lg:w-[min(100%,500px)] lg:h-[min(100%,500px)] w-[250px] h-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
