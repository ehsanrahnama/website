import PagesMetaHead from "@/components/PagesMetaHead";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import AppBanner from "@/components/shared/AppBanner";
import { certificatesData } from "@/data/certificatesData";
import { projectsData } from "@/data/projectsData";
import { publicationsData } from "@/data/publicationsData";

export default function Home() {
  return (
    <div
      className={`items-center w-full justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <PagesMetaHead title="Home" />

      <AppBanner />
      <div className="container mx-auto p-8 pb-20 gap-16 sm:p-20 ">

        <ProjectsGrid title={"Projects"} data={projectsData} />
        <ProjectsGrid title={"Certificates"} data={certificatesData} />

        <div className="mt-10 sm:mt-15 flex justify-center"></div>
      </div>
    </div>
  );
}
