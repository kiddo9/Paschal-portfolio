import React from "react";

const StackCard = ({ stackName, setName }: any) => {
  return (
    <div className="bg-[#222222] px-5 py-1 flex justify-center  items-center gap-2 rounded-lg">
      <img
        src={`https://skillicons.dev/icons?i=${stackName}`}
        className={`${setName == true ? "w-6 h-6" : "w-18"}`}
        alt="My Skills"
      />
      <p className="text-gray-300 text-[12px]">
        {setName == true
          ? stackName[0].toUpperCase() + stackName.slice(1).toLowerCase()
          : ""}
      </p>
    </div>
  );
};

export default StackCard;
