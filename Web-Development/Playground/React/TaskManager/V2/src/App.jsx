import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/HomePage";
import TaskCreate from "./pages/TaskCreate";
import ProjectCreate from "./pages/ProjectCreate";
import TaskCard from "./pages/TaskCard";

import { TaskProvider } from "./context/Task";
import { ProjectProvider } from "./context/Project";
import { PersonProvider } from "./context/Person";
import PersonCreate from "./pages/PersonCreate";

function App() {
  return (
    <>
      <h1>Task Manager</h1>
      <TaskProvider>
        <ProjectProvider>
          <PersonProvider>
            <BrowserRouter>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="/create-task" element={<TaskCreate />} />
                <Route path="/create-project" element={<ProjectCreate />} />
                <Route path="/create-person" element={<PersonCreate />} />
                <Route path="/task/:id" element={<TaskCard />} />
              </Routes>
            </BrowserRouter>
          </PersonProvider>
        </ProjectProvider>
      </TaskProvider>
    </>
  );
}

export default App;
