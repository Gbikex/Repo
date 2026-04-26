import { useState } from "react";

import ButtonBack from "./ButtonBack";
import ButtonUpdate from "./ButtonUpdate";
import Button from "./Button";
import InputWithTitle from "./InputWithTitle";

import { useProject } from "../context/Project";
import { useParams } from "react-router-dom";
import ButtonReset from "./ButtonReset";

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
        <ButtonReset
          onClick={() => {
            handleReset();
          }}
        />
      </div>
      <InputWithTitle
        isTitle="Project Name:"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
      <InputWithTitle
        isTitle=" Project Description:"
        value={updatedDescription}
        onChange={(e) => {
          setUpdatedDescription(e.target.value);
        }}
      />
      <div>
        <ButtonUpdate onClick={handleUpdate} />
      </div>
    </>
  );
}

export default ProjectCardDetail;
