import { act } from "react";
import { useTask } from "../context/Task";

function TaskCreate() {
  const {
    taskList,
    taskName,
    projectName,
    priority,
    deadline,
    assignedTo,
    expectedInput,
    taskDescription,
    sprintName,
    connectedTaskName,
    attachment,
    dispatch,
  } = useTask();

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

  function handleExpectedInput(e) {
    dispatch({ type: "addExpectedInput", payLoad: Number(e.target.value) });
  }

  function handleTaskDescriptionInput(e) {
    dispatch({ type: "addTaskDescription", payLoad: e.target.value });
  }

  function sprintNameInput(e) {
    dispatch({ type: "addSprintName", payLoad: e.target.value });
  }

  function handleAttachmentInput(e) {
    dispatch({ type: "addAttachment", payLoad: e.target.value });
  }

  return (
    <>
      <p>Task Create Page</p>
      <div>
        <p>Corresponding Project</p>
        <input
          placeholder="Project name"
          value={taskName}
          onChange={(e) => {
            handleTaskNameInput(e);
          }}
        ></input>
        <p>Name of the task</p>
        <input placeholder="Task name"></input>
        <p>Priority</p>
        <input placeholder="1"></input>
        <p>Deadline</p>
        <input placeholder="Deadline"></input>
        <p>Assigned to</p>
        <input placeholder="Assigned person"></input>
        <p>Description</p>
        <input placeholder="Description"></input>
      </div>
    </>
  );
}

export default TaskCreate;
