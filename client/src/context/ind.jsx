import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';




const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
 
    const address = useAddress();
    const connect = useMetamask();
    const { contract } = useContract("0xBd9D3932beE85535c707Dc0cCE2e5cE21963a6a1");
    const { passcontract } = useContract("0x81d724815Ca19F7CCb643c51533B0BF647257b84");
    const { mutateAsync: addPatient } = useContractWrite(contract, 'addBook');
    const { mutateAsync: buyPoints, isLoading } = useContractWrite(contract, "buyPoints")
    // const { mutateAsync: addPatient } = useContractWrite(contract, 'addBook');

    // const { mutateAsync: delPatient } = useContractWrite(contract, 'delPatient');
    const Buypoints= async(price)=>{
        try {
          console.log(price)
            
            await contract.call('buyPoints', { value: ethers.utils.parseEther(`${(price)*65/10000000}`)});
          } 
          catch{

          }
          
        
    }
    const mintnft=async ()=>{
        await passcontract.call('mint',address );

    }
    const burnnft=async (tokenid)=>{
        await passcontract.call('burn',tokenid );

    }


    // const AddPatient=async ()=>{
    //     try{
        
    //      console.log('hello')
    //       // const public_data=data;
    //     //   var publicText=JSON.stringify(a)
    //     //   var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(privatedata), codee).toString();
    //     //   console.log(ciphertext);
    //          await addPatient([0,'anurag',0]).then(()=>{
    //             console.log('rellay?')
    //          })
             

    //     }
    //     catch{

    //     }
       
    // }

    // const donate = async () => {
    //    await contract.call('test', { value: ethers.utils.parseEther("0.001")});
    
        
    //   }

    
   

    
 

    return (
        <StateContext.Provider
          value={{ 
            address,
            contract,
            connect,
        
            
            buypoints:Buypoints,
            burnnft:burnnft,
            mintnft:mintnft,

           
           
           
          }}
        >
          {children}
        </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);