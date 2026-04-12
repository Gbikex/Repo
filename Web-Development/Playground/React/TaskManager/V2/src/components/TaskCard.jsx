import TaskCardData from "./TaskCardData";
import { useTask } from "../context/Task";

function TaskCard() {
  const { taskList } = useTask();

  return (
    <>
      <p>Task Card</p>
      {taskList.map((task) => (
        <TaskCardData task={task} key={new Date()} />
      ))}
    </>
  );
}

export default TaskCard;
