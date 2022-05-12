let showAddExpense = ({ hideAddDataHandler }) => {
  return (
    <div className="text-center ">
      <button
        onClick={() => {
          hideAddDataHandler();
        }}
        className="btn btn-dark text-uppercase  "
      >
        add expense
      </button>
    </div>
  );
};

export default showAddExpense;
