import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import LayoutClient from "@/components/shared/layout-client";
import Skills from "@/components/skills";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const projects = await serverClient.getProject();
  return (
    <LayoutClient>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects ProjectData={projects} />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </LayoutClient>
  );
}
