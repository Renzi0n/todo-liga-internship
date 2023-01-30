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
