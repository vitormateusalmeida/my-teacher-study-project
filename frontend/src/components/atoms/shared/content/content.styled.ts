import { styled } from '@mui/material';
import { breakpoints } from '../../../../../utils/breakpoints';

export const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: ${breakpoints.desktopM};
  margin-left: auto;
  margin-right: auto;
`;
