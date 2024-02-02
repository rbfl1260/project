import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import './ExpenseItem.css';

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item animated-item">
      <div className="info">
        <span className="expense">{charge}</span>
      </div>
      <div>
      <span className="amount">{amount}</span>
        <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
          <MdEdit style={{fontSize:'19px'}}/>
        </button>
        <button className="delete-btn" aria-label="delete button" onClick={() => handleDelete(id)}>
          <MdDelete style={{fontSize:'19px'}}/>
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;