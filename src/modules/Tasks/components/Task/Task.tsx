import React from 'react';
import { Link } from 'react-router-dom';
import { TaskProps } from './Task.types';
import { EDIT, ROOT } from 'constants/paths';
import './Task.css';

export function Task({ task }: TaskProps) {
  const { name, id, info } = task;

  return (
    <div>
      <div className="task mb-2">
        <p className="task__label">{name}</p>

        <div className="task__btns">
          <button type="button" className="task__btn btn btn-outline-success btn-sm float-right btn-important">
            <i className="fa fa-exclamation" />
          </button>

          <button type="button" className="task__btn btn btn-outline-danger btn-sm float-right btn-delete">
            <i className="fa fa-trash-o" />
          </button>

          <button type="button" className="task__btn btn btn-outline-danger btn-sm float-right btn-delete">
            <i className="fa fa-check"></i>
          </button>

          <Link className="task__btn btn btn-outline-secondary btn-sm float-right" to={`${ROOT}${EDIT}/${id}`}>
            <i className="fa fa-pencil" />
          </Link>
        </div>
      </div>
      <p>{info}</p>
    </div>
  );
}
