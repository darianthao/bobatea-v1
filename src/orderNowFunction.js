import React from 'react';
import './App.css';
function orderNowFunction() {
    const orderTransfer = () => {
        console.log("transferToPayment");

    };
    return(
        <div className="ordernow">
            <button onClick={orderTransfer}>
                
                
                Order Now!
            
            </button>
        </div>
    );
}

export default orderNowFunction;