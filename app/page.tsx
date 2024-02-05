import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import LayoutClient from "@/components/shared/layout-client";
import Skills from "@/components/skills";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const data = await getProjects();

  return (
    <LayoutClient>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects ProjectData={data} />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </LayoutClient>
  );
}
