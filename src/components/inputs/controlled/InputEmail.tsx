import React from 'react';
import { FormHelperText, Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import IInputEmail from '@interfaces/IInputEmail';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const InputText: React.FC<IInputEmail> = (props) => {
  const { required, placeholder, name, label, disabled, span, style, helpText, onChange } = props;

  return (
    <Grid style={style} item xs={span ?? 12}>
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
              helperText={error ? validationsHelpers(type, {}) : null}
              error={!!error}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              value={fieldValue || ''}
              placeholder={placeholder}
              disabled={disabled}
              fullWidth
              required={required}
              type='email'
              inputRef={ref}
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