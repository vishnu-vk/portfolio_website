import React from "react";
import { motion } from "framer-motion";

const slideUp = {
  hidden: {
    // opacity: 0,
    y: "100%",
    // scale: "0%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
  animate: {
    // scale: "100%",
    y: "0%",
    // opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <section className="w-full flex justify-center items-center bg-darkColor  py-6 px-10 ">
      <div className="flex overflow-hidden">
      <motion.h1 className="text-[14px] font-bold tracking-[0.165rem] text-center text-white" variants={slideUp} initial="hidden" whileInView="animate" viewport={{ once: true, amount: 0 }}>
        Vishnu K &copy; 2023
      </motion.h1>
      </div>
    </section>
  );
};

export default Footer;
