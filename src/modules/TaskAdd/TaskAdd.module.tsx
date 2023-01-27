import React from 'react';
import { Checkbox, TextField } from 'components/index';

export function TaskAdd() {
  return (
    <form>
      <TextField label="Author" inputType="text" placeholder="Your name" />
      <TextField label="Task name" inputType="text" placeholder="Clean room" />
      <TextField label="What to do(description)" inputType="text" placeholder="Clean my room" />
      <Checkbox label="Important" />
      <button type="submit" className="btn btn-secondary d-block w-100">
        Add task
      </button>
    </form>
  );
}
