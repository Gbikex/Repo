import { useReducer, createContext, useContext } from "react";

const AccountContext = createContext();

const initialState = {
  isOpen: false,
  isError: false,
  errorMsg: "",
  balance: 0,
  loan: 0,
  depositInput: 0,
  withdrawInput: 0,
  maxWithdraw: 5000,
  requestLoanInput: 0,
  maxLoan: 10000,
  payLoanInput: 0,
};

const errorMessages = {
  withdrawError: `The withdraw amount is more then the allowed limit as of ${initialState.maxWithdraw}`,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isOpen: true, balance: 500 };
    case "inputDeposit":
      return {
        ...state,
        depositInput: action.payLoad,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + state.depositInput,
        depositInput: 0,
        isError: false,
      };
    case "inputWithdraw":
      return {
        ...state,
        withdrawInput: action.payLoad,
      };
    case "withdraw":
      if (state.withdrawInput > state.maxWithdraw)
        return {
          ...state,
          isError: true,
          errorMsg: errorMessages.withdrawError,
        };

      return {
        ...state,
        balance: state.balance - state.withdrawInput,
        withdrawInput: 0,
        isError: false,
      };
    case "inputLoanRequest":
      return { ...state, requestLoanInput: action.payLoad };
    case "loanRequest":
      return {
        ...state,
        loan: state.requestLoanInput,
        balance: state.balance - state.requestLoanInput,
        requestLoanInput: 0,
        isError: false,
      };
    case "inputPayLoan":
      return { ...state, payLoanInput: action.payLoad };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.payLoanInput,
        loan: state.loan - state.payLoanInput,
        payLoanInput: 0,
        isError: false,
      };
    case "payLoanAll":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        isError: false,
      };
    case "closeAccount":
      return initialState;
    default:
      throw new Error("Unknown action 💣💣");
  }
}

function AccountProvider({ children }) {
  const [
    {
      isOpen,
      isError,
      errorMsg,
      balance,
      loan,
      depositInput,
      withdrawInput,
      requestLoanInput,
      payLoanInput,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <AccountContext.Provider
      value={{
        isOpen,
        isError,
        errorMsg,
        balance,
        loan,
        depositInput,
        withdrawInput,
        requestLoanInput,
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
