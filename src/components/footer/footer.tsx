import Link from "next/link";
import "./styles.css"


interface iFooterContent {
    title: string;
    content: Record<string, string>;
}


export function Footer() {
    const footerContents: iFooterContent[] = [
        {
            title: "USEFUL LINKS",
            content: {
                "Home": "/#home",
                "Projects": "/#projects",
                "Skills": "/#skills",
                "Education": "/#education"
            }
        },
        {
            title: "CONTACT",
            content: {
                "Instagram": "https://instagram.com/abdurahimovf_18/",
                "Telegram": "https://t.me/abdurahimov_f18",
                "Contact": "tel:+998974903433",
            }
        }
    ]

    return (
        <footer className="w-full mt-5 pt-5 footer-color">

            <div className="container py-20 flex justify-between items-start">

                <div className="w-full flex flex-wrap justify-center items-start gap-12">

                    {Object.entries(footerContents).map(
                        ([key, value]) => (
                            <div key={`${key}+${value.title}`}>
                                <p className="text-xl font-black">{value.title}</p>

                                <ul className="flex flex-col pt-3">
                                    {Object.entries(value.content).map(
                                        ([linkName, link]) => {

                                            return (
                                                <Link 
                                                key={`${linkName}to${link}`}
                                                className="hover:underline decoration-foreground decoration-1 opacity-70"

                                                href={link}>{linkName}</Link>
                                            )
                                        }
                                    )}
                                </ul>
                            </div>
                        )
                    )}

                </div>
            </div>
        </footer>
    )
}