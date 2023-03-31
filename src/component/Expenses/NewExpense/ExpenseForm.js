import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    // multiple state this initial state
    const [enterTitle, enterSetTitle] = useState(null);
    const [enterAmount, enterSetAmount] = useState(null);
    const [enterDate, enterSetDate] = useState(null);

//   const [UserInput, setUserInput] = useState({
//     enterTitle: "",
//     enterAmount: "",
//     enterDate: "",
//   });


  const ChangeTitleHandler = (e) => {
    // console.log(e.target.value);
    enterSetTitle(e.target.value);
    console.log(enterTitle);

    // setUserInput({
    //   ...UserInput,
    //   enterTitle: e.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState, enterTitle:e.target.value};
    // })
  };
  const ChangeAmountHandler = (e) => {
    // console.log(e.target.value);
    enterSetAmount(e.target.value);
    console.log(enterAmount);

    // setUserInput({
    //   ...UserInput,
    //   enterAmount: e.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState, enterAmount:e.target.value};
    // })
  };
  const ChangeDateHandler = (e) => {
    // console.log(e.target.value);
    enterSetDate(e.target.value);
    console.log(enterDate);

    // setUserInput({
    //   ...UserInput,
    //   enterDate: e.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState, enterDate:e.target.value};
    // })
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={ChangeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
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
