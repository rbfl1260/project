import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false, type: "", text: "" });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false, type: "", text: "" });
    }, 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount >= 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount: parseInt(amount, 10) } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "수정" });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount: parseInt(amount, 10) };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "추가" });
      }
      setCharge('');
      setAmount('');
    } else {
      handleAlert({ type: "danger", text: "지출항목과 비용이 비었습니다" });
    }
  };

  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "아이템이 지워졌습니다" });
  };

  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "모든 아이템이 지워졌습니다" });
  };

  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (

    <div className="App">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>예산 계산기</h1>
      <div className="App-container">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
        </div>
      <div class="cost">
      <p>
        총 지출 : 
        <span className="total">
          {expenses.reduce((acc, curr) => acc + curr.amount, 0)} 원
        </span>
      </p>
      </div>
    </div>
  );
}

export default App;
