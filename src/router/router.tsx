import React from 'react';
import { Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>Hello</div>} />
    </Routes>
  );
}
