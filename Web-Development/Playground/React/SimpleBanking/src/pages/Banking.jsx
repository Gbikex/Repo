import { useReducer } from "react";
import styles from "./Banking.module.css";

const initialState = {
  isOpen: false,
  balance: 0,
  loan: 0,
  deposit: 150,
  withdraw: 50,
  requestLoan: 1000,
};

function reducer(state, action) {
  //if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return { ...state, isOpen: true, balance: 500 };
    case "closeAccount":
      if (state.balance > 0 || state.loan > 0) return state;
      return initialState;
    case "deposit":
      return { ...state, balance: state.balance + action.payLoad };
    case "withdraw":
      return { ...state, balance: state.balance - action.payLoad };
    case "requestLoan":
      return {
        ...state,
        balance: state.balance + action.payLoad,
        loan: state.loan + action.payLoad,
      };
    case "payLoan":
    case "payLoanInOne":
      return { ...state, balance: state.balance - state.loan, loan: 0 };
    default:
      throw Error("Unknown action type ");
  }
}

function Banking() {
  const [{ isOpen, balance, loan, deposit, withdraw }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <div className={styles.divContent}>
      <p>Simple Banking</p>
      <div>
        <p>Account information</p>
        <p>
          Balance: {balance}, Loan: {loan}
        </p>
      </div>
      <div>
        <button
          className={styles.btn}
          disabled={isOpen}
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
        >
          Open Account
        </button>
        <button
          className={styles.btn}
          disabled={!isOpen}
          onClick={() => dispatch({ type: "closeAccount" })}
        >
          Close Account
        </button>
      </div>
      <div>
        <p>Deposit - 150</p>
        <input placeholder="Deposit amount"></input>
        <button
          className={styles.btn}
          disabled={!isOpen}
          onClick={() => dispatch({ type: "deposit", payLoad: 150 })}
        >
          Deposit
        </button>

        <p>Withdraw - 50</p>
        <input placeholder="Withdraw amount"></input>
        <button
          className={styles.btn}
          disabled={!isOpen}
          onClick={() => dispatch({ type: "withdraw", payLoad: 50 })}
        >
          Withdraw
        </button>
      </div>
      <div>
        <p>Request Loan - 1000</p>
        <input placeholder="Enter loan amount"></input>
        <button
          className={styles.btn}
          disabled={!isOpen}
          onClick={() => dispatch({ type: "requestLoan", payLoad: 1000 })}
        >
          Request Loan
        </button>

        <p>Pay Loan</p>
        <input placeholder="Pay loan amount"></input>
        <div>
          <button className={styles.btn} disabled={!isOpen}>
            Pay Loan
          </button>
          <button
            className={styles.btn}
            disabled={!isOpen}
            onClick={() => dispatch({ type: "payLoanInOne" })}
          >
            Pay loan in one
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banking;
