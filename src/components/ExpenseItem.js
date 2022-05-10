import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
let ExpenseItem = ({ title, amt, date }) => {
  return (
    <div className="my-2 expense-item-bucket-1 d-flex align-items-center justify-content-between rounded-2 flex-nowrap text-white p-2">
      <div className="rounded-3 w-100 expense-item-bucket-2 d-flex align-items-center justify-content-between  my-2">
        <ExpenseDate date={date} />
        <div className=" ">
          <span>{title}</span>
        </div>

        {/* <div className="amt rounded-3 py-1 px-2 "> */}
        <span>{`$${amt}`}</span>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ExpenseItem;
