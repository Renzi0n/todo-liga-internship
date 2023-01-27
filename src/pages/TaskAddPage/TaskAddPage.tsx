import React from 'react';
import { PageContainer } from 'components/index';
import { TaskAdd } from 'modules/index';

export function TaskAddPage() {
  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST | ADD TASK</h1>
      <TaskAdd />
    </PageContainer>
  );
}
