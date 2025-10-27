import React, { useState } from 'react';
import { jobs as allJobs } from '../data';
import { Link } from 'react-router-dom';
import './PageStyles.css'; 

function Jobs() {
  const [jobs, setJobs] = useState(allJobs);
  const [search, setSearch] = useState('');
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Jobs Board</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <div className="card-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <Link to={`/jobs/${job.id}`}>
              <h3 style={{ margin: 0 }}>{job.title}</h3>
            </Link>
            <p style={{ margin: '5px 0' }}>Status: {job.status}</p>
            <div>
              {job.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;