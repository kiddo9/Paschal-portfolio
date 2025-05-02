function linkcard({ link, icon, name }) {
  return (
    <div className="flex px-3">
      <a href={link} className="flex">
        <div className="cursor-pointer flex items-center">
          {icon}

          <p className="pl-1 text-[#ffffff98]">{name}</p>
        </div>
      </a>
    </div>
  );
}

export default linkcard;
