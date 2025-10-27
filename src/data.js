
export const jobs = [
  { id: 1, title: 'Senior React Developer', status: 'active', tags: ['React', 'TypeScript'] },
  { id: 2, title: 'Node.js Backend Engineer', status: 'active', tags: ['Node.js', 'AWS'] },
  { id: 3, title: 'UX Designer', status: 'archived', tags: ['Figma', 'User-Testing'] },
  { id: 4, title: 'DevOps Engineer', status: 'active', tags: ['Kubernetes', 'GCP'] },
  { id: 5, title: 'Product Manager', status: 'active', tags: ['Agile', 'Roadmap'] },
];

export const candidates = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Candidate ${i + 1}`,
  email: `candidate${i + 1}@example.com`,
  stage: ['applied', 'screen', 'tech', 'offer'][Math.floor(Math.random() * 4)]
})); 

export const sampleAssessment = {
  id: 1,
  jobId: 1,
  title: 'React Developer Skills Test',
  questions: [
    { id: 'q1', text: 'What is your primary development area?', type: 'single-choice', options: ['Frontend', 'Backend', 'Full-stack'] },
    { id: 'q2', text: 'Which frameworks have you used?', type: 'multi-choice', options: ['React', 'Vue', 'Angular', 'Svelte'] },
    { id: 'q3', text: 'Why do you want to work here?', type: 'long-text' },
    { id: 'q4', text: 'How many years of React experience?', type: 'numeric' },
    { id: 'q5', text: 'This is a conditional question. It will not work.', type: 'short-text' }
  ]
};