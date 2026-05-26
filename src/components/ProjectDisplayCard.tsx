import React from "react";
import { Github, ExternalLink, Linkedin, Lock, FolderGit2 } from "lucide-react";
import StackCard from "../components/StackCard";

function ProjectDisplayCard({
  name,
  description,
  stack,
  github,
  linkedIn,
  access, // This is your "Live Demo" link
  img, // Optional project image or diagram
}: any) {
  // Helper to determine if the repo is private
  const isPrivate = !github || github === "";

  return (
    <div className="group flex flex-col justify-between h-full p-6 bg-[#1f1f1f] border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-300">
      {/* TOP SECTION: Header & Description */}
      <div>
        <div className="flex justify-between items-start mb-4">
          {/* Project Title & Live Link */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors">
              <FolderGit2 size={20} />
            </div>
            <a
              href={access}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-bold text-gray-100 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              {name}
              {access && <ExternalLink size={14} className="text-gray-500" />}
            </a>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            {/* GitHub Link or Lock Icon */}
            {isPrivate ? (
              <div
                title="Source code is private"
                className="text-gray-600 cursor-not-allowed"
              >
                <Lock size={18} />
              </div>
            ) : (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                title="View Source Code"
                className="text-gray-400 hover:text-white hover:scale-110 transition-transform"
              >
                <Github size={18} />
              </a>
            )}

            {/* LinkedIn Post Link */}
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                title="View Post on LinkedIn"
                className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-transform"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Project Image/Diagram */}
        {img && (
          <div className="mb-6 overflow-hidden rounded-lg border border-gray-800 bg-black/50 aspect-video flex items-center justify-center">
            <img 
              src={img} 
              alt={`${name} Architecture`} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* BOTTOM SECTION: Tech Stack */}
      <div className="mt-auto pt-4 border-t border-gray-800/50">
        <div className="flex flex-wrap gap-2">
          {Array.isArray(stack) && stack.length > 0 ? (
            stack.map((techStack, index) => (
              <StackCard
                key={index}
                stackName={techStack}
                showName={true} // Keep names visible for clarity
                className="py-1 px-2 text-xs border-gray-700 bg-gray-800/50" // Smaller styling for inside cards
              />
            ))
          ) : (
            <span className="text-xs text-gray-600">No stack listed</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplayCard;

// import React from "react";
// import StackCard from "../components/StackCard";
// import { Github, ExternalLink, Linkedin, Lock, GitFork } from "lucide-react";

// function ProjectDisplayCard({
//   name,
//   description,
//   stack,
//   github,
//   linkedIn,
//   access, // The "Live Link"
//   PR, // Pull Requests count or similar
// }: any) {
//   // Logic to handle Private Repos smoothly
//   const isPrivate = !github || github === "";

//   return (
//     <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-[#1f1f1f] hover:border-white/20 hover:bg-[#252525] transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-lg">
//       {/* --- TOP SECTION: Title & Links --- */}
//       <div>
//         <div className="flex justify-between items-start mb-4">
//           {/* Title - Clickable to Live Site */}
//           <a
//             href={access}
//             target="_blank"
//             rel="noreferrer"
//             className="group/title flex items-center gap-2"
//           >
//             <h3 className="text-xl font-bold text-gray-100 group-hover/title:text-blue-500 transition-colors">
//               {name}
//             </h3>
//             <ExternalLink
//               size={16}
//               className="text-gray-500 group-hover/title:text-blue-500 transition-colors opacity-0 group-hover/title:opacity-100"
//             />
//           </a>

//           {/* Action Icons */}
//           <div className="flex gap-3">
//             {/* PR / Activity Icon (Optional) */}
//             {PR && (
//               <div
//                 className="flex items-center gap-1 text-gray-500"
//                 title="Pull Requests / Activity"
//               >
//                 <GitFork size={16} />
//                 <span className="text-xs">{PR}</span>
//               </div>
//             )}

//             {/* LinkedIn */}
//             {linkedIn && (
//               <a
//                 href={linkedIn}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-gray-400 hover:text-blue-400 transition-colors"
//               >
//                 <Linkedin size={20} />
//               </a>
//             )}

//             {/* GitHub Logic */}
//             {isPrivate ? (
//               <div
//                 className="text-gray-600 cursor-not-allowed"
//                 title="Source code is private"
//               >
//                 <Lock size={20} />
//               </div>
//             ) : (
//               <a
//                 href={github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Github size={20} />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-gray-400 text-sm leading-relaxed mb-6">
//           {description}
//         </p>
//       </div>

//       {/* --- BOTTOM SECTION: Tech Stack --- */}
//       {/* Changed from overflow-scroll to flex-wrap for better visibility */}
//       <div className="border-t border-white/5 pt-4 mt-auto">
//         <div className="flex flex-wrap gap-2">
//           {Array.isArray(stack) && stack.length > 0 ? (
//             stack.map((techStack, index) => (
//               <StackCard
//                 key={index}
//                 stackName={techStack}
//                 showName={true} // Keep text visible
//                 className="text-[10px] py-1 px-2 h-auto" // Override styles for smaller card tags
//               />
//             ))
//           ) : (
//             <span className="text-gray-600 text-xs">No stack listed</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDisplayCard;
