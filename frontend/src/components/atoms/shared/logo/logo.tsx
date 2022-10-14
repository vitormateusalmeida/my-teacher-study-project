import { LogoProps } from './logo.type';
import * as S from './logo.styled';

export const Logo: React.FC<LogoProps> = ({ width }) => (
  <S.Logo src="/images/myteacher.png" width={width} />
);
