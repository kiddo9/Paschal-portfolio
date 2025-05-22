{/* <nav className="mt-5 px-5 gap-7 flex justify-between items-center">
        <div onClick={() => selectPage("home")}>
          <p className="text-white cursor-pointer">
            <span className="bg-[#007CED] font-bold px-2 py-2 rounded-full text-white text-2xl">
              P
            </span>
            aschal
          </p>
        </div>

        <div>
          <ul className="flex gap-4 flex-wrap">
            {navbarMenu.map((menu, index) => (
              <li
                className={`text-[#ffffff92] hover:text-white hover:transition-all hover:duration-300 hover:ease-in cursor-pointer font-medium ${
                  change === menu
                    ? "text-white border-b-2 border-[#007CED]"
                    : ""
                }`}
                key={index}
                onClick={() => selectPage(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
      </nav> */}
      {/* Home Section with Animation */}
      {/* {(change === "home" || exitingPage === "home") && (
        <div
          className={`items-center overflow-y-auto lg:overflow-hidden h-full lg:h-fit pb-72 md:pb-56 lg:pb-0 flex flex-wrap transition-all duration-500 ease-in-out ${
            change === "home" && !animating ? pageEnterClass : ""
          } ${exitingPage === "home" ? pageExitClass : ""}`}
        >
          <img src="/Group 6.png" className="-ml-10 xl:ml-0" />

          <div className="w-96 md:w-[45rem] lg:w-[27rem] xl:w-[40rem] 2xl:w-[45rem] lg:overflow-y-auto ">
            <span className="text-[#ffffff92]">
              Backend & DevOps Software enginner
            </span>

            <h1 className="text-5xl font-bold text-white mt-8">
              Elechi Paschal
            </h1>

            <p className="flex flex-wrap mt-7 text-white">
              Hello! I'm a self-taught Fullstack Developer with a strong focus
              on Backend Development and DevOps. I specialize in building
              scalable, secure, and efficient web applications using
              technologies like Laravel, Node.js, React, MySQL, and PostgreSQL.
              Beyond coding features, I focus on system architecture, database
              optimization, real-time functionalities, and automation through
              Docker and CI/CD pipelines. Over time, I've honed my skills by
              working on real-world projects — including real-time chat systems,
              e-commerce platforms with payment integration, admin dashboards,
              and mobile applications. I'm passionate about solving complex
              problems, continuously learning, and delivering clean,
              maintainable code. My goal is simple: to build applications that
              are fast, reliable, and ready to scale. Let's create something
              amazing together!
            </p>

            <div className="mt-7 flex gap-6">
              <button
                onClick={() => selectPage("projects")}
                className="bg-[#333333] text-[white] border-2 border-[#007CED] w-44 md:w-60 py-3 rounded-full"
              >
                Projects
              </button>
              <button
                onClick={() => selectPage("contact me")}
                className="bg-[#333333] text-[white] border-2 border-[white] w-44 md:w-60 py-3 rounded-full"
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Frontend Skills Section with Animation */}
      {/* {(change === "frontend skills" || exitingPage === "frontend skills") && (
        <div
          className={`pt-5 overflow-y-auto lg:overflow-hidden h-full lg:h-fit pb-72 md:pb-56 lg:pb-0 transition-all duration-500 ease-in-out ${
            change === "frontend skills" && !animating ? pageEnterClass : ""
          } ${exitingPage === "frontend skills" ? pageExitClass : ""}`}
        >
          <h1 className="text-4xl py-10 px-12 font-bold text-white bg-[#333333]">
            Front-end Skills
          </h1>
          <div className="flex justify-between text-2xl text-white font-semibold px-4 mt-10">
            <p className="text-left w-[30rem]">what i do</p>
            <p className="text-left hidden lg:block w-[30rem]">coding skills</p>
          </div>
          <div className="flex lg:px-10 flex-col lg:flex-row justify-between px-4 mt-5 flex-wrap">
            <div>
              <div className="flex gap-4">
                <div className="text-white md:w-[35rem] 2xl:w-[50rem] xl:w-[40rem] lg:w-[28rem] w-[23rem]">
                  <p className="flex flex-wrap">
                    Building fast, responsive and interactive user interfaces
                    using HTML, CSS, JavaScript, and React. I focus on
                    delivering seamless and engaging user experiences across
                    devices.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-left lg:hidden text-2xl mt-7 lg:mt-0 text-white font-semibold w-[30rem]">
                coding skills
              </p>
              {Object.entries(skills).map(
                ([category, skillSet]) =>
                  category === "Frontend" && (
                    <div className="flex flex-col gap-3" key={category}>
                      {Object.entries(skillSet).map(([skill, level]) => {
                        const inbarform = parseInt(level.replace("%", ""));
                        return (
                          <div className="text-white" key={skill}>
                            <div className="flex md:w-[30rem] w-[23rem] justify-between">
                              <p>{skill}</p>
                              <p className="">{level}</p>
                            </div>
                            <div className="md:w-[30rem] w-[23rem] border-2 rounded-full border-[#444444]">
                              <div
                                className="bg-[#007CED] h-2 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: `${inbarform}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
      {/* Backend Skills Section with Animation 
      {(change === "Backend skills" || exitingPage === "Backend skills") && (
        <div
          className={`pt-5 overflow-y-auto lg:overflow-hidden h-full lg:h-fit pb-72 md:pb-56 lg:pb-0 transition-all duration-500 ease-in-out ${
            change === "Backend skills" && !animating ? pageEnterClass : ""
          } ${exitingPage === "Backend skills" ? pageExitClass : ""}`}
        >
          <h1 className="text-4xl py-6 px-12 font-bold text-white bg-[#333333]">
            Back-end & <br />
            Databases Skills
          </h1>
          <div className="flex justify-between text-2xl text-white font-semibold px-4 mt-10">
            <p className="text-left w-[30rem]">what i do</p>
            <p className="text-left hidden lg:block w-[30rem]">coding skills</p>
          </div>
          <div className="flex lg:px-10 flex-col lg:flex-row justify-between px-4 mt-5 flex-wrap">
            <div>
              <div className="flex gap-4">
                <div className="text-white md:w-[35rem] 2xl:w-[50rem] xl:w-[40rem] lg:w-[28rem] w-[23rem]">
                  <p className="flex flex-wrap">
                    Designing robust, secure and scalable backend systems with
                    Laravel and Node.js. Strong in building real-time apps, API
                    development, database design, and system architecture.
                    (Strength Area)
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:overflow-y-auto Scroll lg:h-96 lg:pb-44 ">
              <p className="text-left lg:hidden text-2xl mt-7 lg:mt-0 text-white font-semibold w-[30rem]">
                coding skills
              </p>
              {Object.entries(skills).map(
                ([category, skillSet]) =>
                  category === "Backend" && (
                    <div className="flex flex-col gap-3" key={category}>
                      {Object.entries(skillSet).map(([skill, level]) => {
                        const inbarform = parseInt(level.replace("%", ""));
                        return (
                          <div className="text-white" key={skill}>
                            <div className="flex md:w-[30rem] w-[23rem] justify-between">
                              <p>{skill}</p>
                              <p className="">{level}</p>
                            </div>
                            <div className="md:w-[30rem] w-[23rem] border-2 rounded-full border-[#444444]">
                              <div
                                className="bg-[#007CED] h-2 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: `${inbarform}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
              )}
              <br />
              {Object.entries(skills).map(
                ([category, skillSet]) =>
                  category === "Database" && (
                    <div className="flex flex-col gap-3" key={category}>
                      {Object.entries(skillSet).map(([skill, level]) => {
                        const inbarform = parseInt(level.replace("%", ""));
                        return (
                          <div className="text-white" key={skill}>
                            <div className="flex md:w-[30rem] w-[23rem] justify-between">
                              <p>{skill}</p>
                              <p className="">{level}</p>
                            </div>
                            <div className="md:w-[30rem] w-[23rem] border-2 rounded-full border-[#444444]">
                              <div
                                className="bg-[#007CED] h-2 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: `${inbarform}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
       DevOps Skills Section with Animation 
      {(change === "DevOps skills" || exitingPage === "DevOps skills") && (
        <div
          className={`pt-5 overflow-y-auto lg:overflow-hidden h-full lg:h-fit pb-72 md:pb-56 lg:pb-0 transition-all duration-500 ease-in-out ${
            change === "DevOps skills" && !animating ? pageEnterClass : ""
          } ${exitingPage === "DevOps skills" ? pageExitClass : ""}`}
        >
          <h1 className="text-4xl py-10 px-12 font-bold text-white bg-[#333333]">
            DevOps and Cloud
          </h1>
          <div className="flex justify-between text-2xl text-white font-semibold px-4 mt-10">
            <p className="text-left w-[30rem]">what i do</p>
            <p className="text-left hidden lg:block w-[30rem]">coding skills</p>
          </div>
          <div className="flex lg:px-10 flex-col lg:flex-row justify-between px-4 mt-5 flex-wrap">
            <div>
              <div className="flex gap-4">
                <div className="text-white md:w-[35rem] 2xl:w-[50rem] xl:w-[40rem] lg:w-[28rem] w-[23rem]">
                  <p className="flex flex-wrap">
                    Automating deployments with Docker, GitHub Actions, and
                    Railway. Skilled at containerizing apps, setting up CI/CD
                    pipelines, database management with MySQL/PostgreSQL, and
                    caching optimization using Redis. (Strength Area)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-left lg:hidden text-2xl mt-7 lg:mt-0 text-white font-semibold w-[30rem]">
                coding skills
              </p>
              {Object.entries(skills).map(
                ([category, skillSet]) =>
                  category === "DevOps and Cloud" && (
                    <div className="flex flex-col gap-3" key={category}>
                      {Object.entries(skillSet).map(([skill, level]) => {
                        const inbarform = parseInt(level.replace("%", ""));
                        return (
                          <div className="text-white" key={skill}>
                            <div className="flex md:w-[30rem] w-[23rem] justify-between">
                              <p>{skill}</p>
                              <p className="">{level}</p>
                            </div>
                            <div className="md:w-[30rem] w-[23rem] border-2 rounded-full border-[#444444]">
                              <div
                                className="bg-[#007CED] h-2 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: `${inbarform}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
      {/* Projects Section with Animation 
      {(change === "projects" || exitingPage === "projects") && (
        <div
          className={`transition-all duration-500 ease-in-out overflow-y-scroll h-full Scroll ${
            change === "projects" && !animating ? pageEnterClass : ""
          } ${exitingPage === "projects" ? pageExitClass : ""}`}
        >
          <More />
        </div>
      )}
     Contact Section with Animation 
      {(change === "contact me" || exitingPage === "contact me") && (
        <div
          className={`pt-5 overflow-y-auto h-full pb-72 md:pb-56 transition-all duration-500 Scroll ease-in-out ${
            change === "contact me" && !animating ? pageEnterClass : ""
          } ${exitingPage === "contact me" ? pageExitClass : ""}`}
        >
          <h1 className="text-4xl py-10 px-12 font-bold text-white bg-[#333333]">
            Contact Me
          </h1>
          <div className="p-8">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#333333] text-white p-3 rounded"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#333333] text-white p-3 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#333333] text-white p-3 rounded"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <textarea
                placeholder="Your Message"
                className="bg-[#333333] text-white p-3 rounded min-h-[200px]"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
              <button
                onClick={() => handleEmailClick(email, name, subject, body)}
                className="bg-[#007CED] text-white py-3 px-6 rounded w-fit"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Resume Section with Animation 
      {(change === "Resume" || exitingPage === "Resume") && (
        <div
          className={`pt-5 overflow-y-auto h-full pb-72 md:pb-56 transition-all duration-500 ease-in-out Scroll ${
            change === "Resume" && !animating ? pageEnterClass : ""
          } ${exitingPage === "Resume" ? pageExitClass : ""}`}
        >
          <h1 className="text-4xl py-10 px-12 font-bold text-white bg-[#333333]">
            Resume 
          </h1>
          <div className="p-8 text-white">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#007CED]">
                Work Experience
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <p className="text-[#ffffff92]">
                  Company Name | 2022 - Present
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Developed and maintained backend services</li>
                  <li>Implemented RESTful APIs using Laravel and Node.js</li>
                  <li>Optimized database performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Junior Developer</h3>
                <p className="text-[#ffffff92]">
                  Previous Company | 2020 - 2022
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Built web applications using modern frameworks</li>
                  <li>Collaborated with design team on UI implementation</li>
                  <li>Participated in code reviews and testing</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#007CED]">
                Education
              </h2>
              <div>
                <h3 className="text-xl font-semibold">
                  Computer Science Degree
                </h3>
                <p className="text-[#ffffff92]">
                  University Name | 2016 - 2020
                </p>
                <p className="mt-2">
                  Graduated with honors, focusing on software development and
                  database management.
                </p>
              </div>
            </div> */}

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
              Resume
            </button>
          </div>
        </div>
      )}
      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 1s ease-in-out forwards;
        }
      `}</style>
    
    // </div>