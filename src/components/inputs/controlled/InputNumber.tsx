import React from 'react';
import { Grid, TextField, InputAdornment, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import IInputNumber from '@interfaces/IInputNumber';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const InputNumber: React.FC<IInputNumber> = (props) => {
  const { required, placeholder, name, label, disabled, span,
    style, minLength, maxLength, currencyChar, helpText, defaultValue, onChange } = props;

  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{
          required,
          maxLength,
          minLength
        }}
        defaultValue={defaultValue}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }, 
          fieldState: { error }
        }) => {
          return (
            <TextField
              label={label}
              helperText={error ? validationsHelpers(error.type, { minLength, maxLength }) : null}
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
              InputProps={{
                startAdornment: currencyChar ? <InputAdornment position='start'>{currencyChar}</InputAdornment> : null,
              }}
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