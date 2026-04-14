import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";

import { useProject } from "../context/Project";

function ProjectCreate() {
  const {
    isError,
    projectName,
    projectNameError,
    projectDescription,
    projectDescriptionError,
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
      <p>Project Name</p>
      <input
        value={projectName}
        onChange={(e) => {
          handleProjectNameInput(e);
        }}
      ></input>
      <p>Project Description</p>
      <input
        value={projectDescription}
        onChange={(e) => {
          handleProjectDescriptionInput(e);
        }}
      ></input>
      <div>
        <Button
          type="create"
          onClick={() => {
            (handleCreateNewProject(), handleResetInput());
          }}
        >
          Create
        </Button>
      </div>
    </>
  );
}

export default ProjectCreate;
