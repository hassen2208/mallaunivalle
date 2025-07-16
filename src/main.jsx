// src/main.jsx
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


// src/components/SemesterColumn.jsx
import React from 'react';
import SubjectCard from './SubjectCard';

export default function SemesterColumn({ semester, index }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Semestre {index}</h2>
      <div className="flex flex-col gap-3">
        {semester.map((subject) => (
          <SubjectCard key={subject.codigo} subject={subject} />
        ))}
      </div>
    </div>
  );
}


// src/components/SubjectCard.jsx
import React, { useState, useEffect } from 'react';

export default function SubjectCard({ subject }) {
  const [status, setStatus] = useState(() => {
    return localStorage.getItem(subject.codigo) || 'pendiente';
  });

  const cycleStatus = () => {
    const next = status === 'pendiente' ? 'cursando' : status === 'cursando' ? 'aprobada' : 'pendiente';
    setStatus(next);
    localStorage.setItem(subject.codigo, next);
  };

  const statusColor = {
    pendiente: 'bg-gray-200',
    cursando: 'bg-orange-300',
    aprobada: 'bg-green-400',
  };

  return (
    <div
      className={`cursor-pointer p-3 rounded-lg shadow text-sm font-medium ${statusColor[status]}`}
      onClick={cycleStatus}
      title={`Código: ${subject.codigo} | Créditos: ${subject.creditos}`}
    >
      {subject.nombre}
    </div>
  );
}


// src/data/curriculum.js
const curriculum = [
  [ // Semestre 1
    { nombre: 'Matemáticas Básicas', codigo: '111023C', creditos: 4 },
    { nombre: 'Deporte y Salud', codigo: '404002C', creditos: 1 },
    { nombre: 'Fund. de Programación', codigo: '750012C', creditos: 6 },
    { nombre: 'Taller de Ingeniería I', codigo: '701002C', creditos: 3 },
    { nombre: 'Inserción a la Vida Univ.', codigo: '701001C', creditos: 2 },
    { nombre: 'Intro. a la Ingeniería', codigo: '701003C', creditos: 2 },
  ],
  [ // Semestre 2
    { nombre: 'Cálculo Monovariable', codigo: '111021C', creditos: 5 },
    { nombre: 'Álgebra Lineal', codigo: '111093C', creditos: 3 },
    { nombre: 'Fund. de Programación O.O.', codigo: '750015C', creditos: 4 },
    { nombre: 'Matemáticas Discretas I', codigo: '750004C', creditos: 4 },
    { nombre: 'Electiva Complementaria I', codigo: 'ELEC1', creditos: 3 },
  ],
  [ // Semestre 3
    { nombre: 'Cálculo Multivariable', codigo: '111022C', creditos: 4 },
    { nombre: 'Física I + Lab.', codigo: '106021C', creditos: 4 },
    { nombre: 'Fund. de Estructuras de Datos', codigo: '750014C', creditos: 4 },
    { nombre: 'Matemáticas Discretas II', codigo: '750005C', creditos: 4 },
    { nombre: 'Electiva Complementaria II', codigo: 'ELEC2', creditos: 3 },
  ],
  [ // Semestre 4
    { nombre: 'Probabilidad y Estadística', codigo: '761001C', creditos: 5 },
    { nombre: 'Ecuaciones Diferenciales', codigo: '111026C', creditos: 4 },
    { nombre: 'Fund. de Redes', codigo: '750016C', creditos: 3 },
    { nombre: 'Análisis y Diseño de Algoritmos I', codigo: '750017C', creditos: 4 },
    { nombre: 'Sistemas Operativos', codigo: '750010C', creditos: 4 },
    { nombre: 'Bases de Datos', codigo: '750006C', creditos: 3 },
  ],
  [ // Semestre 5
    { nombre: 'Simulación y Computación Numérica', codigo: '750016C2', creditos: 3 },
    { nombre: 'Fund. de Inteligencia Computacional', codigo: '750018C', creditos: 4 },
    { nombre: 'Análisis y Diseño de Algoritmos II', codigo: '750026C', creditos: 3 },
    { nombre: 'Fundamentos de Telemática', codigo: '750007C', creditos: 3 },
    { nombre: 'Ingeniería Económica', codigo: '760016C', creditos: 3 },
    { nombre: 'Desarrollo de Software I', codigo: '750020C', creditos: 3 },
  ],
  [ // Semestre 6
    { nombre: 'Infraestructuras Distribuidas', codigo: '750025C', creditos: 3 },
    { nombre: 'Desarrollo de Software II', codigo: '750021C', creditos: 3 },
    { nombre: 'Proyecto Integrador I', codigo: '750019C', creditos: 3 },
    { nombre: 'Análisis y Diseño de Algoritmos III', codigo: '750026C2', creditos: 3 },
    { nombre: 'Ciberseguridad', codigo: '750024C', creditos: 3 },
  ],
  [ // Semestre 7
    { nombre: 'Seminario en Legislación, Ética y Profesión', codigo: '750026C3', creditos: 2 },
    { nombre: 'Desarrollo de Aplicaciones Móviles', codigo: '750027C', creditos: 3 },
    { nombre: 'Proyecto Integrador II', codigo: '750019C2', creditos: 3 },
    { nombre: 'Introducción a la Ciencia de los Datos', codigo: '750022C', creditos: 3 },
  ],
  [ // Semestre 8
    { nombre: 'Electiva Profesional I', codigo: 'EP1', creditos: 3 },
    { nombre: 'Electiva Profesional II', codigo: 'EP2', creditos: 3 },
    { nombre: 'Introducción a la Gestión de Proyectos de Software', codigo: '750031C', creditos: 3 },
    { nombre: 'Semillero de Trabajo de Grado', codigo: '750036C', creditos: 1 },
  ],
  [ // Semestre 9
    { nombre: 'Electiva Profesional III', codigo: 'EP3', creditos: 3 },
    { nombre: 'Innovación y Emprendimiento en Ingeniería', codigo: '750032C', creditos: 3 },
    { nombre: 'Trabajo de Grado I', codigo: '750037C', creditos: 4 },
    { nombre: 'Impactos Ambientales', codigo: '750038C', creditos: 2 },
  ],
  [ // Semestre 10
    { nombre: 'Trabajo de Grado II', codigo: '750038C2', creditos: 4 },
    { nombre: 'Diseño de Contenido y Evaluación de Recursos Educativos', codigo: '750039C', creditos: 3 },
  ]
];

export default curriculum;


// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', sans-serif;
  background-color: #f3f4f6;
}
