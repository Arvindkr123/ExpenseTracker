import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // multiple state this initial state
  const [enterTitle, enterSetTitle] = useState("");
  const [enterAmount, enterSetAmount] = useState("");
  const [enterDate, enterSetDate] = useState("");

  const ChangeTitleHandler = (e) => {
    // console.log(e.target.value);
    enterSetTitle(e.target.value);
    console.log(enterTitle);
  };
  const ChangeAmountHandler = (e) => {
    // console.log(e.target.value);
    enterSetAmount(e.target.value);
    console.log(enterAmount);
  };
  const ChangeDateHandler = (e) => {
    // console.log(e.target.value);
    enterSetDate(e.target.value);
    console.log(enterDate);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    // console.log(expenseData);
    // call the function onSaveDataHandler
    props.onSaveExpenseData(expenseData); 
    // clear the input fields
    enterSetTitle("");
    enterSetAmount("");
    enterSetDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={ChangeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            value={enterAmount}
            step={0.01}
            onChange={ChangeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={"2022-01-01"}
            max={"2023-12-01"}
            value={enterDate}
            onChange={ChangeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
