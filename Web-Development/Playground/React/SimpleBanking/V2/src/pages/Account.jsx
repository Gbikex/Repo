import PersonAccount from "../components/PersonAccount";

import styles from "./Account.module.css";

function Account() {
  return (
    <div className={styles.app}>
      <h1>Welcome to your account</h1>
      <PersonAccount />
    </div>
  );
}

export default Account;
