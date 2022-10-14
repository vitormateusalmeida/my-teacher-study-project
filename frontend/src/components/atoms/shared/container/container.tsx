import { ContainerProps } from './container.type';
import * as S from './container.styled';

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => <S.Container className={className}>{children}</S.Container>;
