import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Jobs from './pages/Jobs.jsx';
import Candidates from './pages/Candidates.jsx';
import Assessment from './pages/Assessment.jsx';
import './index.css' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Jobs />,
      },
      {
        path: "candidates",
        element: <Candidates />,
      },
      {
        path: "assessment/:jobId",
        element: <Assessment />,
      },
      {
        path: "jobs/:jobId",
        element: <h2>Job Detail Page (Stub)</h2>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)