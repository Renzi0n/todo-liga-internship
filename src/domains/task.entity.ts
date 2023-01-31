import { FILTER_TYPES } from 'constants/statusFilterTypes';

export interface TaskEntity {
  name: string;
  id: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export interface TasksStatsEntity {
  total: number;
  important: number;
  completed: number;
}

export type FiltersType = typeof FILTER_TYPES[keyof typeof FILTER_TYPES];

export interface TasksSearchEntity {
  searchText: string;
  tasksType: FiltersType;
}
