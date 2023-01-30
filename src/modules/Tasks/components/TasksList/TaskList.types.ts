/* eslint-disable no-unused-vars */
import { TaskEntity } from 'domains/index';

export interface TaskListProps {
  tasks: TaskEntity[];
  isLoading: boolean;
  changeTaskImportance: (taskId: TaskEntity['id'], targetStatus: boolean) => void;
  deleteTask: (taskId: TaskEntity['id']) => void;
  changeTaskComplete: (taskId: TaskEntity['id'], targetStatus: boolean) => void;
}
