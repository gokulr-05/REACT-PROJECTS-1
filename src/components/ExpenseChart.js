import "./ExpenseChart.css";
import ExpenseChartItem from "./ExpenseChartItem";

let ExpenseChart = ({ yearFilteredArr }) => {
  let max = 0;
  // console.log("yearFilteredArr=", yearFilteredArr);

  // yearFilteredArr.map((val) => {
  //   console.log(val.date.getMonth());
  // });

  let height = "10%";
  let arr = [
    { val: 0, label: "Jan", ind: 0 },
    { val: 0, label: "Feb", ind: 1 },
    { val: 0, label: "Mar", ind: 2 },
    { val: 0, label: "Apr", ind: 3 },
    { val: 0, label: "May", ind: 4 },
    { val: 0, label: "Jun", ind: 5 },
    { val: 0, label: "Jul", ind: 6 },
    { val: 0, label: "Aug", ind: 7 },
    { val: 0, label: "Sep", ind: 8 },
    { val: 0, label: "Oct", ind: 9 },
    { val: 0, label: "Nov", ind: 10 },
    { val: 0, label: "Dec", ind: 11 },
  ];

  for (let i of yearFilteredArr) {
    arr[i.date.getMonth()].val = arr[i.date.getMonth()].val + i.amount;
  }

  // console.log("arr=", arr);

  for (let j of arr) {
    if (j.val > max) {
      max = j.val;
    }

    // console.log("max=", max);
  }

  return (
    <div className="expense-chart-bucket-1 d-flex align-items-center justify-content-between">
      {arr.map((value) => {
        return <ExpenseChartItem key={Math.random()} {...value} max={max} />;
      })}
    </div>
  );
};

export default ExpenseChart;
