import { Account } from "./Components/Account";
import { Home } from "./Components/Home";
import { Login } from "./Components/Account/Login";
import { Signup } from "./Components/Account/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Ordering } from "./Components/Home/Ordering";
import { Bill } from "./Components/Bill";

function App() {
  return (
    <Router>
      <h1 className="bg-[#F2EAE2] h-screen w-screen">
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Account />} exact path="/account" />
          <Route element={<Login />} exact path="/login" />
          <Route element={<Signup />} exact path="/signup" />
          <Route element={<Ordering />} exact path="/ordering:cat" />
          <Route element={<Bill />} exact path="/bill" />
        </Routes>
      </h1>
    </Router>
  );
}

export default App;
