import { styled } from '@mui/material';

export const Card = styled('div')`
  padding: ${({ theme }) => theme.spacing(2, 2, 2, 2)};
  /* background-color: ${(props) => props.theme.palette.secondary.main};
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */
`;

export const Image = styled('img')``;

export const Body = styled('div')``;

export const Name = styled('div')`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 18px;
`;

export const Value = styled('div')`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Description = styled('div')`
  padding: ${({ theme }) => theme.spacing(2, 0, 2, 0)};
  word-break: break-word;
`;
