import { useState } from "react";

import Button from "./Button";
import ButtonBack from "./ButtonBack";

import { useTask } from "../context/Task";
import { useParams } from "react-router-dom";

function TaskCardDetails() {
  const { id } = useParams();
  const { taskList } = useTask();

  const task = [...taskList].find((task) => Number(task.id) === Number(id));

  const [updatedTaskName, setUpdatedTaskName] = useState();
  const [updatedProjectName, setUpdatedProjectName] = useState();
  const [updatedPriority, setUpdatedPriority] = useState();
  const [updatedStoryPoints, setUpdatedStoryPoints] = useState();
  const [updatedSprintName, setUpdatedSprintName] = useState();
  const [updatedAssignedTo, setUpdatedAssignedTo] = useState();
  const [updatedDeadline, setUpdatedDeadline] = useState();
  const [updatedDescription, setUpdatedDescription] = useState();
  const [updateAttachment, setUpdateAttachment] = useState();

  return (
    <div>
      <p>Task Card Details Component</p>
      <p>Task name: {task.taskName}</p>
      <p>Project name: {task.projectName}</p>
      <p>Priority: {task.priority}</p>
      <p>Story Points: {task.storyPointInput}</p>
      <p>Sprint Name: {task.sprintName}</p>
      <p>Assigned To: {task.assignedTo}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Description: {task.taskDescription}</p>
      <p>Attachment: {task.attachment}</p>
      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default TaskCardDetails;
