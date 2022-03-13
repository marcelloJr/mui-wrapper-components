import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MuiSwitch from '@mui/material/Switch';
import { Controller } from 'react-hook-form';
import ISwitch from '@interfaces/ISwitch';
import { responsivityHelper } from '@utils/helpers';

const Switch: React.FC<ISwitch> = (props) => {
  const { label, name, placeholder, spans, style, helpText, required, onChange } = props;

  return (
    <Grid
      style={style}  
      xs={responsivityHelper('xs', spans)}  
      sm={responsivityHelper('sm', spans)} 
      md={responsivityHelper('md', spans)} 
      lg={responsivityHelper('lg', spans)} 
      xl={responsivityHelper('xl', spans)}
      item
    >
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue } 
        }) => {
          return (
            <>
              <InputLabel style={{ marginBottom: -6 }}>{label}</InputLabel>
              <FormControlLabel
                onChange={(_, checked) => {
                  if (onChange) onChange(checked);
                  fieldOnChange(checked);
                }}
                value={fieldValue}
                control={<MuiSwitch defaultChecked={fieldValue} />}
                label={placeholder ? placeholder : ''}
              />
            </>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  );
}

export default Switch;