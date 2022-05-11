import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

let NewExpense = ({ expenses, expenseFunc }) => {
  let expenseFunction = (expenseObj) => {
    let obj = {
      ...expenseObj,
      id: Math.random().toString(),
    };

    expenseFunc(obj);
  };

  return (
    <div className="new-expense-bucket-1 rounded-3">
      <ExpenseForm expenseFunction={expenseFunction} />
    </div>
  );
};

export default NewExpense;
