import React from "react";
import Section from "./common/Section";
import commerce from "../assets/commerce.png"
import research from "../assets/research.png"
import web from "../assets/web.png"
import mobile from "../assets/mobile.png"

const Services=()=>{
const services=[
    {
        id:1,
        image:commerce,
        title:"Machine Learning",
    },
    {
        id:2,
        image:web,
        title:"Web Development",
    },
    {
        id:3,
        image:research,
        title:"Research and development",
    },
    {
        id:4,
        image:mobile,
        title:"Desktop Applications",
    },
]
return <Section title='Services' 
subtitle="Here are the services which are provided to my clients.
I hope I offer the service that you are looking for. If you don't find something that you're 
looking for, please send me an email"
>
    <div className="grid gap-10 lg:grid-cols-2">
    {services.map(({id,image,title})=>(
        <div key={id} className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300
        ease-in-out hover:scale-100">
            <img src={image} alt={title} className="w-36 h-36 md:w-44 object-contain"/>
            <h3 className="mt-5 text-base">{title}</h3>
        </div>    

    ))}
    </div>

</Section>
}
export default Services;