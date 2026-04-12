import { useTask } from "../context/Task";

function TaskCreate() {
  const {
    inputTaskList,
    inputTaskName,
    inputProjectName,
    inputPriority,
    inputDeadline,
    inputAssignedTo,
    inputExpectedInput,
    inputTaskDescription,
    inputSprintName,
    inputConnectedTaskName,
    inputAttachment,
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

  function handleCreateNewTask() {
    const newTask = {
      inputTaskList,
      inputTaskName,
      inputProjectName,
      inputPriority,
      inputDeadline,
      inputAssignedTo,
      inputExpectedInput,
      inputTaskDescription,
      inputSprintName,
      inputConnectedTaskName,
      inputAttachment,
    };

    dispatch({ type: "addNewTask", payLoad: newTask });
  }

  function handleResetInput() {
    dispatch({ type: "resetInputData" });
  }

  return (
    <>
      <p>Task Create Page</p>
      <div>
        <button
          onClick={() => {
            handleResetInput();
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <p>Corresponding Project</p>
        <input
          placeholder="Project name"
          value={inputProjectName}
          onChange={(e) => {
            handleProjectNameInput(e);
          }}
        ></input>
        <p>Name of the task</p>
        <input
          placeholder="Task name"
          value={inputTaskName}
          onChange={(e) => {
            handleTaskNameInput(e);
          }}
        ></input>
        <p>Priority</p>
        <input
          placeholder="1"
          value={inputPriority}
          onChange={(e) => {
            handlePriorityInput(e);
          }}
        ></input>
        <p>Deadline</p>
        <input
          placeholder="Deadline"
          value={inputDeadline}
          onChange={(e) => {
            handleDeadlineInput(e);
          }}
        ></input>
        <p>Assigned to</p>
        <input
          placeholder="Assigned person"
          value={inputAssignedTo}
          onChange={(e) => {
            handleAssignedToInput(e);
          }}
        ></input>
        <p>Description</p>
        <input
          placeholder="Description"
          value={inputTaskDescription}
          onChange={(e) => {
            handleTaskDescriptionInput(e);
          }}
        ></input>
      </div>
      <div>
        <button>Back</button>
        <button
          onClick={() => {
            handleCreateNewTask();
          }}
        >
          Create task
        </button>
      </div>
    </>
  );
}

export default TaskCreate;
