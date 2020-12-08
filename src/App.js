import React from 'react';
import OrderNowFunction from './orderNowFunction';
import './App.css';

function App(){

  return(
    <div className="app">
      <h1 className="welcomeLogo">Welcome</h1>
      <h2 className="order-now"> <OrderNowFunction  /></h2>

    </div>
  );
}

export default App;