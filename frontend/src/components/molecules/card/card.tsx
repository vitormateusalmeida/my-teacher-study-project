import { Button } from '@components/atoms/shared/button/button';
import { addZeroes } from '@utils/helpers';
import * as S from './card.styled';
import { CardProps } from './card.type';

export const Card: React.FC<CardProps> = ({ teacher, onSelect }) => (
  <S.Card>
    <S.Image src={teacher.picture} />
    <S.Body>
      <S.Name>{teacher.name}</S.Name>
      <S.Value>R$ {addZeroes(teacher.ammount)} por hora</S.Value>
      <S.Description>{teacher.description}</S.Description>
      <Button
        onClick={() => onSelect(teacher)}
        label={`Marcar aula com ${teacher.name}`}
      />
    </S.Body>
  </S.Card>
);
