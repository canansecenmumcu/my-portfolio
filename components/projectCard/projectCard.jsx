import Image from "next/image";
import { projectData } from "@/assets/projectsData";

const ProjectCard = () => {
  return (
    <>
      {projectData.map((project) => {
        return (
          <div
            key={project.id}
            className="w-[400px] h-[400px]  text-black "
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-red-100 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out h-[400px] w-[400px] ">
              <h1>{project.name}</h1>
              <p>{project.desc}</p>
              <Image src={project.image} width={100} height={100} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
