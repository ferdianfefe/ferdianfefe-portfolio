import Image from "next/image";
import Link from "next/link";

const tagColors = {
  Python: "bg-blue-500",
  "Data Science": "bg-green-500",
  "Machine Learning": "bg-yellow-500",
  "Web Development": "bg-red-500",
};

type Project = {
  title: string;
  description: string;
  image: string;
  path?: string;
  tags: string[];
};

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.path || "/projects"}
      className="project-item rounded-lg w-full hover:scale-110 transition-all ease-linear duration-75 shadow-md min-h-[400px] cursor-pointer"
    >
      <div className="project-item__image">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </div>
      <div className="project-item__content p-6 ">
        <div className="">
          <h3 className="project-item__title font-semibold text-base">
            {project.title}
          </h3>
          <p className="project-item__description font-light text-sm my-5">
            {project.description}
          </p>
        </div>
        <div className="project-item__tags flex mt-auto">
          {project.tags.map((tag, index) => (
            // <div
            //   key={index}
            //   className={`project-item__tag ${tagColors[tag]} px-1 py-1 rounded-md text-xs block mr-2`}
            // >
            //   {tag}
            // </div>
            <div
              key={index}
              className="bg-gray-200 px-1 py-1 rounded-md text-xs block mr-2"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
