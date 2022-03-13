import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import IInputText from '@interfaces/IInputText';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const InputText: React.FC<IInputText> = (props) => {
  const { required, placeholder, name, label, disabled, spans, style,
    maxLength, minLength, multiline, helpText, onChange } = props;

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
          field: { onChange: fieldOnChange, ref, value: fieldValue }, 
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
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              multiline={multiline}
              rows={multiline ? 4 : 0}
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
  );
}

export default InputText;