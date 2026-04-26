import { useState } from "react";

import ButtonBack from "./ButtonBack";
import Button from "./Button";

import { useProject } from "../context/Project";
import { useParams } from "react-router-dom";

function ProjectCardDetail() {
  const { projectList, dispatch } = useProject();
  const { id } = useParams();

  const project = projectList.find(
    (project) => Number(project.id) === Number(id),
  );

  const [updatedName, setUpdatedName] = useState(project.projectName);
  const [updatedDescription, setUpdatedDescription] = useState(
    project.projectDescription,
  );

  function handleUpdate() {
    dispatch({
      type: "updateProject",
      payLoad: {
        id: project.id,
        projectName: updatedName,
        projectDescription: updatedDescription,
      },
    });
  }

  function handleReset() {
    setUpdatedDescription(project.projectName);
    setUpdatedName(project.projectDescription);
  }

  return (
    <>
      <p>Project Card Detail</p>
      <div>
        <ButtonBack />
        <Button
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </Button>
      </div>
      <p>
        Project Name:
        <input
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        ></input>
      </p>
      <p>
        Project Description: {project.projectDescription}
        <input
          value={updatedDescription}
          onChange={(e) => {
            setUpdatedDescription(e.target.value);
          }}
        ></input>
      </p>
      <div>
        <Button onClick={handleUpdate}>Update</Button>
      </div>
    </>
  );
}

export default ProjectCardDetail;
