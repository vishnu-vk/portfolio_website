import React from "react";
import { motion } from "framer-motion";
import { useIsMedium } from "../hooks/utils";

const ProjectCard = ({ title, img, description, techStack, url, id }) => {
  // const isMedium = useIsMedium();
  const contents =
    window.innerWidth > 768
      ? {
          hidden: (i) => ({
            opacity: 0,
            y: i % 2 === 0 ? "100%" : "-100%",
            // scale: "0%",
            transition: {
              duration: 0.4,
              type: "tween",
              ease: "easeInOut",
            },
          }),
          animate: {
            // scale: "100%",
            y: "0%",
            opacity: 1,
            transition: {
              duration: 0.8,
              type: "tween",
              ease: "easeInOut",
            },
          },
        }
      : {
          hidden: (i) => ({
            opacity: 0,

            x: i % 2 === 0 ? "100%" : "-100%",
            // scale: "0%",
            transition: {
              duration: 0.4,
              type: "tween",
              ease: "easeInOut",
            },
          }),
          animate: {
            // scale: "100%",
            x: "0%",
            opacity: 1,
            transition: {
              duration: 0.8,
              type: "tween",
              ease: "easeInOut",
            },
          },
        };
  // console.log(isMedium);
  return (
    <div className="flex overflow-hidden">
      <motion.a
    
        href={url}
        target="_blank"
        variants={contents}
        // viewport={{ once: true }}
        custom={id}
      >
        <div className="flex flex-col shadow-md w-[250px] h-[400px] relative">
          <img src={img} className="w-[250px] h-[400px]" />
          <div className="bg-darkColor p-4 absolute bottom-0 left-0 right-0  flex flex-col   justify-start items-start gap-2">
            <span className="text-white text-[14px] md:text-[16px] font-bold tracking-[0.07rem]">
              {title}
            </span>
            <span className="text-lightColor text-[12px] md:text-[14px] font-normal tracking-[0.07rem]">
              {description}
            </span>
            <span className="text-[12px] md:text-[14px] font-normal tracking-[0.07rem] ">
              <span className="text-lightColor">Build using &nbsp;</span>
              <span className="text-white">{techStack}</span>
            </span>
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default ProjectCard;
