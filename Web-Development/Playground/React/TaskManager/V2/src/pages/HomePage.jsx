import { Link } from "react-router";

import styles from "./HomePage.module.css";

import CreateNewTask from "../components/CreateNewTask";

function Homepage() {
  return (
    <div>
      <h1>Welcome at the Homepage</h1>
      <Link to="/create-account">
        <CreateNewTask />
      </Link>
    </div>
  );
}

export default Homepage;
