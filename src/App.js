import React from 'react';
import OrderNowFunction from './orderNowFunction';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App(){

  return(
    <div className="app">
      <Navbar />
      <h1 className="welcomeLogo">Welcome</h1>
      <h2 className="order-now"> <OrderNowFunction  /></h2>

    </div>
  );
}

export default App;