import { action, makeObservable } from 'mobx';
import { TaskAddFormEntity } from 'domains/taskAdd.entity';
import { TaskAgentInstance } from 'http/index';

class TaskAddStore {
  constructor() {
    makeObservable(this, {
      addTask: action,
    });
  }

  addTask = async (task: TaskAddFormEntity): Promise<boolean> => {
    try {
      await TaskAgentInstance.createTask(task);

      return true;
    } catch {
      return false;
    }
  };
}

export const TaskAddStoreInstance = new TaskAddStore();
