import React, { useState } from "react";
import ExpenseFilter from "./expenseFilter";
import Card from "../UI/card";
import "./expense.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filterdYear, setFilterdYear] = useState("2023");

  const filterChargeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filterdExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterdYear}
          onChangeFilter={filterChargeHandler}
        />
        <ExpenseChart expenses={filterdExpense} />
        <ExpenseList items={filterdExpense} />
      </Card>
    </div>
  );
};

export default Expense;
