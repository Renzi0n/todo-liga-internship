import { FILTER_TYPES } from 'constants/statusFilterTypes';
import { TasksSearchEntity } from 'domains/index';

export const DEFAULT_SEARCH_FORM: TasksSearchEntity = {
  searchText: '',
  tasksType: FILTER_TYPES.ALL,
};
