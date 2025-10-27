import React from 'react';
import { sampleAssessment } from '../data';

function Assessment() {
  const { title, questions } = sampleAssessment;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submission complete! (Data was not saved)');
  };

  const renderQuestion = (q) => {
    switch (q.type) {
      case 'single-choice':
        return q.options.map(opt => (
          <div key={opt}>
            <input type="radio" name={q.id} value={opt} id={`${q.id}-${opt}`} />
            <label htmlFor={`${q.id}-${opt}`}>{opt}</label>
          </div>
        ));
      case 'multi-choice':
        return q.options.map(opt => (
          <div key={opt}>
            <input type="checkbox" name={q.id} value={opt} id={`${q.id}-${opt}`} />
            <label htmlFor={`${q.id}-${opt}`}>{opt}</label>
          </div>
        ));
      case 'long-text':
        return <textarea name={q.id} style={{ width: '100%', minHeight: '80px' }} />;
      case 'numeric':
        return <input type="number" name={q.id} />;
      case 'short-text':
      default:
        return <input type="text" name={q.id} style={{ width: '100%' }} />;
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>This is a "dumb" form. It has no validation or conditional logic, and it does not save.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {questions.map(q => (
          <div key={q.id} style={{ padding: '10px', border: '1px solid #eee' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>{q.text}</label>
            {renderQuestion(q)}
          </div>
        ))}
        <button type="submit" style={{ padding: '10px', fontSize: '16px', background: 'blue', color: 'white', border: 'none' }}>
          Submit Assessment
        </button>
      </form>
    </div>
  );
}

export default Assessment;