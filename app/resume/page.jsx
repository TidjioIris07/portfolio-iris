"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp, FaJava, FaGitAlt, FaGithub} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiExpress, SiSpringboot, SiFlutter, SiMysql, SiSqlite, SiPostgresql, SiPostman} from "react-icons/si"

const about = {
    title: "About me",
    description: "I'm a young developer from Madagascar passionate about creating innovative applications. My expertise lies in JavaScript frameworks like React and Node.js, where I enjoy crafting responsive web applications. I also dive into mobile app development, exploring new possibilities in this dynamic field. Beyond that, I have a keen interest in game development and AI, constantly exploring new technologies to push the boundaries of what's possible in software development.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "RETSOFA Tidjio Iris"
        },
        {
            fieldName: "Phone",
            fieldValue: "+261 34 17 652 50"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French"
        },
        {
            fieldName: "Email",
            fieldValue: "iristidjio@gmail.com"
        },
        
    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "Esse dolore id occaecat pariatur est velit ex sint.",
    items: [
        {
            company: "DREN Atsimo Andrefana",
            position: "Java developer Intern",
            duration: "August-November 2023"
        },
    ]
}

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "Esse dolore id occaecat pariatur est velit ex sint.",
    items: [
        {
            institution: "ENI - Fianarantsoa",
            degree: "Software and Database Engineering",
            duration: "2021-Present"
        },
        {
            institution: "Houssen Memorial School",
            degree: "Baccalaureate series D with honors",
            duration: "2020"
    },
    ],  
}

const skills = {
    title: "My skills",
    description: "Esse dolore id occaecat pariatur est velit ex sint.",
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaPhp />,
            name: "php",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
    ],
    skilllist1: [
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs/>,
            name: "NextJs",
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJs",
        },
        {
            icon: <SiExpress />,
            name: "ExpressJs",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiSpringboot />,
            name: "SpringBoot",
        },
        {
            icon: <SiFlutter />,
            name: "Flutter",
        },
    ],
    skilllist2: [
        {
            icon: <SiMysql/>,
            name: "MySQL",
        },
        {
            icon: <SiSqlite/>,
            name: "SQLite",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
    ],
    skilllist3: [
        {
            icon: <FaGitAlt/>,
            name: "Git",
        },
        {
            icon: <FaGithub/>,
            name: "Github",
        },
        {
            icon: <SiPostman />,
            name: "Postman",
        },
    ],
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () =>{
    return(
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                  defaultValue="experience"
                  className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                  {experience.description}
                                </p> */}
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=>{
                                            return (
                                                <li
                                                 key={index}
                                                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>
                       
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                  {education.description}
                                </p> */}
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=>{
                                            return (
                                                <li
                                                 key={index}
                                                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>
                        
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p> */}
                                </div>
                                <ScrollArea className="h-[450px]">
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-xl text-center xl:text-left mb-[20px]">
                                        Programming Languages
                                    </p>
                                    <ul
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"
                                    >
                                    {skills.skilllist.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                    </ul>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-xl text-center xl:text-left mt-[12px] mb-[20px]">
                                        Frameworks & Libraries
                                    </p>
                                    <ul
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"
                                    >
                                    {skills.skilllist1.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                    </ul>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-xl text-center xl:text-left mt-[12px] mb-[20px]">
                                        Databases
                                    </p>
                                    <ul
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"
                                    >
                                    {skills.skilllist2.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                    </ul>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-xl text-center xl:text-left mt-[12px] mb-[20px]">
                                        Tools & Extras
                                    </p>
                                    <ul
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"
                                    >
                                    {skills.skilllist3.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                    </ul>
                                </ScrollArea>
                                
                            </div>
                        </TabsContent>
                       
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            </div>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mt-[15px] ">
                                {about.info.map((item,index)=> {
                                    return(
                                        <li
                                         key={index}
                                         className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-accent">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </TabsContent>


                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;