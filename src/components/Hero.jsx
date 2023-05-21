import React from "react"
import {FaGithub,FaInstagram,FaLinkedin,FaArrowDown,FaCartArrowDown} from "react-icons/fa"
import avatar from "../assets/avatar.jpg";

const Hero=()=>{
const SOCIAL=[
    {
        id:1,
        link:"https://github.com/ashutosh1808",
        icon:<FaGithub/>,
    },
    {
        id:2,
        link:"https://instagram.com/atm9187",
        icon:<FaInstagram/>,
    },
    {
        id:3,
        link:"https://linkedin.com/in/ashutoshm1808",
        icon:<FaLinkedin/>,
    },
];


return <section className="min-h-screen flex flex-col justify-center items-center p-5 text-center">
    <h2 className="text-5xl text-rose-600 uppercase font-bold">Ashutosh Mishra</h2>
    <h3 className="py-3 text-2xl">Software Developer</h3>
    <p className="max-w-xl font-light text-gray-500">
        A passionate coder, who loves to work on web development projects. 
        Currently pursuing BE in Computer Engineering. 
        <br/><br/> 
    <div className="flex w-full items-center justify-evenly text-3xl">
    {SOCIAL.map(({id,link,icon})=>(
        <a href={link} 
        key={id}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer duration-300 hover:text-rose-600">{icon}</a>
    ))}
    </div>
    <br/><br/>
    <div>
        <center>
        <img src={avatar} alt="avatar" className="w-60 h-60 md:h-72 object-cover object 
        top bggradient-to-b-from-rose-600 rounded-xl pt-5"/>
        </center>
        <a href="resume.pdf" download={true} className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded lg">Resume</a>
    </div>
    </p>
</section>;
}
export default Hero;