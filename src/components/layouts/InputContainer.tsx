import React from 'react';
import Grid from '@mui/material/Grid';
import { responsivityHelper } from '@utils/helpers';
import IInputContainer from '@interfaces/IInputContainer';

const InputContainer: React.FC<IInputContainer> = ({children, style, spans}) => {
  return (
    <Grid
      style={style}  
      xs={responsivityHelper('xs', spans)}  
      sm={responsivityHelper('sm', spans)} 
      md={responsivityHelper('md', spans)} 
      lg={responsivityHelper('lg', spans)} 
      xl={responsivityHelper('xl', spans)}
      sx={{padding: '16px 16px 8px 16px !important'}}
      item
    >
      {children}
    </Grid>
  );
}

export default InputContainer;