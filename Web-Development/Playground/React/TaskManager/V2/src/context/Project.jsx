import { createContext, useContext, useReducer } from "react";

const ProjectContext = createContext();

const initialState = {
  isError: false,
  projectList: [],
  id: 0,
  projectName: "",
  projectNameError: false,
  projectNameErrorMsg: "",
  projectDescription: "",
  projectDescriptionError: false,
  projectDescriptionErrorMsg: "",
  projectCreateErrorMsg: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addProjectName":
      if (action.payLoad.length > 10)
        return {
          ...state,
          isError: true,
          projectNameError: true,
          projectNameErrorMsg: "Project name is too long",
        };
      return {
        ...state,
        projectNameError: false,
        isError: false,
        projectNameErrorMsg: "",
        projectName: action.payLoad,
      };
    case "addProjectDescription":
      if (action.payLoad.length > 10)
        return {
          ...state,
          projectDescriptionError: true,
          isError: true,
          projectDescriptionErrorMsg: "Project description is too long",
        };
      return {
        ...state,
        projectDescriptionError: false,
        isError: false,
        projectDescriptionErrorMsg: "",
        projectDescription: action.payLoad,
      };
    case "resetInput":
      return {
        ...state,
        projectName: "",
        projectDescriptionError: false,
        projectDescription: "",
        projectDescriptionError: false,
      };
    case "addNewProject":
      if (
        state.projectName.length === 0 ||
        state.projectDescription.length === 0
      )
        return {
          ...state,
          isError: true,
          projectCreateErrorMsg:
            "Project Name and Description can not be empty",
        };
      return {
        ...state,
        id: state.id + 1,
        projectList: [...state.projectList, action.payLoad],
      };
    case "updateProject":
      return {
        ...state,
        projectList: state.projectList.map((project) =>
          Number(project.id) === Number(action.payLoad.id)
            ? {
                ...project,
                projectName: action.payLoad.projectName,
                projectDescription: action.payLoad.projectDescription,
              }
            : project,
        ),
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
      id,
      projectName,
      projectNameError,
      projectNameErrorMsg,
      projectDescription,
      projectDescriptionError,
      projectDescriptionErrorMsg,
      projectCreateErrorMsg,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <ProjectContext.Provider
      value={{
        isError,
        projectList,
        id,
        projectName,
        projectNameError,
        projectNameErrorMsg,
        projectDescription,
        projectDescriptionError,
        projectDescriptionErrorMsg,
        projectCreateErrorMsg,
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
