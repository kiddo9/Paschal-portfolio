

function About() {

    const Skills = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s',
            name: 'HTML5'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdDy1MPyAklifM98twCxSuRj7EVJPO0cmHg&s',
            name: 'CSS3'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            name: 'JavaScript'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
            name: 'PHP'
        },
        {
            img: 'https://cdn.dribbble.com/userupload/10859693/file/original-57cd86f9155a87647ad5f257dcc00eb4.jpg?resize=752x',
            name: 'Tailwinds Css'
        },
        {
            img: 'https://www.devtopics.com/wp-content/uploads/2023/01/React-icon.svg_.png',
            name: 'React js'
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4E12AQG9RiCs_cAZSw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1665152305999?e=2147483647&v=beta&t=JaTBAdeSSQUihG2xqrhPrRv_kIV4P_JKCk4PGSrolXY',
            name: 'React Native'
        },
        // {
        //     img: 'https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1',
        //     name: 'Python'
        // },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
            name: 'Laravel'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
            name: 'TypeScript'
        },
        {
            img: 'https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress',
            name: 'Nextjs'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSd438-OMPjoHXWfeMpc-8I0ZIDq3hHYckBA&s',
            name: 'mySQL'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ahqhA5bWVzy-JYqEc3CShg6SZXWn_BpQ2w&s',
            name: 'postgreSql'
        },
        {
            img: 'https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png',
            name: 'Node js'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFINSMb4CTm1MlzpqbjSpUa78XfYvYOy4n2Q&s',
            name: 'HTML5'
        },
        {
            img: 'https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png',
            name: 'Git'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s',
            name: 'Github'
        },
    ]



  return (
    <div className="">
       <div className="grid grid-cols-4 gap-3 px-2 pt-5 sm:grid-cols-7 xl:grid-cols-9">
                {Skills.map((skill, index) => (
                <div className="flex items-center w-[5.3rem] sm:w-24 justify-center dark:text-[#252525] gap-2 p-2 dark:bg-white rounded-lg" key={index}>
                    <img src={skill.img} alt="" className="w-14 h-14" />
                    {/* <p className="text-sm font-bold text-center text-white dark:text-[#252525]">{skill.name}</p> */}
                </div>
            ))}
            </div>
    </div>
  )
}

export default About
