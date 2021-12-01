import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Table from './Components/Table';
import SearchBoxFilter from './Components/SearchBoxFilter';
import NumericFilterForm from './Components/NumericFilterForm';

function App() {
  return (
    <Provider>
      <SearchBoxFilter />
      <NumericFilterForm />
      <Table />
    </Provider>
  );
}

export default App;
