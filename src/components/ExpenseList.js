import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { FaTrash } from 'react-icons/fa'; 

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <ExpenseItem 
            key={expense.id} 
            expense={expense} 
            handleEdit={handleEdit} 
            handleDelete={handleDelete} 
          />
        ))}
      </ul>
      {expenses.length > 0 && (
        <button className="btn-clear" onClick={clearItems}>
          목록 지우기  
          <FaTrash className='trash'/>
        </button>
      )}
    </>
  );
};

export default ExpenseList;

