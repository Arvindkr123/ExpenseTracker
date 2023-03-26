import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
        <ExpenseDate date ={props.date}/>
      <div>
        <h2>{props.location}</h2>
      </div>
      <div className="expense-item__description">
        {/* <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div> */}
        <ExpenseDetails title={props.title} amount={props.amount}/>
      </div>
    </div>
  );
}

export default ExpenseItem;
