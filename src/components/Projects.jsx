import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Projects = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full flex justify-center items-center bg-backgroundColor relative p-10 md:p-14 scroll-mt-[70px]"
    >
      <div className="flex flex-col  justify-center items-start gap-6 2xl:w-[1024px]  w-full">
        <motion.div
          className="flex flex-wrap gap-6  justify-center md:justify-start"
          // initial="hidden"
          // // animate="animate"
          // whileInView="animate"
          // exit="hidden"
          // variants={container}
          // viewport={{ once: true, amount: 0 }}
          // viewport={{ amount: 0.4, once: true }}
        >
          
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              techStack={item.techStack}
              url={item.url}
              id={item.id}
            />
          ))}
          {/* </AnimatePresence> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
