import { useState } from "react";

import "./ExpenseForm.css";

let ExpenseForm = ({ expenseFunction }) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAmt, setEnteredAmt] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  let titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  let amtHandler = (e) => {
    setEnteredAmt(e.target.value);
  };

  let dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();

    let value = {
      enteredTitle: enteredTitle,
      enteredAmt: enteredAmt,
      enteredDate: new Date(enteredDate),
    };
    console.log(value);
    expenseFunction(value);

    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };

  return (
    <form className="expenseform-form" onSubmit={submitHandler}>
      <div className="expenseform-bucket-1 d-flex flex-column gap-3 align-items-center py-2">
        <div className="row expenseform-bucket-item d-flex align-items-center justify-content-between">
          <div className="col-md-6 col-12">
            <label htmlFor="title" className="text-capitalize text-white fs-3">
              title
            </label>
          </div>
          <div className="col-md-6 col-12">
            <input
              onChange={(e) => {
                titleHandler(e);
              }}
              value={enteredTitle}
              type="text"
              className="form-control"
              dir="rtl"
            />
          </div>
        </div>
        <div className="row expenseform-bucket-item d-flex align-items-center justify-content-between">
          <div className="col-md-6 col-12">
            <label
              htmlFor="amount"
              className="text-capitalize text-white fs-3 "
            >
              amount
            </label>
          </div>
          <div className="col-md-6 col-12">
            <input
              value={enteredAmt}
              type="number"
              min="1"
              step="1"
              dir="rtl"
              className="form-control"
              onChange={amtHandler}
            />
          </div>
        </div>
        <div className="row expenseform-bucket-item d-flex align-items-center justify-content-between">
          <div className="col-md-6 col-12">
            <label htmlFor="date" className="text-capitalize   text-white fs-3">
              date
            </label>
          </div>
          <div className="col-md-6 col-12">
            <input
              value={enteredDate}
              type="date"
              min="2022-01-01"
              max="2022-12-31"
              className="form-control"
              dir="rtl"
              onChange={dateHandler}
            />
          </div>
        </div>

        <div className="expenseform-bucket-button rounded-2">
          <button type="submit" className="text-capitalize btn btn-dark">
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
