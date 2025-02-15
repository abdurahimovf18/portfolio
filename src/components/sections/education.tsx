

interface Education {
    place_name: string;
    description: string;
}



export function EducationSection() {

    const educationList: Education[] = [
        {
            place_name: "School",
            description: "I studied at school for 9 years, where I developed a strong foundation in mathematics and English."
        },
        {
            place_name: "Mars IT School",
            description: `Studying at Mars IT School was a cornerstone of my programming journey. 
                          I learned fundamental concepts of HTML, CSS, JavaScript, and Python.`
        },
        {
            place_name: "Najot Ta'lim",
            description: `At Najot Ta'lim, I gained advanced knowledge of popular tech stacks such as FastAPI, 
                          Redis, Django Rest Framework (DRF), and Django.`
        },
        {
            place_name: "S.H. Sirojiddinov Lyceum",
            description: "At lyceum, I improved my problem-solving skills in advanced mathematics and gained a deeper understanding of English."
        },
    ];

    return (
        <section id="education" className="container pb-10">
            <h1 className="section-title pt-16">Education</h1>

            <div className="w-[90%] flex flex-wrap justify-center items-center mx-auto pt-16">

                {educationList.map(
                    (educationPlace, index) => {

                        return (
                            <div key={`${index}${educationPlace.place_name}`} 
                            className="xxs:w-[90%] md:w-[50%] xl:w-[25%] aspect-2/1 scale-[0.9] education-box relative p-2">

                                <p className="text-lg font-black">{educationPlace.place_name}</p>
                                <p className="text-sm pt-4 h-[140px] overflow-y-scroll overscroll-contain scrollbar">{educationPlace.description}</p>
                            </div>
                        )
                    }
                )}

            </div>

        </section>
    )
}