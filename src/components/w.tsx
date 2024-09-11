import React from 'react'

function w() {

  const Projects = [
    {
      id: 4,
      name: ' Portifolio web . ',
      d: 'This is a portfolio website built for a client. The front-end nd ui/ux was built nd designed by VAYUBA nd the admin panel and back-end was built by me',
      img: '/AdebisiTobi - Google Chrome 2024-09-04 05-45-32.mp4',
      link: 'https://adebisitobi-portfolio.vercel.app',
      front: 'React',
          back: 'Node js',
          style: 'Tailwinds',
          db: 'postgres',
          orm: 'Sequelize'
  },
]

  return (
    <div className='pt-12'>
      <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2">
           {Projects.map((project, index) => (
        <div className="pb-3 border border-gray-300 rounded-xl" key={index}>
         <video controls autoPlay className="w-96 h-44 sm:w-full">
          <source src={project.img} />
         </video>
         <h2 className="px-2 text-xl font-bold dark:text-white">{project.name} </h2>
         <p className="px-2 py-3 dark:text-gray-400">{project.d}</p>
         <div className="flex flex-wrap gap-1 px-2 py-5">

          {project.front == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500"> {project.front}</div>}
          {project.back == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.back}</div>}
          {project.db == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.db}</div>}
          {project.style == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.style}</div>}
          {project.orm == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.orm}</div>}
         
         </div>
         <div className="w-24 px-2 py-1 mt-6 ml-1 bg-black rounded-lg">
          <a href={project.link} className="flex items-center gap-2"  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg><p className="text-white ">Visit</p></a>
         </div>
        
          
        </div>
        
      ))} 
          </div>
    </div>
  )
}

export default w
