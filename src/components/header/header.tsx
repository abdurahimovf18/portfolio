import Link from "next/link"
import { HeaderLinks } from "../navigations/header-links/header-links";
import { ThemeBtn } from "../theme-switcher/theme-switcher-btn";


const HEADER_LINKS: Record<string, string> = {
    Home: "/#home",
    Projects: "/#projects",
    Skills: "/#skills",
    Education: "/#education",
}

export function Header() {
    return (
        <header className="w-screen fixed h-[60px] bg-background z-50">
            
            <nav className="w-full h-full flex justify-between items-center container">

                <Link href={"/#home"} className="text-2xl">
                    <p className="pointer-events-none">✨</p>
                </Link>

                <div className="justify-center items-center flex">
                    <ul className="xxs:hidden md:flex justify-center items-start gap-5">
                        {Object.entries(HEADER_LINKS).map(
                            ([title, link]) => <li key={`${title}&${link}`} 
                            className="text-sm font-bold"><Link href={link}>{title}</Link></li>
                        )}
                    </ul>
                    <ThemeBtn />

                </div>

                <div className="relative h-full xxs:flex md:hidden">

                    <HeaderLinks links={HEADER_LINKS} />

                </div>

            </nav>

        </header>
    )
}



