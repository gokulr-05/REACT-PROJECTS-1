import "./ExpenseDate.css";

let ExpenseDate = ({ date }) => {
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();

  return (
    <div className="d-flex flex-column bg-black  expense-item-bucket-3 rounded-3 p-2  align-items-center">
      <div className="m-2">
        <h4>{month}</h4>
      </div>
      <div className="m-2">
        <p>{year}</p>
      </div>
      <div className="m-2">
        <h4>{day}</h4>
      </div>
    </div>
  );
};

export default ExpenseDate;
