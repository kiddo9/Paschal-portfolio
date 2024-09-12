import More from "../components/More"
import NavLink from "../components/NavLink"
//import SlideBox from "../components/SlideBox"
import About from "./About"
//import W from '../components/w'


function Index() {
  return (
    <div className="h-full bg-gray-100 dark:bg-black">
      <NavLink />
      <div className="items-center w-screen pt-2 sm:flex sm:mx-1 lg:justify-evenly">
        <h1 className="justify-center text-4xl font-bold text-center dark:text-white sm:text-left">
                Y&apos;ELLO,
                I&apos;M PASCHAL 👋<p className="text-lg font-normal">FULL STACK DEVELOPER<br/>FRONT-END DEVELOPER<br/>BACK-END DEVELOPER</p>
        </h1>

        <img src="\3d-casual-life-code-editing.gif" className="" />
      </div>
      

       <div className="pt-12 mx-3 sm:mx-10 xl:mx-60 dark:text-white">
        <h1 className="text-2xl font-bold">About</h1>
        <p>
        Am Paschal and am from Nigeria. I am a passionate and a dedicated Full Stack Developer with a strong
                  background in both front-end, back-end and database technologies. I have
                  honed my skills in creating robust, scalable, and efficient web
                  applications. My expertise spans across a variety of programming
                  languages, frameworks, and tools, making me a versatile and adaptable
                  developer.
        </p>
       </div>
       {/* <div className="pt-12 mx-3 sm:mx-10 xl:mx-60 dark:text-white">
        <h1 className="text-2xl font-bold">
          Education
        </h1>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img src="https://iuokada.edu.ng/wp-content/uploads/2023/05/Header_img2.png" alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h1 className="font-bold">IGBINEDION UNIVERSITY NIGERIA</h1>
            <p>
            Bachelor's Degree of Computer Science (BCS)</p>
          </div>
          </div>
           <p>2022 - 2026</p>
        </div>
       </div> */}


       <div className="pt-12 mx-3 sm:mx-10 xl:mx-60 dark:text-white">
       <h1 className="text-2xl font-bold">
          SKILLS
        </h1>
        <About />
       </div>

       <div className="pt-12 mx-3 sm:mx-10 xl:mx-60">
        <h1 className="w-32 py-2 mx-auto font-bold text-center text-white bg-black rounded-lg dark:text-black dark: dark:bg-white">My Project</h1>
        <h1 className="text-5xl font-bold text-center dark:text-white">
        Check out my latest work
        </h1>
        <p className="text-xl text-center dark:text-gray-500">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites
        </p>

        <More />
        {/* <W /> */}
       </div>
      {/* <SlideBox /> */}
    </div>
  )
}

export default Index
