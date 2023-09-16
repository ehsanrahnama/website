import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
import RelatedProjects from "../../components/projects/RelatedProjects";
import { useRouter } from "next/router";

function ProjectSingle() {
  return <div className="container mx-auto"></div>;
}

// export async function getServerSideProps({ query }) {
// 	const { id } = query;
// 	return {
// 		props: {
// 			project: projectsData.filter(
// 				(project) => projects.id === parseInt(id)
// 			)[0],
// 		},
// 	};
// }

export default ProjectSingle;
