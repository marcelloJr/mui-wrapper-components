import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Controller } from 'react-hook-form';
import IInputNumber from '@interfaces/IInputNumber';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const InputNumber: React.FC<IInputNumber> = (props) => {
  const { required, placeholder, name, label, disabled, spans,
    style, minLength, maxLength, currencyChar, helpText, onChange } = props;

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
        rules={{
          required,
          maxLength,
          minLength
        }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }, 
          fieldState: { error }
        }) => {
          return (
            <TextField
              label={label}
              helperText={error ? inputErrorHelper(error.type, { minLength, maxLength }) : null}
              error={!!error}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              value={fieldValue || ''}
              type='number'
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              InputProps={{ startAdornment: currencyChar ? <InputAdornment position='start'>{currencyChar}</InputAdornment> : null }}
              inputRef={ref}
              fullWidth
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

export default InputNumber;