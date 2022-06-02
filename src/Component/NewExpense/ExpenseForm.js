import React from "react";
import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setenteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event)=>{
    event.preventDefault();

    const expenseDate = {
      tilte:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    console.log(expenseDate);

  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
