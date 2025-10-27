import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css'; 

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Jobs</Link>
        <Link to="/candidates" className="nav-link">Candidates</Link>
        <Link to="/assessment/1" className="nav-link">Sample Assessment</Link>
      </nav>
      
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App