import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Award,
  BookOpen,
  Users,
  Briefcase,
} from "lucide-react";
import FadeUp from "../components/FadeUp";

const ResumeTemplate = () => {
  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/ELECHI-PASCHAL-CHINEMELUM-CV-Resume-20240712.pdf"; // Must be a valid URL or public file
    link.download = "/ELECHI-PASCHAL-CHINEMELUM-CV-Resume-20240712.pdf"; // Optional: custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <FadeUp>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg font-sans">
        {/* Header Section */}
        <header className="text-center mb-8 border-b-2 border-gray-200 pb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Paschal Elechi
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            Backend & DevOps developer
          </h2>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <span>paschalelechi0@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <span>(234) 9161582765</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>Anambra, Nigeria</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={16} />
              <span>linkedin.com/in/elechi-paschal-18ab85312/</span>
            </div>
            <div className="flex items-center gap-1">
              <Github size={16} />
              <span>github.com/kiddo9</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe size={16} />
              <span>paschal-portfolio.vercel.app/</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Briefcase size={20} />
            Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Experienced Backend Developer with 3+ years of expertise in
            full-stack, backend and devOps development. Proven track record of
            developing and deploaying scalable backend services that improve
            system performance. Passionate about for building scalable,
            real-time applications .
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase size={20} />
            Work Experience
          </h3>

          <div className="space-y-6">
            {/* Job 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Backend and DevOps developer intern
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Neo cloud technologies
                  </p>
                </div>
                <span className="text-gray-500 text-sm">
                  April 2025 - Present
                </span>
              </div>
              <ul className="text-gray-700 space-y-1 list-disc list-inside">
                <li>
                  Worked in a team in building a CBT QUESTION BANK SYSTEM using
                  React, Node.js, Nginx and Docker
                </li>
                <li>
                  Implemented CI/CD pipelines reducing deployment time,
                  authentication and authorization
                </li>
                <li>Deployed the application in the cloud using Azure,</li>
                <li>Presented the Application to the managment</li>
              </ul>
            </div>

            {/* Job 2 
          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Full Stack Developer
                </h4>
                <p className="text-green-600 font-medium">
                  Digital Innovations Ltd.
                </p>
              </div>
              <span className="text-gray-500 text-sm">Mar 2019 - Dec 2020</span>
            </div>
            <ul className="text-gray-700 space-y-1 list-disc list-inside">
              <li>
                Developed responsive web applications using React, Redux, and
                Express.js
              </li>
              <li>
                Optimized database queries resulting in 50% faster page load
                times
              </li>
              <li>
                Collaborated with UX/UI designers to implement pixel-perfect
                designs
              </li>
              <li>Integrated third-party APIs and payment gateways</li>
            </ul>
          </div>

          {/* Job 3
          <div className="border-l-4 border-purple-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Software Developer
                </h4>
                <p className="text-purple-600 font-medium">StartUp Solutions</p>
              </div>
              <span className="text-gray-500 text-sm">Jun 2017 - Feb 2019</span>
            </div>
            <ul className="text-gray-700 space-y-1 list-disc list-inside">
              <li>Built RESTful APIs using Python and Django framework</li>
              <li>
                Implemented automated testing strategies increasing code
                coverage to 85%
              </li>
              <li>
                Participated in agile development processes and sprint planning
              </li>
              <li>Maintained legacy systems and performed code refactoring</li>
            </ul>
          </div>*/}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen size={20} />
            Education
          </h3>

          <div className="space-y-4">
            {/*<div className="flex justify-between items-start">
             <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Master of Science in Computer Science
              </h4>
              <p className="text-blue-600 font-medium">Stanford University</p>
              <p className="text-gray-600">
                Specialization: Software Engineering & AI
              </p>
            </div>
            <span className="text-gray-500 text-sm">2015 - 2017</span>
          </div> */}

            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-blue-600 font-medium">
                  University of Igbinedion, okada Edo state
                </p>
                <p className="text-gray-600"> GPA: 4.91/5.0</p>
              </div>
              <span className="text-gray-500 text-sm">2022 - 2026</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "php", "TypeScript", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "Laravel", "livewire"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Cloud & DevOps
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Azure",
                  "Docker",
                  "Kubernetes",
                  "Github actions",
                  "Terraform",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Redis", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Key Projects
          </h3>

          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Cbt Question Bank System
              </h4>
              <p className="text-gray-700 mb-2">
                Built a question Bank system that is used in Neo cloud
                technologies to upload question for there computer based test.
                implemented Implemented modern React frontend with Node.js
                backend and PostgreSQL database.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> React, Node.js, PostgreSQL,
                Azure, Docker, Nginx, Tailwindcss
              </p>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Real-time Chat Application
              </h4>
              <p className="text-gray-700 mb-2">
                Built a real-time chat web application where users can send
                friend request and chat in real time using redis for cacheing
                and pusher as a websocket for real time update
              </p>
              <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> Laravel, Livewire, javascript,
                php, Redis, pusher, docker, github actions, ci/cd
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        {/* <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award size={20} />
          Certifications
        </h3>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">
              AWS Certified Solutions Architect - Professional
            </span>
            <span className="text-gray-500 text-sm">2023</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">
              Certified Kubernetes Administrator (CKA)
            </span>
            <span className="text-gray-500 text-sm">2022</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">
              Google Cloud Professional Developer
            </span>
            <span className="text-gray-500 text-sm">2021</span>
          </div>
        </div>
      </section>

      {/* Awards & Achievements 
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award size={20} />
          Awards & Achievements
        </h3>

        <ul className="text-gray-700 space-y-2 list-disc list-inside">
          <li>Employee of the Year 2023 - Tech Solutions Inc.</li>
          <li>
            Best Innovation Award for Real-time Analytics Dashboard - 2022
          </li>
          <li>
            Speaker at React Conference 2023 - "Building Scalable React
            Applications"
          </li>
          <li>Open Source Contributor - 500+ GitHub contributions in 2023</li>
        </ul>
      </section> */}

        {/* Languages */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Globe size={20} />
            Languages
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <span className="font-medium text-gray-700">English</span>
              <p className="text-gray-600 text-sm">Native</p>
            </div>
          </div>
        </section>

        {/* Volunteer Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users size={20} />
            Volunteer Experience
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Full stack Developer
                  </h4>
                  <p className="text-blue-600 font-medium">Backend focused</p>
                </div>
                <span className="text-gray-500 text-sm">2025</span>
              </div>
              <p className="text-gray-700">
                volunteered to work as a full stack developer for a startUp
              </p>
            </div>

            {/* <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Technical Workshop Leader
                </h4>
                <p className="text-blue-600 font-medium">
                  Local Community Center
                </p>
              </div>
              <span className="text-gray-500 text-sm">2019 - 2021</span>
            </div>
            <p className="text-gray-700">
              Organized and led monthly workshops on web development basics for
              community members, teaching HTML, CSS, and JavaScript to 100+
              participants.
            </p>
          </div> */}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Interests</h3>
          <p className="text-gray-700">
            Open Source Development, Machine Learning, Rock Climbing,
            Blockchain, Traveling, Cooking
          </p>
        </section>

        {/* Footer */}
        <button
          onClick={handleDownload}
          className="bg-[#007CED] text-white py-3 px-6 mt-10 rounded w-fit flex gap-4 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Resume as PDF
        </button>
      </div>
    </FadeUp>
  );
};

export default ResumeTemplate;
