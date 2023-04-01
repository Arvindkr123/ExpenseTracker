import React, { useState } from "react";
import Expenses from "../src/component/Expenses/Expenses";
import NewExpense from "./component/Expenses/NewExpense/NewExpense";
import Card from "./component/UI/Card";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Insurance Ltd.",
  },

  {
    id: "e2",
    title: "Toilet Paper",
    amount: 450.25,
    date: new Date(2021, 12, 18),
    location: "City Kart",
  },

  {
    id: "e3",
    title: "Car Repairing",
    amount: 685.57,
    date: new Date(2021, 8, 8),
    location: "Repairing Center",
  },

  {
    id: "e4",
    title: "Buying Goods",
    amount: 805.01,
    date: new Date(2021, 4, 12),
    location: "City kart",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <Expenses item={expenses} />
      </Card>
    </div>
  );
};

export default App;
