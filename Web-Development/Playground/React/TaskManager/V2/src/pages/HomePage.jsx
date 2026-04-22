import { Link } from "react-router";

import styles from "./HomePage.module.css";

import TaskCard from "../components/TaskCard";
import Button from "../components/Button";

function Homepage() {
  return (
    <div>
      <h1>Welcome at the Homepage</h1>
      <Link to="/create-task">
        <Button type="create" btnWide="wide">
          New Task
        </Button>
      </Link>
      <Link to="/create-project">
        <Button type="create" btnWide="wide">
          New Project
        </Button>
      </Link>
      <Link to="/create-person">
        <Button type="create" btnWide="wide">
          New Person
        </Button>
      </Link>
      <div>
        <TaskCard />
      </div>
    </div>
  );
}

export default Homepage;
