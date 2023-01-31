import React, { MouseEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StatusFilter } from '../StatusFilter';
import { SearchFormProps } from './SearchForm.types';
import { DEFAULT_SEARCH_FORM } from './SearchForm.constants';
import { SearchInput } from 'components/index';
import { FiltersType, TasksSearchEntity } from 'domains/index';
import './SearchForm.css';

export function SearchForm({ findTasks }: SearchFormProps) {
  const { control, handleSubmit, setValue } = useForm<TasksSearchEntity>({
    defaultValues: DEFAULT_SEARCH_FORM,
  });

  const onSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit((form) => {
      findTasks(form);
    })();
  };

  const onTasksTypeChange = (tasksType: FiltersType) => setValue('tasksType', tasksType);
  const onSearchInputChange = (searchText: string) => setValue('searchText', searchText);
  const onSearchInputReset = () => setValue('searchText', '');

  return (
    <form className="search-form d-flex justify-content-between">
      <Controller
        control={control}
        name="searchText"
        render={({ field }) => (
          <SearchInput value={field.value} onChange={onSearchInputChange} onReset={onSearchInputReset} />
        )}
      />
      <Controller
        control={control}
        name="tasksType"
        render={({ field }) => <StatusFilter onChange={onTasksTypeChange} tasksType={field.value} />}
      />
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Find
      </button>
    </form>
  );
}
