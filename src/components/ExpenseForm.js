import React  from "react";
import './ExpenseForm.css';
// import { MdSend } from "react-icons/md";
import { MdSend, MdEdit } from "react-icons/md";



const ExpenseForm = ({ charge,amount,handleAmount, handleCharge, handleSubmit,edit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
      <div className="form-group">
        <label htmlFor="charge">지출 항목</label>
        <input 
          type="text"
          id="charge"
          className="form-control"
          value={charge}
          onChange={handleCharge}
          placeholder="예: 렌트비"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">비용</label>
        <input 
          type="number"
          id="amount"
          className="form-control"
          value={amount}
          onChange={handleAmount}
          placeholder="예: 100"
        />
      </div>
      </div>
      <div className="submitbtn">
      <button type="submit" className="btn">
      {edit ? <MdEdit className="Md"/> : <MdSend className="Md"/>} 
      {edit ? '수정': '제출'}
      </button>
      </div>
    </form>
  );
};

export default ExpenseForm;