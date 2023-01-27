import React from 'react';
import { TextFieldProps } from './TextField.types';

export function TextField({ label, placeholder, containerClassName = '', inputType, value, onChange }: TextFieldProps) {
  return (
    <div className={`mb-3 ${containerClassName}`}>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={inputType}
        className="form-control"
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
