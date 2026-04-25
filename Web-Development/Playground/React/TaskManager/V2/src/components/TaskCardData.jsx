import Button from "./Button";

import { useNavigate } from "react-router-dom";

function TaskCardData({ task }) {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <ul>
          <li>Task name: {task.taskName}</li>
          <li>Task priority: {task.priority}</li>
          <li>Task deadline {task.deadline}</li>
        </ul>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate(`/task/${task.id}`);
          }}
        >
          Task
        </Button>
        <Button
          onClick={() => {
            navigate(`/project/${task.projectId}`);
          }}
        >
          Project
        </Button>
      </div>
    </div>
  );
}

export default TaskCardData;
