import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./Expenseiten.css";
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [title, settitle] = useState(props.title)
  // const expenseDate = new Date(2022, 6, 1);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67
  const khan = () =>{
    settitle('salman');
  }


  return (
    <Card className="expense-item ">
    <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={khan}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
