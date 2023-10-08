import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import LayoutClient from "@/components/shared/layout-client";
import Skills from "@/components/skills";
import config from "@/lib/config";
import { getProjects } from "@/sanity/sanity-utils";

const fetchBlog = async () => {
  const reqOprtions = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const request = await fetch(
    `${config.api}/api/blogs?=populate=*`,
    reqOprtions
  );
  const response = await request.json();
  return response;
};

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
