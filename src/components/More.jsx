


function More() {

    const Projects = [
        {
            id: 1,
            name: 'Luxary Hotel',
            d: 'This is a static web landing page show the necessary information about the hotel',
            img: '/luxuray.png',
            link: 'https://hotel-booking-ecru.vercel.app/',
            
              front: 'React',
              back: '',
              style: 'Tailwinds',
              db: '',
              orm: ''
           
        },
        {
            id: 2,
            name: 'Resturant.',
            d: 'This is a static web landing page show the necessary information about the Resturant',
            img: '/Resturant.png',
            link: 'https://restaurant-chi-two.vercel.app/',
            front: 'React',
              back: '',
              style: 'Tailwinds',
              db: '',
              orm: ''
        },
        {
            id: 3,
            name: 'Marina Havan Hotel',
            d: 'This is a static web landing page show the necessary information about the hotel',
            img: '/hotel.png',
            link: 'https://m-hotel-beryl.vercel.app/',
            front: 'React',
              back: '',
              style: 'Tailwinds',
              db: '',
              orm: ''
        },
        {
            id: 4,
            name: 'School project',
            img: '/iuo.png',
            d: 'This is a static web landing page show the necessary information about the hotel',
            link: 'https://form-project-eight.vercel.app/',
            front: 'React',
              back: '',
              style: 'Tailwinds',
              db: '',
              orm: ''
        },
        {
          id: 4,
          name: ' E-commerce project. ',
          d: 'full stack Laravel(PHP) Developed with Laravel, php, Tailwinds, and javascript',
          img: '/lara.png',
          link: 'http://paschalecomm2.000.pe',
          front: 'blade',
              back: 'Laravel',
              style: 'Tailwinds',
              db: 'Mysql',
              orm: 'Elequent'
      },
      {
        id: 4,
        name: ' Portifolio web . ',
        d: 'This is a portfolio website built for a client. The front-end nd ui/ux was built nd designed by VAYUBA nd the admin panel and back-end was built by me',
        img: '/AdebisiTobi - Google Chrome 8_17_2024 2_35_15 PM.png',
        link: 'https://adebisitobi-portfolio.vercel.app',
        front: 'React',
            back: 'Node js',
            style: 'Tailwinds',
            db: 'postgres',
            orm: 'Sequelize'
    },
    {
      id: 4,
      name: ' Portifolio web . ',
      d: 'This is a portfolio website built for a client. The front-end nd ui/ux was built nd designed by VAYUBA nd the admin panel and back-end was built by me. Here is the admin panel',
      img: '/Laravel - Google Chrome 6_29_2024 7_13_50 PM.png',
      link: '',
      front: 'React',
          back: '',
          style: 'Tailwinds',
          db: '',
          orm: ''
  },
  {
    id: 1,
    name: 'Luxary Hotel',
    d: 'This is a static web landing page show the necessary information about the hotel',
    img: '/luxuray.png',
    link: 'https://hotel-booking-ecru.vercel.app/',
    
      front: 'React',
      back: '',
      style: 'Tailwinds',
      db: '',
      orm: ''
   
},
    ]



  return (
    <div className="pt-12">

          <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2">
           {Projects.map((project, index) => (
        <div className="pb-3 border border-gray-300 rounded-xl" key={index}>
         <img src={project.img} className="w-96 h-44 sm:w-full rounded-t-xl" alt="" />
         <h2 className="px-2 text-xl font-bold dark:text-white">{project.name} </h2>
         <p className="px-2 py-3 dark:text-gray-400">{project.d}</p>
         <div className="flex flex-wrap gap-1 px-2 py-5">

          {project.front == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500"> {project.front}</div>}
          {project.back == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.back}</div>}
          {project.db == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.db}</div>}
          {project.style == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.style}</div>}
          {project.orm == '' ? '' : <div className="px-4 py-1 bg-gray-300 rounded-lg dark:bg-gray-500">{project.orm}</div>}
         
         </div>
         <div className="w-24 px-2 py-1 mt-6 ml-1 bg-black rounded-lg dark:bg-white">
          <a href={project.link} className="flex items-center gap-2"  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-4 dark:text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg><p className="font-extrabold text-white dark:text-black">Visit</p></a>
         </div>
        
          
        </div>
        
      ))} 
          </div>
      
    </div>
  )
}

export default More
