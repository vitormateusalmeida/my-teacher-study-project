import { useState, useEffect } from 'react';
import { Teacher } from 'types/teacher';
import { ApiService } from 'services/ApiService';

export function useIndex() {
  const [listTeachers, setTeachers] = useState<Teacher[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    ApiService.get('/professores').then((res) => {
      setTeachers(res.data);
    });
  }, []);

  function clearDialogForm() {
    setName('');
    setEmail('');
  }

  useEffect(() => {
    clearDialogForm();
  }, [selectedTeacher]);

  function validateLectureData() {
    console.log('aham');
    return name.length > 0 && email.length > 0;
  }

  function setLecture() {
    if (selectedTeacher !== null) {
      if (validateLectureData()) {
        ApiService.post(`/professores/${selectedTeacher.id}/aulas`, {
          name,
          email,
        })
          .then(() => {
            setSelectedTeacher(null);
            setMessage('Cadastrado com sucesso');
          })
          .catch((err) => {
            setMessage(err.response?.data.message);
          });
      } else {
        setMessage('Preencha os dados corretamente');
      }
    }
  }

  return {
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
  };
}
