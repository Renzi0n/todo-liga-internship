import { FILTER_TYPES } from './StatusFilter.constants';

export type FiltersType = typeof FILTER_TYPES[keyof typeof FILTER_TYPES];

export interface StatusFilterProps {
  // eslint-disable-next-line no-unused-vars
  onChange?: (status: FiltersType) => void;
}
