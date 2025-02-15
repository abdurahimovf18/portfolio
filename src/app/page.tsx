import { HomeSection } from "@/components/sections/home-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationSection } from "@/components/sections/education";


export default function Home() {
  return (
    <main className="">
      <HomeSection />
      <ProjectsSection />
      <SkillsSection/>
      <EducationSection />
    </main>
  );
}
