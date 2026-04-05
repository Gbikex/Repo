import { useReducer, createContext, useContext } from "react";

const AccountContext = createContext();

const initialState = {
  isOpen: false,
  isError: false,
  errorMsg: "",
  balance: 0,
  loan: 0,
  loanReq: 5000,
  depositInput: 0,
  withdrawInput: 0,
  maxWithdraw: 5000,
  requestLoanInput: 0,
  maxLoan: 10000,
  maxAvailableLoan: 15000,
  payLoanInput: 0,
};

function reducer(state, action) {
  // Handle state logics
  // 1) Withdraw constrains
  const withdrawMaxLimit = state.withdrawInput > state.maxWithdraw;
  const withdrawBalanceLimit = state.withdrawInput > state.balance;
  // 2) Loan constrains on requesting
  const loanLimit = state.requestLoanInput > state.maxLoan;
  const loanRequirement = state.balance < state.loanReq;
  const loanDemandMax = state.loan > state.maxAvailableLoan;
  // 3) Loan constrains on pay back
  const noLoan = state.loan === 0;
  const balanceNotMet = state.balance < state.loan;
  //Returns error messages based on state
  const errorMessages = {
    withdrawMaxMsg: `The withdraw amount is more then the allowed limit as of ${state.maxWithdraw}`,
    withdrawBalanceMsg: `The requested withdraw ${state.withdrawInput} exceeds the current balance of ${state.balance}`,
    loanMaxLimitMsg: `The requested loan exceeds the limit of  ${state.maxLoan}`,
    loanBalanceMinMsg: `The required minimum balance (${state.loanReq}) not met`,
    loanDemandMaxMsg: `Your loan exceeds the allowed maximum of ${state.maxAvailableLoan}`,
  };

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
      if (withdrawMaxLimit || withdrawBalanceLimit)
        return {
          ...state,
          isError: true,
          errorMsg: withdrawMaxLimit
            ? errorMessages.withdrawMaxMsg
            : errorMessages.withdrawBalanceMsg,
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
      if (loanLimit || loanRequirement || loanDemandMax)
        return {
          ...state,
          isError: true,
          errorMsg: loanLimit
            ? errorMessages.loanMaxLimitMsg
            : loanDemandMax
              ? errorMessages.loanDemandMaxMsg
              : errorMessages.loanBalanceMinMsg,
        };
      return {
        ...state,
        loan: state.loan + state.requestLoanInput,
        balance: state.balance + state.requestLoanInput,
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
