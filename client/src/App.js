import { Account } from "./Components/Account";
import { Home } from "./Components/Home";
import { Login } from "./Components/Account/Login";
import { Signup } from "./Components/Account/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Ordering } from "./Components/Home/Ordering";


function App() {
  return (
    <Router>
    <h1 className="bg-[#e6d5c8] h-screen w-screen">
      <Routes>
      <Route element={<Home/>} exact path="/" />
      <Route element={<Account/>} exact path="/account" />
      <Route element={<Login/>} exact path="/login" />
      <Route element={<Signup/>} exact path="/signup" />
      <Route element={<Ordering/>} exact path="/ordering/:cat" />
      </Routes>
    </h1>
    </Router>
  
  );
}

export default App;
