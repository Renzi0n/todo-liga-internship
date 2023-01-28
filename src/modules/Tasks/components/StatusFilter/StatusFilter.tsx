import React, { useState, MouseEvent } from 'react';
import { CLASSNAMES, FILTER_TYPES } from './StatusFilter.constants';
import { FiltersType, StatusFilterProps } from './StatusFilter.types';

export function StatusFilter({ onChange }: StatusFilterProps) {
  const [filter, setFilter] = useState<FiltersType>(FILTER_TYPES.ALL);

  const onFilterChange = (evt: MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    setFilter(evt.target.textContent as FiltersType);
    if (onChange) onChange(filter);
  };

  return (
    <div className="btn-group" onClick={onFilterChange}>
      <button type="button" className={filter === FILTER_TYPES.ALL ? CLASSNAMES.ACTIVE : CLASSNAMES.SECONDARY}>
        {FILTER_TYPES.ALL}
      </button>
      <button type="button" className={filter === FILTER_TYPES.ACTIVE ? CLASSNAMES.ACTIVE : CLASSNAMES.SECONDARY}>
        {FILTER_TYPES.ACTIVE}
      </button>
      <button type="button" className={filter === FILTER_TYPES.DONE ? CLASSNAMES.ACTIVE : CLASSNAMES.SECONDARY}>
        {FILTER_TYPES.DONE}
      </button>
      <button type="button" className={filter === FILTER_TYPES.IMPORTANT ? CLASSNAMES.ACTIVE : CLASSNAMES.SECONDARY}>
        {FILTER_TYPES.IMPORTANT}
      </button>
    </div>
  );
}
