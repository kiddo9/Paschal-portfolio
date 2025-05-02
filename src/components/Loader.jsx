function Loader() {
  return (
    <div className="bg-[#171717] fixed inset-0 z-40">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Loader;
