import { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
let ExpenseItem = ({ title, amt, date }) => {
  let btnHandler = () => {
    setTitle1("Button Clicked");
  };

  let [title1, setTitle1] = useState(title);
  let [amt1, setAmt1] = useState(amt);

  return (
    <div className="my-2 expense-item-bucket-1 d-flex align-items-center justify-content-between rounded-2 flex-nowrap text-white p-2">
      <div className="rounded-3 w-100 expense-item-bucket-2 d-flex align-items-center justify-content-between  my-2">
        <ExpenseDate date={date} />
        <div className=" px-1">
          <span className="expense-title">{title1}</span>
        </div>

        <div className="amt rounded-3 py-1 px-2 ">
          <span>{`$${amt1}`}</span>
        </div>

        <button className="btn btn-dark" onClick={btnHandler}>
          Button
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
