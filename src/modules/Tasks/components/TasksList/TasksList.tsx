import React from 'react';
import { Task } from '../Task';
import { TaskListProps } from './TaskList.types';
import './TasksList.css';

export function TasksList({ tasks, isLoading, changeTaskImportance, deleteTask, changeTaskComplete }: TaskListProps) {
  return (
    <div className="tasks-wrapper d-flex align-items-center justify-content-center">
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul className="list-group todo-list mb-3">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <Task
                task={task}
                changeTaskImportance={changeTaskImportance}
                deleteTask={deleteTask}
                changeTaskComplete={changeTaskComplete}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
