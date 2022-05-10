import "./ExpenseDate.css";

let ExpenseDate = ({ date }) => {
  let day = date.toLocaleString("en-US", { day: "2-digit" });
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();

  return (
    <div className=" bg-black  expense-item-bucket-3 rounded-3 ">
      <div className="m-2">
        <h4 className="text-center">{month}</h4>
      </div>
      <div className="m-2">
        <p className="text-center">{year}</p>
      </div>
      <div className="m-2">
        <h4 className="text-center">{day}</h4>
      </div>
    </div>
  );
};

export default ExpenseDate;
