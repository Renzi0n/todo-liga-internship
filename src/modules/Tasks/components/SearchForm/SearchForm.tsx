import React from 'react';
import { StatusFilter } from '../StatusFilter';
import { SearchInput } from 'components/index';
import './SearchForm.css';

export function SearchForm() {
  return (
    <form className="search-form d-flex justify-content-between">
      <SearchInput />
      <StatusFilter />
      <button type="submit" className="btn btn-primary">
        Find
      </button>
    </form>
  );
}
