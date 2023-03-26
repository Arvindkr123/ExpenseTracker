import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2023,2,26);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const LocationOfExpenditure = 'Gym'
  return (
    <div className='expense-item'>
        <div>{expenseDate.toUTCString()}</div><br/>
        <div>
            <h2>{LocationOfExpenditure}</h2>
        </div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem;
