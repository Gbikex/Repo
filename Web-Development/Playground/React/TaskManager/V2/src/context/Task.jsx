import { useReducer, createContext, useContext } from "react";

const TaskContext = createContext();

const initialState = {
  taskList: [],
  taskName: "",
  projectName: "",
  priority: 1,
  deadline: new Date().getFullYear,
  assignedTo: "none",
  expectedInput: 0,
  taskDescription: "",
  sprintName: "",
  connectedTaskName: "",
  attachment: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addTaskName":
      return { ...state };
  }
}

function TaskProvider({ children }) {
  const [
    {
      taskList,
      taskName,
      projectName,
      priority,
      deadline,
      assignedTo,
      expectedInput,
      taskDescription,
      sprintName,
      connectedTaskName,
      attachment,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        taskList,
        taskName,
        projectName,
        priority,
        deadline,
        assignedTo,
        expectedInput,
        taskDescription,
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
