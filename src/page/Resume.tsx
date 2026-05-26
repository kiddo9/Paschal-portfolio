import React from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Cpu,
} from "lucide-react";
import FadeUp from "../components/FadeUp";
import projects from "../assets/projects.json";

const ResumeTemplate = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Paschal_Elechi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <FadeUp>
      <div className="w-full max-w-5xl mx-auto pb-20">
        {/* --- Header & Download Actions --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Paschal Elechi
            </h1>
            <p className="text-xl text-blue-500 font-medium">
              Backend & DevOps Developer
            </p>
            <p className="text-gray-400 mt-2 max-w-lg text-sm leading-relaxed">
              Building scalable, real-time systems with Node.js and Go. &quot;I got into infrastructure because I was tired of building APIs that worked locally but broke in production. Now, I design both the service and the environment it runs on.&quot;
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all active:scale-95"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            Download CV
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN (Sidebar) --- */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[#1f1f1f]">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Terminal size={18} className="text-blue-500" /> Contact
              </h3>
              <div className="space-y-4 text-sm text-gray-400">
                <a
                  href="mailto:paschalelechi0@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Mail size={16} /> paschalelechi0@gmail.com
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={16} /> Anambra, Nigeria
                </div>
                <a
                  href="https://linkedin.com/in/elechi-paschal-18ab85312/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Linkedin size={16} /> LinkedIn Profile
                </a>
                <a
                  href="https://github.com/kiddo9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Github size={16} /> github.com/kiddo9
                </a>
                <a
                  href="https://paschal-portfolio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Globe size={16} /> Portfolio
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[#1f1f1f]">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-blue-500" /> Education
              </h3>
              <div className="relative border-l border-gray-700 ml-2 pl-6 pb-2">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                <h4 className="text-white font-medium">
                  B.Sc. Computer Science
                </h4>
                <p className="text-blue-400 text-xs mb-1">
                  Igbinedion University, Okada
                </p>
                <p className="text-gray-500 text-xs mb-2">2022 - 2026</p>
                <p className="text-gray-400 text-sm">GPA: 4.91 / 5.0</p>
              </div>
              <div className="relative border-l border-gray-700 ml-2 pl-6 pb-2">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                <h4 className="text-white font-medium">Science</h4>
                <p className="text-blue-400 text-xs mb-1">
                  Marist Comprehensive College, Nteje
                </p>
                <p className="text-gray-500 text-xs mb-2">2016 - 2022</p>
                <p className="text-gray-400 text-sm"></p>
              </div>
            </div>

            {/* Key Skills (Compact View) */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[#1f1f1f]">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-blue-500" /> Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Go",
                  "Node.js",
                  "Docker",
                  "mysql",
                  "PostgreSQL",
                  "Redis",
                  "mongodb",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Main Content) --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-500" /> Experience
              </h3>

              <div className="space-y-8">
                {/* Job 1 */}
                <div className="relative pl-8 border-l border-gray-800">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-[#151515] bg-blue-500"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h4 className="text-xl font-bold text-gray-100">
                      Backend Developer
                    </h4>
                    <span className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded">
                      Dec 2025 - Present
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">
                    Rojifi Technology INC
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm leading-relaxed">
                    <li>
                      Contributed to the development of the{" "}
                      <strong className="text-gray-200">Landing Page</strong>{" "}
                      using React.js.
                    </li>
                    <li>
                      Developed the core application using{" "}
                      <strong className="text-gray-200">Docker</strong> and
                      React.js.
                    </li>
                    <li>Built the Admin Panel dashboard using React.js.</li>
                    <li>
                      Engineered backend services using Redis, MongoDB,
                      PostgreSQL, Node.js, Express.js, and Golang.
                    </li>
                    <li>
                      Built the version 1 rojifi infra where user can become an
                      Api service provider and consume our public api. Built
                      with GO, gin, grpc
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="relative pl-8 border-l border-gray-800">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-[#151515] bg-blue-500"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h4 className="text-xl font-bold text-gray-100">
                      Deputy Director of Technology and Innovations
                    </h4>
                    <span className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded">
                      Nov 2025 - present
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">
                    Igbinedion University, Okada (NACOS)
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm leading-relaxed">
                    <li>
                      Lab Configuration: Prepared the software lab for student
                      use by installing industry-standard tools (VS Code,
                      PyCharm, Figma) and setting up virtual environments for
                      cybersecurity practicals.
                    </li>
                    <li>
                      Resource Sharing: provided courses (Web Development,
                      Python, Ethical Hacking and SQL) on all systems, ensuring
                      students had free access to quality learning materials.
                    </li>
                    <li>
                      Organized a tech awareness event and a mini hackathon for
                      year 1 year to 3 year student{" "}
                    </li>
                    {/*<li>
                      Configured Nginx as a reverse proxy to handle load
                      balancing and SSL termination.
                    </li> */}
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="relative pl-8 border-l border-gray-800">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-[#151515] bg-blue-500"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h4 className="text-xl font-bold text-gray-100">
                      Backend & DevOps Intern
                    </h4>
                    <span className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded">
                      Apr 2025 - Sept 2025
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">
                    Neo Cloud Technologies
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm leading-relaxed">
                    <li>
                      Architected the backend for a{" "}
                      <strong className="text-gray-200">
                        CBT Question Bank System
                      </strong>{" "}
                      using Node.js and PostgreSQL.
                    </li>
                    <li>
                      Containerized applications using{" "}
                      <strong className="text-gray-200">Docker</strong> and
                      orchestrated deployments via Azure.
                    </li>
                    <li>
                      Implemented secure CI/CD pipelines with GitHub Actions,
                      reducing deployment time by 40%.
                    </li>
                    <li>
                      Configured Nginx as a reverse proxy to handle load
                      balancing and SSL termination.
                    </li>
                  </ul>
                </div>

                {/* Volunteer Job */}
                <div className="relative pl-8 border-l border-gray-800">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-[#151515] bg-gray-600"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-300">
                      Full Stack Volunteer
                    </h4>
                    <span className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded">
                      2025
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">
                    Startup Initiative
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm leading-relaxed">
                    <li>
                      Collaborated with a cross-functional team to build MVP
                      features for a local startup.
                    </li>
                    <li>
                      Focused on API development and database schema design.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Key Projects Section */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="text-blue-500" /> Key Projects
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {projects[0].name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {projects[0].d}
                  </p>
                  <div className="mt-4 flex gap-2 text-xs text-gray-400 font-mono flex-wrap">
                    {projects[0].skills.map((skill: any) => (
                      <span>#{skill}</span>
                    ))}
                    {/* <span>#Laravel</span> <span>#Redis</span>{" "}
                    <span>#Docker</span> */}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {projects[2].name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {projects[2].d}
                  </p>
                  <div className="mt-4 flex gap-2 text-xs text-gray-400 font-mono flex-wrap">
                    {projects[2].skills.map((skill: any) => (
                      <span>#{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {projects[15].name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {projects[15].d}
                  </p>
                  <div className="mt-4 flex gap-2 text-xs text-gray-400 font-mono flex-wrap">
                    {projects[15].skills.map((skill: any) => (
                      <span>#{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {projects[16].name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {projects[16].d}
                  </p>
                  <div className="mt-4 flex gap-2 text-xs text-gray-400 font-mono flex-wrap">
                    {projects[16].skills.map((skill: any) => (
                      <span>#{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-[#1f1f1f] to-[#151515] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {projects[14].name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {projects[14].d}
                  </p>
                  <div className="mt-4 flex gap-2 text-xs text-gray-400 font-mono flex-wrap">
                    {projects[14].skills.map((skill: any) => (
                      <span>#{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </FadeUp>
  );
};

export default ResumeTemplate;
