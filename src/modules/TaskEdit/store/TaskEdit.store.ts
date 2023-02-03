import { action, computed, makeObservable, observable } from 'mobx';
import { TaskAddFormEntity } from 'domains/taskAdd.entity';
import { TaskEditFormEntity } from 'domains/taskEdit.entity';
import { TaskAgentInstance } from 'http/index';
import { mapToInternalTaskEdit } from 'helpers/mappers';

type PrivateFields = '_taskId' | '_taskForm' | '_isTaskLoading';

class TaskEditStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      editTask: action,
      getTask: action,

      _taskId: observable,
      _taskForm: observable,
      _isTaskLoading: observable,

      taskId: computed,
      taskForm: computed,
      isTaskLoading: computed,
    });
  }

  _isTaskLoading = false;

  get isTaskLoading(): boolean {
    return this._isTaskLoading;
  }

  set isTaskLoading(value: boolean) {
    this._isTaskLoading = value;
  }

  _taskId: string | null = null;

  set taskId(value: string | null) {
    this._taskId = value;
  }

  get taskId(): string | null {
    return this._taskId;
  }

  _taskForm: TaskEditFormEntity | null = {
    name: '',
    info: '',
    isImportant: false,
    isCompleted: false,
  };

  set taskForm(value: TaskEditFormEntity | null) {
    this._taskForm = value;
  }

  get taskForm(): TaskEditFormEntity | null {
    return this._taskForm;
  }

  editTask = async (task: TaskAddFormEntity): Promise<boolean> => {
    this._isTaskLoading = true;
    try {
      if (!this.taskId) throw new Error();
      await TaskAgentInstance.updateTask(this.taskId, task);

      return true;
    } catch {
      return false;
    } finally {
      this._isTaskLoading = false;
    }
  };

  getTask = async () => {
    this._isTaskLoading = true;
    try {
      if (!this.taskId) throw new Error();
      const res = await TaskAgentInstance.getTask(this.taskId);
      this._taskForm = mapToInternalTaskEdit(res);
    } catch {
      this._taskForm = null;
    } finally {
      this._isTaskLoading = false;
    }
  };
}

export const TaskEditStoreInstance = new TaskEditStore();
