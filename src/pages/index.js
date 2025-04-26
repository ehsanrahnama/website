import PagesMetaHead from "@/components/PagesMetaHead";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import AppBanner from "@/components/shared/AppBanner";
import { certificatesData } from "@/data/certificatesData";
import { projectsData } from "@/data/projectsData";
import { publicationsData } from "@/data/publicationsData";

export default function Home() {
  return (
    <div
      className={`items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="container mx-auto">
        <PagesMetaHead title="Home" />

        <AppBanner />

        <ProjectsGrid title={"Publications"} data={publicationsData} />
        <ProjectsGrid title={"Certificates"} data={certificatesData} />
        <ProjectsGrid title={"Projects"} data={projectsData} />

        <div className="mt-10 sm:mt-15 flex justify-center"></div>
      </div>
    </div>
  );
}
