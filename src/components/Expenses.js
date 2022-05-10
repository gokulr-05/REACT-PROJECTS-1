import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
let Expenses = ({ expenses }) => {
  return (
    <div className="rounded p-3 bg-black expenses-bucket">
      <ExpenseItem
        title={expenses[0].title}
        amt={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amt={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amt={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpenseItem
        title={expenses[3].title}
        amt={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
};

export default Expenses;
