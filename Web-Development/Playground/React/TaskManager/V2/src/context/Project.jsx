import { createContext, useContext, useReducer } from "react";

const ProjectContext = createContext();

const initialState = {
  isError: false,
  projectList: [],
  projectId: 0,
  projectName: "",
  projectNameError: false,
  projectDescription: "",
  projectDescriptionError: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "addProjectName":
      return { ...state, projectName: action.payLoad };
    case "addProjectDescription":
      return { ...state, projectDescription: action.payLoad };
    case "resetInput":
      return {
        ...state,
        projectName: "",
        projectDescriptionError: false,
        projectDescription: "",
        projectDescriptionError: false,
      };
    case "addNewProject":
      return {
        ...state,
        projectId: state.projectId + 1,
        projectList: [...state.projectList, action.payLoad],
      };
    default:
      throw new Error("Unknown action 🫥");
  }
}

function ProjectProvider({ children }) {
  const [
    {
      isError,
      projectList,
      projectId,
      projectName,
      projectNameError,
      projectDescription,
      projectDescriptionError,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <ProjectContext.Provider
      value={{
        isError,
        projectList,
        projectId,
        projectName,
        projectNameError,
        projectDescription,
        projectDescriptionError,
        dispatch,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

function useProject() {
  const context = useContext(ProjectContext);

  if (context === undefined)
    throw new Error("The Context was used outside the scope 🤔");

  return context;
}

export { ProjectProvider, useProject };
