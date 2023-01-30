import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { SearchForm, TasksList, TasksStats } from './components';
import { TasksStoreInstance } from './store';

function TasksProto() {
  useEffect(() => {
    TasksStoreInstance.loadTasks();
  }, []);

  return (
    <>
      <SearchForm findTasks={TasksStoreInstance.loadTasks} />
      <TasksStats
        isLoading={TasksStoreInstance.isTasksLoading}
        total={TasksStoreInstance.tasks.length}
        important={0}
        completed={0}
      />
      <TasksList
        isLoading={TasksStoreInstance.isTasksLoading}
        tasks={TasksStoreInstance.tasks}
        changeTaskImportance={TasksStoreInstance.changeTaskImportance}
        deleteTask={TasksStoreInstance.deleteTask}
        changeTaskComplete={TasksStoreInstance.changeTaskComplete}
      />
    </>
  );
}

export const Tasks = observer(TasksProto);
