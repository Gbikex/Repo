import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  //State for error
  const [error, setError] = useState("");

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  function handleError(error) {
    setError(error);
  }

  function resetBundle() {
    setTasks([]);
    //console.log("here");
    setError("");
  }

  function handleErrorResetAfterSubmit() {
    setError("");
  }

  function handleResetItems() {
    if (tasks === undefined || tasks.length === 0) return;

    const confirmed = window.confirm(
      "Are you sure you want to reset the task list?",
    );

    //if (confirmed) setTasks([]);
    if (confirmed) resetBundle();
  }

  return (
    <div className="app">
      <p>Welcome from App.js</p>
      <Header />
      <Forms
        onAddTasks={handleAddTasks}
        onResetTasks={handleResetItems}
        onRaiseError={handleError}
        error={error}
        onSuccessfulTaskCreationResetError={handleErrorResetAfterSubmit}
      />
      <Tasks tasks={tasks} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Hello from Header</h1>
    </div>
  );
}

function Forms({
  onAddTasks,
  onResetTasks,
  onRaiseError,
  error,
  onSuccessfulTaskCreationResetError,
}) {
  //State for inputs
  const [projectName, setProjectName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      projectName,
      taskName,
      priority,
      description,
      assignedTo,
      id: Date.now(),
    };

    console.log(newTask);

    if (!projectName.trim()) {
      onRaiseError("Project name is required");
      return;
    }

    if (!taskName.trim()) {
      onRaiseError("Task name is required");
      return;
    }

    if (!priority) {
      onRaiseError("Priority is required");
      return;
    }

    if (!description) {
      onRaiseError("Description is required");
      return;
    }

    if (!assignedTo) {
      onRaiseError("Assign is required");
      return;
    }

    onAddTasks(newTask);

    setProjectName("");
    setTaskName("");
    setPriority("");
    setDescription("");
    setAssignedTo("");

    onSuccessfulTaskCreationResetError();
  }

  return (
    <div>
      {error && <p className="error">{error}</p>}

      <button onClick={onResetTasks}>Reset</button>
      <form className="forms" onSubmit={handleSubmit}>
        <div className="forms__btn">
          <button>Add Task</button>
        </div>
        <p>Task details</p>
        <input
          className="input"
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
        <input
          className="input"
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <select
          className="input"
          value={priority}
          onChange={(e) => {
            setPriority(Number(e.target.value));
          }}
        >
          <option value="" disabled>
            Please select a priority!
          </option>

          {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <select
          className="input"
          type="text"
          placeholder="Assigned to"
          value={assignedTo}
          onChange={(e) => {
            setAssignedTo(e.target.value);
          }}
        >
          <option value="" disabled>
            Please assign the task!
          </option>

          {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              Emp-{num}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

function Tasks({ tasks }) {
  return (
    <div className="tasks">
      <div className="task_list">
        {tasks.map((task) => (
          <TaskList task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

function TaskList({ task }) {
  return (
    <ul className="task_attributes">
      <li className="">Project Name: {task.projectName}</li>
      <li> Task Name: {task.taskName}</li>
      <li> Priority: {task.priority}</li>
      <li> Description: {task.description}</li>
      <li> Assigned to: {task.assignedTo}</li>
    </ul>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>Hello from Footer</p>
    </div>
  );
}
