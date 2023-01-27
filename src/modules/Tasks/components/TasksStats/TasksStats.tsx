import React from 'react';
import { TaskStatsProps } from './TaskStats.types';

export function TasksStats({ total, important, completed }: TaskStatsProps) {
  return (
    <div className="d-flex w-100 justify-content-between">
      <p>
        Total: <span className="badge bg-secondary">{total}</span>
      </p>
      <p>
        Important: <span className="badge bg-secondary">{important}</span>
      </p>
      <p>
        Completed: <span className="badge bg-secondary">{completed}</span>
      </p>
    </div>
  );
}
