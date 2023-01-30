import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEntity, TasksStatsEntity } from 'domains/index';
import { TasksMock, TasksStatsMock } from '__mocks__/Tasks';
import { delay } from 'helpers/index';

type PrivateFields = '_tasks' | '_tasksStats' | '_isTasksLoading';

class TasksStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _tasks: observable,
      _tasksStats: observable,
      _isTasksLoading: observable,

      tasks: computed,
      isTasksLoading: computed,

      loadTasks: action,
      changeTaskImportance: action,
      changeTaskComplete: action,
      deleteTask: action,
    });
  }

  _isTasksLoading = false;

  get isTasksLoading(): boolean {
    return this._isTasksLoading;
  }

  set isTasksLoading(value: boolean) {
    this._isTasksLoading = value;
  }

  private _tasks: TaskEntity[] = [];

  get tasks(): TaskEntity[] {
    return this._tasks;
  }

  private _tasksStats: TasksStatsEntity = {
    total: 0,
    important: 0,
    completed: 0,
  };

  get tasksStats(): TasksStatsEntity {
    return this._tasksStats;
  }

  loadTasks = async () => {
    this._isTasksLoading = true;
    // TODO: Убрать моки, привязаться к бэку
    this._tasks = TasksMock;
    this._tasksStats = TasksStatsMock;
    await delay(1000);
    this._isTasksLoading = false;
  };

  changeTaskImportance = (taskId: TaskEntity['id'], targetStatus: boolean) => {
    // TODO: Добавить запрос к серверу
    console.log('important', taskId, targetStatus);
    this.loadTasks();
  };

  changeTaskComplete = (taskId: TaskEntity['id'], targetStatus: boolean) => {
    // TODO: Добавить запрос к серверу
    console.log('complete', taskId, targetStatus);
    this.loadTasks();
  };

  deleteTask = (taskId: TaskEntity['id']) => {
    // TODO: Добавить запрос к серверу
    console.log('delete', taskId);
    this.loadTasks();
  };
}

export const TasksStoreInstance = new TasksStore();
