import "./ExpenseChartItem.css";

let ExpenseChartItem = ({ val, label, max }) => {
  let height = `${Math.round((val / max) * 100)}%`;

  console.log("max in item=", max);

  return (
    <div>
      <div className="expense-chart-inner">
        <div className="expense-chart-fill" style={{ height: height }}></div>
      </div>
      <label
        className="text-white"
        style={{ fontSize: "18px", fontWeight: "500" }}
      >
        {label}
      </label>
    </div>
  );
};

export default ExpenseChartItem;
