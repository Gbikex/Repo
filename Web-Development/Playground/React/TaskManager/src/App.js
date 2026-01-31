import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  return (
    <div className="app">
      <p>Welcome from App.js</p>
      <Header />
      <Forms onAddTasks={handleAddTasks} />
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

function Forms({ onAddTasks }) {
  const [projectName, setProjectName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(3);
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

    onAddTasks(newTask);

    setProjectName("");
    setTaskName("");
    setPriority(3);
    setDescription("");
    setAssignedTo("");
  }

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <div className="forms__btn">
        <button> Add Task</button>
      </div>
      <p>Hello from Form</p>
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
        {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            Emp-{num}
          </option>
        ))}
      </select>
    </form>
  );
}

function Tasks({ tasks }) {
  return (
    <div className="tasks">
      <div className="task_list">
        <ul>
          {tasks.map((task) => (
            <TaskList task={task} key={task.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TaskList({ task }) {
  return (
    <li>
      <span>
        Project Name: {task.projectName}
        Task Name: {task.taskName}
        Priority: {task.priority}
        Description: {task.description}
        Assigned to: {task.assignedTo}
      </span>
    </li>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>Hello from Footer</p>
    </div>
  );
}
