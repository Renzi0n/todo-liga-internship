import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react';
import { DEFAULT_FORM } from './TaskAdd.constants';
import { TaskAddStoreInstance } from './store';
import { taskAddSchema } from './TaskAdd.validation';
import { Checkbox, TextField } from 'components/index';
import { TaskAddFormEntity } from 'domains/index';
import { PATH_LIST } from 'constants/paths';

function TaskAddProto() {
  const { control, handleSubmit, setValue } = useForm<TaskAddFormEntity>({
    mode: 'all',
    defaultValues: DEFAULT_FORM,
    resolver: yupResolver(taskAddSchema),
  });

  const navigate = useNavigate();

  const onSubmit: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    handleSubmit(async (form) => {
      const res = await TaskAddStoreInstance.addTask(form);
      if (res) navigate(PATH_LIST.ROOT);
    })();
  };

  const onTaskNameChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue('name', evt.target.value);
  };

  const onInfoChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue('info', evt.target.value);
  };

  const onCheckboxChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue('isImportant', evt.target.checked);
  };

  return (
    <form>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <TextField
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
        render={({ field }) => <Checkbox label="Important" checked={field.value} onChange={onCheckboxChange} />}
      />
      <button type="submit" className="btn btn-secondary d-block w-100" onClick={onSubmit}>
        Add task
      </button>
    </form>
  );
}

export const TaskAdd = observer(TaskAddProto);
