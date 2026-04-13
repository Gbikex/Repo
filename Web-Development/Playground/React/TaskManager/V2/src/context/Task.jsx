import { useReducer, createContext, useContext } from "react";

const TaskContext = createContext();

const initialState = {
  isError: false,
  errorMsg: "",
  taskList: [],
  taskId: 1,
  taskName: "",
  taskNameError: "",
  projectName: "",
  priority: "",
  deadline: "",
  assignedTo: "",
  storyPointInput: 1,
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
      return { ...state, taskList: [...state.taskList, action.payLoad] };
    case "resetInputData":
      return {
        ...state,
        isError: false,
        errorMsg: "",
        taskNameError: "",
        taskDescriptionError: "",
        taskName: "",
        projectName: "",
        priority: "",
        deadline: "",
        assignedTo: "",
        storyPointInput: 1,
        taskDescription: "",
        sprintName: "",
        connectedTaskName: "",
        attachment: "",
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
      taskId,
      taskName,
      taskNameError,
      projectName,
      priority,
      deadline,
      assignedTo,
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
        taskId,
        taskName,
        taskNameError,
        projectName,
        priority,
        deadline,
        assignedTo,
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
