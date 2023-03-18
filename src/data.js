import { arcanaImg, notabookImg, portfolioImg } from "./assets";

export const icons = {
  twitter: "ph:twitter-logo-fill",
  github: "ph:github-logo-fill",
  linkedin: "ph:linkedin-logo-fill",
  phone: "carbon:phone-voice",
  email: "carbon:mail-all",
  location: "carbon:location-person",
  user: "carbon:user",
  message: "carbon:chat",
  robot: "mdi:robot",
};

export const socialLinks = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/vishnu-k-b3baaa159/",
    icon: icons.linkedin,
  },
  {
    id: 2,
    url: "https://github.com/vishnu-vk",
    icon: icons.github,
  },
  {
    id: 3,
    url: "https://twitter.com/Vishnu53115540/",
    icon: icons.twitter,
  },
];

export const projects = [
  {
    id: 1,
    title: "!aBook",
    img: notabookImg,
    description: "A web application build to keep track of your finances",
    techStack: "React, Tailwind CSS, Firebase, React-Query, TypeScript",
    url: "https://notabook.netlify.app/",
  },
  {
    id: 2,
    title: "Arcana",
    img: arcanaImg,
    description: "Experience different kind of crossword puzzles",
    techStack: "Django",
    url: "https://arcana.onrender.com/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: portfolioImg,
    description: "My personal portfolio website",
    techStack: "React, Tailwind CSS",
    url: "",
  }
];

export const contactDetails = [
  {
    id:1,
    icon:icons.phone,
    title: "Call",
    value: "+91 9744172369" 
  },
  {
    id:2,
    icon:icons.email,
    title: "Mail",
    value: "vvishnu898@gmail.com" 
  },
  {
    id:3,
    icon:icons.location,
    title: "Location",
    value: "Kerala/India" 
  },
]