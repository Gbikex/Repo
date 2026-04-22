import { createContext, useContext, useReducer } from "react";

const PersonContext = createContext();

const initialState = {
  id: 0,
  personList: [],
  firstName: "",
  lastName: "",
  fullName: "",
  userName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "personFirsNameInput":
      return { ...state, firstName: action.payLoad };
    case "personLastNameInput":
      return { ...state, lastName: action.payLoad };
    case "personCreateNew":
      return {
        ...state,
        id: state.id + 1,
        personList: [...state.personList, action.payLoad],
      };
    case "personResetInput":
      return { ...state, firstName: "", lastName: "", fullName: "" };
    default:
      throw new Error("Unknown action 🫥");
  }
}

function PersonProvider({ children }) {
  const [
    { id, firstName, lastName, fullName, userName, personList },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <PersonContext.Provider
      value={{
        id,
        firstName,
        lastName,
        fullName,
        userName,
        personList,
        dispatch,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
}

function usePerson() {
  const context = useContext(PersonContext);

  if (context === undefined) {
    throw new Error("The Context was used outside the scope 🤔");
  }

  return context;
}

export { PersonProvider, usePerson };
