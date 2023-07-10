import ProjectItem from "@/components/elements/ProjectItem";
import DefaultLayout from "@/components/layout/defaultLayout";

const webProjects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/Leafin/leafin-1.png",
    tags: ["Python", "Data Science", "Machine Learning"],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/Pathseeker.id/path1.png",
    tags: ["Python", "Data Science", "Machine Learning"],
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/PPSMB Web/1.png",
    tags: ["Python", "Data Science", "Machine Learning"],
  },
];

const Projects = () => {
  return (
    <DefaultLayout>
      <section>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Projects</h1>
          <h2 className="text-xl">Data Science and Artificial Intelligence</h2>
        </div>
        <div className="px-20 py-8">
          <div className="grid grid-cols-3 gap-20">
            {webProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl">Web Development</h2>
        </div>
        <div className="px-20 py-8">
          <div className="grid grid-cols-3 gap-20">
            {webProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Projects;
