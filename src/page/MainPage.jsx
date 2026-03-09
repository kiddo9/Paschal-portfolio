import { NavLink } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react"; // *Optional: Install lucide-react for icons, or remove these
import Projects from "../assets/projects.json";
import Skills from "../assets/skills.json";
import ProjectDisplayCard from "../components/ProjectDisplayCard";
import StackCard from "../components/StackCard";
import FadeUp from "../components/FadeUp";

function Index() {
  return (
    <FadeUp>
      {/* MAIN CONTAINER: Centers content and prevents it from being too wide */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-20">
        {/* HERO SECTION */}
        <section className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-700 bg-gray-900/50 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for hire
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            I'm <span className="text-blue-500">Paschal Elechi</span>.<br />
            <span className="text-gray-500">I build scalable backends.</span>
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Backend & DevOps Developer specializing in{" "}
            <span className="text-gray-200 font-medium">
              Node.js and Golang
            </span>
            . I design real-time systems, optimized APIs, and cloud
            infrastructure that can handle the heat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <NavLink
              to="/projects"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </NavLink>
            <NavLink
              to="/resume"
              className="px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition flex items-center gap-2"
            >
              <FileText size={18} /> Resume
            </NavLink>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Selected Work
              </h2>
              <p className="text-gray-500">
                Real-world applications driving value.
              </p>
            </div>
            <NavLink
              to="/projects"
              className="hidden md:flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
            >
              View all ({Projects.length}) <ArrowRight size={16} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[Projects[0], Projects[15], Projects[16], Projects[17]].map(
              (project) => (
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
              ),
            )}
          </div>

          {/* Mobile "View All" button */}
          <div className="mt-6 md:hidden">
            <NavLink
              to="/projects"
              className="block w-full text-center py-3 border border-gray-800 rounded-lg text-gray-400 hover:bg-gray-900"
            >
              View all projects
            </NavLink>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            <NavLink
              to="/skills"
              className="text-sm text-blue-500 hover:text-blue-400"
            >
              View full toolkit
            </NavLink>
          </div>

          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
            <div className="flex flex-wrap gap-3">
              {Skills.map((skillGroup) =>
                skillGroup.TopSkill.map((skill, index) => (
                  <StackCard key={`${skill}-${index}`} stackName={skill} />
                )),
              )}
            </div>
          </div>
        </section>
      </div>
    </FadeUp>
  );
}

export default Index;
