import React from "react";
import { useStateContext } from "./context/ind";
function App(){
    const {connect,address,addPatient,donate} =useStateContext();
    console.log(address)
 return (
    <div >
         <button onClick={connect}>connect</button>
         <button onClick={async()=>{console.log('fe'); await donate().then(()=>{console.log('done')})}}>
            yayyyy
         </button>
    </div>
   
 );

}
export default App;