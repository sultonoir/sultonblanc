"use client";
import SectionHeading from "@/components/ui/section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";
import React from "react";
import Article from "./Article";
import { Contents } from "@/lib/types";

type ProjectsProps = {
  posts: Contents[];
};

const Projects = ({ posts }: ProjectsProps) => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="container mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {posts.map((project) => (
          <React.Fragment key={project.id}>
            <Article project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
