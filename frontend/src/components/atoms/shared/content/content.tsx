import { ContentProps } from './content.type';
import * as S from './content.styled';

export const Content: React.FC<ContentProps> = ({ children }) => (
  <S.Content>{children}</S.Content>
);
