import { createContext, useContext, useReducer } from "react";

const PersonContext = createContext();

const initialState = {
  id: 0,
  nameList: [],
  firstName: "",
  lastName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "createName":
      return { ...state };
    default:
      throw new Error("Unknown action 🫥");
  }
}

function PersonProvider({ children }) {
  const [{ id, firstName, lastName, nameList }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <PersonContext.Provider
      value={{ id, firstName, lastName, nameList, dispatch }}
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
