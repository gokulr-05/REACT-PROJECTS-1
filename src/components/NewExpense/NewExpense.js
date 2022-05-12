import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ShowAddExpense from "./ShowAddExpense";
let NewExpense = ({ expenses, expenseFunc }) => {
  let [showAddData, setShowAddData] = useState(false);
  let expenseFunction = (expenseObj) => {
    let obj = {
      ...expenseObj,
      id: Math.random().toString(),
    };

    expenseFunc(obj);
  };

  let hideAddDataHandler = () => {
    setShowAddData(true);
  };

  let showAddDataHandler = () => {
    setShowAddData(false);
  };

  return (
    <div>
      {!showAddData && (
        <div className="new-expense-bucket-1 rounded-3 bg-pink">
          <ShowAddExpense hideAddDataHandler={hideAddDataHandler} />
        </div>
      )}
      {showAddData && (
        <div className="new-expense-bucket-1 rounded-3">
          <ExpenseForm
            showAddDataHandler={showAddDataHandler}
            expenseFunction={expenseFunction}
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
