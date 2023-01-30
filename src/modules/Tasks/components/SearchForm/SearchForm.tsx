import React, { MouseEvent } from 'react';
import { StatusFilter } from '../StatusFilter';
import { SearchFormProps } from './SearchForm.types';
import { SearchInput } from 'components/index';
import './SearchForm.css';

export function SearchForm({ findTasks }: SearchFormProps) {
  const onSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    findTasks();
  };

  return (
    <form className="search-form d-flex justify-content-between">
      <SearchInput />
      <StatusFilter />
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Find
      </button>
    </form>
  );
}
