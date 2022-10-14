import { Teacher } from 'types/teacher';

export type CardProps = {
  teacher: Teacher;
  onSelect: (teacher: Teacher) => void;
};
