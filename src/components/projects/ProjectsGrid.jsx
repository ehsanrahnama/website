import ProjectSingle from "./ProjectSingle";

function ProjectsGrid({ title, data = [] }) {
  return (
    <section className="py-5 mt-20">
      <div className="text-center">
        <p className="font-bold text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          {title}
        </p>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-green-300 block mt-4 mb-2" />
      </div>

      <div className="mt-6">
        {data.map((project, index) => (
          <ProjectSingle key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
