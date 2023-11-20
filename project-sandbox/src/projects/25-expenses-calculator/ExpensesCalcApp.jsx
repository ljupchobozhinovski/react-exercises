import React, { useState, useRef, useEffect } from "react";
import Title from "../Components/Title";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import { BudgetStyle } from "./style/Budget.style";
import { v4 as uuidV4 } from "uuid";
import ExpenseAlert from "./components/ExpenseAlert";

const initialExpense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

export default function ExpensesCalcApp() {
  const [expenses, setExpenses] = useState(initialExpense);

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState("");
  const [budget, setBudget] = useState("");
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false });
  const changeBudget = (e) => {
    // setBudget(e.target.value);
    setBudget(inputBudget.current.value);
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== "" && charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, date, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "Expense Edited" });
      } else {
        const singleExpense = { id: uuidV4(), date, charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "info", text: "Expense Added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: "Please complete all fields" });
    }
  };
  let inputBudget = useRef(null);

  useEffect(() => {
    console.log("useEffect triggered");
    if (inputBudget.current.value === "") {
      inputBudget.current.focus();
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const clearAllExpenses = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All expenses deleted." });
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete expense?")) {
      let filteredExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(filteredExpenses);
      handleAlert({ type: "danger", text: "Expense Deleted" });
    }
  };

  const handleEdit = (id) => {
    let editedExpense = expenses.find((expense) => expense.id === id);
    let { charge, amount } = editedExpense;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setEdit(true);
  };

  return (
    <main className="container">
      <Title text={"Expenses Calculator"} />

      {alert.show && <ExpenseAlert type={alert.type} text={alert.text} />}

      {/* <ExpenseAlert type={"danger"}/> */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "25px",
          margin: "1rem",
          textAlign: "center"
        }}
      >
        <aside>
          <ExpensesForm
            date={date}
            handleDate={handleDate}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            edit={edit}
          />
          <section className="card mt-2 bg-primary text-light text-end">
            <div className="card-body">
              <BudgetStyle>
                <small>Budget : $</small>
                <input
                  type="number"
                  value={budget}
                  onChange={changeBudget}
                  ref={inputBudget}
                />
              </BudgetStyle>
              <small className="mb-1">
                Total expenses: $
                {expenses.reduce((total, expense) => {
                  return (total += parseInt(expense.amount, 10));
                }, 0)}
              </small>
              <br />
              {/* Calc economies */}
              <small>Economies $ {calcEconomies(budget, expenses)}</small>
            </div>
          </section>
        </aside>
        <section>
          <ExpensesList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleClearAllExpenses={clearAllExpenses}
          />
        </section>
      </section>
    </main>
  );
}

function calcEconomies(budget, expenses) {
  return (
    budget -
    expenses.reduce((total, expense) => {
      return (total += parseInt(expense.amount, 10));
    }, 0)
  );
}
