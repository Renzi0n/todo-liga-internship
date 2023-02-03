import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEntity, TasksSearchEntity, TasksStatsEntity } from 'domains/index';
import { TaskAgentInstance } from 'http/index';
import { getInternalInfo, mapToExternalParams, mapToInternalTasks } from 'helpers/mappers';

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

  private _tasks: TaskEntity[] | null = [];

  get tasks(): TaskEntity[] | null {
    return this._tasks;
  }

  private _tasksStats: TasksStatsEntity | null = {
    total: 0,
    important: 0,
    completed: 0,
  };

  get tasksStats(): TasksStatsEntity | null {
    return this._tasksStats;
  }

  loadTasks = async (searchForm?: TasksSearchEntity) => {
    this._isTasksLoading = true;
    try {
      const externalSearchParams = searchForm && mapToExternalParams(searchForm);
      const res = await TaskAgentInstance.getAllTasks(externalSearchParams);
      this._tasks = mapToInternalTasks(res);
      this._tasksStats = getInternalInfo(res);
    } catch {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isTasksLoading = false;
    }
  };

  changeTaskImportance = async (taskId: TaskEntity['id'], targetStatus: boolean) => {
    this._isTasksLoading = true;
    await TaskAgentInstance.updateTask(taskId, {
      isImportant: targetStatus,
    });
    await this.loadTasks();
  };

  changeTaskComplete = async (taskId: TaskEntity['id'], targetStatus: boolean) => {
    this._isTasksLoading = true;
    await TaskAgentInstance.updateTask(taskId, {
      isCompleted: targetStatus,
      isImportant: targetStatus ? false : undefined,
    });
    await this.loadTasks();
  };

  deleteTask = async (taskId: TaskEntity['id']) => {
    this._isTasksLoading = true;
    await TaskAgentInstance.deleteTask(taskId);
    await this.loadTasks();
  };
}

export const TasksStoreInstance = new TasksStore();
