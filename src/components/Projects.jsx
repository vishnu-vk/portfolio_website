import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full flex justify-center items-center bg-backgroundColor relative p-10 md:p-14 scroll-mt-[70px]"
    >
      <div className="flex flex-col  justify-center items-start gap-6  w-full">
        <div className="flex flex-wrap gap-6  justify-center md:justify-start">
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              techStack={item.techStack}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
