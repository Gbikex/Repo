import Button from "./Button";
import { useAccount } from "../contexts/AccountContexts";

import styles from "./AccountForm.module.css";

function AccountForm() {
  const {
    isOpen,
    isError,
    balance,
    loan,
    depositInput,
    withdrawInput,
    requestLoanInput,
    payLoanInput,
    dispatch,
  } = useAccount();

  function handleDepositInput(e) {
    dispatch({ type: "inputDeposit", payLoad: Number(e.target.value) });
  }

  function handleWithdrawInput(e) {
    dispatch({ type: "inputWithdraw", payLoad: Number(e.target.value) });
  }

  function handleRequestLoanInput(e) {
    dispatch({ type: "inputLoanRequest", payLoad: Number(e.target.value) });
  }

  function handlePayLoanInput(e) {
    dispatch({ type: "inputPayLoan", payLoad: Number(e.target.value) });
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerDetails}>
        <p>Account Details</p>
        <Button
          type="open"
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          isDisabled={isOpen}
        >
          Open Account
        </Button>

        <div>
          <p>Balance:{balance} </p>
          <p>Loan: {loan}</p>
        </div>
      </div>
      <div className={styles.containerInput}>
        <p>Deposit</p>
        <input
          value={depositInput}
          onChange={(e) => {
            handleDepositInput(e);
          }}
          disabled={!isOpen}
        ></input>
        <Button
          isDisabled={!isOpen}
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
        >
          Deposit
        </Button>
      </div>
      <div className={styles.containerInput}>
        <p>Withdraw</p>
        <input
          value={withdrawInput}
          onChange={(e) => {
            handleWithdrawInput(e);
          }}
          disabled={!isOpen}
        ></input>
        <Button
          isDisabled={!isOpen}
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
        >
          Withdraw
        </Button>
      </div>
      <div className={styles.containerInput}>
        <p>Request loan</p>
        <input
          value={requestLoanInput}
          disabled={!isOpen}
          onChange={(e) => {
            handleRequestLoanInput(e);
          }}
        ></input>
        <Button
          isDisabled={!isOpen}
          onClick={() => {
            dispatch({ type: "loanRequest" });
          }}
        >
          Request Loan
        </Button>
      </div>
      <div className={styles.containerInput}>
        <p>Pay loan</p>
        <input
          value={payLoanInput}
          disabled={!isOpen}
          onChange={(e) => {
            handlePayLoanInput(e);
          }}
        ></input>
        <Button
          isDisabled={!isOpen}
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
        >
          Pay Loan
        </Button>
        <Button
          isDisabled={!isOpen}
          onClick={() => {
            dispatch({ type: "payLoanAll" });
          }}
        >
          Pay all
        </Button>
      </div>
      <div>
        <Button
          type="close"
          isDisabled={!isOpen}
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
        >
          Close Account
        </Button>
      </div>
    </div>
  );
}

export default AccountForm;
