import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Account from "./pages/Account";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
