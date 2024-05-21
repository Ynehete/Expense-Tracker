import React from "react";
import './css/style.css';
function InoutRem({ balance, expense }) {
    return (
        <div>
            <span className="span">
                <div className="balance">Balance: {balance} Rs</div>
                <div className="expence">Expence: {expense} Rs</div>
            </span>
        </div>
    );
}
export default InoutRem;