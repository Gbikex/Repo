import styles from "./Banking.module.css";

function Banking() {
  return (
    <div className={styles.divContent}>
      <p>Simple Banking</p>
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

        <button className={styles.btn} disabled={true}>
          Withdraw
        </button>
        <p>Withdraw - 50</p>
        <input placeholder="Withdrawn amount"></input>
      </div>
      <div>
        <button className={styles.btn} disabled={true}>
          Request Loan
        </button>
        <p>Request Loan - 1000</p>
        <input placeholder="Enter loan amount"></input>

        <button className={styles.btn} disabled={true}>
          Pay Loan
        </button>
        <p>Pay Loan</p>
        <input placeholder="Pay loan amount"></input>
        <div>
          <button className={styles.btn} disabled={true}>
            Pay loan in one
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banking;
