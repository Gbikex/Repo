import { Link } from "react-router";

import styles from "./Homepage.module.css";

import ToAccount from "../components/ToAccount";

function Homepage() {
  return (
    <div className={styles.app}>
      <h1>Welcome to the Simple Banking</h1>
      <div>
        <Link to="/account">
          <ToAccount />
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
