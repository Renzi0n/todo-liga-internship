import React from 'react';
import './SearchInput.css';
import { SearchInputProps } from './SearchInput.types';

export function SearchInput({ onChange, value, onReset }: SearchInputProps) {
  return (
    <div className="search-panel">
      <input className="form-control search-input" placeholder="search" onChange={onChange} value={value} />
      <button className="close" onClick={onReset}>
        <i className="fa fa-close"></i>
      </button>
    </div>
  );
}
