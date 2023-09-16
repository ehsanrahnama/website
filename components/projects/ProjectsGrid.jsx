import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";
import ProjectsFilter from "./ProjectsFilter";

function ProjectsGrid() {
  return (
    <section className="py-5 mt-10 min-h-screen">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="mt-10">
        {projectsData.map((project, index) => (
          <ProjectSingle key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
