import React from 'react';
import { StatusFilterProps } from './StatusFilter.types';

export function StatusFilter({ onChange }: StatusFilterProps) {
  return (
    <div className="btn-group" onClick={onChange}>
      {/* Active */}
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Active
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Done
      </button>
    </div>
  );
}
