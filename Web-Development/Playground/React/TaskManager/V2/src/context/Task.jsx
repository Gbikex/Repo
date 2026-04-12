import { useReducer, createContext, useContext } from "react";

const TaskContext = createContext();

const initialState = {
  taskList: [],
  inputTaskName: "",
  taskName: "",
  inputProjectName: "",
  projectName: "",
  inputPriority: "",
  priority: "",
  inputDeadline: "",
  deadline: "",
  inputAssignedTo: "",
  assignedTo: "",
  inputExpectedInput: "",
  expectedInput: 0,
  inputTaskDescription: "",
  taskDescription: "",
  inputSprintName: "",
  sprintName: "",
  inputConnectedTaskName: "",
  inputConnectedTaskName: "",
  connectedTaskName: "",
  inputAttachment: "",
  attachment: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addProjectName":
      return { ...state, projectName: action.payLoad };
    case "addTaskName":
      return { ...state, taskName: action.payLoad };
    case "addPriority":
      return { ...state, priority: action.payLoad };
    case "addDeadline":
      return { ...state, deadline: action.payLoad };
    case "addAssignedTo":
      return { ...state, assignedTo: action.payLoad };
    case "addExpectedInput":
      return { ...state, expectedInput: action.payLoad };
    case "addTaskDescription":
      return { ...state, taskDescription: action.payLoad };
    case "addSprintName":
      return { ...state, sprintName: action.payLoad };
    case "addAttachment":
      return { ...state, attachment: action.pay };
    case "addNewTask":
      return { ...state, taskList: [...state.taskList, action.payLoad] };
    case "resetInputData":
      return {
        ...state,
        taskName: "",
        projectName: "",
        priority: "",
        deadline: "",
        assignedTo: "",
        expectedInput: 0,
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
      inputTaskList,
      inputTaskName,
      inputProjectName,
      inputPriority,
      inputDeadline,
      inputAssignedTo,
      inputExpectedInput,
      inputTaskDescription,
      inputSprintName,
      inputConnectedTaskName,
      inputAttachment,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        inputTaskList,
        inputTaskName,
        inputProjectName,
        inputPriority,
        inputDeadline,
        inputAssignedTo,
        inputExpectedInput,
        inputTaskDescription,
        inputSprintName,
        inputConnectedTaskName,
        inputAttachment,
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
