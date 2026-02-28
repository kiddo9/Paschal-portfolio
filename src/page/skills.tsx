import React, { useMemo } from "react";
import Skills from "../assets/skills.json";
import StackCard from "../components/StackCard";
import FadeUp from "../components/FadeUp";

const About = () => {
  // 1. Extract the single flat list of skills from your JSON
  const rawSkills = Skills[0].AllSkill;

  // 2. Logic to categorize skills automatically
  const categorizedSkills = useMemo(() => {
    const categories = {
      "Backend & Database": [
        "laravel",
        "nodejs",
        "go",
        "php",
        "sequelize",
        "mysql",
        "postgres",
        "redis",
        "mongodb",
        "grpc",
        "gin",
        "gorm",
        "solidity",
        "expressjs",
      ],
      Frontend: ["react", "html", "css", "js", "ts", "tailwind", "nextjs"],
      "DevOps & Cloud": [
        "docker",
        "kubernetes",
        "nginx",
        "azure",
        "githubactions",
        "aws",
      ],
      "Tools & Version Control": ["git", "github", "vscode", "postman", "trae"],
    };

    // Create the grouped object
    const grouped = {
      "Backend & Database": [],
      Frontend: [],
      "DevOps & Cloud": [],
      "Tools & Version Control": [],
      Others: [],
    };

    // Sort each skill into its bucket
    rawSkills.forEach((skill: any) => {
      const lowerSkill = skill.toLowerCase();
      let found = false;

      for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.includes(lowerSkill)) {
          grouped[category].push(skill);
          found = true;
          break;
        }
      }
      if (!found) grouped["Others"].push(skill);
    });

    return grouped;
  }, [rawSkills]);

  return (
    <FadeUp>
      <div className="w-full max-w-5xl mx-auto space-y-12 pb-20">
        {/* --- Header --- */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Technical <span className="text-blue-500">Toolkit</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I specialize in building robust backends, but I maintain a
            full-stack view of every project. Here is the stack I use to bring
            ideas to life.
          </p>
        </div>

        {/* --- Categorized Grid --- */}
        <div className="grid grid-cols-1 gap-8">
          {Object.entries(categorizedSkills).map(
            ([categoryName, skills]: any) => {
              // Don't render empty categories
              if (skills.length === 0) return null;

              return (
                <div key={categoryName} className="space-y-4">
                  {/* Section Title */}
                  <h3 className="text-xl font-semibold text-gray-200 border-l-4 border-blue-500 pl-3">
                    {categoryName}
                  </h3>

                  {/* Skills Container */}
                  <div className="flex flex-wrap gap-3 p-6 rounded-2xl border border-white/5 bg-[#1f1f1f]">
                    {skills.map((skill: any, index: any) => (
                      <StackCard
                        key={`${categoryName}-${index}`}
                        stackName={skill}
                        showName={true}
                      />
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>

        {/* --- GitHub Activity Chart (Optional) --- */}
        <div className="pt-8 border-t border-white/5 mt-8">
          <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            Days I Code
          </h3>
          <div className="overflow-x-auto pb-4">
            {/* Only works if your GitHub username is 'kiddo9' as per your earlier link */}
            <img
              src="https://ghchart.rshah.org/212121/kiddo9"
              alt="GitHub Contributions"
              className="min-w-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </FadeUp>
  );
};

export default About;
