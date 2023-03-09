import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { icons } from "../data";
import { nearestIndex } from "../functions";
import { socialLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";

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
  hidden: (i) => ({
    x: "-100%",
    // scaleX:0,
    // opacity: 0,
    // y:i===1 ? 8.125 : i===2 ? 0 : -8.125,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  }),
  animate: {
    x: "0%",
    // scaleX:1,
    // opacity: 1,
    // y:0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const bgContainer = {
  hidden: {
    // clipPath: "circle(0% at 100% 0)",
    x:"100%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
      // staggerChildren: 0.08,
    },
  },
  animate: {
    // clipPath: "circle(250% at 100% 0)",
    x:"0%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
      staggerChildren: 0.08,
    },
  },
};

const navHamClose = {
  hidden: (i) => ({
    rotate: i === 1 ? 90 : -90,
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  }),
  animate: (i) => ({
    rotate: i == 1 ? 45 : -45,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  }),
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
              <motion.li key={item.id} className="px-4" variants={navLinks}>
                <a
                  className={`transition-colors ease-in-out delay-[50] ${
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
          <AnimatePresence>
          {!open && (
            <motion.div
              variants={navHamContainer}
              exit="hidden"
              initial="hidden"
              whileInView="animate"
              className="flex md:hidden flex-col gap-[6px] overflow-hidden"
              onClick={handleClick}
            >
              <motion.div
                custom={1}
                variants={navHamLines}
                className="w-[22px] h-[2.5px] bg-darkColor rounded-full"
              ></motion.div>
              <motion.div
                custom={2}
                variants={navHamLines}
                className="w-[14px] h-[2.5px] bg-darkColor rounded-full"
              ></motion.div>
              <motion.div
                custom={3}
                variants={navHamLines}
                className="w-[22px] h-[2.5px] bg-darkColor rounded-full"
              ></motion.div>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.div>
      </nav>
      <AnimatePresence>
        {open && (
          <nav className="flex md:hidden fixed top-0 right-0 bottom-0 w-[300px] z-[2] tracking-[0.165rem]">
            {/* <motion.div variants={bgContainer} className="absolute top-0 right-0 bottom-0 w-[300px] z-[3] bg-darkColor"></motion.div> */}

            <motion.div
              initial="hidden"
              whileInView="animate"
              exit="hidden"
              variants={bgContainer}
              className="absolute top-0 right-0 bottom-0 w-[300px]  z-[3] bg-lightColor py-6 px-10 "
            >
              <div className="relative flex justify-center items-center w-full h-full">
                <motion.div
                  className="flex md:hidden flex-col gap-[6px] absolute top-0 right-[10px]"
                  onClick={handleClick}
                >
                  <motion.div
                    custom={1}
                    variants={navHamClose}
                    className="w-[2.5px] h-[25px] rotate-[45deg] absolute top-0 right-0 bg-backgroundColor rounded-full"
                  ></motion.div>
                  <motion.div
                    custom={2}
                    variants={navHamClose}
                    className="w-[2.5px] h-[25px] rotate-[-45deg] absolute top-0 right-0 bg-backgroundColor rounded-full"
                  ></motion.div>
                </motion.div>
                <ul className="flex flex-col justify-center items-center gap-4 tracking-[0.165rem] text-[14px] font-semibold">
                  {navHeaders.map((item) => (
                    <div key={item.id} className="flex overflow-hidden">
                      <motion.li
                        // key={item.id}
                        variants={navLinks}
                        className="px-4 text-darkColor"
                      >
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
                      </motion.li>
                    </div>
                  ))}
                </ul>
                <div className="absolute left-0 right-0 bottom-0 p-4 flex justify-center items-center gap-6">
                  {socialLinks.map((item) => (
                    <div key={item.id} className="flex overflow-hidden">
                      <motion.div variants={navLinks}>
                        <a href={item.url} key={item.id} target="_blank">
                          <Icon
                            icon={item.icon}
                            color="#496363"
                            width="24"
                            height="24"
                          />
                        </a>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
