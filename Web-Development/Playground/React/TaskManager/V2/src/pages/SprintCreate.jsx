import ButtonBack from "../components/ButtonBack";
import ButtonCreate from "../components/ButtonCreate";
import ButtonReset from "../components/ButtonReset";
import InputWithTitle from "../components/InputWithTitle";
import SelectListWithTitle from "../components/SelectListWithTitle";

import { useProject } from "../context/Project";
import { useSprint } from "../context/Sprint";

function SprintCreate() {
  const { projectList } = useProject();
  const { id, sprintName, projectId, projectName, dispatch } = useSprint();

  function handleAddSprintName(e) {
    dispatch({ type: "addSprintName", payLoad: e.target.value });
  }

  function handleAddProjectDetails(projectId, projectName) {
    dispatch({
      type: "addProjectDetails",
      payLoad: {
        id: projectId,
        name: projectName,
      },
    });
  }

  function handleReset() {
    dispatch({ type: "resetInputs" });
  }

  return (
    <>
      <div>
        <ButtonBack />
        <ButtonReset
          onClick={() => {
            handleReset();
          }}
        />
      </div>
      <p>Sprint create</p>
      <div>
        <InputWithTitle
          isTitle="Sprint Name"
          value={sprintName}
          onChange={(e) => {
            handleAddSprintName(e);
          }}
        />
        <SelectListWithTitle
          isTitle="Project List"
          name="project-list"
          id="project-list"
          value={projectId}
          onChange={(e) => {
            const select = projectList.find(
              (project) => Number(project.id) === Number(e.target.value),
              handleAddProjectDetails(select.id, select.projectName),
            );
          }}
        >
          {projectList.map((el) => (
            <option value={el.id} key={el.id}>
              {el.projectName}
            </option>
          ))}
        </SelectListWithTitle>
      </div>
      <div>
        <ButtonCreate
          onClick={() => {
            handleReset();
          }}
        />
      </div>
    </>
  );
}

export default SprintCreate;
