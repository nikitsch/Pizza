import React, { FC, useState } from 'react';
import AddPizzaForm from "./components/AddPizzaForm";
import './App.css';

const App = () => {
  const [pizzasList, setPizzasList] = useState([]);

  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaForm />
      </div>
    </div>
  );
}

export default App;
