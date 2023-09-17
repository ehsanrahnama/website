import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";
import nvidia from "../public/images/nvidia_jetson_board.jpg";
import { projectsData } from "../data/projectsData";
import { publicationsData } from "../data/publicationsData";
import { certificatesData } from "../data/certificatesData";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />

      <AppBanner />

      <ProjectsGrid title={"Publications"} data={publicationsData} />
      <ProjectsGrid title={"Certificates"} data={certificatesData} />
      <ProjectsGrid title={"Projects"} data={projectsData} />

      <div className="mt-10 sm:mt-15 flex justify-center"></div>
    </div>
  );
}
