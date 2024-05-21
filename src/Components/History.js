import React, { useState } from 'react';
import './css/style.css';

function History({ addTransaction }) {

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [transactionType, setTransactionType] = useState('credit')
    const [transactions,setTransactions]=useState([]);

const handleSubmit=(e)=>{
    e.preventDefault();
    if(amount && description)
        {
            const newTransaction={
                id: transactions.length+1,
                type: transactionType,
                amount: parseFloat(amount),
                description
            };
            addTransaction(newTransaction);
            setTransactions([...transactions,newTransaction]);
            setAmount('');
            setDescription('');
        }
    
};
    return (
        <div className='hisNadd'>
            <div className='addTransaction'>
                <h2 className='form-title'>Add Transaction</h2>
                <form onSubmit={handleSubmit}>
                    <select className='form-input'
                        value={transactionType}
                        onChange={(e) => setTransactionType(e.target.value)}>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                    <input type='number'
                        placeholder='Enter Amount'
                        className='form-input'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required></input>
                    <input type='text'
                        placeholder='Enter Description'
                        className='form-input'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required></input>
                    <button type='submit' className='form-button'>Add Transaction</button>
                </form>
            </div>
            <div className='history'>
                <h2 className='form-title'>History</h2>
                <div className='hisInner'>
                    {
                       transactions.length === 0 ? (
                        <p>No transactions here </p>
                       ) : (
                        transactions.map((transaction)=>(
                            <div key={transaction.id} className='transaction-item'> 
                                <p>Type:{transaction.type}</p>
                                <p>Amount:${transaction.amount.toFixed(2)}</p>
                                <p>Description:{transaction.description}</p>
                            </div>
                        ))
                       )
                    }
                </div>
            </div>
        </div>
    );
}
export default History;