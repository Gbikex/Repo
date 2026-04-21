import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  id: 0,
  name: "",
  nameList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "createName":
      return { ...state };
    default:
      throw new Error("Unknown action 🫥");
  }
}

function UserProvider({ children }) {
  const [{ name, nameList }, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ name, nameList, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useProject() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("The Context was used outside the scope 🤔");
  }

  return context;
}

export { UserProvider, useProject };
