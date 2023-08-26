"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Article from "./Article";
import { Project } from "@/types";

interface ProjectProps {
  ProjectData: Project[];
}

const Projects: React.FC<ProjectProps> = ({ ProjectData }) => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {ProjectData.map((project) => (
          <React.Fragment key={project._id}>
            <Article project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
