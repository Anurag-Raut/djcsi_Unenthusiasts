import { Account } from "./Components/Account";
import { Home } from "./Components/Home";


function App() {
  return (
    <h1 className="bg-[#E2C2AA] h-screen w-screen">
      {true?<Home/>:<Account/>}
    </h1>
  );
}

export default App;
