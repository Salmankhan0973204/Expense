
import './App.css';
import Expenses from './Component/Expenses/Expenses';
import NewExpense from './Component/NewExpense/NewExpense';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 78.90,
      date: new Date(2022, 7, 14)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 44.12,
      date: new Date(2022, 2, 14)
    },
    {
      id: 'e3',
      title: 'Card Paper',
      amount: 94.12,
      date: new Date(2022, 7, 4)
    },
    {
      id: 'e4',
      title: 'Rent a Car',
      amount: 60.12,
      date: new Date(2022, 5, 14)
    },
  ];
  return (
    <div className="App">
    <NewExpense/>
     <Expenses items={expenses} />

    </div>
  );
}

export default App;
