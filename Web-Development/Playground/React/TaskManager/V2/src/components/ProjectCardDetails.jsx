import ButtonBack from "./ButtonBack";

import { useProject } from "../context/Project";
import { useParams } from "react-router-dom";

function ProjectCardDetail() {
  const { projectList } = useProject();
  const { id } = useParams();
  console.log(projectList);
  console.log(id);

  const project = projectList.find(
    (project) => Number(project.id) === Number(id),
  );

  console.log(project);

  return (
    <>
      <p>Project Card Detail</p>
      <p>Project Name: {project.projectName}</p>
      <p>Project Description: {project.projectDescription}</p>
      <div>
        <ButtonBack />
      </div>
    </>
  );
}

export default ProjectCardDetail;
