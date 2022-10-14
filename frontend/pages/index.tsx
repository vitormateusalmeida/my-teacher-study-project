import type { NextPage } from 'next';
import { CardList } from '@components/organisms/home/cardList';
import { useIndex } from 'hooks/pages/useIndex';
import { Dialog } from '@components/organisms/home/dialog';
import { Snackbar } from '@mui/material';

const Home: NextPage = () => {
  const {
    listTeachers,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    setLecture,
    message,
    setMessage,
  } = useIndex();
  return (
    <>
      <CardList
        data={listTeachers}
        onSelect={(teacher) => setSelectedTeacher(teacher)}
      />
      <Dialog
        {...{
          name,
          setName,
          email,
          setEmail,
          selectedTeacher,
          setSelectedTeacher,
          setLecture,
        }}
      />
      <Snackbar
        message={message}
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </>
  );
};

export default Home;
