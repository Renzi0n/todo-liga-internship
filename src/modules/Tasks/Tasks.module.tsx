import React from 'react';
import { SearchForm, TasksList, TasksStats } from './components';
import { TasksMock } from '__mocks__/Tasks';

export function Tasks() {
  return (
    <>
      <SearchForm />
      <TasksStats total={TasksMock.length} important={0} completed={0} />
      <TasksList tasks={TasksMock} />
    </>
  );
}
