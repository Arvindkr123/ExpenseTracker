import React, { useState } from "react";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import ExpenseList from "./NewExpense/ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    // console.log(filteredYear);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense}/>
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
