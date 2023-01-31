import React from 'react';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({ label, checked, onChange, containerClassName = '' }: CheckboxProps) {
  return (
    <div className={`form-check mb-3 ${containerClassName}`}>
      <input className="form-check-input" type="checkbox" value="" id={label} checked={checked} onChange={onChange} />
      <label className="form-check-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
