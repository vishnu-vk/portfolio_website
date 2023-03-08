import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { icons } from "../data";
import { nearestIndex } from "../functions";
import { socialLinks } from "../data";
import { motion } from "framer-motion";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const navLinks = {
  hidden: {
    y: "100%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const navHamContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const navHamLines = {
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
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const NavBar = ({ navHeaders }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevActiveIndex, setPrevActiveIndex] = useState(0);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY == 0) {
        setActiveIndex(0);
      } else {
        var completelyvisibleSections = [];
        navHeaders.map((item, index) => {
          let scrollY = window.scrollY;
          const height = window.innerHeight;
          const sectionHeight = item.ref.current.offsetHeight;
          const sectionTop = item.ref.current.offsetTop;
          if (scrollY + 70 <= sectionTop) {
            if (scrollY + height >= sectionHeight + sectionTop) {
              completelyvisibleSections.push(index);
            }
          }
        });
        var index = completelyvisibleSections.pop();
        if (index === undefined) {
          var nextfeasibleIndex = nearestIndex(
            window.scrollY,
            navHeaders,
            0,
            3
          );
          if (nextfeasibleIndex === undefined) {
            setActiveIndex(prevActiveIndex);
          } else {
            setPrevActiveIndex(activeIndex);
            setActiveIndex(nextfeasibleIndex);
          }
        } else {
          setPrevActiveIndex(activeIndex);
          setActiveIndex(index);
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="py-6 px-10 md:px-14 md:py-6 fixed top-0 left-0 right-0 z-[1] justify-center  flex backdrop-blur-sm bg-backgroundColor/70 overflow-hidden h-[70px] tracking-[0.165rem]">
        <motion.div
          animate="animate"
          initial="hidden"
          variants={container}
          className="flex  justify-between items-center overflow-hidden w-full 2xl:w-[1024px]"
        >
          <motion.div
            className="hidden md:flex text-[16px] font-bold text-darkColor"
            variants={navLinks}
          >
            <Icon icon={icons.robot} color="#496363" width="30" height="30" />
          </motion.div>
          <motion.div
            className="flex md:hidden text-[16px] font-bold text-darkColor"
            variants={navLinks}
          >
            {navHeaders[activeIndex].title}
          </motion.div>
          <ul className="hidden md:flex justify-end items-center gap-6 tracking-[0.165rem] text-[14px] font-semibold">
            {navHeaders.map((item) => (
              <motion.li
                key={item.id}
                className="px-4 text-darkColor "
                variants={navLinks}
              >
                <a
                  className={`${
                    activeIndex == item.id
                      ? "text-darkColor"
                      : "text-lightColor"
                  }`}
                  href={item.path}
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            variants={navHamContainer}
            className="flex md:hidden flex-col gap-[6px] overflow-hidden"
            onClick={handleClick}
          >
            <motion.div variants={navHamLines} className="w-[22px] h-[2.5px] bg-darkColor rounded-full"></motion.div>
            <motion.div variants={navHamLines} className="w-[14px] h-[2.5px] bg-darkColor rounded-full"></motion.div>
            <motion.div variants={navHamLines} className="w-[22px] h-[2.5px] bg-darkColor rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </nav>
      {open && (
        <nav className="flex md:hidden fixed top-0 right-0 bottom-0 w-[300px] z-[2] tracking-[0.165rem]">
          <div className="absolute top-0 right-0 bottom-0 w-[300px] z-[3] bg-darkColor"></div>
          <div className="absolute top-0 right-0 bottom-0 w-[300px]  z-[3] bg-lightColor py-6 px-10">
            <div className="relative flex justify-center items-center w-full h-full">
              <div
                className="flex md:hidden flex-col gap-[6px] absolute top-0 right-[10px]"
                onClick={handleClick}
              >
                <div className="w-[2.5px] h-[25px] rotate-[45deg] absolute top-0 right-0 bg-backgroundColor rounded-full"></div>
                <div className="w-[2.5px] h-[25px] rotate-[-45deg] absolute top-0 right-0 bg-backgroundColor rounded-full"></div>
              </div>
              <ul className="flex flex-col justify-center items-center gap-4 tracking-[0.165rem] text-[14px] font-semibold">
                {navHeaders.map((item) => (
                  <li key={item.id} className="px-4 text-darkColor">
                    <a
                      className={`${
                        activeIndex == item.id
                          ? "text-darkColor"
                          : "text-backgroundColor"
                      }`}
                      href={item.path}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="absolute left-0 right-0 bottom-0 p-4 flex justify-center items-center gap-6">
                {socialLinks.map((item) => (
                  <a href={item.url} key={item.id} target="_blank">
                    <Icon
                      icon={item.icon}
                      color="#496363"
                      width="24"
                      height="24"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
