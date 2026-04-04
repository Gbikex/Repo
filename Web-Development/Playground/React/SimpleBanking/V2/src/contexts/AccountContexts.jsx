import { useReducer, createContext, useContext } from "react";

const AccountContext = createContext();

const initialState = {
  isOpen: false,
  isError: false,
  balance: 0,
  loan: 0,
  depositInput: 0,
  withdrawInput: 0,
  payLoanInput: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: balance + depositInput, depositInput: 0 };
    case "withdraw":
      return { ...state, balance: balance - withdrawInput, withdrawInput: 0 };
    default:
      throw new Error("Unknown action 💣💣");
  }
}

function AccountProvider({ children }) {
  const [
    {
      isOpen,
      isError,
      balance,
      loan,
      depositInput,
      withdrawInput,
      payLoanInput,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <AccountContext.Provider
      value={{
        isOpen,
        isError,
        balance,
        loan,
        depositInput,
        withdrawInput,
        payLoanInput,
        dispatch,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

//
function useAccount() {
  const context = useContext(AccountContext);
  if (context === undefined)
    throw new Error("Context was used outside the scope 🤔");
  return context;
}

export { AccountProvider, useAccount };
