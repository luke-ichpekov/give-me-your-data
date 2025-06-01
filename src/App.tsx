import React, { useState } from 'react';
import './App.css';
import Users from './Users';
import Companies from './Companies';

function App() {
  const [page, setPage] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Freedom</h1>
        <nav>
          <button
            className={page === 'users' ? 'active' : ''}
            onClick={() => setPage('users')}
          >
            User Page
          </button>
          <button
            className={page === 'companies' ? 'active' : ''}
            onClick={() => setPage('companies')}
          >
            Company Page
          </button>
        </nav>
        <p className="subtitle">
          We buy data from users and sell it to companies.
        </p>
      </header>
      <main className="App-main">
        {page === 'users' && <Users />}
        {page === 'companies' && <Companies />}
        {!page && (
          <div className="welcome-card">
            <h2>Welcome!</h2>
            <p>Select a page above to get started.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
