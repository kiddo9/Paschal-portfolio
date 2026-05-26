import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Download,
  Mail,
  Github,
  Linkedin,
  Lock,
  MessageSquare,
  BookOpen,
  Briefcase,
} from "lucide-react";
import Projects from "../assets/projects.json";
import Skills from "../assets/skills.json";
import ProjectDisplayCard from "../components/ProjectDisplayCard";
import StackCard from "../components/StackCard";
import FadeUp from "../components/FadeUp";

function Index() {
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
      {/* MAIN CONTAINER: Centers content and prevents it from being too wide */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-32">
        {/* HERO SECTION */}
        <section className="space-y-6 pt-4 md:pt-10">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-700 bg-gray-900/50 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for hire
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            I&apos;m <span className="text-blue-500">Paschal Elechi</span>.
            <br />
            <span className="text-gray-200">
              I build the systems that keep <br className="hidden md:block" />
              production running.
            </span>
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Backend & DevOps Developer. I design{" "}
            <span className="text-white font-medium">real-time systems</span>,{" "}
            <span className="text-white font-medium">optimized APIs</span>, and{" "}
            <span className="text-white font-medium">cloud infrastructure</span>{" "}
            using Node.js and Golang.
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed italic border-l-2 border-blue-500/30 pl-4 mt-2">
            &quot;I got into infrastructure because I was tired of building APIs
            that worked locally but broke in production. Now, I design both the
            service and the environment it runs on, focusing on reliability at
            scale.&quot;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <NavLink
              to="/projects"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-white/5"
            >
              View My Work <ArrowRight size={20} />
            </NavLink>
            <button
              onClick={handleDownload}
              className="px-8 py-4 border border-gray-700 text-gray-300 font-bold rounded-xl hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all active:scale-95 flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </button>
            <NavLink
              to="/resume"
              className="px-6 py-4 text-gray-500 font-semibold hover:text-gray-300 transition-all flex items-center gap-2"
            >
              <FileText size={18} /> Online Resume
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
                  img={Projects[15] && project.img}
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

        {/* ENTERPRISE & PROFESSIONAL WORK SECTION */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Lock className="text-blue-500" size={28} /> Enterprise &
              Professional Work
            </h2>
            <p className="text-gray-500 italic">
              High-impact projects delivered for organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase size={80} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Public API Infrastructure (Rojifi)
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Engineered the V1 infrastructure for public API consumption.
                Enabled service providers to securely expose and consume gRPC
                services at scale.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Go", "gRPC", "Gin", "Docker", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Outcome: 100% service uptime during initial rollout.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase size={80} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Automated Exam Simulation (Neo Cloud)
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Architected a CBT question bank and simulation system. Solved
                data integrity issues in high-concurrency environments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Sequelize", "Nginx", "GitHub Actions"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded"
                    >
                      #{tech}
                    </span>
                  ),
                )}
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Outcome: Reduced administrative overhead by 40%.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500 flex items-center gap-2 justify-center">
            <Lock size={14} /> Code available under NDA — happy to walk through
            architecture in an interview.
          </p>
        </section>

        {/* EXPERIENCE SECTION */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Professional Experience
            </h2>
            <p className="text-gray-500">
              My journey through backend engineering and infrastructure.
            </p>
          </div>

          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l border-gray-800 group">
              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Backend Developer
                  </h3>
                  <p className="text-blue-500 font-medium">
                    Rojifi Technology INC
                  </p>
                </div>
                <span className="text-sm font-mono text-gray-500 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                  Dec 2025 - Present
                </span>
              </div>
              <ul className="space-y-3 text-gray-400 text-base leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span>
                    Architected and engineered backend services using{" "}
                    <strong className="text-gray-200">
                      Go, Node.js, Redis, and PostgreSQL
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span>
                    Built{" "}
                    <strong className="text-gray-200">Rojifi Infra V1</strong>,
                    enabling public API consumption via gRPC and Gin.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span>
                    Containerized core services with{" "}
                    <strong className="text-gray-200">Docker</strong> to ensure
                    production environment consistency.
                  </span>
                </li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l border-gray-800 group">
              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gray-700 group-hover:bg-blue-500/50 transition-colors"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Backend & DevOps Intern
                  </h3>
                  <p className="text-blue-500 font-medium">
                    Neo Cloud Technologies
                  </p>
                </div>
                <span className="text-sm font-mono text-gray-500 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                  Apr 2025 - Sept 2025
                </span>
              </div>
              <ul className="space-y-3 text-gray-400 text-base leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span>
                    Built a{" "}
                    <strong className="text-gray-200">
                      CBT Question Bank System
                    </strong>{" "}
                    with high concurrency handling using Node.js.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span>
                    Implemented{" "}
                    <strong className="text-gray-200">CI/CD pipelines</strong>{" "}
                    with GitHub Actions, reducing deployment overhead by 40%.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 mt-1.5">•</span>
                  <span>
                    Configured <strong className="text-gray-200">Nginx</strong>{" "}
                    reverse proxies and SSL termination for secure cloud
                    deployments.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <NavLink
              to="/resume"
              className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors"
            >
              View Full Work History <ArrowRight size={16} />
            </NavLink>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        {/* <section>
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <MessageSquare className="text-blue-500" size={28} /> What Colleagues Say
            </h2>
            <p className="text-gray-500 italic">Peer recognition of technical delivery and leadership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/20 relative">
              <div className="text-blue-500 absolute -top-4 -left-2 text-6xl font-serif opacity-20">&ldquo;</div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed relative z-10">
                Paschal delivered the API two days early and wrote documentation that the whole team still uses. His focus on production reliability changed how we deploy.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-500 font-bold">SC</div>
                <div>
                  <p className="text-white font-bold text-sm">Senior Colleague</p>
                  <p className="text-gray-500 text-xs">Neo Cloud Technologies</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/20 relative">
              <div className="text-blue-500 absolute -top-4 -left-2 text-6xl font-serif opacity-20">&ldquo;</div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed relative z-10">
                Paschal&apos;s ability to simplify complex gRPC architectures is impressive. He doesn&apos;t just write code; he thinks about the infrastructure lifecycle.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-blue-500 font-bold">EM</div>
                <div>
                  <p className="text-white font-bold text-sm">Engineering Manager</p>
                  <p className="text-gray-500 text-xs">Rojifi Technology</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* TECHNICAL WRITING & THOUGHT LEADERSHIP SECTION */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <BookOpen className="text-blue-500" size={28} /> Writing & Thought
              Leadership
            </h2>
            <p className="text-gray-500">
              Sharing insights on backend engineering and infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="https://dev.to"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
            >
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  How I set up gRPC-Web with Envoy Proxy in Go
                </h3>
                <p className="text-sm text-gray-500">
                  Technical guide on bridging gRPC-Web to a Go backend using
                  Envoy.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-500 group-hover:text-blue-400 font-medium text-sm">
                Read on Dev.to <ArrowRight size={16} />
              </div>
            </a>

            <a
              href="https://hashnode.com"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
            >
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Deploying to AWS EC2 with GitHub Actions and Nginx
                </h3>
                <p className="text-sm text-gray-500">
                  A step-by-step walkthrough of building a robust CI/CD pipeline
                  for cloud deployment.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-500 group-hover:text-blue-400 font-medium text-sm">
                Read on Hashnode <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Technical Expertise
              </h2>
              <p className="text-gray-500">
                Specialized in high-performance backend systems.
              </p>
            </div>
            <NavLink
              to="/skills"
              className="text-sm text-blue-500 hover:text-blue-400 font-medium"
            >
              View Full Toolkit
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Backend & Languages */}
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Backend & Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Go",
                  "Node.js",
                  "TypeScript",
                  "Laravel",
                  "PHP",
                  "Express.js",
                  "Gin",
                ].map((skill) => (
                  <StackCard key={skill} stackName={skill} />
                ))}
              </div>
            </div>

            {/* Protocols & Real-time (Senior Signaling) */}
            <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 space-y-4">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                Protocols & Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "gRPC",
                  "Protobuf",
                  "WebSockets",
                  "Envoy Proxy",
                  "REST APIs",
                  "GraphQL",
                  "Redis",
                ].map((skill) => (
                  <StackCard key={skill} stackName={skill} />
                ))}
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                DevOps & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Docker",
                  "Docker Compose",
                  "Nginx",
                  "GitHub Actions",
                  "Azure",
                  "AWS",
                  "CI/CD",
                ].map((skill) => (
                  <StackCard key={skill} stackName={skill} />
                ))}
              </div>
            </div>

            {/* Databases & Storage */}
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30 space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Databases & Storage
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Redis",
                  "Sequelize",
                  "Eloquent",
                ].map((skill) => (
                  <StackCard key={skill} stackName={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* ATS HIDDEN LIST: Invisible to users, readable by bots */}
          <div className="sr-only" aria-hidden="true">
            <h3>Full Skills List for ATS</h3>
            <ul>
              {Skills.map((group) =>
                group.TopSkill.map((skill) => <li key={skill}>{skill}</li>),
              )}
              <li>gRPC</li>
              <li>Protobuf</li>
              <li>Envoy Proxy</li>
              <li>WebSockets</li>
              <li>CI/CD</li>
              <li>Microservices</li>
            </ul>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="pt-10 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Let&apos;s build something great.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                I&apos;m currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:paschalelechi0@gmail.com"
                  className="flex items-center gap-4 text-white hover:text-blue-500 transition-all group"
                >
                  <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                      Email Me
                    </span>
                    <span className="text-lg font-medium">
                      paschalelechi0@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/kiddo9"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
                    title="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/elechi-paschal-18ab85312/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-gray-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://calendly.com/paschalelechi0"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                  >
                    Book a Call
                  </a>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 font-bold rounded-xl hover:bg-gray-800 transition-all active:scale-95"
                  >
                    <Download size={18} /> Download CV
                  </button>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm">
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </FadeUp>
  );
}

export default Index;
