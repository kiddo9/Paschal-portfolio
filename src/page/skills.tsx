import React from "react";
import Skills from "../assets/skills.json";
import StackCard from "../components/StackCard";

const About = () => {
  return (
    <div className="mt-10 lg:px-20 mb-36 lg:mb-[26rem] px-3">
      <h1 className="text-xl flex justify-between text-[#838383]">
        All Skills
      </h1>
      <div className="flex flex-wrap gap-3 mt-4">
        {Skills.map((skillGroup: any, groupIndex: any) =>
          skillGroup.AllSkill.map((skill: any, index: any) => (
            <StackCard key={`${groupIndex}-${index}`} stackName={skill} />
          ))
        )}
      </div>
    </div>
  );
};

export default About;
