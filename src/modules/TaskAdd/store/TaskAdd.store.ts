import { action, makeObservable } from 'mobx';
import { TaskAddFormEntity } from 'domains/taskAdd.entity';

class TaskAddStore {
  constructor() {
    makeObservable(this, {
      addTask: action,
    });
  }

  addTask = (task: TaskAddFormEntity): boolean => {
    console.log('task added', task);

    return true;
  };
}

export const TaskAddStoreInstance = new TaskAddStore();
