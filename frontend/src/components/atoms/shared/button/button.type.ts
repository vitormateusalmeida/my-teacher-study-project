export type ButtonProps = {
  label: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
