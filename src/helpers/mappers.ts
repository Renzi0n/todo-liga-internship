import { FILTER_TYPES } from 'constants/index';
import { TaskEditFormEntity, TaskEntity, TasksSearchEntity, TasksStatsEntity } from 'domains/index';
import { GetAllTasksQuery, GetAllTasksResponse, GetTaskResponse } from 'http/index';

export const mapToExternalParams = (params?: TasksSearchEntity): GetAllTasksQuery | undefined => {
  if (!params) return undefined;

  const { searchText, tasksType } = params;
  let isCompleted = undefined;

  if (tasksType === FILTER_TYPES.DONE) isCompleted = true;
  else if (tasksType === FILTER_TYPES.ACTIVE) isCompleted = false;

  return {
    name_like: searchText,
    isImportant: tasksType === FILTER_TYPES.IMPORTANT ? true : undefined,
    isCompleted,
  };
};

export const mapToInternalTaskEdit = (task: GetTaskResponse): TaskEditFormEntity => {
  return {
    name: task.name || 'Неизвестно',
    info: task.info || 'Неизвестно',
    isImportant: task.isImportant || false,
    isCompleted: task.isCompleted || false,
  };
};

export const mapToInternalTasks = (tasks: GetAllTasksResponse): TaskEntity[] => {
  const internalTasks: TaskEntity[] = [];

  tasks.forEach((task) => {
    if (task.id) {
      internalTasks.push({
        name: task.name || 'Неизвестно',
        id: String(task.id),
        info: task.info || 'Неизвестно',
        isImportant: task.isImportant || false,
        isCompleted: task.isCompleted || false,
      });
    }
  });

  return internalTasks;
};

export const getInternalInfo = (tasks: GetAllTasksResponse): TasksStatsEntity => {
  const total = tasks.length;
  const anotherStats = tasks.reduce(
    (acc, task) => {
      return {
        important: task.isImportant ? acc.important + 1 : acc.important,
        completed: task.isCompleted ? acc.completed + 1 : acc.completed,
      };
    },
    {
      important: 0,
      completed: 0,
    }
  );

  return {
    total,
    ...anotherStats,
  };
};
