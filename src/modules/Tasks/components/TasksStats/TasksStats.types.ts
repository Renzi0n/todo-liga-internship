import { TasksStatsEntity } from 'domains/index';

export interface TaskStatsProps extends TasksStatsEntity {
  isLoading: boolean;
}
