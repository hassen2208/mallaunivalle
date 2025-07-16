import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// src/App.jsx
import React from 'react';
import SemesterColumn from './components/SemesterColumn';
import curriculum from './data/curriculum';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Malla Curricular - Ingeniería de Sistemas</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {curriculum.map((semester, index) => (
          <SemesterColumn key={index} semester={semester} index={index + 1} />
        ))}
      </div>
    </div>
  );
}