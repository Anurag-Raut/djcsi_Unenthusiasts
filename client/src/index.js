import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context/ind";
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//   },
//   {
//     path: '/ordering',
//     element: <Ordering/>,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThirdwebProvider >
     
     <StateContextProvider>
      
       <App/>
     </StateContextProvider>
  
 </ThirdwebProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
