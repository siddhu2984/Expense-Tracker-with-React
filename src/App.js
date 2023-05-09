// import ExpenseItem from "./components/ExpenseItem";

import React, { useState } from "react";

import Expense from "./components/expense/expense";

import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Laptop",
    amount: 100000,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 40000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Household Things",
    amount: 5000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, SetExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    SetExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  // const addExpenseHandler = (expenses) => {
  //   console.log("In App.js");
  //   console.log(expenses);
  // };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses}></Expense>;
    </div>
  );
}

export default App;
