import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";

function publications() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Projects" />

      <ProjectsGrid title="Projects portfolio" />
    </div>
  );
}

export default publications;
