import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
let ExpenseItem = ({ title, amt, date }) => {
  console.log("expenseItem");
  return (
    <div className="my-2 expense-item-bucket-1 d-flex align-items-center justify-content-between rounded-2 flex-nowrap text-white p-2">
      <div className="rounded-3 w-100 expense-item-bucket-2 d-flex align-items-center justify-content-between px-4 my-2">
        <ExpenseDate date={date} />
        <div className=" ">
          <h3>{title}</h3>
        </div>

        <div className="amt rounded-3 py-1 px-2 ">
          <h4>{`$${amt}`}</h4>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
