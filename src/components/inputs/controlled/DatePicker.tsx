import React from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import IDatePicker from '@interfaces/IDatePicker';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const DatePicker: React.FC<IDatePicker> = (props) => {
  const { label, placeholder, helpText, spans, style, name, required, disabled, onDateChange } = props;

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
          field: { onChange: fieldOnChange, ref, value: fieldValue = null}, 
          fieldState: { error }
        }) => {          
          return (
            <FormControl error={!!error} fullWidth>
              <DesktopDatePicker
                label={label}
                value={fieldValue}
                onChange={(value) => {
                  if (onDateChange) onDateChange(value);
                  fieldOnChange(value)
                }}
                renderInput={(params: any) =>
                  <TextField 
                    {...params} 
                    placeholder={placeholder} 
                    value={fieldValue} 
                    error={!!error} 
                    required={required}
                    fullWidth 
                  />
                }
                disabled={disabled}
                inputRef={ref}
              />
              <FormHelperText error>{error ? inputErrorHelper(error.type, {}) : ''}</FormHelperText>
            </FormControl>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  );
}

export default DatePicker;