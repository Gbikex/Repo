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

function reducer() {
  switch (action.type) {
    case "openAccount":
    case "closeAccount":
    case "deposit":
    case "withdraw":
    case "requestLoan":
    case "payLoan":
    case "payLoanInOne":
    default:
      throw Error("Unknown action type ");
  }
}

function Banking() {
  return (
    <div className={styles.divContent}>
      <p>Simple Banking</p>
      <div>
        <p>Account information</p>
        <p>Balance: 0, Loan: 0</p>
      </div>
      <div>
        <button className={styles.btn}>Open Account</button>
        <button className={styles.btn} disabled={true}>
          Close Account
        </button>
      </div>
      <div>
        <p>Deposit - 150</p>
        <input placeholder="Deposit amount"></input>
        <button className={styles.btn} disabled={true}>
          Deposit
        </button>

        <p>Withdraw - 50</p>
        <input placeholder="Withdrawn amount"></input>
        <button className={styles.btn} disabled={true}>
          Withdraw
        </button>
      </div>
      <div>
        <p>Request Loan - 1000</p>
        <input placeholder="Enter loan amount"></input>
        <button className={styles.btn} disabled={true}>
          Request Loan
        </button>

        <p>Pay Loan</p>
        <input placeholder="Pay loan amount"></input>
        <div>
          <button className={styles.btn} disabled={true}>
            Pay Loan
          </button>
          <button className={styles.btn} disabled={true}>
            Pay loan in one
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banking;
