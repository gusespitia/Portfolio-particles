"use client";

import { SiJavascript,SiMysql, SiGit,SiStrapi, SiTypescript    } from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPhp,  
  FaLaravel,
  
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

import TransitionPage from "@/components/transition-page";

const skills = [
  { id: 1, name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" />, percentage: 70 },
  { id: 2, name: "React", icon: <FaReact size={32} color="#61DAFB" />, percentage: 75 },
  { id: 3, name: "HTML5", icon: <FaHtml5 size={32} color="#E34F26" />, percentage: 85 },
  { id: 4, name: "CSS3", icon: <FaCss3Alt size={32} color="#1572B6" />, percentage: 90 },
  { id: 5, name: "Tailwind", icon: <RiTailwindCssFill size={32} color="#38B2AC" />, percentage: 80 },
  { id: 6, name: "PHP", icon: <FaPhp size={32} color="#787CB5" />, percentage: 70 },
  { id: 7, name: "Git", icon: <SiGit  size={32} color="#F05032" />, percentage: 65 },
  { id: 8, name: "Laravel", icon: <FaLaravel size={32} color="#FF2D20" />, percentage: 60 },
  { id: 9, name: "MySQL", icon: <SiMysql size={32} color="#00758F" />, percentage: 70 },
  { id: 10, name: "Strapi", icon: <SiStrapi size={32} color="#2E7EEA" />, percentage: 75 },
  { id: 11, name: "Vercel", icon: <IoLogoVercel size={32} color="#000000" />, percentage: 80 },
  { id: 12, name: "VSCode", icon: <VscVscode size={32} color="#007ACC" />, percentage: 90 },
  { id: 13, name: "TypeScript", icon: <SiTypescript size={32} color="#007ACC" />, percentage: 70 },
];

const SkillPage = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-28 mb-28 px-6 sm:px-10 lg:px-20 w-full">
      <TransitionPage />

      {/* Header */}
      <h1 className="mb-6 font-semibold text-3xl text-center md:text-4xl">
        My <span className="text-secondary">Skills</span>
      </h1>
      <p className="mb-8 md:mb-12 max-w-xl text-center text-gray-300">
        These are the programming languages and technologies I&apos;m proficient in.
      </p>

      {/* Skills Section */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gray-800 shadow-md hover:shadow-lg p-4 rounded-xl transition-shadow duration-300"
          >
            {/* Skill Icon and Name */}
            <div className="flex items-center gap-4 mb-3">
              <div>{skill.icon}</div>
              <h2 className="font-semibold text-lg text-white md:text-xl">{skill.name}</h2>
            </div>

            {/* Progress Bar */}
            <div className="bg-gray-700 rounded-full w-full h-2.5">
              <div
                className="bg-secondary rounded-full h-2.5 transition-all duration-300"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
            <p className="text-right mt-2 font-medium text-gray-400 text-sm">
              {skill.percentage}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillPage;
