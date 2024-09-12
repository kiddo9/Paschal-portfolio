

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
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jPJqhHrkmMWdbm2BjqhAH8fcCsatxP1gWA&s',
            name: 'Native winds'
        },
        {
            img: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
            name: 'React js'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHB1_-Ghe-QWTn6_v5ZmbqxdrBV7S5mn0Yw&s',
            name: 'React Native'
        },
        {
            img: 'https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1',
            name: 'Python'
        },
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
            img: 'https://static.tildacdn.one/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg',
            name: 'SQL'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSd438-OMPjoHXWfeMpc-8I0ZIDq3hHYckBA&s',
            name: 'mySQL'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s',
            name: 'HTML5'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ahqhA5bWVzy-JYqEc3CShg6SZXWn_BpQ2w&s',
            name: 'postgreSql'
        },
        {
            img: 'https://chisellabs.com/glossary/wp-content/uploads/2021/06/What-is-an-API.png',
            name: 'Api Integrtion'
        },
        {
            img: 'https://ecommerce-europe.eu/wp-content/uploads/2022/11/instant-payment-701x300-c-center.png',
            name: 'Payment integrtion'
        },
        {
            img: 'https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg',
            name: 'RESTful API integrtion'
        },
        {
            img: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png',
            name: 'Node js'
        },
        {
            img: 'https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png',
            name: 'Git'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTC5TBWKs78A4NqJtspdOe-txtky_YYulqw&s',
            name: 'Github'
        },
    ]



  return (
    <div className="">
       <div className="grid grid-cols-4 gap-3 px-2 pt-5 sm:grid-cols-7 xl:grid-cols-9">
                {Skills.map((skill, index) => (
                <div className="flex items-center w-[5.3rem] sm:w-24 justify-center dark:text-[#252525] gap-2 p-2 dark:bg-white bg-black rounded-lg" key={index}>
                    {/* <img src={skill.img} alt="" className="w-8 h-8 rounded-full" /> */}
                    <p className="text-sm font-bold text-center text-white dark:text-[#252525]">{skill.name}</p>
                </div>
            ))}
            </div>
    </div>
  )
}

export default About
