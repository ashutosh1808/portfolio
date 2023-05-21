import React from "react";
import Section from "./common/Section";
import {FaGithub,FaInstagram,FaLinkedin,FaArrowDown,FaCartArrowDown} from "react-icons/fa"
import contact from "../assets/message.png"

const Contact=()=>{
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
    
    return <Section title="Contacts" subtitle="These are the ways you can get in touch with me. Hope to connect soon :)">
        <div>
            <div className="flex flex-col items-center justify-center gap-8 justify-center">
                <img src={contact} alt="contact-info" className="w-32 h-32" />
            </div>
            <div>
                <p className="max-w-xs md:max-w-lg font-extralight">I am open to freelancing or full time opportunities.
                Feel free to contact through your preferred medium</p></div>
                <br />
            <div className="flex w-full items-center justify-evenly text-3xl">
            {SOCIAL.map(({id,link,icon})=>(
        <a href={link} 
        key={id}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer duration-300 hover:text-rose-600">{icon}</a>
    ))}
            </div>
            <div className="p-8 text-left w-full">
                <form action="https://getform.io/f/692c5cc2-63bf-4326-b2f5-745d382ee897" method="post">
                    <div className="gap-4 w-full">
                    <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 font-extralight">name</label>
                    <input type="text" name="name" required className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                    </div>
                    </div>
                    <div className="gap-4 w-full">
                    <div className="flex flex-col my-2">
                    <label className="capitalize text-sm py-2 font-extralight">phone</label>
                    <input type="phone" name="phone" required className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                    </div>
                    </div>
                    <div className="gap-4 w-full">
                    <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 font-extralight">email</label>
                    <input type="email" name="email" required className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                    </div>
                    </div>
                    <div className="gap-4 w-full">
                    <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 font-extralight">message</label>
                    <textarea rows={10} name="msg" required className="resize-none border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                    </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </Section>
}
export default Contact;