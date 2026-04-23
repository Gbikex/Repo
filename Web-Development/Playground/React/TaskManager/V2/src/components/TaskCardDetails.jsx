import { useTask } from "../context/Task";
import { useParams } from "react-router-dom";

function TaskCardDetails() {
  const { id } = useParams();
  const { taskList } = useTask();

  console.log(id);
  console.log([...taskList]);
  console.log("--Break--");
  console.log([...taskList].find((t) => t.id === Number(id)));

  return (
    <>
      <p>Task Card Details Component</p>
    </>
  );
}

export default TaskCardDetails;
