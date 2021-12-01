import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Table from './Components/Table';
import SearchBoxFilter from './Components/SearchBoxFilter';

function App() {
  return (
    <Provider>
      <SearchBoxFilter />
      <Table />
    </Provider>
  );
}

export default App;
