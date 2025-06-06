import PagesMetaHead from "../../components/PagesMetaHead";
import ProjectsGrid from "../../components/projects/ProjectsGrid";
import { projectsData } from "../../data/projectsData";

function Projects() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Projects" />

      <ProjectsGrid title={"Projects"} data={projectsData} />
    </div>
  );
}

export default Projects;
