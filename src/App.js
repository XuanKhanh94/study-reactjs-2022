import Expenses from "./components/Expenses/Expenses"

const App = () => {
  const expenses = [
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
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
