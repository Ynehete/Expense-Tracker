import React,{useState} from "react";
import './App.css';
import InoutRem from './Components/InOutRem';
import Heading from "./Components/Heading";
import History from "./Components/History";

function App() {

  const [transactions, setTransactions] = useState([]);

  const calculateBalance = () => {
    let balance = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'credit') {
            balance += transaction.amount;
        } else {
            balance -= transaction.amount;
        }
    });
    return balance;
};
const calculateExpenses = () => {
  let expenses = 0;
  transactions.forEach(transaction => {
      if (transaction.type === 'debit') {
          expenses += transaction.amount;
      }
  });
  return expenses;
};
const addTransaction = (newTransaction) => {
  setTransactions([...transactions, newTransaction]);
};
  return (
    <div>
      <Heading></Heading>
      <InoutRem balance={calculateBalance()} expense={calculateExpenses()}></InoutRem>
      <div>
        <History transactions={transactions} addTransaction={addTransaction}> 
        </History>
      </div>
    </div>
  );
}

export default App;
