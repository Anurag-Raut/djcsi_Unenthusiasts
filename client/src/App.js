import { Account } from "./Components/Account";
import { Home } from "./Components/Home";


function App() {
  return (
    <h1 className="">
      {false?<Home/>:<Account/>}
    </h1>
  );
}

export default App;
