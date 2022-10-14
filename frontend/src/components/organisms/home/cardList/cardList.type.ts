import { Teacher } from 'types/teacher';

export type CardListProps = {
  data?: Array<Teacher>;
  onSelect: (teacher: Teacher) => void;
};
