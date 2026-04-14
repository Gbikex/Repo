import { createContext, useContext, useReducer } from "react";

const ProjectContext = createContext();

const initialState = {
  projectName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addProject":
      return { ...state };
    default:
      throw new Error("Unknown action 🫥");
  }
}

function ProjectProvider({ children }) {
  const [{ projectName, dispatch }] = useReducer(reducer, initialState);

  return (
    <ProjectContext.Provider value={{ projectName, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

function UseProject() {
  const context = useContext(ProjectContext);

  if (context === undefined)
    throw new Error("The Context was used outside the scope 🤔");

  return context;
}

export { ProjectProvider, UseProject };
