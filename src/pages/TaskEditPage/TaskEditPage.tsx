import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from 'components/index';
import { TaskEdit } from 'modules/index';

export function TaskEditPage() {
  const { taskId } = useParams();
  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST | EDIT TASK {taskId}</h1>
      <TaskEdit />
    </PageContainer>
  );
}
