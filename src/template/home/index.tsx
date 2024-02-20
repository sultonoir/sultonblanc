import React from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./skills";
import { getPostsClient } from "@/actions/get";
import Projects from "./Projects";
import Contact from "./contact";
import Experience from "./Experience";

const Home = async () => {
  const posts = await getPostsClient({
    category: "project",
  });

  return (
    <main className="mt-[80px] flex h-full flex-col items-center px-4">
      <div className="absolute top-0 -z-10 hidden size-full bg-white dark:hidden md:block">
        <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Intro />
      <About />
      <Projects posts={posts} />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
