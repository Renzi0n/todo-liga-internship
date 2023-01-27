import React from 'react';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({ label, checked }: CheckboxProps) {
  return (
    <div className="form-check mb-3">
      <input className="form-check-input" type="checkbox" value="" id={label} checked={checked} />
      <label className="form-check-label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
