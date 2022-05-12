import { useState } from "react";

import ExpenseFilter from "./components/NewExpense/ExpenseFilter";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "White Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

let App = () => {
  let [exp, setExp] = useState(expenses);

  let expenseFunc = (expenseData) => {
    console.log("In App Js");
    console.log("expenseData=", expenseData);

    setExp((prev) => {
      return [expenseData, ...prev];
    });
  };

  return (
    <div className="">
      <NewExpense expenses={expenses} expenseFunc={expenseFunc} />
      <Expenses expenses={exp} />
    </div>
  );
};

export default App;
