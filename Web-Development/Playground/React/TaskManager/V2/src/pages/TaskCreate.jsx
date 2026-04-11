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
