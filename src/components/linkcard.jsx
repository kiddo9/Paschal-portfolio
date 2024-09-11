

function linkcard({link, icon, name}) {
  return (
    <div className="">
      <a href={link}>
      <div className="cursor-pointer">
      {icon}

      <p className="pl-3 text-xl">{name}</p>
      </div></a>
    </div>
  )
}

export default linkcard
