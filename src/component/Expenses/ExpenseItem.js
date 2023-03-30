import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";

const  ExpenseItem = (props) => {
  const clickHandler =()=>{
    console.log('Clicked!!!!!!!!')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>change title</button>
      <button onClick={clickHandler}>Delete Expenses</button>
    </Card>
  );
}

export default ExpenseItem;
