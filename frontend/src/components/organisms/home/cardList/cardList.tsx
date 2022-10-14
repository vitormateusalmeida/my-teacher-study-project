import { Content } from '@components/atoms/shared/content';
import { Card } from '@components/molecules/card/card';
import { uniqueKey } from '@utils/helpers/helpers';
import * as S from './cardList.styled';
import { CardListProps } from './cardList.type';

export const CardList: React.FC<CardListProps> = ({ data, onSelect }) => (
  <S.Container>
    <Content>
      {data !== undefined && data.length > 0 ? (
        <S.CardList>
          {data.map((d) => (
            <Card teacher={d} onSelect={onSelect} key={uniqueKey()} />
          ))}
        </S.CardList>
      ) : (
        <S.EmptyList>Nenhum dado encontrado!</S.EmptyList>
      )}
    </Content>
  </S.Container>
);
