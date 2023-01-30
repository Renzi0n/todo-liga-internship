import React from 'react';
import { TaskStatsProps } from './TasksStats.types';

function GrowLoader() {
  return (
    <div className="spinner-grow spinner-grow-sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export function TasksStats({ total, important, completed, isLoading }: TaskStatsProps) {
  return (
    <div className="d-flex w-100 justify-content-between">
      <p>Total: {isLoading ? <GrowLoader /> : <span className="badge bg-secondary">{total}</span>}</p>
      <p>Important: {isLoading ? <GrowLoader /> : <span className="badge bg-secondary">{important}</span>}</p>
      <p>Done: {isLoading ? <GrowLoader /> : <span className="badge bg-secondary">{completed}</span>}</p>
    </div>
  );
}
