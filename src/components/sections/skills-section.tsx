"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


interface Skill {
    skill_name: string;
    degree: number;
    logo: string;
    description: string;
}


type ProgressBarProps = {
    degree: number;
  };
  

export function ProgressBar({ degree }: ProgressBarProps) {
    const percent = degree / 100;
  
    const goodColor = Math.round(255 * percent);
    const badColor = Math.round(255 * (1 - percent));
  
    return (
      <div className="w-full bg-zinc-200 h-1 rounded overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${degree}%`,
            backgroundColor: `rgba(${badColor}, ${goodColor}, 0, 1)`,
          }}
        />
      </div>
    );
}
  

export function SkillsSection () {
    const skills: Skill[] = [
        { skill_name: "Python", degree: 99.9, logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", description: "Expert in Python with deep knowledge in FastAPI, SQLAlchemy, and automation." },
        { skill_name: "JavaScript", degree: 80, logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", description: "Strong JavaScript skills, mainly focused on frontend and backend development with Next.js." },
        { skill_name: "TypeScript", degree: 90, logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", description: "Highly proficient in TypeScript, ensuring type safety in large-scale applications." },
        { skill_name: "FastAPI", degree: 90, logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png", description: "Advanced knowledge of FastAPI for building high-performance web applications." },
        { skill_name: "SQLAlchemy", degree: 80, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/512px-SQLAlchemy.svg.png?20231226153636", description: "Experience in ORM-based database management using SQLAlchemy." },
        { skill_name: "Alembic", degree: 80, logo: "https://upload.wikimedia.org/wikipedia/en/archive/f/f4/20170122064257%21Alembic_Pharmaceuticals_Ltd_logo.png", description: "Skilled in database migrations and version control using Alembic." },
        { skill_name: "Aiogram", degree: 90, logo: "https://avatars.githubusercontent.com/u/33784865?s=200&v=4", description: "Expert in creating Telegram bots using Aiogram framework." },
        { skill_name: "Next.js", degree: 80, logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", description: "Skilled in Next.js for building SSR and SSG applications." },
        { skill_name: "Django", degree: 80, logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg", description: "Experience in Django for developing scalable web applications." },
        { skill_name: "Django REST Framework (DRF)", degree: 70, logo: "https://www.django-rest-framework.org/img/logo.png", description: "Proficient in building RESTful APIs using Django REST Framework." },
        { skill_name: "PostgreSQL", degree: 70, logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", description: "Experience in database management using PostgreSQL." },
        { skill_name: "MySQL", degree: 70, logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg", description: "Good knowledge of MySQL for relational database management." },
        { skill_name: "SQL", degree: 70, logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", description: "Competent in SQL for querying and managing databases." },
        { skill_name: "Redis", degree: 50, logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg", description: "Basic knowledge of Redis for caching and performance optimization." },
        { skill_name: "Git", degree: 70, logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", description: "Proficient in Git for version control and collaboration." },
        { skill_name: "Linux", degree: 90, logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", description: "Highly experienced in Linux system administration and CLI tools." },
        { skill_name: "Bootstrap", degree: 90, logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", description: "Expert in Bootstrap for responsive web design." },
        { skill_name: "Tailwind CSS", degree: 95, logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", description: "Advanced experience in Tailwind CSS for modern UI design." },
        { skill_name: "Go", degree: 5, logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg", description: "Beginner in Go, currently learning for backend development." },
        { skill_name: "C", degree: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", description: "Basic understanding of C programming language." }
    ]

    const [chosenSkillInx, setChosenSkillInx] = useState<number>(0)
    const [chosenSkill, setChosenSkill] = useState<Skill>(skills[0])

    useEffect(
        () => {
            setChosenSkill(skills[chosenSkillInx])
        }, [chosenSkillInx]
    )


    return (
        <section id="skills" className="container pt-12 pb-5">
            
            <h1 className="section-title" >Skills</h1>

            <div className="w-full flex-center md:flex-row xxs:flex-col-reverse gap-x-10 pt-5">

                <div className="max-w-[400px]">

                    <div className="text-start">
                        <p className="max-w-[500px] mt-20 xxs:text-sm xxs:hidden md:flex xl:text-xl">
                            Here are the skills and experience 
                            I have gained throughout my programming journey, 
                            enabling me to build fast, scalable, and efficient 
                            applications with an excellent user experience (UX) and 
                            developer experience (DX).
                        </p>
                    </div>

                    <div className="xxs:w-full md:max-w-[380px] pt-[80px] flex-center flex-wrap gap-1">
                        {skills.map(
                            (skill, index) => {
                                return (
                                    <button onClick={() => setChosenSkillInx(index)}
                                    key={skill.skill_name} className="h-full relative skill-choise-btn">
                                        <div className="w-full h-full absolute-center overflow-hidden flex-center">
                                            <Image 
                                                src={skill.logo}
                                                alt={skill.skill_name}
                                                fill
                                                priority
                                                className="object-contain p-1"
                                            />
                                        </div>

                                        <div className="w-max py-1 px-4 sticky z-20 h-full opacity-0 hover:opacity-100 blur-btn">
                                            <p className="text-[0.7rem] font-bold max-w-[120px]">{skill.skill_name}</p>

                                            <div className="w-[90%] mx-auto pt-3">
                                                <ProgressBar degree={skill.degree} />
                                            </div>
                                            
                                        </div>
                                    </button>
                                )
                            }
                        )}
                    </div>

                </div>
                
                <div className="h-full m-auto">
                    
                    <div className="max-w-[450px] rounded-md overflow-hidden chosen-skill-box">
                        
                        <div className="w-full aspect-2/1 relative chosen-skill-image">
                            <Image 
                            src={chosenSkill.logo}
                            alt={chosenSkill.skill_name}
                            fill
                            className="object-contain p-2 pointer-events-none"
                            priority
                            />
                        </div>

                        <div className="p-2">
                            <p className="text-[1.5rem] font-black">{chosenSkill.skill_name}</p>
                            <p className="w-full max-h-[150px] text-sm mt-5 overflow-y-scroll overscroll-contain">{chosenSkill.description}</p>

                            <div className="w-4/5 pt-2">
                                <ProgressBar degree={chosenSkill.degree} />
                            </div>

                        </div>
                    </div>

                </div>
                

            </div>

        </section>
    )
}