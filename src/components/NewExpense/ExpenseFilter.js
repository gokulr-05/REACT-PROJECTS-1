import { useState } from "react";
import "./ExpenseFilter.css";
let ExpenseFilter = ({ filterYear, selectedYear, filterYearFunc }) => {
  // let [stateYear, setStateYear] = useState(selectedYear);

  // console.log("selectedYear=", selectedYear);

  // filterYear(stateYear);

  let yearChangeHandler = (e) => {
    filterYear(e.target.value);
    // setStateYear(e.target.value);
  };

  return (
    <div className="expense-filter-bucket d-flex align-items-center justify-content-between">
      <label className="text-white">Filter By Year</label>
      <select
        className="form-select"
        value={selectedYear}
        onChange={yearChangeHandler}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
