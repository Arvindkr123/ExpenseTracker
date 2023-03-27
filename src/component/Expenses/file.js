import React from "react";

function file(props) {
    return React.createElement('div',{}, React.createElement(ExpenseDate, date={props:date}),
    React.createElement('div', {},  React.createElement('h1',{}, 'Expense 1'),
    React.createElement('h1', {}, 'Expense 1'))
    )
//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div>
//         <h1>Expense 1</h1>
//         <h1>Expense 1</h1>
//       </div>
//     </div>
//   );
}

export default file;
