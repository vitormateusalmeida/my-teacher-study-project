import { ButtonProps } from './button.type';
import * as S from './button.styled';

export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  className,
  onClick,
}) => (
  <S.Button size={size} className={className} onClick={onClick}>
    {label}
  </S.Button>
);
