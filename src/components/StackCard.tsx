import React from "react";

const StackCard = ({ stackName, showName = true, className = "" }: any) => {
  return (
    <div
      className={`
        group flex items-center gap-2 
        border border-gray-800 bg-[#1f1f1f] hover:bg-[#2a2a2a] hover:border-gray-700 
        transition-all duration-300 ease-in-out
        rounded-lg px-3 py-2
        ${className} 
      `}
      title={stackName} // Tooltip for accessibility
    >
      {/* Icon */}
      <img
        src={`https://skillicons.dev/icons?i=${stackName}`}
        // If showing name, keep icon small (w-5). If icon only, make it larger (w-8).
        className={`object-contain transition-transform group-hover:scale-110 ${
          showName ? "w-5 h-5" : "w-10 h-10"
        }`}
        alt={`${stackName} icon`}
        loading="lazy"
      />

      {/* Text Name */}
      {showName && (
        <span className="text-gray-400 text-xs md:text-sm font-medium capitalize tracking-wide group-hover:text-gray-200 transition-colors">
          {stackName}
        </span>
      )}
    </div>
  );
};

export default StackCard;
