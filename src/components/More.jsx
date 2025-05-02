import { useState } from "react";
import projects from "../assets/projects.json";
import skills from "../assets/skills.json";

function More() {
  const [inSort, setInSort] = useState([]);
  const [filter, setFilter] = useState(false);

  function sortProjects(skills) {
    let updatedSort;

    if (inSort.includes(skills)) {
      // Remove skill
      updatedSort = inSort.filter((s) => s !== skills);
    } else {
      // Add skill
      updatedSort = [...inSort, skills];
    }

    setInSort(updatedSort);

    confirmSelectedSkill(skills, updatedSort);
  }

  function confirmSelectedSkill(skills, currentSort) {
    if (currentSort.includes(skills)) {
      console.log(skills);
    }
  }

  function filterProjects() {
    setFilter(!filter);
  }

  return (
    <div className={`pt-5 overflow-y-auto Scroll h-full pb-72 md:pb-56 `}>
      <h1 className="text-4xl py-10 px-12 font-bold text-white bg-[#333333]">
        Projects
      </h1>

      <button
        onClick={filterProjects}
        className="ml-4 mt-6 text-white font-semibold bg-black px-4 py-3 w-36 rounded-3xl shadow-2xl"
      >
        Filter
      </button>

      <div
        className={`flex flex-row flex-wrap overflow-hidden ${
          filter == true
            ? "transition duration-300 ease-out"
            : "h-0 transition duration-300 ease-out"
        } `}
      >
        {Object.entries(skills).map(([category, skillSet]) => {
          if (category == "Frontend") {
            return (
              <div className="flex gap-3 flex-wrap mt-3 px-4" key={category}>
                {Object.entries(skillSet).map(([skill]) => (
                  <div
                    className={`${
                      inSort.includes(skill)
                        ? "bg-[#007CED] font-semibold"
                        : "bg-[#333333]"
                    } text-white cursor-pointer hover:bg-white hover:text-[#007CED] transition duration-300 ease-in-out py-2 px-2 rounded-2xl`}
                    key={skill}
                    onClick={() => sortProjects(skill)}
                  >
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            );
          }
        })}
        {Object.entries(skills).map(([category, skillSet]) => {
          if (category == "Backend") {
            return (
              <div className="flex gap-3 flex-wrap mt-3 px-4" key={category}>
                {Object.entries(skillSet).map(([skill]) => (
                  <div
                    className={`${
                      inSort.includes(skill)
                        ? "bg-[#007CED] font-semibold"
                        : "bg-[#333333]"
                    } text-white cursor-pointer hover:bg-white hover:text-[#007CED] transition duration-300 ease-in-out py-2 px-2 rounded-2xl`}
                    key={skill}
                    onClick={() => sortProjects(skill)}
                  >
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            );
          }
        })}
        {Object.entries(skills).map(([category, skillSet]) => {
          if (category == "Database") {
            return (
              <div className="flex gap-3 flex-wrap mt-3 px-4 " key={category}>
                {Object.entries(skillSet).map(([skill]) => (
                  <div
                    className={`${
                      inSort.includes(skill)
                        ? "bg-[#007CED] font-semibold"
                        : "bg-[#333333]"
                    } text-white cursor-pointer hover:bg-white hover:text-[#007CED] transition duration-300 ease-in-out py-2 px-2 rounded-2xl`}
                    key={skill}
                    onClick={() => sortProjects(skill)}
                  >
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            );
          }
        })}
        {Object.entries(skills).map(([category, skillSet]) => {
          if (category == "DevOps and Cloud") {
            return (
              <div className="flex gap-3 flex-wrap mt-3 px-4" key={category}>
                {Object.entries(skillSet).map(([skill]) => (
                  <div
                    className={`${
                      inSort.includes(skill)
                        ? "bg-[#007CED] font-semibold"
                        : "bg-[#333333]"
                    } text-white cursor-pointer hover:bg-white hover:text-[#007CED] transition duration-300 ease-in-out py-2 px-2 rounded-2xl`}
                    key={skill}
                    onClick={() => sortProjects(skill)}
                  >
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            );
          }
        })}
      </div>

      <div className="text-white flex flex-wrap gap-10 mt-10 mx-auto md:ml-6 flex-grow flex-1">
        {projects
          .filter((project) => {
            if (inSort.length === 0) return <p>project not avaliable yet</p>;

            // Otherwise, only show projects that have at least one selected skill
            return inSort.some((skill) => project.skills.includes(skill));
          })
          .map((project, index) => {
            return (
              <div
                key={index}
                className="w-[24rem] lg:w-80 mx-auto md:mx-0 transition duration-300 ease-out"
              >
                <div className="relative group overflow-hidden w-[24rem] lg:w-80 h-56 rounded-lg">
                  <img
                    src={project.img}
                    className="w-96 lg:w-80 h-56  group-hover:scale-105 transition-transform duration-300"
                    alt=""
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-60 text-white px-2 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <p className="text-md mb-3 font-semibold">
                      Year Built: {project.year}
                    </p>
                    <i>{project.d}</i>

                    <div className="flex absolute bottom-0 items-center gap-4 mt-4">
                      <a
                        href={project.GitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          viewBox="0 0 438.549 438.549"
                          className="size-6 text-black bg-white px-[2px] rounded-full"
                        >
                          <path
                            fill="currentColor"
                            d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                          ></path>
                        </svg>
                      </a>
                      {project.linkedIn != "" && (
                        <a
                          href={project.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="24"
                            height="24"
                            viewBox="0 0 30 30"
                            className="text-white bg-blue-500 rounded-full px-[2px]"
                          >
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                          </svg>
                        </a>
                      )}

                      {project.link !== "" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 bg-black px-[2px] rounded-full"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p>{project.name}</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.skills.map((skill) => (
                    <p
                      className="bg-[#333333] rounded-3xl py-1 text-white text-[10px] px-2"
                      key={skill}
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default More;
