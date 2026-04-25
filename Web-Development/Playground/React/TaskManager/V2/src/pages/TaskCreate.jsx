import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";
import InputWithTitle from "../components/InputWithTitle.jsx";

import { useTask } from "../context/Task";
import { useProject } from "../context/Project";
import { usePerson } from "../context/Person.jsx";

import {
  PRIORITY,
  STORY_POINTS,
  DEFAULT_SELECT_PLACEHOLDER,
} from "../constants/constants.js";

function TaskCreate() {
  const {
    isError,
    errorMsg,
    taskList,
    id,
    projectId,
    taskName,
    taskNameError,
    projectName,
    priority,
    deadline,
    assignedTo,
    storyPointInput,
    taskDescriptionError,
    taskDescription,
    sprintName,
    connectedTaskName,
    attachment,
    dispatch,
  } = useTask();

  const { projectList } = useProject();
  const { personList } = usePerson();

  function handleTaskNameInput(e) {
    dispatch({ type: "addTaskName", payLoad: e.target.value });
  }

  function handleProjectNameInput(e) {
    //Filter project name from the project list as in the select we are sending id so we have to match it up!
    dispatch({
      type: "addProjectName",
      payLoad: projectList.find((p) => p.id == e.target.value)?.projectName,
    });
    //Send ID
    dispatch({ type: "addProjectId", payLoad: e.target.value });
  }

  function handlePriorityInput(e) {
    dispatch({ type: "addPriority", payLoad: e.target.value });
  }

  function handleDeadlineInput(e) {
    dispatch({ type: "addDeadline", payLoad: e.target.value });
  }

  function handleAssignedToInput(e) {
    dispatch({ type: "addAssignedTo", payLoad: e.target.value });
  }

  function handleStoryPointInput(e) {
    dispatch({ type: "addStoryPointInput", payLoad: Number(e.target.value) });
  }

  function handleTaskDescriptionInput(e) {
    dispatch({ type: "addTaskDescription", payLoad: e.target.value });
  }

  function handleSprintNameInput(e) {
    dispatch({ type: "addSprintName", payLoad: e.target.value });
  }

  function handleAttachmentInput(e) {
    dispatch({ type: "addAttachment", payLoad: e.target.value });
  }

  function handleCreateNewTask() {
    const newTask = {
      id: id + 1,
      projectId,
      taskName,
      projectName,
      priority,
      deadline,
      assignedTo,
      storyPointInput,
      taskDescription,
      sprintName,
      connectedTaskName,
      attachment,
    };

    dispatch({ type: "addNewTask", payLoad: newTask });
  }

  function handleResetInput() {
    dispatch({ type: "resetInputData" });
  }

  return (
    <>
      <p>Task Create Page</p>
      {isError && <p>{errorMsg}</p>}
      <div>
        <ButtonBack />
        <Button
          onClick={() => {
            handleResetInput();
          }}
          type="primary"
        >
          Reset
        </Button>
      </div>
      <div>
        <p>Corresponding Project</p>
        <select
          name="ProjectList"
          id="ProjectList"
          value={projectId}
          onChange={(e) => handleProjectNameInput(e)}
        >
          <option value="">{DEFAULT_SELECT_PLACEHOLDER}</option>
          {[...projectList].map((el) => (
            <option value={el.id} key={el.id}>
              {el.projectName}
            </option>
          ))}
        </select>
        <InputWithTitle
          isTitle="Sprint Name"
          placeholder="Name of the sprint"
          value={sprintName}
          onChange={(e) => {
            handleSprintNameInput(e);
          }}
        />
        <InputWithTitle
          isTitle="Name of the task"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => {
            handleTaskNameInput(e);
          }}
        />
        {isError && <p>{taskNameError}</p>}
        <p>Priority</p>
        <select
          name="PriorityList"
          id="PriorityList"
          value={priority}
          onChange={(e) => {
            handlePriorityInput(e);
          }}
        >
          <option value="">{DEFAULT_SELECT_PLACEHOLDER}</option>
          {PRIORITY.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <p>Story points</p>
        <select
          name="StoryPointsList"
          id="StoryPointsList"
          value={storyPointInput}
          onChange={(e) => {
            handleStoryPointInput(e);
          }}
        >
          <option value="">{DEFAULT_SELECT_PLACEHOLDER}</option>
          {STORY_POINTS.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <InputWithTitle
          isTitle="Deadline"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => {
            handleDeadlineInput(e);
          }}
        />
        {/*<p>Deadline</p>
        <input
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => {
            handleDeadlineInput(e);
          }}
        ></input>*/}
        <p>Assigned to</p>
        <select
          name="AssignedTo"
          id="AssignedTo"
          value={assignedTo}
          onChange={(e) => {
            handleAssignedToInput(e);
          }}
        >
          <option value="">{DEFAULT_SELECT_PLACEHOLDER}</option>
          {[...personList].map((el) => (
            <option value={el.fullName} key={el.id}>
              {el.fullName}
            </option>
          ))}
        </select>
        <InputWithTitle
          isTitle="Description"
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => {
            handleTaskDescriptionInput(e);
          }}
        />
        {isError && <p>{taskDescriptionError}</p>}
        <p>Attachment</p>
        <input
          placeholder="WIP"
          value={attachment}
          onChange={(e) => {
            handleAttachmentInput(e);
          }}
          //Work in progress no functionality implemented
          disabled={true}
        ></input>
      </div>
      <div>
        <Button
          onClick={() => {
            (handleCreateNewTask(), handleResetInput());
          }}
          type="create"
          isDisabled={isError}
        >
          Create
        </Button>
      </div>
    </>
  );
}

export default TaskCreate;
