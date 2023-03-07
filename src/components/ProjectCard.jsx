import React from "react";

const ProjectCard = ({ title, img, description, techStack,url }) => {
  return (
    <a href={url} target='_blank'>
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
    </a>
  );
};

export default ProjectCard;
