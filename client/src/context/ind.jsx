import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite,useMintNFT  } from '@thirdweb-dev/react';
import { ethers } from 'ethers';




const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  var eg="sgsdfsf";
    const address = useAddress();
    
    const connect = useMetamask();
    // const { contract } = useContract("0xBd9D3932beE85535c707Dc0cCE2e5cE21963a6a1");
    const { contract } = useContract("0xf050ED9d5509F3599D51D7212FC669584a3bf4Ce");
    const { mutateAsync: mintNFT } = useContractWrite(contract,'minto');
    const { mutateAsync: burnnft } = useContractWrite(contract,'burn');
    // const { mutateAsync: gettoken } = useContractWrite(contract,'getUserTokens');


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
    const mintNft=async (eventid)=>{
      try{
        console.log(contract);
       await mintNFT([eventid]);
      
        //  await contract.call("minto", [eg])

      }
      catch{

      }
    

    }
   
    const BurnNft=async (tokenid,e)=>{
        await burnnft([tokenid,e]);

    }
    const gettokens=async()=>{
      const array = await contract?.call('getUserTokens',address);
      return array;
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
            burnnft:BurnNft,
            mintnft:mintNft,
            gettokens:gettokens

           
           
           
          }}
        >
          {children}
        </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);