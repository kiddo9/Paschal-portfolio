import React, { useState } from "react";
import ProjectDisplayCard from "../components/ProjectDisplayCard";
import projects from "../assets/projects.json";
import Skills from "../assets/skills.json";
import FadeUp from "../components/FadeUp";

const Projects = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <FadeUp>
      <div className="md:px-8 flex flex-col space-y-5">
        <div className="flex items-center px-1 py-2 rounded-lg bg-transparent border-[0.001rem] border-[#838383]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-[#838383]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            className="w-full text-slate-300 bg-transparent border-0 outline-none px-3"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className="mt-4 flex overflow-x-auto Scroll gap-4">
          <p
            onClick={() => setSearchValue("")}
            className={`px-3 cursor-pointer shadow-lg backdrop-blur-lg text-slate-300 py-1 text-sm rounded-md  ${
              searchValue == ""
                ? "bg-[#252525] text-white"
                : "border border-[#252525]"
            }`}
          >
            All
          </p>
          {Skills.map((skillGroup: any, groupIndex: any) =>
            skillGroup.AllSkill.map((skill: any, index: any) => (
              <p
                onClick={() => setSearchValue(skill)}
                className={`px-3 cursor-pointer shadow-lg  backdrop-blur-lg text-slate-300 py-1 text-sm rounded-md  ${
                  searchValue == skill
                    ? "bg-[#252525] text-white"
                    : "border border-[#252525]"
                }`}
                key={index}
              >
                {skill[0].toUpperCase() + skill.slice(1).toLowerCase()}
              </p>
            ))
          )}
        </div>

        <div className="mt-5 flex flex-col gap-8 mb-10">
          {projects
            .filter((project: any) => {
              const skills = project.skills.some((skill: any) =>
                skill.toLowerCase().includes(searchValue.toLowerCase())
              );

              const name = project.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());

              const des = project.d
                .toLowerCase()
                .includes(searchValue.toLowerCase());
              return skills || name || des;
            })
            .map((project: any) => (
              <ProjectDisplayCard
                access={project.link}
                key={project.id}
                name={project.name}
                description={project.d}
                stack={project.skills}
                linkedIn={project.linkedIn}
                logo={project.img}
                github={project.GitHub}
                type="img"
              />
            ))}
        </div>
      </div>
    </FadeUp>
  );
};

export default Projects;
