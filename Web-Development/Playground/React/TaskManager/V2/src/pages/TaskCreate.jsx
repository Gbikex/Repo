import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";
import { useTask } from "../context/Task";
import { useProject } from "../context/Project";

import { PRIORITY, STORY_POINTS } from "../constants/constants.js";

function TaskCreate() {
  const {
    isError,
    errorMsg,
    taskList,
    taskId,
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

  function handleTaskNameInput(e) {
    dispatch({ type: "addTaskName", payLoad: e.target.value });
  }

  function handleProjectNameInput(e) {
    dispatch({ type: "addProjectName", payLoad: e.target.value });
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
      taskId: taskId + 1,
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
          onChange={(e) => handleProjectNameInput(e)}
        >
          <option selected>--Please choose an option--</option>
          {[...projectList].map((el) => (
            <option value={el.projectName} key={el.id}>
              {el.projectName}
            </option>
          ))}
        </select>
        <p>Sprint Name</p>
        <input
          placeholder="Name of the sprint"
          value={sprintName}
          onChange={(e) => {
            handleSprintNameInput(e);
          }}
        ></input>
        <p>Name of the task</p>
        <input
          placeholder="Task name"
          value={taskName}
          onChange={(e) => {
            handleTaskNameInput(e);
          }}
        ></input>
        {isError && <p>{taskNameError}</p>}
        <p>Priority</p>
        <select
          name="PriorityList"
          id="PriorityList"
          onChange={(e) => {
            handlePriorityInput(e);
          }}
        >
          <option selected>--Please choose an option--</option>
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
          onChange={(e) => {
            handleStoryPointInput(e);
          }}
        >
          <option selected>--Please choose an option--</option>
          {STORY_POINTS.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <p>Deadline</p>
        <input
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => {
            handleDeadlineInput(e);
          }}
        ></input>
        <p>Assigned to</p>
        <input
          placeholder="Assigned person"
          value={assignedTo}
          onChange={(e) => {
            handleAssignedToInput(e);
          }}
        ></input>
        <p>Description</p>
        <input
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => {
            handleTaskDescriptionInput(e);
          }}
        ></input>
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
