import React from 'react';
import { TaskStatsProps } from './TasksStats.types';
import { Loader } from 'components/index';

export function TasksStats({ total, important, completed, isLoading }: TaskStatsProps) {
  return (
    <div className="d-flex w-100 justify-content-between">
      <p>
        Total:{' '}
        <Loader isLoading={isLoading} variant="dot">
          <span className="badge bg-secondary">{total}</span>
        </Loader>
      </p>
      <p>
        Important:
        <Loader isLoading={isLoading} variant="dot">
          <span className="badge bg-secondary">{important}</span>
        </Loader>
      </p>
      <p>
        Done:
        <Loader isLoading={isLoading} variant="dot">
          <span className="badge bg-secondary">{completed}</span>
        </Loader>
      </p>
    </div>
  );
}
