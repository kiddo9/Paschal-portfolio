import React, { useState } from "react";
import ProjectDisplayCard from "../components/ProjectDisplayCard";
import projects from "../assets/projects.json";
import Skills from "../assets/skills.json";

const Projects = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="px-4 h-full">
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

      <div className="flex mx-auto overflow-x-scroll Scroll px-3 w-[19rem] sm:w-[38rem] md:w-[95vw] gap-3 mt-6">
        <p
          onClick={() => setSearchValue("")}
          className={`px-3 cursor-pointer shadow-lg border backdrop-blur-lg text-slate-300 py-1 text-sm rounded-md border-[#838383] ${
            searchValue == "" ? "bg-slate-500 text-gray-300" : ""
          }`}
        >
          All
        </p>
        {Skills.map((skillGroup: any, groupIndex: any) =>
          skillGroup.AllSkill.map((skill: any, index: any) => (
            <p
              onClick={() => setSearchValue(skill)}
              className={`px-3 cursor-pointer shadow-lg border backdrop-blur-lg text-slate-300 py-1 text-sm rounded-md border-[#838383] ${
                searchValue == skill ? "bg-slate-500 text-gray-300" : ""
              }`}
              key={index}
            >
              {skill[0].toUpperCase() + skill.slice(1).toLowerCase()}
            </p>
          ))
        )}
      </div>

      <div className="flex flex-col gap-10 flex-wrap  mt-7">
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
  );
};

export default Projects;
