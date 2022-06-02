import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {

  const SaveExpnseData = (enterExpenseDate)=>{
    const expenseData = {
      ...enterExpenseDate , id:Math.random().toString()
    };
    console.log(expenseData);

  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData = {SaveExpnseData} />
    </div>
  );
};

export default NewExpense;