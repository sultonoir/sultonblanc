"use client";
import SectionHeading from "@/components/ui/section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { PostsRecord } from "@/xata";
import React from "react";
import Article from "./Article";

type ProjectsProps = {
  posts: PostsRecord[];
};

const Projects = ({ posts }: ProjectsProps) => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      {posts.map((project) => (
        <React.Fragment key={project.id}>
          <Article project={project} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
