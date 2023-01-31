import { TasksSearchEntity } from 'domains/task.entity';

export interface SearchFormProps {
  findTasks: (searchForm?: TasksSearchEntity) => void;
}
