import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";
import ButtonCreate from "../components/ButtonCreate";

import { useProject } from "../context/Project";

function ProjectCreate() {
  const {
    isError,
    id,
    projectName,
    projectNameError,
    projectNameErrorMsg,
    projectDescription,
    projectDescriptionError,
    projectDescriptionErrorMsg,
    projectCreateErrorMsg,
    dispatch,
  } = useProject();

  function handleProjectNameInput(e) {
    dispatch({ type: "addProjectName", payLoad: e.target.value });
  }

  function handleProjectDescriptionInput(e) {
    dispatch({ type: "addProjectDescription", payLoad: e.target.value });
  }

  function handleResetInput() {
    dispatch({ type: "resetInput" });
  }

  function handleCreateNewProject() {
    const newProject = {
      id,
      projectName,
      projectDescription,
    };

    dispatch({ type: "addNewProject", payLoad: newProject });
  }

  return (
    <>
      <p>Create New Project</p>
      <div>
        <ButtonBack />
        <Button
          type="primary"
          onClick={() => {
            handleResetInput();
          }}
        >
          Reset
        </Button>
      </div>
      {isError && <p>{projectCreateErrorMsg}</p>}
      <p>Project Name</p>
      <p> {projectNameError && <p>{projectNameErrorMsg}</p>}</p>
      <input
        value={projectName}
        onChange={(e) => {
          handleProjectNameInput(e);
        }}
      ></input>
      <p>Project Description</p>
      {projectDescriptionError && <p>{projectDescriptionErrorMsg}</p>}
      <input
        value={projectDescription}
        onChange={(e) => {
          handleProjectDescriptionInput(e);
        }}
      ></input>
      <div>
        <ButtonCreate
          onClick={() => {
            (handleCreateNewProject(), handleResetInput());
          }}
        />
      </div>
    </>
  );
}

export default ProjectCreate;
