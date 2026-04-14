import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";

import { UseProject } from "../context/Project";

function ProjectCreate() {
  const { projectName, projectDescription } = UseProject;

  return (
    <>
      <p>Create New Project</p>
      <div>
        <ButtonBack />
        <Button type="primary">Reset</Button>
      </div>
      <p>Project Name</p>
      <input></input>
      <p>Project Description</p>
      <input></input>
      <div>
        <Button type="create">Create</Button>
      </div>
    </>
  );
}

export default ProjectCreate;
