import { action, computed, makeObservable, observable } from 'mobx';
import { TaskAddFormEntity } from 'domains/taskAdd.entity';
import { TaskEditFormEntity } from 'domains/taskEdit.entity';
import { TaskForEditMock } from '__mocks__/Tasks';
import { delay } from 'helpers/index';

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

  _taskForm: TaskEditFormEntity = {
    name: '',
    info: '',
    isImportant: false,
    isCompleted: false,
  };

  set taskForm(value: TaskEditFormEntity) {
    this._taskForm = value;
  }

  get taskForm(): TaskEditFormEntity {
    return this._taskForm;
  }

  editTask = async (task: TaskAddFormEntity) => {
    this._isTaskLoading = true;
    console.log('task edited', task);
    await delay(1000);
    this._isTaskLoading = false;
    return true;
  };

  getTask = async () => {
    this._isTaskLoading = true;
    await delay(1000);
    this._taskForm = TaskForEditMock;
    this._isTaskLoading = false;
  };
}

export const TaskEditStoreInstance = new TaskEditStore();
