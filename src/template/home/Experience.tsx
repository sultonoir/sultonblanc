"use client";
import SectionHeading from "@/components/ui/section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { data } from "@/lib/data";
import { Component1Icon } from "@radix-ui/react-icons";
import React from "react";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <div
      ref={ref}
      id="experience"
      className="mb-28 size-full">
      <SectionHeading>My Experience</SectionHeading>
      <div className="container grid max-w-screen-sm grid-cols-1 gap-5 ">
        {data.experience.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Component1Icon />
                <span>{item.name}</span>
              </h2>
              <p className="flex gap-2 text-zinc-400">
                <span>{item.years}</span>
                <span>|</span>
                <span>{item.place}</span>
              </p>
            </div>
            <p className="text-justify text-foreground/90">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
