import React from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./skills";
import Projects from "./Projects";
import Contact from "./contact";
import Experience from "./Experience";
import { PostsRecord } from "@/xata";

async function getData() {
  const res = await fetch("http://localhost:3000/api/event/", {
    method: "GET",
    next: { tags: ["events"] },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const plainData: PostsRecord[] = await getData();

  return (
    <main className="mt-[80px] flex h-full flex-col items-center px-4">
      <div className="absolute top-0 -z-10 size-full bg-white dark:hidden">
        <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Intro />
      <About />
      <Projects posts={plainData} />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
