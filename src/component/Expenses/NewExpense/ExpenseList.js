import React from "react";
import ExpenseItem from "../ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  // if (props.items.length === 0) {
  //   return (
  //     <p style={{ color: "white" }} className="expenses-list__fallback">
  //       No expense found !
  //     </p>
  //   );
  // } else if (props.items.length === 1) {
  //   return (
  //     <p style={{ color: "white" }} className="expenses-list__fallback">
  //       Only single Expense here. Please add more...
  //     </p>
  //   );
  // }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          // location={expense.location}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
