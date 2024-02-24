import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import stdDfcncyPortal from "@/public/Project1.png";
import mozamAuto from "@/public/Project2.png";
import projMaria from "@/public/Project3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Manila, Philippines",
    description:
      "I graduated with a Bachelor of Science in Computer Engineering from Polytechnic University of the Philippines, Manila. I took the course for 4 years while taking certification courses online.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "IT Intern",
    location: "Singapore",
    description:
      "I worked as an IT Intern for Knowles Training Institute 3 months. My job consists of researching for their online courses and creating sites using Wordpress.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Maputo, Mozambique",
    description:
      "I was hired as a full-stack developer working as a freelancer for a truck company in Mozambique. I created a platform for MozamAuto to sell trucks and truckparts.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Project Maria",
    description:
      "I worked as a front-end developer on this project for 18 months. It is a rescuee system for mountaineers.",
    tags: ["HTML", "CSS", "JavaScript", "Android Studio", "Express JS", "Python", "C++", "ESP32"],
    imageUrl: stdDfcncyPortal,
    href: "https://github.com/studentmorrisjohn/Maria-DMS"
  },
  {
    title: "MozamAuto",
    description:
      "As a full-stack developer, created platform for a truck company to sell their products and showcase their team.",
    tags: ["React", "Tailwind", "NodeJS", "ExpressJS"],
    imageUrl: mozamAuto,
    href: "https://github.com/SeiyaMigeru/Mozamauto"
  },
  {
    title: "PUP Student Deficiency Portal",
    description:
      "A web app for student deficiencies in Polytechnic University of the Philippines. I also worked as a frontend developer on this project.",
    tags: ["ReactJS", "Python", "Django",],
    imageUrl: projMaria,
    href: "https://github.com/studentmorrisjohn/deficiency_portal_frontend"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
  "Andorid Studio",
] as const;