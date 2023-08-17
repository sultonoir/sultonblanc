import { getProjects } from "@/sanity/sanity-utils";

import React from "react";

const page = async () => {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
};

export default page;
