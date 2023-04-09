import { Account } from "./Components/Account";
import { Home } from "./Components/Home";
import { Login } from "./Components/Account/Login";
import { Signup } from "./Components/Account/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Ordering } from "./Components/Home/Ordering";
import { Bill } from "./Components/Bill";
import Temp from "./Components/temp";
import { Leaderboard } from "./Components/Leaderboard";
import { AdminDashboard } from "./Components/AdminDashboard";
import Profile from "./Components/Profile";
import Games from "./Components/Games";
import Scratchcard from "./Components/Games/ScratchCard";
import { Coupons } from "./Components/Coupons";

function App() {
  return (
    <Router>
      <h1 className="bg-[#F2EAE2] h-screen w-screen">
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Account />} exact path="/account" />
          <Route element={<Login />} exact path="/login" />
          <Route element={<Signup />} exact path="/signup" />
          <Route element={<Ordering />} exact path="/ordering/:cat" />
          <Route element={<Bill />} exact path="/bill" />
          <Route element={<Leaderboard />} exact path="/leaderboard/:cat" />
          <Route element={<AdminDashboard />} exact path="/admin" />
          <Route element={<Temp />} exact path="/temp" />
          <Route element={<Profile />} exact path="/profile" />
          <Route element={<Temp />} exact path="/temp" />
          <Route element={<Games />} exact path="/games" />
          <Route element={<Scratchcard />} exact path="/scratch" />
          <Route element={<Coupons />} exact path="/coupons" />
        </Routes>
      </h1>
    </Router>
  );
}

export default App;
