import React from 'react';
import CheckboxMUI from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import ICheckbox from '@interfaces/ICheckbox';
import { responsivityHelper } from '@utils/helpers';

const Checkbox: React.FC<ICheckbox> = (props) => {
  const { disabled, spans, style, name, label, helpText, required, onChange } = props;
  return (
    <Grid  style={style}  
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
        render={({ field: { onChange: fieldOnChange, value: fieldValue} }) => {
          return (
            <FormControlLabel
              label={label}
              control={
                <CheckboxMUI
                  onChange={(e) => {
                    if (onChange) onChange(e.target.checked);
                    fieldOnChange(e.target.checked);
                  }}
                  checked={fieldValue}
                />}
              disabled={disabled}
            />
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  )
}

export default Checkbox;