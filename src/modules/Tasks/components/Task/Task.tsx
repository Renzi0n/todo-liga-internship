import React from 'react';
import { Link } from 'react-router-dom';
import { TaskProps } from './Task.types';
import { EDIT, ROOT } from 'constants/paths';
import './Task.css';

export function Task({ task, changeTaskImportance, deleteTask, changeTaskComplete }: TaskProps) {
  const { name, id, info, isCompleted, isImportant } = task;

  const onBtnImportantClick = () => changeTaskImportance(id, !isImportant);

  const onBtnDeleteClick = () => deleteTask(id);

  const onBtnCompleteClick = () => changeTaskComplete(id, !isCompleted);

  return (
    <div>
      <div className="task mb-2">
        <p
          className={`task__label ${isCompleted ? 'text-decoration-line-through text-secondary' : ''} ${
            isImportant ? 'text-success fw-bold' : ''
          }`}>
          {name}
        </p>

        <div className="task__btns">
          <button
            type="button"
            className={`task__btn btn ${
              isImportant ? 'btn-success' : 'btn-outline-success'
            } btn-sm float-right btn-important`}
            disabled={isCompleted}
            onClick={onBtnImportantClick}>
            <i className="fa fa-exclamation" />
          </button>

          <button
            type="button"
            className={`task__btn btn ${isCompleted ? 'btn-danger' : 'btn-outline-danger'} btn-sm float-right`}
            onClick={onBtnCompleteClick}>
            <i className="fa fa-check"></i>
          </button>

          <button
            type="button"
            className="task__btn btn btn-outline-danger btn-sm float-right btn-delete"
            onClick={onBtnDeleteClick}>
            <i className="fa fa-trash-o" />
          </button>

          <Link className="task__btn btn btn-outline-secondary btn-sm float-right" to={`${ROOT}${EDIT}/${id}`}>
            <i className="fa fa-pencil" />
          </Link>
        </div>
      </div>
      <p
        className={`${isCompleted ? 'text-decoration-line-through text-secondary' : ''} ${
          isImportant ? 'text-success fw-bold' : ''
        }`}>
        {info}
      </p>
    </div>
  );
}
