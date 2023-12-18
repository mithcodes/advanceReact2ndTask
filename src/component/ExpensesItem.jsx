// ExpensesItem.js
import React, { useState } from "react";
import ExpensesDate from "./ExpensesDate";
import './ExpensesItem.css';

const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [newTitle, setNewTitle] = useState("hi");
  const [amount, setAmount] = useState(props.amount);
  const [newAmount, setNewAmount] = useState(100);

  const changeTitleHandler = () => {
    setTitle(newTitle);
  };

  const changeAmountHandler = () => {
    setAmount(newAmount);
  };

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expenses-item-description">
        <h2>{title}</h2>
        <div className="expenses-item_price">₹{amount}</div>
      </div>
      <div>
        <input type="text" value={newTitle} onChange={changeHandler} />
        <button onClick={changeTitleHandler}>change title</button>
        <button onClick={changeAmountHandler}>change amount</button>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </div>
  );
};

export default ExpensesItem;
