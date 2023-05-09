import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import "./ExpenseItem.css";

var ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs.{props.amount}</div>
        {/* <button onClick={clickHandler}>Change Time</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
