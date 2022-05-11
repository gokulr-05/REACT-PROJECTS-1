import "./ExpenseForm.css";

let ExpenseForm = () => {
  return (
    <form className="expenseform-form">
      <div className="expenseform-bucket-1 d-flex flex-column gap-3 align-items-center py-2">
        <div className="row expenseform-bucket-item d-flex align-items-center justify-content-between">
          <div className="col-md-6 col-12">
            <label htmlFor="title" className="text-capitalize text-white fs-3">
              title
            </label>
          </div>
          <div className="col-md-6 col-12">
            <input type="text" className="form-control" dir="rtl" />
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
              type="number"
              min="1"
              step="1"
              dir="rtl"
              className="form-control"
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
              type="date"
              min="2022-01-01"
              max="2022-12-31"
              className="form-control"
              dir="rtl"
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
