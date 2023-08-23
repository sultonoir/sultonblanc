"use client";
import { HomeIcon } from "lucide-react";
import React from "react";
import ProjectBtn from "../shared/ProjectBtn";
import Counter from "./Counter";
import Profile from "./Profile";

const Home = () => {
  return (
    <>
      <Profile ClassName="flex xl:hidden mb-5" />
      <h4 className="mb-10 inline-flex items-center rounded-full border border-border p-2 text-[12px]">
        <HomeIcon
          className="mr-2"
          size={15}
        />
        <span className="font-semibold">INTRODUCE</span>
      </h4>
      <h1 className="mb-5 text-6xl">
        Say Hi from <span className="text-rose-700">Sulton</span>,
        <br /> Front-End and Web Designer
      </h1>
      <p className="max-w-xl text-secondary-foreground">
        I'm a passionate front end developer who loves to create beautiful, my
        focus is <span>React (nextJS) </span>
      </p>
      <ProjectBtn />
      <Counter />
    </>
  );
};

export default Home;
