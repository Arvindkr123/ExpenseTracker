import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  
  return (
    <Card className="expenses">
      {props.item.map((expense, i) => (
        <ExpenseItem key={i}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </Card>
  );
};

export default Expenses;
