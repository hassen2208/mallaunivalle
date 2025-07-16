// src/components/SubjectCard.jsx
import React, { useState } from 'react';

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
