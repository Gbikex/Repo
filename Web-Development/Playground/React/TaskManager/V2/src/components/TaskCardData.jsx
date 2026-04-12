function TaskCardData({ task }) {
  return (
    <div>
      <ul>
        <li>Task name: {task.taskName}</li>
        <li>Task priority: {task.priority}</li>
        <li>Task deadline {task.deadline}</li>
      </ul>
    </div>
  );
}

export default TaskCardData;
