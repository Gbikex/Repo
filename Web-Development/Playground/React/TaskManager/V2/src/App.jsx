import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/HomePage";
import TaskCreate from "./pages/TaskCreate";

function App() {
  return (
    <>
      <h1>Task Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="create-task" element={<TaskCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
