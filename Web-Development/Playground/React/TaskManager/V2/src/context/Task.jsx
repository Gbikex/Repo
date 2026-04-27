import { useReducer, createContext, useContext } from "react";

const TaskContext = createContext();

const initialState = {
  isError: false,
  errorMsg: "",
  taskList: [],
  id: 0,
  projectId: "",
  taskName: "",
  taskNameError: "",
  projectName: "",
  priority: "",
  deadline: "",
  assignedTo: "",
  assignedToId: "",
  storyPointInput: "",
  taskDescription: "",
  taskDescriptionError: "",
  sprintName: "",
  connectedTaskName: "",
  attachment: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addProjectName":
      return { ...state, projectName: action.payLoad };
    case "addProjectId":
      return { ...state, projectId: action.payLoad };
    case "addTaskName":
      if (action.payLoad.length > 50)
        return {
          ...state,
          isError: true,
          taskNameError: "Task name is too long",
        };
      return {
        ...state,
        isError: false,
        taskNameError: "",
        errorMsg: "",
        taskName: action.payLoad,
      };
    case "addPriority":
      return { ...state, priority: action.payLoad };
    case "addDeadline":
      return { ...state, deadline: action.payLoad };
    case "addAssignedTo":
      return { ...state, assignedTo: action.payLoad };
    case "addAssignedToId":
      return { ...state, assignedToId: action.payLoad };
    case "addStoryPointInput":
      return { ...state, storyPointInput: action.payLoad };
    case "addTaskDescription":
      if (action.payLoad.length > 200)
        return {
          ...state,
          isError: true,
          taskDescriptionError: "Description is too long",
        };
      return {
        ...state,
        isError: false,
        taskDescriptionError: "",
        errorMsg: "",
        taskDescription: action.payLoad,
      };
    case "addSprintName":
      return { ...state, sprintName: action.payLoad };
    case "addAttachment":
      return { ...state, attachment: action.pay };
    case "addNewTask":
      return {
        ...state,
        id: state.id + 1,
        taskList: [...state.taskList, action.payLoad],
      };
    case "resetInputData":
      return {
        ...state,
        isError: false,
        errorMsg: "",
        taskNameError: "",
        taskDescriptionError: "",
        taskName: "",
        projectName: "",
        projectId: "",
        priority: "",
        deadline: "",
        assignedTo: "",
        assignedToId: "",
        storyPointInput: "",
        taskDescription: "",
        sprintName: "",
        connectedTaskName: "",
        attachment: "",
      };
    case "updateTask":
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          Number(task.id) === Number(action.payLoad.id)
            ? {
                ...task,
                taskName: action.payLoad.taskName,
                projectName: action.payLoad.projectName,
                projectId: action.payLoad.projectId,
                priority: action.payLoad.priority,
                storyPointInput: action.payLoad.storyPoints,
                sprintName: action.payLoad.sprintName,
                assignedTo: action.payLoad.assignedTo,
                assignedToId: action.payLoad.assignedToId,
                deadline: action.payLoad.deadline,
                taskDescription: action.payLoad.taskDescription,
              }
            : task,
        ),
      };
    default:
      throw new Error("Unknown action 🫥");
  }
}

function TaskProvider({ children }) {
  const [
    {
      isError,
      errorMsg,
      taskList,
      id,
      projectId,
      taskName,
      taskNameError,
      projectName,
      priority,
      deadline,
      assignedTo,
      assignedToId,
      storyPointInput,
      taskDescription,
      taskDescriptionError,
      sprintName,
      connectedTaskName,
      attachment,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        isError,
        errorMsg,
        taskList,
        id,
        projectId,
        taskName,
        taskNameError,
        projectName,
        priority,
        deadline,
        assignedTo,
        assignedToId,
        storyPointInput,
        taskDescription,
        taskDescriptionError,
        sprintName,
        connectedTaskName,
        attachment,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("The Context was used outside the scope 🤔");
  }
  return context;
}

export { TaskProvider, useTask };
