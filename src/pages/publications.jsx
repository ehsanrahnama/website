import { Certificate } from "crypto";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { publicationsData } from "../data/publicationsData";
import { certificatesData } from "../data/certificatesData";

function publications() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Publications & Certificates" />

      <ProjectsGrid title="Publications" data={publicationsData} />
      <ProjectsGrid title="Certificates" data={certificatesData} />
    </div>
  );
}

export default publications;
