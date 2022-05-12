import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import "./NewExpense/ExpenseFilter.css";
import "./Expenses.css";

let Expenses = ({ expenses }) => {
  let [selectedYear, setSelectedYear] = useState("2021");
  // console.log("selectedYear=", selectedYear);
  // console.log("expenses=", expenses);

  // console.log(
  //   typeof expenses[0].date.getFullYear(),
  //   expenses[0].date.getFullYear()
  // );

  // console.log(
  //   typeof expenses[0].date.getFullYear().toString(),
  //   expenses[0].date.getFullYear()
  // );

  // expenses.map((val)=>{});
  // let [yearArr, setYearArr] = useState(yearFilteredArr);

  let filterYear = (year) => {
    setSelectedYear(year);

    console.log("Expenses.js");
    console.log(year);
  };

  let yearFilteredArr = [];

  yearFilteredArr = expenses.filter((val) => {
    return val.date.getFullYear().toString() === selectedYear.toString();
  });

  return (
    <div>
      <ExpenseFilter selectedYear={selectedYear} filterYear={filterYear} />
      <div className="rounded p-3 bg-black expenses-bucket">
        {yearFilteredArr.length > 0 &&
          yearFilteredArr.map((val) => {
            return (
              <ExpenseItem
                key={Math.random().toString()}
                title={val.title}
                amt={val.amount}
                date={val.date}
              />
            );
          })}

        {yearFilteredArr.length === 0 && (
          <h3 className="text-white text-center">No Data Found</h3>
        )}
      </div>
    </div>
  );
};

export default Expenses;
