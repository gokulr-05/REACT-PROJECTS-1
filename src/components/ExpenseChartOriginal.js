import "./ExpenseChart.css";

let ExpenseChart = () => {
  let height = "10%";

  return (
    <div className="expense-chart-bucket-1">
      <div className="expense-chart-inner">
        <div className="expense-chart-fill" style={{ height: height }}></div>
      </div>
      <label
        className="text-white"
        style={{ fontSize: "18px", "font-weight": "500" }}
      >
        Jan
      </label>
    </div>
  );
};

export default ExpenseChart;
