import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Account from "./pages/Account";

import { AccountProvider } from "./contexts/AccountContexts";

function App() {
  return (
    <div>
      <AccountProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </AccountProvider>
    </div>
  );
}

export default App;
