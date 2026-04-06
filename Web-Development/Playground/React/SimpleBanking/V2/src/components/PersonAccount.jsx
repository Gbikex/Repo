import AccountForm from "./AccountForm";
import Button from "./Button";

import styles from "./PersonAccount.module.css";

function PersonAccount() {
  return (
    <div className={styles.app}>
      <AccountForm />
    </div>
  );
}

export default PersonAccount;
