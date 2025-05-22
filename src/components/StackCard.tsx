import React from "react";

const StackCard = ({ stackName, setName }: any) => {
  return (
    <div className="bg-[#222222] px-3 py-1 flex items-center gap-2 rounded-lg">
      <img
        src={`https://skillicons.dev/icons?i=${stackName}`}
        className={`${setName == true ? "w-5 h-5" : "w-18"}`}
        alt="My Skills"
      />
      <p className="text-gray-300 text-sm">
        {setName == true
          ? stackName[0].toUpperCase() + stackName.slice(1).toLowerCase()
          : ""}
      </p>
    </div>
  );
};

export default StackCard;
