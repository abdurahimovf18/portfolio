"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./styles.css"
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
    link: string;
    project_name: string;
    description: string;
    small_image: string;
    big_image: string;
}



export function ProjectsSection() {

    const projects: Project[] = [
        {
            link: "https://github.com/abdurahimovf18/ms-watches-frontend",
            project_name: "Montana Swiss",
            description: "Montana Swiss is a high-end watch e-commerce platform built using modern web technologies. The project leverages Next.js and React.js for a dynamic and responsive frontend, while FastAPI and SQLAlchemy power the backend, ensuring efficient data handling and API performance. Features include product filtering, secure payment integration, and an admin dashboard.",
            small_image: "/pi/ms-watches.png",
            big_image: "/pi/ms-watches.png"
        },
        {
            link: "https://github.com/abdurahimovf18/wood-decoration",
            project_name: "Wood Decoration",
            description: "pi/wood-decoration.png",
            small_image: "/pi/image.png",
            big_image: "/pi/image.png"
        },
        {
            link: "https://github.com/abdurahimovf18/My-first-portfolio.git",
            project_name: "My First Portfolio",
            description: "This portfolio was build using Django when I was studying in Najot Ta'lim",
            small_image: "/pi/first-portfolio.png",
            big_image: "/pi/first-portfolio.png"
        },
        {
            link: "https://github.com/abdurahimovf18/portfolio.git",
            project_name: "Portfolio",
            description: "A portfolio's frontend part which I did in a day using NextJs",
            big_image: "/pi/portfolio.png",
            small_image: "/pi/portfolio.png",
        }
    ];

    if (typeof projects === "undefined" || projects.length < 1) return null

    const [project, setProject] = useState<Project>(projects[0])
    const [currentInx, setInx] = useState<number>(0)

    const projectsPerView = 5
    const [projectListIndex, setProjectListIndex] = useState<number>(0)

    const [currentProjects, setCurrentProjects] = useState<Project[]>(projects.slice(0, projectsPerView))

    useEffect(
        () => {
            setCurrentProjects(projects.slice(projectListIndex, projectListIndex + projectsPerView))
        }, [projectListIndex]
    )

    useEffect(
        () => {
            setProject(currentProjects[currentInx])
        }, [currentInx]
    )

    const setNewInx = (index: number) => {
        if (index === currentInx) return 
        const newIndex = (index % projectsPerView + projectsPerView) % projectsPerView
    
        setInx(newIndex)
    }

    const setNextList = () => {
        setProjectListIndex((prevIndex) => 
            Math.min(prevIndex + projectsPerView, projectsPerView - 1)
        );
    }
    
    const setPrevList = () => {
        setProjectListIndex((prevIndex) => 
            Math.max(prevIndex - projectsPerView, 0)
        );
    }

    return (
        <section id="projects" className="container">
            <div className="w-full relative h-[600px] flex justify-between items-center">

                <div className="w-full h-[500px] flex flex-col justify-between items-start sticky z-20">
                    <h1 className="section-title">Projects</h1>

                    <p className="max-w-[500px] xxs:text-[0.8rem] xs:text-[1rem]">
                        Since I recently completed my courses, 
                        I haven't had the opportunity to work on large-scale startup 
                        projects that would be highly impressive. However, I have 
                        developed several foundational projects that effectively 
                        showcase the skills and knowledge I have acquired. These 
                        projects serve as practical demonstrations of my ability to 
                        apply what I have learned in real-world scenarios.
                    </p>

                    <div className="w-full flex justify-between items-end relative">

                    <div className="flex">

                        <button onClick={setPrevList}>
                            <ChevronLeft />
                        </button>

                        <ul className="xxs:w-[80px] sm:w-[120px] flex mx-3 justify-center items-center">
                            {currentProjects.map(
                                (value, index) => {
                                    return (
                                        <li key={`${value.project_name}${index}toggle`}>
                                            <button
                                            onClick={() => setNewInx(index)}
                                            className="xxs:w-[35px] sm:w-[43px] bg-[rgba(0,0,0,0.8)] rounded-sm 
                                            aspect-square flex-center relative project-choice">
                                                <Image 
                                                    src={value.small_image}
                                                    alt={value.project_name}
                                                    fill
                                                    className="max-w-full max-h-full p-2 pointer-events-none"
                                                />

                                            </button>
                                        </li>
                                    )
                                }
                            )}
                        </ul>

                        <button onClick={setNextList}>
                            <ChevronRight />
                        </button>

                    </div>
                    

                    <div className="text-end mr-5 flex flex-col items-end w-max">
                        <p className="opacity-0  xxs:text-[0.6rem] xs:text-[0.96rem]">{project.description.slice(0, 120)}</p>
                        <p className="right-10 top-0 absolute xxs:text-[0.6rem] xs:text-[0.96rem]">
                            {`${project.description.slice(0, 120)}...`}
                        </p>
                        <Link className="link-btn bg-foreground text-background w-max mt-3 px-3 py-1 whitespace-nowrap" 
                        href={project.link}>
                            <span>View Project</span>
                        </Link>
                    </div>

                </div>
                </div>

                <div className="absolute right-0 top-0 w-4/5 h-[600px]">
                    
                    <div className="fade-img-box h-[600px]">
                        <Image 
                            src={project.small_image}
                            alt={project.project_name}
                            fill
                            className="max-w-full max-h-full object-cover"
                        />
                    </div>
                    

                </div>


            </div>
            

        </section>
    )
}