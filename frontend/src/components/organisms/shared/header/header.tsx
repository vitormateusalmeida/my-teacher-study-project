import { Container } from '../../../atoms/shared/container';
import { Content } from './header.styled';
import { Logo } from '../../../atoms/shared/logo';
import * as S from './header.styled';

export const Header = () => (
  <Container>
    <Content>
      <Logo width={230} />
      <S.Slogan>Encontre seu professor!</S.Slogan>
    </Content>
  </Container>
);
