import { NavLink } from "react-router-dom";
import Projects from "../assets/projects.json";
import Skills from "../assets/skills.json";
import ProjectDisplayCard from "../components/ProjectDisplayCard";
import StackCard from "../components/StackCard";
import FadeUp from "../components/FadeUp";

function Index() {
  return (
    <FadeUp>
      <div className="flex">
        <p className="text-gray-300 leading-8">
          Hey there! I am <b className="font-semibold">Paschal Elechi</b>. I'm a
          Backend and DevOps Developer with a strong focus on backend
          development and a passion for building scalable, real-time
          applications. I work with technologies like Laravel, Node.js and
          React, and I’m actively growing my skills in Go and Solidity. I’ve
          built chat systems, Admin panels, and e-commerce platforms—always
          pushing for clean code, optimized performance, and real-world impact.
          I love working on projects that challenge me to think deeper about
          system architecture, real-time communication, and problem-solving at
          scale.
        </p>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-xl text-white">
          Best Projects{" "}
          <span className="text-[#838383] border-b border-dashed border-[#838383]">
            (Backend & DevOps)
          </span>
        </h2>
        <NavLink to="/projects" className="text-[#838383]">
          View more
        </NavLink>
      </div>

      <div className=" gap-10  grid-cols-1 grid md:grid-cols-2 mt-10">
        {Projects.slice(0, 4).map((project) => (
          <ProjectDisplayCard
            access={project.link}
            key={project.id}
            name={project.name}
            description={project.d}
            stack={project.skills}
            linkedIn={project.linkedIn}
            github={project.GitHub}
            type="img"
          />
        ))}
      </div>

      <div className="mt-10">
        <h1 className="text-xl flex justify-between text-[#838383]">
          Top Skill <NavLink to={"/skills"}>see all</NavLink>
        </h1>
        <div className="flex flex-wrap gap-3 mt-4">
          {Skills.map((skillGroup, groupIndex) =>
            skillGroup.TopSkill.map((skill, index) => (
              <StackCard key={`${groupIndex}-${index}`} stackName={skill} />
            ))
          )}
        </div>
      </div>
    </FadeUp>
  );
}

export default Index;
