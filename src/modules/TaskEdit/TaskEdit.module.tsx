import React from 'react';
import { Checkbox, TextField } from 'components/index';

export function TaskEdit() {
  return (
    <form>
      <TextField label="Author" inputType="text" placeholder="Your name" value="I am" />
      <TextField label="Task name" inputType="text" placeholder="Clean room" value="Clean room" />
      <TextField label="What to do(description)" inputType="text" placeholder="Clean my room" value="Clean room" />
      <Checkbox label="Important" />
      <Checkbox label="Completed" checked />
      <button type="submit" className="btn btn-secondary d-block w-100">
        Edit task
      </button>
    </form>
  );
}
