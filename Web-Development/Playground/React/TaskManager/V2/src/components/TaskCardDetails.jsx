import { useState } from "react";

import ButtonBack from "./ButtonBack";
import ButtonReset from "./ButtonReset";
import ButtonUpdate from "./ButtonUpdate";
import InputWithTitle from "./InputWithTitle";
import SelectListWithTitle from "./SelectListWithTitle";

import { PRIORITY, STORY_POINTS } from "../constants/constants";

console.log(PRIORITY);

import { useTask } from "../context/Task";
import { useProject } from "../context/Project";
import { usePerson } from "../context/Person";
import { useParams } from "react-router-dom";

function TaskCardDetails() {
  const { id } = useParams();
  const { taskList, dispatch } = useTask();
  const { projectList } = useProject();
  const { personList } = usePerson();

  console.log(personList);

  const task = [...taskList].find((task) => Number(task.id) === Number(id));
  const project = [...projectList];

  const [updatedTaskName, setUpdatedTaskName] = useState(task.taskName);
  const [updatedProjectName, setUpdatedProjectName] = useState(
    task.projectName,
  );
  const [updatedProjectId, setUpdatedProjectId] = useState(task.projectId);
  const [updatedPriority, setUpdatedPriority] = useState(task.priority);
  const [updatedStoryPoints, setUpdatedStoryPoints] = useState(
    task.storyPointInput,
  );
  const [updatedSprintName, setUpdatedSprintName] = useState(task.sprintName);
  const [updatedAssignedTo, setUpdatedAssignedTo] = useState(task.assignedTo);
  const [updatedAssignedToId, setUpdatedAssignedToId] = useState(
    task.assignedToId,
  );
  const [updatedDeadline, setUpdatedDeadline] = useState(task.deadline);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.taskDescription,
  );
  const [updateAttachment, setUpdateAttachment] = useState("");

  function handleUpdate() {
    dispatch({
      type: "updateTask",
      payLoad: {
        id: task.id,
        taskName: updatedTaskName,
        projectName: updatedProjectName,
        projectId: updatedProjectId,
        priority: updatedPriority,
        storyPoints: updatedStoryPoints,
        sprintName: updatedSprintName,
        assignedTo: updatedAssignedTo,
        assignedToId: updatedAssignedToId,
        deadline: updatedDeadline,
        taskDescription: updatedDescription,
      },
    });
  }

  function handleReset() {
    setUpdatedTaskName(task.taskName);
    setUpdatedProjectName(task.projectName);
    setUpdatedProjectId(task.projectId);
    setUpdatedPriority(task.priority);
    setUpdatedStoryPoints(task.storyPointInput);
    setUpdatedSprintName(task.sprintName);
    setUpdatedAssignedTo(task.assignedTo);
    setUpdatedAssignedToId(task.assignedToId);
    setUpdatedDeadline(task.deadline);
    setUpdatedDescription(task.taskDescription);
  }

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
      <h1>New local state</h1>
      <div>
        <ButtonBack />
        <ButtonReset
          onClick={() => {
            handleReset();
          }}
        />
      </div>
      <InputWithTitle
        isTitle="Task Name"
        value={updatedTaskName}
        onChange={(e) => {
          setUpdatedTaskName(e.target.value);
        }}
      />
      <div>
        <SelectListWithTitle
          isTitle="Project Name"
          isDefaultOption={false}
          name="projects"
          id="projects-list"
          value={updatedProjectId}
          onChange={(e) => {
            const selected = projectList.find(
              (project) => Number(project.id) === Number(e.target.value),
            );
            setUpdatedProjectId(selected.id);
            setUpdatedProjectName(selected.projectName);
          }}
        >
          {projectList.map((el) => (
            <option value={el.id} key={el.id}>
              {el.projectName}
            </option>
          ))}
        </SelectListWithTitle>
      </div>
      <div>
        <SelectListWithTitle
          isTitle="Priority"
          isDefaultOption={false}
          name="Priority"
          id="priority"
          value={updatedPriority}
          onChange={(e) => {
            setUpdatedPriority(e.target.value);
          }}
        >
          {PRIORITY.map((el) => (
            <option value={el} id={el}>
              {el}
            </option>
          ))}
        </SelectListWithTitle>
      </div>
      <div>
        <SelectListWithTitle
          isTitle="Story Points"
          isDefaultOption={false}
          name="story-points"
          id="story-points"
          value={updatedStoryPoints}
          onChange={(e) => {
            setUpdatedStoryPoints(e.target.value);
          }}
        >
          {[...STORY_POINTS].map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </SelectListWithTitle>
      </div>
      <InputWithTitle
        isTitle="Sprint Name"
        value={updatedSprintName}
        onChange={(e) => {
          setUpdatedSprintName(e.target.value);
        }}
      />
      <div>
        <SelectListWithTitle
          isTitle="Assigned To"
          isDefaultOption={false}
          name="assigned-to"
          id="assigned-to"
          value={updatedAssignedToId}
          onChange={(e) => {
            const selected = personList.find(
              (person) => Number(person.id) === Number(e.target.value),
            );
            setUpdatedAssignedToId(selected.id);
            setUpdatedAssignedTo(selected.fullName);
          }}
        >
          {personList.map((el) => (
            <option value={el.id} key={el.id}>
              {el.fullName}
            </option>
          ))}
        </SelectListWithTitle>
      </div>
      <InputWithTitle
        isTitle="Deadline"
        value={updatedDeadline}
        onChange={(e) => {
          setUpdatedDeadline(e.target.value);
        }}
      />
      <InputWithTitle
        isTitle="Description"
        value={updatedDescription}
        onChange={(e) => {
          setUpdatedDescription(e.target.value);
        }}
      />
      <div>
        <ButtonUpdate
          onClick={() => {
            handleUpdate();
          }}
        />
      </div>
    </div>
  );
}

export default TaskCardDetails;
