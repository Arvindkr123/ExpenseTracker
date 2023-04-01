import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);
  // const clickHandler =()=>{
  //   setTitle('Updated');
  //   console.log(title);
  // }
  return (
    <ul>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={props.amount}
          // amount={amount}
          // location={props.location}
          title={props.title}
          // title={title}
        />
        {/* <button onClick={clickHandler}>change title</button> */}
        {/* <button onClick={()=>{setAmount(100)}}>change Expenses</button> */}
      </Card>
    </ul>
  );
};

export default ExpenseItem;
