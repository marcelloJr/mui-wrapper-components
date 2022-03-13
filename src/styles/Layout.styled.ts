import styled from 'styled-components';
import { Container as MuiContainer, Stack, Grid } from '@mui/material';

export const Container = styled(MuiContainer)`
  margin-top: 42px;
  margin-bottom: 42px;
`;

export const GridBreak = styled.div`
  width: 100%;
`;

export const ActionButtons = styled(Stack)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const FormContent = styled(Grid)`
  margin-top: 0px !important;
  margin-left: 0px !important;
  width: 100% !important;
`;