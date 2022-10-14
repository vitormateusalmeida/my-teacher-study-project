import { Teacher } from 'types/teacher';

export type DialogProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  selectedTeacher: Teacher | null;
  setSelectedTeacher: React.Dispatch<React.SetStateAction<Teacher | null>>;
  setLecture: () => void;
};
