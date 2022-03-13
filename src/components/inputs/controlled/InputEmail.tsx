import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import IInputEmail from '@interfaces/IInputEmail';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const InputText: React.FC<IInputEmail> = (props) => {
  const { required, placeholder, name, label, disabled, spans, style, helpText, onChange } = props;

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
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }, 
          fieldState: { error }
        }) => {
          const type = error ? error.type === 'pattern' ? 'email' : error.type : '';

          return (
            <TextField
              label={label}
              helperText={error ? inputErrorHelper(type, {}) : null}
              error={!!error}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              value={fieldValue || ''}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              type='email'
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

export default InputText;