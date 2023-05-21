import React from "react";
import Section from "./common/Section";
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
import p6 from "../assets/p6.jpg"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const Portfolio=()=>{
    const projects=[
        {
            id:1,
            image:p1,
            title:"Medical Insurance Predictor",
            github:"https://github.com/ashutosh1808/insureme",
            demo:"http://insureme.pythonanywhere.com/login",
        },
        {
            id:2,
            image:p2,
            title:"To-do list",
            github:"https://github.com/ashutosh1808/todo_project",
            demo:"https://tomcat.apache.org/download-90.cgi",
        },
        {
            id:3,
            image:p3,
            title:"Advice Generator",
            github:"https://github.com/ashutosh1808/Advice-Generator",
            demo:"https://advicegenerator2005.web.app/",
        },
        {
            id:4,
            image:p4,
            title:"Currency Converter",
            github:"https://github.com/nodejs/node",
            demo:"http://exchangeme.pythonanywhere.com/",
        },
        {
            id:5,
            image:p5,
            title:"Heart Disease Predictor",
            github:"https://github.com/ashutosh1808/heart_disease_pred",
            demo:"http://cardiopred.pythonanywhere.com/",
        },
        {
            id:6,
            image:p6,
            title:"Monthly Salary Predictor",
            github:"https://github.com/ashutosh1808/Monthly-Salary-Predictor",
            demo:"http://ashu7890.pythonanywhere.com/login",
        },
        
    ]
    return <Section title="Portfolio" subtitle="Here are some of the projects I've worked on until now. So go gentle on them">
    <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({id,image,title,github,demo})=>(
        <div key={id}
        className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
            <img src={image} alt={title} className="w-2/3"/>
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                <h2>{title}</h2>
                <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <br />
                <a href={demo} className="text-2xl cursor-pointer duration-150 hover:scale-110" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt/></a>
            </div>
        </div>
    ))}
    </div>
    </Section>
}
export default Portfolio;   