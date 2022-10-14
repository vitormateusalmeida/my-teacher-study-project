import { styled } from '@mui/material';
import { Container as DefaultContainer } from '@components/atoms/shared/container';

export const Container = styled(DefaultContainer)`
  background: ${({ theme }) => theme.palette.secondary.main};
`;

export const CardList = styled('div')`
  display: grid;
  gap: ${({ theme }) => theme.spacing(9)};
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const EmptyList = styled('span')`
  font-size: 18px;
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(20, 0)};
`;
