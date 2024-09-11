

function Loader() {
  const date = new Date;
  let hour = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  return (
    <div className="bg-[#171717] fixed inset-0 z-40">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="mb-8 text-white" data-aos='zoom-in' data-aos-duration='2000'> <p className="text-4xl text-center text-gray-500 sm:text-5xl">{hour} : {mins} : {sec}</p> </div>
      <div className="loader"  data-aos='fade-in' data-aos-duration='2000' data-aos-delay='2500'></div>
      </div>
    </div>
  )
}

export default Loader
