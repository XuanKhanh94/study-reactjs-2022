import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";



const DUMMY_DATA = [
  {
    id: 1,
    price: 451.23,
    title: 'Car',
    date: new Date(2021, 3, 28)
  },
  {
    id: 2,
    price: 212.21,
    title: 'Car',
    date: new Date(2021, 2, 1)
  },
  {
    id: 3,
    price: 53.2,
    title: 'Car',
    date: new Date(2021, 5, 2)
  },
  {
    id: 4,
    price: 343.1,
    title: 'Car',
    date: new Date(2021, 9, 4)
  },
  {
    id: 5,
    price: 345.2,
    title: 'Car',
    date: new Date(2021, 2, 4)
  },
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA)
  const addExpenseDataHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];

    })
  }



  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
