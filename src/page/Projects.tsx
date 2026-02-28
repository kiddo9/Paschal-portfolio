import React, { useState, useMemo } from "react";
import ProjectDisplayCard from "../components/ProjectDisplayCard";
import projects from "../assets/projects.json";
import Skills from "../assets/skills.json";
import FadeUp from "../components/FadeUp";
import { Search, X } from "lucide-react"; // Import icons

const Projects = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Memoize filtered projects to prevent unnecessary re-calculations
  const filteredProjects = useMemo(() => {
    if (!searchValue) return projects;

    const lowerSearch = searchValue.toLowerCase();

    return projects.filter((project: any) => {
      // Search by tech stack
      const hasSkill = project.skills.some((skill: string) =>
        skill.toLowerCase()?.includes(lowerSearch),
      );
      // Search by name
      const hasName = project.name.toLowerCase().includes(lowerSearch);
      // Search by description
      const hasDesc = project.d.toLowerCase().includes(lowerSearch);

      return hasSkill || hasName || hasDesc;
    });
  }, [searchValue]);

  // Flatten all skills into a single unique list for the filter chips
  // (Optional: You can keep your existing map if you prefer that structure)
  const allSkills = Array.from(
    new Set(Skills.flatMap((group: any) => group.AllSkill)),
  ).sort();

  return (
    <FadeUp>
      <div className="w-full space-y-8 pb-20">
        {/* --- HEADER SECTION --- */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h1>
          <p className="text-gray-400 max-w-xl">
            A collection of backend systems, APIs, and DevOps configurations
            I've built. Search by tech stack (e.g., "Laravel", "Docker") or
            project name.
          </p>
        </div>

        {/* --- SEARCH & FILTER SECTION --- */}
        <div className="sticky top-16 z-30 bg-[#151515]/90 backdrop-blur-xl py-4 -mx-4 px-4 md:mx-0 md:px-0 border-b border-white/5 md:border-none md:bg-transparent md:backdrop-blur-none md:static">
          {/* Search Bar */}
          <div className="relative group max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-xl leading-5 bg-[#1f1f1f] text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-[#252525] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 sm:text-sm transition-all duration-200"
              placeholder="Search projects..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* Clear Button */}
            {searchValue && (
              <button
                onClick={() => setSearchValue("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter Chips (Scrollable) */}
          <div className="mt-4 flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
            {/* 'All' Chip */}
            <button
              onClick={() => setSearchValue("")}
              className={`
                        whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                        ${
                          searchValue === ""
                            ? "bg-white text-black border-white"
                            : "bg-[#1f1f1f] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
                        }
                    `}
            >
              All
            </button>

            {/* Skill Chips */}
            {allSkills.map((skill: any, index: number) => (
              <button
                key={index}
                onClick={() => setSearchValue(skill)}
                className={`
                            whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                            ${
                              searchValue === skill
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-[#1f1f1f] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
                            }
                        `}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project: any) => (
              <div className="mt-3">
                <ProjectDisplayCard
                  key={project.id}
                  name={project.name}
                  description={project.d}
                  stack={project.skills}
                  linkedIn={project.linkedIn}
                  // Pass blank string if undefined to match your logic
                  github={project.GitHub || ""}
                  access={project.link}
                  // Optional: You can map your 'img' to the 'PR' prop or remove it if not needed
                  PR={""}
                />
              </div>
            ))}
          </div>
        ) : (
          // --- EMPTY STATE ---
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-800/50 p-4 rounded-full mb-4">
              <Search size={32} className="text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300">
              No projects found
            </h3>
            <p className="text-gray-500 mt-2">
              Try searching for a different skill or keyword.
            </p>
            <button
              onClick={() => setSearchValue("")}
              className="mt-6 text-blue-500 hover:text-blue-400 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </FadeUp>
  );
};

export default Projects;
