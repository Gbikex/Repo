import { createContext, useContext, useReducer } from "react";

const SprintContext = createContext();

const initialState = {
  id: "",
  sprintName: "",
  projectId: "",
  projectName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addSprintName":
      return { ...state, sprintName: action.payLoad };
    case "resetInputs":
      return {
        ...state,
        sprintName: "",
      };
    default:
      throw new Error("Unknown action 🫥");
  }
}

function SprintProvider({ children }) {
  const [{ id, sprintName, projectId, projectName }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <SprintContext.Provider
      value={{
        id,
        sprintName,
        projectId,
        projectName,
        dispatch,
      }}
    >
      {children}
    </SprintContext.Provider>
  );
}

function useSprint() {
  const context = useContext(SprintContext);

  if (context === undefined)
    throw new Error("The Context was used outside the scope 🤔");

  return context;
}

export { useSprint, SprintProvider };
