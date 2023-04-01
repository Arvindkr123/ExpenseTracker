import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";
import ExpensesFilter from "./NewExpense/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    // console.log(filteredYear);
  };

  const filteredExpense = props.item.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          // location={expense.location}
        />
      ))} */}
      {filteredExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          // location={expense.location}
        />
      ))}
    </Card>
  );
};

export default Expenses;
