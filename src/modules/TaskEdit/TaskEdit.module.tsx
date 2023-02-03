import React, { ChangeEventHandler, MouseEventHandler, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { DEFAULT_FORM } from './TaskEdit.constants';
import { taskEditSchema } from './TaskEdit.validation';
import { TaskEditStoreInstance } from './store';
import { Checkbox, Loader, TextField } from 'components/index';
import { TaskEditFormEntity } from 'domains/index';
import { PATH_LIST } from 'constants/paths';
import './TaskEdit.css';

function TaskEditProto() {
  const { control, handleSubmit, setValue, reset, watch } = useForm<TaskEditFormEntity>({
    mode: 'all',
    defaultValues: DEFAULT_FORM,
    resolver: yupResolver(taskEditSchema),
  });

  const navigate = useNavigate();

  const { taskId } = useParams();

  useEffect(() => {
    TaskEditStoreInstance.taskId = taskId ?? null;
    if (TaskEditStoreInstance.taskId) TaskEditStoreInstance.getTask();
  }, []);

  useEffect(() => {
    if (TaskEditStoreInstance.taskForm) reset(TaskEditStoreInstance.taskForm);
  }, [TaskEditStoreInstance.taskForm]);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    handleSubmit(async (form) => {
      const res = await TaskEditStoreInstance.editTask(form);
      if (res) navigate(PATH_LIST.ROOT);
    })();
  };

  const onTaskNameChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue('name', evt.target.value);
  };

  const onInfoChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue('info', evt.target.value);
  };

  const onImportantCheckboxChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue('isImportant', evt.target.checked);
  };

  const onCompletedCheckboxChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue('isCompleted', evt.target.checked);
    if (evt.target.checked) setValue('isImportant', false);
  };

  const isCompleted = watch('isCompleted');

  return (
    <form className="edit-form d-flex flex-column align-items-center justify-content-center">
      <Loader isLoading={TaskEditStoreInstance.isTaskLoading}>
        {TaskEditStoreInstance.taskForm ? (
          <>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  containerClassName="text-field"
                  label="Task name"
                  inputType="text"
                  placeholder="Clean room"
                  value={field.value}
                  onChange={onTaskNameChange}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="info"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  containerClassName="text-field"
                  label="What to do(description)"
                  inputType="text"
                  placeholder="Clean my room"
                  value={field.value}
                  onChange={onInfoChange}
                  errorText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="isImportant"
              render={({ field }) => (
                <Checkbox
                  containerClassName="edit-checkbox"
                  label="Important"
                  checked={field.value}
                  onChange={onImportantCheckboxChange}
                  disabled={isCompleted}
                />
              )}
            />
            <Controller
              control={control}
              name="isCompleted"
              render={({ field }) => (
                <Checkbox
                  containerClassName="edit-checkbox"
                  label="Completed"
                  checked={field.value}
                  onChange={onCompletedCheckboxChange}
                />
              )}
            />
            <button
              disabled={TaskEditStoreInstance.isTaskLoading}
              type="submit"
              className="btn btn-secondary d-block edit-task-button"
              onClick={onSubmit}>
              Edit task
            </button>
          </>
        ) : (
          <p>Not found</p>
        )}
      </Loader>
    </form>
  );
}

export const TaskEdit = observer(TaskEditProto);
