import React, { useState } from 'react';
import { candidates as allCandidates } from '../data'; 

function Candidates() {
  const [search, setSearch] = useState('');

  const filteredCandidates = allCandidates.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Candidates</h2>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
      />
      
      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Stage</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Candidates;