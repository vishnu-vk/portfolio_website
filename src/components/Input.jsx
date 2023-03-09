import React from "react";
import { useField } from "formik";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

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

export const TextInput = ({ ...rest }) => {
  const [field, meta] = useField(rest);
  return (
    <motion.div
      className="w-full flex flex-col gap-2 sm:min-w-[400px]"
      variants={container}
    >
      <div className="flex overflow-hidden">
        <motion.label
          className="text-[14px] text-lightColor tracking-[0.165rem]"
          variants={slideUp}
        >
          {rest.label}
        </motion.label>
      </div>
      <div className="flex overflow-hidden ">
        <motion.div className="flex relative w-full p-1" variants={slideUp}>
          <div className="absolute top-0 left-0 bottom-0 w-[50px] p-[15px]">
            <Icon icon={rest.icon} color="#496363" height="20" width="20" />
          </div>
          <input
            {...field}
            {...rest}
            className={`pl-[50px] w-full h-[50px] rounded-md bg-backgroundColor text-darkColor tracking-[0.165rem] focus-visible:outline-darkColor placeholder:text-lightColor placeholder:font-robotoSlab placeholder:text-[12px] md:placeholder:text-[14px] placeholder:tracking-[0.165rem] ${
              meta.error && meta.touched ? "outline outline-errorRed" : ""
            } `}
          />
        </motion.div>
      </div>
      <div className="flex overflow-hidden">
        <motion.p
          variants={slideUp}
          className={`${
            meta.touched && meta.error ? "flex" : "hidden"
          } font-robotoSlab tracking-[0.165rem] text-[12px] md:text-[14px] text-errorRed`}
        >
          {meta.error}
        </motion.p>
      </div>
    </motion.div>
  );
};

export const TextAreaInput = (rest) => {
  const [field, meta] = useField(rest);
  return (
    <motion.div className="w-full flex flex-col gap-2 sm:min-w-[400px]" variants={container}>
      <div className="flex overflow-hidden">
        <motion.label
          className="text-[14px] text-lightColor tracking-[0.165rem]"
          variants={slideUp}
        >
          {rest.label}
        </motion.label>
      </div>
      <div className="flex overflow-hidden ">
        <motion.div className="flex relative w-full p-1" variants={slideUp}>
          <div className="absolute top-0 left-0 bottom-0 w-[50px] p-[15px]">
            <Icon icon={rest.icon} color="#496363" height="20" width="20" />
          </div>
          <textarea
            {...field}
            {...rest}
            className={`pl-[50px] w-full p-[15px] max-h-[150px] min-h-[100px]  rounded-md bg-backgroundColor text-darkColor tracking-[0.165rem] focus-visible:outline-darkColor placeholder:text-lightColor placeholder:font-robotoSlab placeholder:text-[12px] md:placeholder:text-[14px] placeholder:tracking-[0.165rem] ${
              meta.error && meta.touched ? "outline outline-errorRed" : ""
            } `}
          ></textarea>
        </motion.div>
      </div>

      <div className="flex overflow-hidden">
        <motion.p
          variants={slideUp}
          className={`${
            meta.touched && meta.error ? "flex" : "hidden"
          } font-robotoSlab tracking-[0.165rem] text-[12px] md:text-[14px] text-errorRed`}
        >
          {meta.error}
        </motion.p>
      </div>
    </motion.div>
  );
};
