import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Companies from './Companies';

function App() {
  const [page, setPage] = useState('');
  return (
    <div className="App">
      <h1>Data freedom</h1>
      <p>
        We buy data from users and sell it to companies.
      </p>
      <button onClick={() => setPage('users')}>
        User page
      </button>
      <button onClick={() => setPage('companies')}>
        Company page
      </button>
      {page === 'users' && <Users />}
      {page === 'companies' && <Companies />}
    </div>
  );
}

export default App;
