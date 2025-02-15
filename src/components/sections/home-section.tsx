import Image from "next/image"
import Link from "next/link"
import "./styles.css"

import { SocialLinks } from "../navigations/social-links/social-links"


export function HomeSection() {
    return (
        <section id="home" className="container pb-[170px] pt-[190px] flex-center">
            <div className="flex xxs:flex-col xl:flex-row justify-center xxs:gap-14 xl:gap-20 items-center">

                <div className="relative xxs:w-[250px] xl:w-[300px] aspect-square rounded-full overflow-hidden">
                    <Image 
                        src="https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill-1200x682.jpg"
                        alt="dev-img"
                        fill
                        className="object-cover pointer-events-none"
                        priority
                    />
                </div>

                <div className="flex flex-col text-center items-center">
                    <div className="flex flex-col">
                        <h1 className="xxs:text-[0.8rem] xs:text-[1.4rem] font-bold">Hi!</h1>
                        <h2 className="xxs:text-[1.3rem] xs:text-[1.9rem] font-extrabold pt-1">I'm Fazliddin Abdurahimov</h2>
                        <h3 className="xxs:text-[0.7rem] xs:text-[1.3rem] font-bold">Full-Stack web developer</h3>
                    </div>
                    
                    <div className="flex justify-center items-center gap-2 pt-4">
                        <button className="big-btn bg-sky-500 text-[#fff]">
                            Download CW
                        </button>
                        <Link href="https://github.com/abdurahimovf18" className="big-btn ring-sky-500 text-sky-500 ring-1">
                            Go to GitHUB
                        </Link>
                    </div>

                    <div className="pt-1 w-full">
                        <SocialLinks />
                    </div>

                </div>

            </div>
        </section>
    )
}