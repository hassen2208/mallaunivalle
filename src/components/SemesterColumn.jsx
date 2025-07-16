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
