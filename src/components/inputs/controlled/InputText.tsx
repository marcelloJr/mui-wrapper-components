import React from 'react';
import { FormHelperText, Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import IInputText from '@interfaces/IInputText';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const InputText: React.FC<IInputText> = (props) => {
  const { required, placeholder, name, label, disabled, span, style,
    maxLength, minLength, multiline, defaultValue, helpText, onChange } = props;

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
          field: { onChange: fieldOnChange, ref, value: fieldValue }, 
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
              placeholder={placeholder}
              disabled={disabled}
              fullWidth
              required={required}
              multiline={multiline}
              rows={multiline ? 4 : 0}
              inputRef={ref}
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